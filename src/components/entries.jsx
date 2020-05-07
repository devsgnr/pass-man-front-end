import React, { Component } from "react";
import Entry from "./entry";
import mockData from "./mock/mock-data";

const loadData = [...mockData];

class Entries extends Component {
  state = {};

  render() {
    return (
      <div className="container entries pt-4">
        {loadData.map((data) => (
          <Entry
            key={data.id}
            iconName={data.iconName}
            username={data.username}
            name={data.name}
            password={data.password}
          ></Entry>
        ))}
      </div>
    );
  }
}

export default Entries;
