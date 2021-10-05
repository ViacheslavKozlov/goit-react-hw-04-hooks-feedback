import React from "react";
import PropTypes from "prop-types";
import style from "./Notification.module.css";

const Notification = ({ messege }) => {
  return (
    <>
      <p>{messege}</p>
    </>
  );
};

Notification.propTypes = {
  messege: PropTypes.string.isRequired
};

export default Notification;
