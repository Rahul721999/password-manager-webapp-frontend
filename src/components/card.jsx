import React from "react";

const Card = () => {
    return (
        <div className="card-body">
            <h2 className='website-name'>google</h2>
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
            <div className="card-footer">
                <picture className="three-dot">#</picture>
            </div>
        </div>
    )
}

export default Card;
