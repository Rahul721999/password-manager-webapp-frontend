import {React, useState} from 'react'
import config from './config';
import genPassIcon from "../icons/genPassIcon.png";
import generate from './gen_pass';
const base_url = config.myEnvVar;

function Edit(props) {
    const {
        cardId,
        websiteName,
        websiteUrl,
        username,
        password,
        token,
        onEditCancel
    } = props;

    const [website_name, setwebsiteName] = useState(websiteName);
    const [website_url, seWebsiteUrl] = useState(websiteUrl);
    const [Username, setUsername] = useState(username);
    const [Password, setPassword] = useState(password);

    /*---------------------handle inputs----------------------- */
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

    /* --------------------------Handle Password Generate req------------------------*/
    async function handlePassGen(){
        const generated_pass = await generate(token);
        setPassword(generated_pass)
    }

    /*------------------------------------------ handle save Button ------------------------------------------*/

    const handleSave = (e) => {
        e.preventDefault();
        // Check if any required field is empty
        if (!website_name || !website_url || !Username || !Password) {
            alert("Please fill-in all fields");
        } else if (password.length < 8) {
            alert('You should choose a password of length more than 8 characters')
        } else {
            updateReq(token, cardId, website_name, website_url, Username, Password)
        }
    }
    /*------------------------------------------ handle Cancel Button ------------------------------------------*/
    const handleCancel = () => {
        onEditCancel()
    }

    return (
        <form id={cardId}
            className="card-body">
            {/*  -------------card Header--------------- */}

            {/*  -------------Start card Body--------------- */}
            <div className='card-cred-details'>
                <div className='edit-card-row'>
                    <label className="card-labels">Website-Name</label>
                    <input className='edit-card-input-field' type="text" name="websiteName"
                        value={website_name}
                        onChange={handleWebsiteNameChange}
                        required></input>
                </div>
                <div className='edit-card-row'>
                    <label className='card-labels'>URL</label>
                    <input className='edit-card-input-field' type="url" name="websiteUrl"
                        value={website_url}
                        onChange={handleUrlChange}
                        required></input>
                </div>
                <div className='edit-card-row'>
                    <label className='card-labels'>USERNAME</label>
                    <input className='edit-card-input-field' type="text"
                        value={Username}
                        name="username"
                        onChange={handleUsernameChange}
                        required></input>
                </div>
                <div className='edit-card-password-row'>
                    <label className='card-labels'>PASSWORD</label>
                    {/* <button className='card-pass-button' style={{fontSize: "12px"}}>{password}</button> */}
                    <input className='edit-card-pass-input-field' type="text" name="password"
                        value={Password}
                        minLength={8}
                        onChange={handlePasswordChange}
                        required>
                    </input>
                    <img src={genPassIcon} alt='gen' className='pass-gen-icon' onClick={handlePassGen}/>
                    
                </div>
            </div>
            {/* ---------- Card footer -------  */}
            <div className="add-card-footer">
                <button className="cancelBtn" type="button"
                    onClick={handleCancel}>cancel</button>
                <button className="saveBtn" type="submit"
                    onClick={handleSave}>save</button>
            </div>
        </form>
    )
}

export default Edit

/* ----------------------------------------- Update API call -----------------------------------------*/
async function updateReq(AuthToken, id, website_name, website_url, username, password) {
    try {
        const response = await fetch(base_url.concat("/User/update"), {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "/",
                "Authorization": AuthToken
            },
            body: JSON.stringify(
                {
                    id,
                    website_name,
                    website_url,
                    username,
                    password
                }
            )
        });
        if (response.ok) {
            const data = await response.json();
            const message = data.message;
            alert(message);
            window.location.reload();
        } else {
            const data = await response.json();
            const message = data.message;
            alert(message);
        }
    } catch (error) {
        console.log("An Error occured: ", error)
    }
}
