import React from "react";

import {FinalInformation, Title, CloseInformationBtnAndReshuffle, SummaryScore, Span, Winner, FinalBtnContainer} from './FinalScore.css';
import {reshuffleTheCards} from "../../utils/API_network_functions";


const FinalScore = (props: any) => {
    const {removeCards, resultScorePlayer, resultScoreComputer, winner, computerIsFetchingCardsActive} = props;

    const winnerInfo = () => {
        if (winner !== '-') {
            return <Span>
                <Winner>{winner}</Winner>
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
            <FinalBtnContainer>
                <CloseInformationBtnAndReshuffle disabled={computerIsFetchingCardsActive}
                                                 onClick={() => reshuffleTheCards(removeCards)}>
                    reshuffle
                </CloseInformationBtnAndReshuffle>
            </FinalBtnContainer>

        </FinalInformation>
    )
};

export default FinalScore;