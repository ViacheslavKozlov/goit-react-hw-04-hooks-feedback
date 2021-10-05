import React from "react";
import PropTypes from "prop-types";

const Statistcs = ({ good, neutral, bad, total, rate }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback rate: {rate}%</p>
    </>
  );
};

Statistcs.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired
};

export default Statistcs;
