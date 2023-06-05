import React, { useEffect } from "react";
import List from "./cards";
// import config from "./config";
import { useLocation,useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const {token} = location.state || {};
  useEffect(()=>{
    if (!token){
      return(navigate('/'))
    }
  },[navigate,token])
  
  return (
    <div className="dashboard">
      <div className="heading-section">
        <h2 >Welcome</h2>
      </div>
      <div className="content-section">
        <List AuthToken={token}/>
      </div>
      <div className="dashboard-footer">
        FOOTER
      </div>
    </div>
  );
};

export default Dashboard;
