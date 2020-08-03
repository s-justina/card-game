import React from "react";
import {TableButton} from "./TableButtons.css";
import {removeCards} from "../../actions";

export const DrawCardsButton = (props:any)=>{
const {fetchData, drawCards} = props;
    return(
        <TableButton onClick={() => fetchData(drawCards)}>{props.children}</TableButton>
    )
};

export const RestartGame = (props:any)=>{
    const {fetchData} = props;
    return(
      <TableButton onClick={fetchData}>{props.children}</TableButton>
  )
};

export const ReshuffleCards = (props:any)=>{
    const {fetchData, removeCards} = props;
    return(
        <TableButton onClick={()=>fetchData(removeCards)}>{props.children}</TableButton>
    )
};