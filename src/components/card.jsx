import React, {useState, useEffect} from "react";
// import Popup from "reactjs-popup";
import threeDotImage from "../icons/threedot.png";
import trash from "../icons/trash.png";
import edit from "../icons/edit.png";
const Card = () => {
    const [showPopup, setShowPopup] = useState(false);
    
    // to hide the popup when click other outside three dot
    useEffect(()=>{
        let handler = () =>{
            setShowPopup(false);
        };
        document.addEventListener("mousedown", handler);
    });


    const handleMouseOver=()=>{
        setShowPopup(true)
    }
    const handleClick = () => {
        setShowPopup(!showPopup);
    }
    const handleEdit = () =>{
        console.log("EDIT img clicked")
    }
    const handleDel = () =>{
        console.log("DEL img clicked")
    }

    return (
        <div className="card-body">
            {/*  -------------card Header--------------- */}
            <h2 className='website-name'>google</h2>
            {/*  -------------Start card Body--------------- */}
            <div className='card-cred-details'>
                <div className='website-url'>
                    <label className='card-labels'>URL</label>
                    <p className='card-value'>http://www.google.com</p>
                </div>
                <div className='website-username'>
                    <label className='card-labels'>USERNAME</label>
                    <p className='card-value'>Animal</p>
                </div>
                <div className='website-password'>
                    <label className='card-labels'>PASSWORD</label>
                    <button className='card-pass-button'>******</button>
                </div>
            </div>
            {/*  -------------End card Body--------------- */}

            {/*  -------------Start card Footer--------------- */}
            <div className="card-footer">
            {showPopup && (<div className="dropdownMenu">
                <DropDownItem img={edit} onClick={handleEdit}/>
                <DropDownItem img={trash} onClick={handleDel}/>
            </div>)}
                <img className="threeDot"
                    src={threeDotImage}
                    alt=""
                    onClick={handleClick}
                    onMouseOver={handleMouseOver}    
                />
            </div>
            {/*  -------------End card Footer--------------- */}
        </div>
    )
}

function DropDownItem(props) {
    const handleClick = () =>{
        props.onClick();
    }
    return (
        <ul className='dropdownItem'>
            <img src={
                    props.img
                }
                onClick={handleClick}
                style={
                    {
                        height: '20px',
                        width: '20px',
                        margin: '5px',
                    }
            }></img>
        </ul>
    )
}

export default Card;
