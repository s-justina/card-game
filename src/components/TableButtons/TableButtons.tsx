import React from "react";
import {TableButton} from "./TableButtons.css";

export const DrawCardsButton = (props:any)=>{
const {fetchData} = props;
    return(
        <TableButton onClick={fetchData}>{props.children}</TableButton>
    )
};

export const RestartGame = (props:any)=>{
    const {fetchData} = props;
    return(
      <TableButton onClick={fetchData}>{props.children}</TableButton>
  )
};

export const ReshuffleCards = (props:any)=>{
    const {fetchData} = props;
    return(
        <TableButton onClick={fetchData}>{props.children}</TableButton>
    )
};