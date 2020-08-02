import React, {Fragment} from "react";
import {BtnContainer, WhoseTurn, SinglePanel, ColumnContainer, RowContainer} from "./SinglePlayerComponent.css";
import {StartButton} from "../StartComponent/StartComponent";
import {DrawCardsButton, RestartGame, ReshuffleCards} from '../TableButtons';
import {fetchTwoCards, shuffleForNewTable, reshuffleTheCards} from '../../utils/API_network_functions';
import {Card} from '../../components'

const SinglePlayerComponent = () => {
    return (
        <Fragment>
            <BtnContainer>
                <StartButton route='/' onCLick={() => console.log('onClick na przycisk wróć')}>main page</StartButton>
            </BtnContainer>
            <ColumnContainer>
                <WhoseTurn>player 1 / computer</WhoseTurn>
                <RowContainer>
                    <SinglePanel>
                        <div>computer</div>
                        <ColumnContainer>
                            <RowContainer>
                                <Card src='https://deckofcardsapi.com/static/img/9S.png'></Card>
                                <Card src='https://deckofcardsapi.com/static/img/9S.png'></Card>
                            </RowContainer>
                            <div>score</div>
                            <div>cards on hand</div>
                        </ColumnContainer>
                    </SinglePanel>
                    <SinglePanel>
                        <div>player</div>
                        <ColumnContainer>
                            <RowContainer>
                                <Card src='https://deckofcardsapi.com/static/img/9S.png'></Card>
                                <Card src='https://deckofcardsapi.com/static/img/9S.png'></Card>
                            </RowContainer>
                            <div>score</div>
                            <div>cards on hand</div>
                        </ColumnContainer>

                    </SinglePanel>
                </RowContainer>
                <ColumnContainer>
                    <div>stats of player</div>
                    <div>total score</div>
                </ColumnContainer>

            </ColumnContainer>

            <DrawCardsButton fetchData={fetchTwoCards}>take 2 cards</DrawCardsButton>

            {/*nadanie stołu*/}
            <RestartGame fetchData={shuffleForNewTable}>shuffle the cards for new game</RestartGame>

            {/*rozdaj karty na nowo na tym samym stole*/}
            <ReshuffleCards fetchData={reshuffleTheCards}>reshuffle the cards</ReshuffleCards>


        </Fragment>

    )
};

export default SinglePlayerComponent;
