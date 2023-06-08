import React, {useState, useEffect, useRef} from "react";
import threeDotImage from "../icons/threedot.png";
import trash from "../icons/trash.png";
import edit from "../icons/edit.png";
import config from "./config";

const base_url = config.myEnvVar;


const Card = (props) => {
    const{cardId,cardName, url, username, password, token, onDelete, onEdit} = props;
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);




    /***************************** popup customization ****************************/
    // hide popup when clicking other than the 'ThreeDot'----------
    useEffect(()=>{
        const handleClickOutside = (event) =>{
            if (popupRef.current && !popupRef.current.contains(event.target)){
                setShowPopup(false);
            }
        };
        document.addEventListener("mousedown",handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        },[]);
    /*----------------------------- handle mouseHover on "Three Dot"-------------------- */
    const handleMouseOver=()=>{
        setShowPopup(true)
    }
    /*------------------------------- handle onClick on "Three Dot"------------------------- */
    const handleClick = () => {
        setShowPopup((prevShowPopup) => !prevShowPopup);
    }
    /* ----------------------------------- handle Edit Request-------------------------------*/
    const handleEdit = (cardId) =>{
        onEdit(cardId)
    }
    /* --------------------------------- handle Remove Request------------------------------- */
    const handleDel = (cardId) =>{
        console.log("DEL img clicked for id: ",cardId)
        if (RemoveReq(token, cardId)){
            onDelete(cardId)
        }
    }
    /***************************** text field customization ****************************/
    // Copy text when clicking on it------------------------
    const clickCopy = (event) =>{
        const textToCopy = event.target.innerText;
        try{
            navigator.clipboard.writeText(textToCopy);
            console.log('COPIED');
        }catch(error){
            console.error('failed to copy text');
        }
    };

    /***************************** Customization for password field ****************************/




    return (
        <div id={cardId} className="card-body">
            {/*  -------------card Header--------------- */}
            <h2 className='website-name'>{cardName}</h2>
            {/*  -------------Start card Body--------------- */}
            <div className='card-cred-details'>
                <div className='website-url'>
                    <label className='card-labels'>URL</label>
                    <p className='card-value' onClick={clickCopy}>{url}</p>
                </div>
                <div className='website-username'>
                    <label className='card-labels'>USERNAME</label>
                    <p className='card-value' onClick={clickCopy}>{username}</p>
                </div>
                <div className='website-password'>
                    <label className='card-labels'>PASSWORD</label>
                    {/* <button className='card-pass-button' style={{fontSize: "12px"}}>{password}</button> */}
                    <p className='card-value' onClick={clickCopy}>{password}</p>

                </div>
            </div>
            {/*  -------------End card Body--------------- */}

            {/*  -------------Start card Footer--------------- */}
            <div className="card-footer">
            {showPopup && (<div ref={popupRef} className="dropdownMenu">
                <DropDownItem img={edit} onClick={()=>handleEdit(cardId)} />
                <DropDownItem img={trash} onClick={()=>handleDel(cardId)}/>
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
export default Card;


/* ************************ function to show DropDown Item ***************** */
function DropDownItem(props) {
    const handleClick = (event ) =>{
        event.stopPropagation();
        props.onClick();
    }
    return (
        <ul className='dropdownItem'>
            <img src={
                    props.img
                }
                alt=""
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

/* ************************ Remove API Request ***************** */
async function RemoveReq(AuthToken, id){
    try {
        const response = await fetch(base_url.concat("/User/delete"), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "/",
                "Connection": "keep-alive",
                "Authorization" : AuthToken,
            },
            body: JSON.stringify(
                {id}
            )
        })
        if (response.ok) {
            const data = await response.json();
            const message = data.message;
            alert(message);
            return true
        } else {
            const data = await response.json();
            const message = data.message;
            alert(message);
            return false
        }
    } catch (err) {
        console.log("An Error Occured:", err);
    }
    return false
}
