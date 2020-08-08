import React from "react";

import {FinalInformation, Title, CloseInformationBtnAndReshuffle, SummaryScore, Span} from './FinalScore.css';
import {reshuffleTheCards} from "../../utils/API_network_functions";
import theme from "../../utils/theme";

const FinalScore = (props: any) => {
    const {removeCards, resultScorePlayer, resultScoreComputer, winner, computerIsFetchingCardsActive} = props;

    const winnerInfo = () => {
        if (winner !== '-') {
            return <Span>
                <span style={{marginRight: theme.spacing.xs + 'px'}}>{winner}</span>
                is a winner!
            </Span>
        } else {
            return <Span>
                it is a tie!
            </Span>
        }

    };

    return (
        <FinalInformation>
            <Title>final score</Title>
            <SummaryScore>
                <Span>player score: {resultScorePlayer}</Span>
                <Span>computer score: {resultScoreComputer}</Span>
                {winnerInfo()}
            </SummaryScore>
            <CloseInformationBtnAndReshuffle disabled={computerIsFetchingCardsActive} onClick={() => reshuffleTheCards(removeCards)}>
                reshuffle
            </CloseInformationBtnAndReshuffle>
        </FinalInformation>
    )
};

export default FinalScore;