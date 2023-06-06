import React from "react";

const Add=(props)=>{
    const {AuthToken, showAddPopup} = props;
        /* ----------- handle Save req -------- */
        const handleSave = () =>{
            showAddPopup(false)
        }
        
    return(
        <form className="card-body">
            {/*  -------------card Header--------------- */}
            
            {/*  -------------Start card Body--------------- */}
            <div className='card-cred-details'>
                <div className='add-card-row'>
                    <label className="card-labels">Website-Name</label>
                    <input className='add-card-input-field'></input>
                </div>
                <div className='add-card-row'>
                    <label className='card-labels'>URL</label>
                    <input className='add-card-input-field'></input>
                </div>
                <div className='add-card-row'>
                    <label className='card-labels'>USERNAME</label>
                    <input className='add-card-input-field'></input>
                </div>
                <div className='add-card-row'>
                    <label className='card-labels'>PASSWORD</label>
                    {/* <button className='card-pass-button' style={{fontSize: "12px"}}>{password}</button> */}
                    <input className='add-card-input-field'></input>
                </div>
            </div>
             {/* ---------- Card footer -------  */}
            <div className="add-card-footer">
                <button className="cancelBtn" type="button" onClick={handleSave}>cancel</button>
                <button className="saveBtn" type="button" onClick={handleSave}>save</button>
            </div>
        </form>
    )
}

export default Add;

// async function store(token, setShowPopup){
    
// }