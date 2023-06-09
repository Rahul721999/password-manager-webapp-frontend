import React, {useEffect, useState} from "react";
import {useRef} from "react";
import List from "./cards";
import Add from "./add";
// import config from "./config";
import add from '../icons/add.png';
import {useLocation, useNavigate} from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const eleRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);

    const {token} = location.state || {};
    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [navigate, token])

    /* --------------- handle Add req-----------*/
    const handleAdd = () => {
        setShowPopup(true);
        setTimeout(() => {
            if (eleRef.current) {
                eleRef.current.scrollTop = eleRef.current.scrollHeight;
            }
        }, 0);
    }

    const handleSave = (e) => {
        setShowPopup(e)
    }

    return (
        <div className="dashboard">
            <div className="heading-section">
                <h2 className="heading">Welcome</h2>
            </div>
            <div className="content-section"
                ref={eleRef}>
                <List AuthToken={token}/> {
                showPopup && (
                    <Add AuthToken={token}
                        showAddPopup={handleSave}/>
                )
            }
                <div ref={eleRef}></div>
            </div>
            <div className="dashboard-footer">
                <img className="addButton"
                    src={add}
                    alt=""
                    onClick={handleAdd}/>
            </div>
        </div>
    );
};

export default Dashboard;
