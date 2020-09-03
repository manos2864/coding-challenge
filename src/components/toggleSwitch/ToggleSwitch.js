import React from "react";
import css from "./ToggleSwitch.module.css";
import PropTypes from "prop-types";

// NOT IMPLEMENTED WITH STATE

const ToggleSwitch = (props) => {
  return (
    <td className={css.container}>
      <label className={css.switch}>
        <span className={[css.slider, css.round].join(" ")}></span>
      </label>
    </td>
  );
};

export default ToggleSwitch;

ToggleSwitch.propTypes = {
  status: PropTypes.bool,
};
