import { Component } from "react";
import Section from "../section/Section";
import FeedbackOptions from "../controls/FeedbackOptions";
import Statistcs from "../statistics/Statistics";
import Notification from "../notification/Notification";

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = evt => {
    const statName = evt.target.name;
    this.setState(prevState => ({ [statName]: prevState[statName] + 1 }));
  };

  countTotalFeedback = () => {
    const totalFeedbacks = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedbacks;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const perc = total ? Math.round((this.state.good / total) * 100) : 0;
    // console.log(this.totalFeedbacks);
    // console.log(perc);
    return perc;
  };
  render() {
    const total = this.countTotalFeedback();
    const rate = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {!total ? (
          <Notification messege="No feedbacks yet" />
        ) : (
          <Section title="Statistics">
            <Statistcs good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} rate={rate} />
          </Section>
        )}
      </>
    );
  }
}

export default Feedback;
