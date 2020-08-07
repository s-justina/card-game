import React from "react";

import {FinalInformation, Title, CloseInformationBtnAndReshuffle} from './FinalScore.css';
import {reshuffleTheCards} from "../../utils/API_network_functions";

const FinalScore = (props:any)=>{
    const {removeCards} = props;
    return(
        <FinalInformation>
            <Title>final score</Title>
            <CloseInformationBtnAndReshuffle onClick={()=>reshuffleTheCards(removeCards)}>
                reshuffle
            </CloseInformationBtnAndReshuffle>
            {/*<CloseInformationBtn onClick={()=>{}}>close</CloseInformationBtn>*/}
        </FinalInformation>
    )
};

export default FinalScore;