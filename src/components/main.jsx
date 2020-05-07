import React from "react";
import Header from "./header";
import Entries from "./entries";

const Main = () => {
  return (
    <div className="col-sm-9">
      <Header></Header>
      <Entries></Entries>
    </div>
  );
};

export default Main;
