import React, { useEffect, useState } from 'react'
import Card from './card'
import config from './config';
import Edit from './edit';
const List = (props) => {
    const {AuthToken} = props;
    const [vec, setResVec] = useState([]);
    const [selectedCard, setSelectedCard] = useState("");
    useEffect(()=>{
        callGetAll(AuthToken, setResVec);
    },[AuthToken]);

    /* --------------- handle Delete Card Request ---------------- */
    const handleDeleteCard= (cardId)=>{
        setResVec(prevVec => prevVec.filter(card => card.id !== cardId));
    };

    /* --------------- handle Edit Card Request ---------------- */
    const handleEditCard= (cardId)=>{
        setSelectedCard(cardId)
    }
    const handleCancelEdit=()=>{
        setSelectedCard(null)
    }

    return (
        <div className='card-list'>
            {vec.map((element)=>{
                if(selectedCard === element.id){
                    return(
                        <Edit
                            key={element.id}
                            cardId={element.id}
                            websiteName={element.website_name} 
                            websiteUrl={element.website_url} 
                            username={element.username} 
                            password={element.password}
                            token={AuthToken}
                            onEditCancel={handleCancelEdit}
                        />
                    );
                }else{
                    return (
                        <Card
                            key={element.id}
                            cardId={element.id}
                            cardName={element.website_name}
                            url={element.website_url} 
                            username={element.username} 
                            password={element.password}
                            token={AuthToken} // pass the token to props
                            onDelete={handleDeleteCard} // pass the Delete callback fn to props
                            onEdit={handleEditCard} // pass the Edit callback fn to props 
                        />
                    )
                }
            })}
        </div>
    )
}

export default List;

async function callGetAll(AuthToken, setResVec){
    const base_url = config.myEnvVar;
    let result;
    try {
        const response = await fetch(base_url.concat("/User/get_all"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "/",
                "Connection": "keep-alive",
                "Authorization" : AuthToken,
            },
        })
        if (response.ok) {
            const data = await response.json();
            result = data.data;
            setResVec(result);
        } else {
            const data = await response.json();
            const message = data.message;
            alert(message);
        }
    } catch (err) {
        console.log("An Error Occured:", err);
    }
}