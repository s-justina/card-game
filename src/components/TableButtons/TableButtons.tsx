import React from "react";
import {TableButton} from "./TableButtons.css";

export interface DrawCardsButtonProps {
    fetchPlayerResult: (resultScorePlayer: string[]) => { type: string, payload: any },
    fetchComputerResult: (resultScoreComputer: string[]) => { type: string, payload: any },
    drawCards: (drawImages: any) => { type: string, payload: any },
    fetchData: (props: any) => void,
    activePlayer: string,
    resultScorePlayer: { cardValues: [], result: number }
    resultScoreComputer: { cardValues: [], result: number },
    playerResign: boolean,
    disabled: boolean,
}

export const DrawCardsButton: React.FC<DrawCardsButtonProps> = (props) => {
    const {fetchData, disabled} = props;
    return (
        <TableButton onClick={() => {
            fetchData(props)
        }}
                     disabled={disabled}>
            {props.children}
        </TableButton>
    )
};

export const ReshuffleCards = (props: any) => {
    const {fetchData, removeCards} = props;
    return (
        <TableButton onClick={() => fetchData(removeCards)}>{props.children}</TableButton>
    )
};

export const ResignDrawingCards = (props: any) => {
    const {resignFromPlayerDraw} = props;
    return (
        <TableButton onClick={resignFromPlayerDraw}> {props.children} </TableButton>
    )
};

// export const RestartGame = (props:any)=>{
//     const {fetchData} = props;
//     return(
//       <TableButton onClick={fetchData}>{props.children}</TableButton>
//   )
// };

