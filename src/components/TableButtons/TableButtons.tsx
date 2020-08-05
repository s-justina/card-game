import React from "react";
import {TableButton} from "./TableButtons.css";
import {resultScoreComputer} from "../../reducers/reducer";

export const DrawCardsButton = (props:any)=>{
const {fetchData, drawCards, fetchPlayerResult, fetchComputerResult, activePlayer, resultScorePlayer, resultScoreComputer} = props;
    return(
        <TableButton onClick={() => {
            fetchData(drawCards, fetchPlayerResult, fetchComputerResult, activePlayer, resultScorePlayer, resultScoreComputer);
        }}>{props.children}</TableButton>
    )
};

export const ReshuffleCards = (props:any)=>{
    const {fetchData, removeCards} = props;
    return(
        <TableButton onClick={()=>fetchData(removeCards)}>{props.children}</TableButton>
    )
};

// export const RestartGame = (props:any)=>{
//     const {fetchData} = props;
//     return(
//       <TableButton onClick={fetchData}>{props.children}</TableButton>
//   )
// };

