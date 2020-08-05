import React, {Fragment} from "react";
import Swal from 'sweetalert2'

import {
    BtnContainer, SinglePanel, ScoreTable, ScoreAndBtnsContainer,
    ColumnContainer, RowContainer, Computer, ActivePlayer, InactivePlayer
} from "./SinglePlayerComponent.css";
import {StartButton} from "../StartComponent/StartComponent";
import {DrawCardsButton, ReshuffleCards} from '../TableButtons';
import {fetchTwoCards, reshuffleTheCards} from '../../utils/API_network_functions';
import {Card} from '../../components'
import theme from "../../utils/theme";

const SinglePlayerComponent = (props: any) => {

    const renderCardImage = () => {
        return props.drawImages.map((drawImage: string) => {
            return <Card key={drawImage} src={drawImage}/>
        });
    };

    const activePlayer = () => {
        return props.activePlayer === 'player' ? (
            <ActivePlayer>player</ActivePlayer>
        ) : (<InactivePlayer>player</InactivePlayer>)
    };

    const activeComputer = () => {
        return props.activePlayer === 'computer' ? (
            <ActivePlayer>computer</ActivePlayer>
        ) : (<InactivePlayer>computer</InactivePlayer>)
    };

    props.resultScorePlayer.result > 21 && Swal.fire({
        title: 'OOOOOOOOOOOOOOOCH ... Game Over! You lose!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    props.resultScoreComputer.result > 21 && Swal.fire({
        title: 'You win! Congrats!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    props.resultScoreComputer.result===21 && Swal.fire({
        title: 'You lose! Revenge?',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    // @ts-ignore
    (props.resultScoreComputer.result === props.resultScorePlayer.result === 21) && Swal.fire({
        title: 'It\'s amazing! We have a tie!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });

    const quickWin = props.resultScorePlayer.cardValues.length === 2 && props.resultScorePlayer.cardValues.every((cardValue: string) => cardValue === "ACE");
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
                <ColumnContainer>
                    <Computer>
                        {activeComputer()}
                        <ColumnContainer>
                            <RowContainer>
                                {/*<Card src='https://deckofcardsapi.com/static/img/9S.png'></Card>*/}
                                {/*<Card src='https://deckofcardsapi.com/static/img/9S.png'></Card>*/}
                            </RowContainer>
                        </ColumnContainer>
                    </Computer>
                    <SinglePanel>
                        {activePlayer()}
                        <ColumnContainer>
                            <RowContainer>
                                {renderCardImage()}
                            </RowContainer>
                        </ColumnContainer>
                    </SinglePanel>
                </ColumnContainer>
                <ScoreAndBtnsContainer>
                    <ScoreTable>
                        <div> player score:
                            <span style={{paddingLeft: `${theme.spacing.xl}px`}}>
                            {props.resultScorePlayer.result}
                        </span>
                        </div>
                    </ScoreTable>
                    <RowContainer>
                        <DrawCardsButton fetchPlayerResult={props.fetchPlayerResult}
                                         fetchComputerResult={props.fetchComputerResult}
                                         drawCards={props.drawCards}
                                         fetchData={fetchTwoCards}
                                         activePlayer={props.activePlayer}
                                         resultScorePlayer={props.resultScorePlayer}
                                         resultScoreComputer={props.resultScoreComputer}>
                            take cards
                        </DrawCardsButton>

                        {/*rozdaj karty na nowo na tym samym stole*/}
                        <ReshuffleCards removeCards={props.removeCards} fetchData={reshuffleTheCards}>reshuffle</ReshuffleCards>

                        {/*nadanie stołu*/}
                        {/*<RestartGame fetchData={shuffleForNewTable}>shuffle the cards for new game</RestartGame>*/}
                    </RowContainer>
                </ScoreAndBtnsContainer>
            </ColumnContainer>
        </Fragment>

    )
};

export default SinglePlayerComponent;
