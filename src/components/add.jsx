import React from "react";

const add=()=>{
    return(
        <div className="auth-form-container">
            <h2>add</h2>
            <form className="add-form"
                onSubmit={handleSubmit}>
                <input>website-name</input>
                <input>website-url</input>
                <input>website-username</input>
                <input>website-pass</input>
            </form>
        </div>
    )
}