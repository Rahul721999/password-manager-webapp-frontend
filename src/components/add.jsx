import React, { useState } from "react";
import config from "./config";
const Add=(props)=>{
    const {AuthToken, showAddPopup} = props;
    const [websiteName, setwebsiteName] = useState("");
    const [websiteUrl, seWebsiteUrl] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

        /*---------------------handle input----------------------- */
        const handleWebsiteNameChange = (e) => {
            setwebsiteName(e.target.value);
        };
        const handleUrlChange = (e) => {
            seWebsiteUrl(e.target.value);
        };
        const handleUsernameChange = (e) => {
            setUsername(e.target.value);
        };
    
        const handlePasswordChange = (e) => {
            setPassword(e.target.value);
        };

        /* ----------- handle Save req -------- */
        const handleSave = async (e) =>{
            e.preventDefault();

            // Check if any required field is empty
            if (!websiteName || !websiteUrl || !username || !password) {
                alert("Please fill-in all required fields");
                return;
            }
            if (await store(AuthToken, websiteName, websiteUrl, username, password)){
                showAddPopup(false)
                window.location.reload();
            }
        }
        const handleCancel =()=>{
            showAddPopup(false)
        }

    return(
        <form className="card-body">
            {/*  -------------card Header--------------- */}
            
            {/*  -------------Start card Body--------------- */}
            <div className='card-cred-details'>
                <div className='add-card-row'>
                    <label className="card-labels">Website-Name</label>
                    <input 
                        className='add-card-input-field'
                        type="text"
                        name="websiteName"
                        value={websiteName}
                        onChange={handleWebsiteNameChange}
                        required></input>
                </div>
                <div className='add-card-row'>
                    <label className='card-labels'>URL</label>
                    <input 
                        className='add-card-input-field'
                        type="url"
                        name="websiteUrl"
                        value={websiteUrl}
                        onChange={handleUrlChange} 
                        required></input>
                </div>
                <div className='add-card-row'>
                    <label className='card-labels'>USERNAME</label>
                    <input 
                        className='add-card-input-field'
                        type="text"
                        value={username}
                        name="username"
                        onChange={handleUsernameChange} 
                        required></input>
                </div>
                <div className='add-card-row'>
                    <label className='card-labels'>PASSWORD</label>
                    {/* <button className='card-pass-button' style={{fontSize: "12px"}}>{password}</button> */}
                    <input 
                        className='add-card-input-field'
                        type="text"
                        name="password"
                        value={password}
                        minLength={8}
                        onChange={handlePasswordChange} 
                        required></input>
                </div>
            </div>
             {/* ---------- Card footer -------  */}
            <div className="add-card-footer">
                <button className="cancelBtn" type="button" onClick={handleCancel}>cancel</button>
                <button className="saveBtn" type="submit" onClick={handleSave}>save</button>
            </div>
        </form>
    )
}

export default Add;

/*---------------------------------------- Store API call ----------------------------------------*/
async function store(
    Authtoken, 
    website_name,
    website_url,
    username,
    password
){
    const base_url = config.myEnvVar;
    try {
        const response = await fetch(base_url.concat("/User/store"), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "/",
                "Connection": "keep-alive",
                "Authorization" : Authtoken,
            },
            body: JSON.stringify(
                {website_name, website_url, username, password}
            )
        })
        if (response.ok) {
            response.text().then((message)=>{
                alert(message);
            })
            return true
        } else {
            const data = await response.json();
            const message = data.message;
            alert(message);
        }
    } catch (err) {
        console.log("An Error Occured:", err);
    }
    return false
}