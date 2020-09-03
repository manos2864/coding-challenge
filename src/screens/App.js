/** Main Container that we will display the table */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { asyncGet } from "../store/action/action1";
import css from "./App.module.css";
import Table from "../components/table/Table";

const App = () => {
  const dispatch = useDispatch();
  const reduxDataUser = useSelector((state) => state.user.data);

  useEffect(() => {
    const myAbortController = new AbortController(); // Handle Async Req Interrupt
    dispatch(asyncGet(myAbortController));

    // Clean Up Async Req
    return () => {
      myAbortController.abort();
    };
  }, []);

  return (
    <div className={css.container}>
      <Table data={reduxDataUser} />
    </div>
  );
};

export default App;
