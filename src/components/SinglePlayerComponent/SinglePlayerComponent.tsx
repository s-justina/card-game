import React, {Fragment} from "react";
import axios from 'axios';

import {BtnContainer} from "./SinglePlayerComponent.css";
import {StartButton} from "../StartComponent/StartComponent";
import {DrawCardsButton, RestartGame, ReshuffleCards} from '../TableButtons'
import {fetchTwoCards, shuffleForNewTable, reshuffleTheCards} from '../../utils/API_network_functions';

const SinglePlayerComponent = () => {

    return (
        <Fragment>
            <BtnContainer>
                <StartButton route='/' onCLick={() => console.log('onClick na przycisk wróć')}>main page</StartButton>
            </BtnContainer>
            <div>Single player game</div>
            <DrawCardsButton fetchData={fetchTwoCards}>take 2 cards</DrawCardsButton>

            {/*nadanie stołu*/}
            <RestartGame fetchData={shuffleForNewTable}>shuffle the cards for new game</RestartGame>

            {/*rozdaj karty na nowo na tym samym stole*/}
            <ReshuffleCards fetchData={reshuffleTheCards}>reshuffle the cards</ReshuffleCards>


        </Fragment>

    )
};

export default SinglePlayerComponent;