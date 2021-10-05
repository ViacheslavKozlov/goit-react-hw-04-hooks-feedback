import { useState } from "react";
import Section from "../section/Section";
import FeedbackOptions from "../controls/FeedbackOptions";
import Statistcs from "../statistics/Statistics";
import Notification from "../notification/Notification";

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = evt => {
    const feedback = evt.target.name;

    switch (feedback) {
      case "good":
        setGood(state => state + 1);
        break;
      case "neutral":
        setNeutral(state => state + 1);
        break;
      case "bad":
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total ? Math.round((good / total) * 100) : 0;
  };

  const options = Object.keys({ good, neutral, bad });

  return (
    <>
      <Section title="Leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>
      {good || neutral || bad > 0 ? (
        <Section title="Statistics">
          <Statistcs
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            rate={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification messege="No feedbacks yet" />
      )}
    </>
  );
}
