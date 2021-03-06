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
    computerIsFetchingCards: (status: boolean) => { type: string, payload: any },
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

export const ResignDrawingCards = (props: any) => {
    const {resignFromPlayerDraw, disabled} = props;
    return (
        <TableButton disabled={disabled} onClick={resignFromPlayerDraw}> {props.children} </TableButton>
    )
};
