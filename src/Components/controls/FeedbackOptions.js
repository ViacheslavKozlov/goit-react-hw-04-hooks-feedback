import React from "react";
import style from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className="btnWrapper">
        {options.map(option => (
          <button className={style.btn} key={option} type="button" name={option} onClick={onLeaveFeedback}>
            {option.toUpperCase()}
          </button>
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;
