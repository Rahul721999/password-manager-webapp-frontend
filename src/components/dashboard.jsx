import React from "react";
import List from "./cards";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="heading-section">
        <h2>Welcome</h2>
      </div>
      <div className="content-section">
        <List/>
      </div>
    </div>
  );
};

export default Dashboard;
