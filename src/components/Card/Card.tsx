import React from "react";

import {Image} from "./Card.css";

const Card = (props:any)=>{


    return (
        <Image src={props.src}/>
    )
};

export default Card;