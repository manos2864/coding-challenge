import React from "react";
import css from "./CheckBox.module.css";
import PropTypes from "prop-types";

const CheckBox = (props) => {
  const { handler, isChecked } = props;
  return (
    <input
      className={css.checkbox}
      type="checkbox"
      checked={isChecked}
      onChange={() => handler()}
    />
  );
};

export default CheckBox;

CheckBox.propTypes = {
  handler: PropTypes.func,
  isChecked: PropTypes.bool,
};
