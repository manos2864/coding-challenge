import React, { useState } from "react";
import css from "./Table.module.css";
import PropTypes from "prop-types";
import Row from "./row/Row";
import CheckBox from "../checkBox/CheckBox";
import profileIcon from "../../assets/profile-icon.png";
import questionMark from "../../assets/Questionmark.svg";

const Table = (props) => {
  const { data } = props; // Destructure the Prop Object
  const [selectedItems, setSelectedItems] = useState([]);
  const [forceCheck, setForceCheck] = useState(false);

  const columns = [
    <CheckBox
      isChecked={forceCheck}
      handler={() => setForceCheck(!forceCheck)}
    />,
    "TYPE",
    "NAME",
    "EMAIL",
    "TELEPHONE",
    "STATUS",
  ];

  const addToList = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const removeFromList = (item) => {
    setSelectedItems(selectedItems.filter((e) => e !== item));
  };

  return (
    <div className={css.container}>
      <div className={css.barContainer}>
        <div className={css.titleContainer}>
          {/* Sorry for the png img but i couldn't download svg version */}
          <img className={css.image} src={profileIcon} alt="profile-icon" />
          <h1 className={css.title}>Users</h1>
        </div>
        <div className={css.selectionContainer}>
          <h1 className={css.title}>{selectedItems.length} Selected</h1>
          <img
            className={css.image}
            src={questionMark}
            alt="questionMark-icon"
          />
        </div>
      </div>

      <table className={css.table}>
        <thead className={css.header}>
          <tr>
            {columns.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className={css.body}>
          {data.map((row) => (
            <Row
              data={row}
              key={row.id}
              addToList={addToList}
              removeFromList={removeFromList}
              forceCheck={forceCheck}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

Table.propTypes = {
  data: PropTypes.array,
};
