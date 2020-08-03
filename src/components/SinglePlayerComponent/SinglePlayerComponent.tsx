import React, {Fragment} from "react";
import Swal from 'sweetalert2'

import {BtnContainer, WhoseTurn, SinglePanel, ColumnContainer, RowContainer} from "./SinglePlayerComponent.css";
import {StartButton} from "../StartComponent/StartComponent";
import {DrawCardsButton, ReshuffleCards} from '../TableButtons';
import {fetchTwoCards, reshuffleTheCards} from '../../utils/API_network_functions';
import {Card} from '../../components'

const SinglePlayerComponent = (props: any) => {
    console.log('props single', props);

    const renderCardImage = () => {
        return props.drawImages.map((drawImage: string) => {
            return <Card key={drawImage} src={drawImage}/>
        });
    };

    props.resultScore.result > 21 && Swal.fire({
        title: 'OOOOOOOOOOOOOOOCH ... Game Over! You lose!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    const quickWin = props.resultScore.cardValues.length ===2 && props.resultScore.cardValues.every((cardValue:string) => cardValue === "ACE");
    quickWin && Swal.fire({
        title: 'You bastard! You are a winner!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });


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
                                {/*<Card src='https://deckofcardsapi.com/static/img/9S.png'></Card>*/}
                                {/*<Card src='https://deckofcardsapi.com/static/img/9S.png'></Card>*/}
                                <div>score</div>
                            </RowContainer>
                            <div>cards on hand</div>
                        </ColumnContainer>
                    </SinglePanel>
                    <SinglePanel>
                        <div>player</div>
                        <ColumnContainer>
                            <RowContainer>
                                {renderCardImage()}
                            </RowContainer>
                            <div>cards on hand</div>
                        </ColumnContainer>

                    </SinglePanel>
                </RowContainer>
                <ColumnContainer>
                    <div>stats of player</div>
                    <div>score: {props.resultScore.result}</div>
                </ColumnContainer>
            </ColumnContainer>

            <DrawCardsButton fetchResult={props.fetchResult} drawCards={props.drawCards} fetchData={fetchTwoCards}>take
                2 cards</DrawCardsButton>

            {/*nadanie stołu*/}
            {/*<RestartGame fetchData={shuffleForNewTable}>shuffle the cards for new game</RestartGame>*/}

            {/*rozdaj karty na nowo na tym samym stole*/}
            <ReshuffleCards removeCards={props.removeCards} fetchData={reshuffleTheCards}>reshuffle the
                cards</ReshuffleCards>


        </Fragment>

    )
};

export default SinglePlayerComponent;
