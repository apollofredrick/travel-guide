import React from "react";


const Guide = (props) =>{
    return(
        
        <div className="guide">
            <img src={props.imageURL} className="image"></img>
            <h1>{props.title}</h1>
            <h2>{props.location}</h2>
            <h4 className="date">{props.startDate}</h4>
            <h3 className="date">to</h3>
            <h4 className="date">{props.endDate}</h4>
            <p>{props.description}</p>
        </div>
        
    )
}
export default Guide