import React, {Fragment, useEffect} from "react";
import Swal from 'sweetalert2'

import {
    BtnContainer, SinglePanel, ScoreTable, ScoreAndBtnsContainer,
    ColumnContainer, RowContainer, Computer, ActivePlayer, InactivePlayer, PageContainer
} from "./SinglePlayerComponent.css";
import {StartButton} from "../StartComponent/StartComponent";
import {DrawCardsButton, ResignDrawingCards} from '../TableButtons';
import {fetchTwoCards, reshuffleTheCards} from '../../utils/API_network_functions';
import {Card, FinalScore} from '../../components'
import theme from "../../utils/theme";
import {CloseInformationBtnAndReshuffle, FinalInformation} from "../FinalScore/FinalScore.css";

const SinglePlayerComponent = (props: any) => {

    useEffect(() => {

            if (props.activePlayer === 'computer' && !(props.resultScorePlayer.result >= 21) &&
                (props.resultScoreComputer.result <= props.resultScorePlayer.result || (props.resultScoreComputer.result > props.resultScorePlayer.result && !props.playerResign))
                && props.resultScoreComputer.result < 20 && !props.computerResign && !props.computerIsFetchingCardsActive) {
                props.computerIsFetchingCards(true);
                console.log('komputer pobiera arty')
                fetchTwoCards(props);
            } else if (props.activePlayer === 'computer' && props.resultScoreComputer.result > props.resultScorePlayer.result && props.playerResign) {
                props.resignFromComputerDraw()
            }
            if (props.activePlayer === 'computer' && !props.playerResign && props.computerResign) {
                props.skipComputer()
            } else if (props.activePlayer === 'player' && props.playerResign && !props.computerResign) {
                props.skipPlayer()
            }
        }
    );

    const renderCardImage = () => {
        return props.drawImages.map((drawImage: string) => {
            return <Card key={drawImage} src={drawImage}/>
        });
    };

    const activePlayer = () => {
        return props.activePlayer === 'player' && !props.playerResign ? <div>
            <ActivePlayer>player</ActivePlayer>
            <div>Your turn!</div>
        </div> : <div>
            <InactivePlayer>player</InactivePlayer>
        </div>
    };

    const activeComputer = () => {
        return props.activePlayer === 'computer' ?
            <div>
                <ActivePlayer>computer</ActivePlayer>
                <div>computer draw the cards</div>
            </div> : <div>
                <InactivePlayer>computer</InactivePlayer>
            </div>

    };

    const showResult = () => {
        return props.computerResign && props.playerResign && <FinalScore removeCards={props.removeCards}
                                                                         fetchData={reshuffleTheCards}/>
    };

    const showAlertAndChangeComputerResign = () => {
        props.resignFromComputerDraw();
        props.resignFromPlayerDraw();
        Swal.fire({
            title: 'OCH ... Game Over! You lose!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    };

    const showAlertAndChangeBothResignForPositive = () => {
        props.resignFromComputerDraw();
        props.resignFromPlayerDraw();
        Swal.fire({
            title: 'You win! Congrats!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    };

    const showAlertAndChangeBothResignForNegative = () => {
        props.resignFromComputerDraw();
        props.resignFromPlayerDraw();
        Swal.fire({
            title: 'You lose! Revenge?',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    };

    const showAlertAndChangeBothResignForTie = () => {
        props.resignFromComputerDraw();
        props.resignFromPlayerDraw();
        Swal.fire({
            title: 'It\'s amazing! We have a tie!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    };

    props.resultScorePlayer.result < 21 &&
    props.resultScoreComputer.result < 21 &&
    props.playerResign &&
    props.computerResign &&
    props.resultScorePlayer.result > props.resultScoreComputer.result &&
    Swal.fire({
        title: 'You went head to head and you win!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });

    props.resultScorePlayer.result < 21 &&
    props.resultScoreComputer.result < 21 &&
    props.playerResign &&
    props.computerResign &&
    props.resultScorePlayer.result < props.resultScoreComputer.result &&
    Swal.fire({
        title: 'Not this time, you lose!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });

    props.resultScorePlayer.result > 21 && props.resultScoreComputer.result < 21 && showAlertAndChangeComputerResign();

    props.resultScoreComputer.result > 21 && props.resultScorePlayer.result < 21 && showAlertAndChangeBothResignForPositive();

    props.resultScoreComputer.result === 21 && props.resultScoreComputer.result > props.resultScorePlayer.result && showAlertAndChangeBothResignForNegative();

    props.resultScorePlayer.result === 21 && props.resultScorePlayer.result > props.resultScoreComputer.result && showAlertAndChangeBothResignForPositive();

    props.resultScoreComputer.result === props.resultScorePlayer.result && props.playerResign && props.computerResign && showAlertAndChangeBothResignForTie();

    const quickWin = props.resultScorePlayer.cardValues.length === 2 && props.resultScorePlayer.cardValues.every((cardValue: string) => cardValue === "ACE");
    const quickLose = props.resultScoreComputer.cardValues.length === 2 && props.resultScoreComputer.cardValues.every((cardValue: string) => cardValue === "ACE");

    quickWin && Swal.fire({
        title: 'You bastard! You are a winner!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    quickLose && Swal.fire({
        title: 'You lose! The computer was definitely cheating!',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });


    return (
        <Fragment>
            <PageContainer>
                <BtnContainer>
                    <StartButton route='/'>main
                        page</StartButton>
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
                                             resultScoreComputer={props.resultScoreComputer}
                                             playerResign={props.playerResign}
                                             computerIsFetchingCards={props.computerIsFetchingCards}
                                             disabled={props.playerResign || props.activePlayer === 'computer'}

                            >
                                take cards
                            </DrawCardsButton>

                            <ResignDrawingCards resignFromPlayerDraw={props.resignFromPlayerDraw}
                                                activePlayer={props.activePlayer}
                                                disabled={props.playerResign || props.activePlayer === 'computer'}>
                                resign
                            </ResignDrawingCards>
                            {/*<CloseInformationBtnAndReshuffle onClick={()=>reshuffleTheCards(props.removeCards)}>*/}
                            {/*    reshuffle*/}
                            {/*</CloseInformationBtnAndReshuffle>*/}
                            {/*nadanie stołu*/}
                            {/*<RestartGame fetchData={shuffleForNewTable}>shuffle the cards for new game</RestartGame>*/}
                        </RowContainer>
                    </ScoreAndBtnsContainer>
                </ColumnContainer>
            </PageContainer>
            {showResult()}
        </Fragment>

    )
};

export default SinglePlayerComponent;
