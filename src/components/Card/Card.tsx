import React from "react";
import {Green} from "./Card.css";

const Card = (props:any)=>{
    return (
        <Green src={props.src}/>
    )
};

export default Card;