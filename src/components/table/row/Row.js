import React, { useState } from "react";
import PropTypes from "prop-types";
import CheckBox from "../../checkBox/CheckBox";
import ToggleSwitch from "../../toggleSwitch/ToggleSwitch";

import co from "../../../assets/co.png";
import cr from "../../../assets/cr.png";
import su from "../../../assets/su.png";
import em from "../../../assets/em.png";

import css from "./Row.module.css";

const Row = (props) => {
  const { type, name, email, phone, active, id } = props.data;
  const { addToList, removeFromList, forceCheck } = props;
  const [isItChecked, setIsItChecked] = useState(false);

  const checkBoxHandler = (id) => {
    if (!isItChecked) {
      addToList(id);
    } else {
      removeFromList(id);
    }

    setIsItChecked(!isItChecked);
  };

  // Images are not correspondig with the roles. I wasn't sure which one to use.
  const loadTypeImg = () => {
    switch (type) {
      case "Guess":
        return <img src={co} className={css.userRole} alt="guess" />;
      case "Supervisor":
        return <img src={su} className={css.userRole} alt="Supervisor" />;
      case "Stakeholder":
        return <img src={cr} className={css.userRole} alt="Stakeholder" />;
      case "Employee":
        return <img src={em} className={css.userRole} alt="Employee" />;
      default:
        return type;
    }
  };

  return (
    <tr onClick={() => checkBoxHandler(id)}>
      <td>
        <CheckBox
          isChecked={forceCheck ? forceCheck : isItChecked}
          handler={checkBoxHandler}
        />
      </td>
      <td>{loadTypeImg(type)}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <ToggleSwitch status={active} />
    </tr>
  );
};

export default Row;

Row.propTypes = {
  data: PropTypes.object,
  addToList: PropTypes.func,
  removeFromList: PropTypes.func,
};
