import React, {Fragment, useEffect, useState} from "react";

import {
    BtnContainer, SinglePanel, ScoreTable, ScoreAndBtnsContainer,
    ColumnContainer, RowContainer, Computer, ActivePlayer, InactivePlayer, PageContainer, AdditiveText
} from "./SinglePlayerComponent.css";
import {StartButton} from "../StartComponent/StartComponent";
import {DrawCardsButton, ResignDrawingCards} from '../TableButtons';
import {fetchTwoCards, reshuffleTheCards} from '../../utils/API_network_functions';
import {Card, FinalScore} from '../../components'
import theme from "../../utils/theme";
import {
    showAlertAndChangeComputerResign,
    showAlertAndChangeBothResignForPositive,
    showAlertAndChangeBothResignForNegative,
    showAlertAndChangeBothResignForTie,
    showAlertPositive,
    showAlertNegative,
    showQuickWinAlertPositive,
    showQuickWinAlertNegative
} from '../../utils/Alerts';


const SinglePlayerComponent = (props: any) => {

    const [winner, setWinner] = useState('');

    useEffect(() => {

            if (props.activePlayer === 'computer' && !(props.resultScorePlayer.result >= 21) &&
                (props.resultScoreComputer.result <= props.resultScorePlayer.result || (props.resultScoreComputer.result > props.resultScorePlayer.result && !props.playerResign))
                && props.resultScoreComputer.result < 20 && !props.computerResign && !props.computerIsFetchingCardsActive) {
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
            <AdditiveText>Your turn!</AdditiveText>
        </div> : <div>
            <InactivePlayer>player</InactivePlayer>
        </div>
    };

    const activeComputer = () => {
        return props.activePlayer === 'computer' ?
            <div>
                <ActivePlayer>computer</ActivePlayer>
                <AdditiveText>Computer draw the cards...</AdditiveText>
            </div> : <div>
                <InactivePlayer>computer</InactivePlayer>
            </div>

    };

    const showResult = () => {
        return props.computerResign && props.playerResign &&
            <FinalScore removeCards={props.removeCards}
                        fetchData={reshuffleTheCards}
                        resultScorePlayer={props.resultScorePlayer.result}
                        resultScoreComputer={props.resultScoreComputer.result}
                        winner={winner}
                        computerIsFetchingCardsActive={props.computerIsFetchingCardsActive}
            />
    };

    const quickWin = props.resultScorePlayer.cardValues.length === 2 && props.resultScorePlayer.cardValues.every((cardValue: string) => cardValue === "ACE");
    const quickLose = props.resultScoreComputer.cardValues.length === 2 && props.resultScoreComputer.cardValues.every((cardValue: string) => cardValue === "ACE");


    props.resultScorePlayer.result < 21 &&
    props.resultScoreComputer.result < 21 &&
    props.playerResign &&
    props.computerResign &&
    props.resultScorePlayer.result > props.resultScoreComputer.result &&
    showAlertPositive(winner, setWinner);


    props.resultScorePlayer.result < 21 &&
    props.resultScoreComputer.result < 21 &&
    props.playerResign &&
    props.computerResign &&
    props.resultScorePlayer.result < props.resultScoreComputer.result &&
    showAlertNegative(winner, setWinner);

    props.resultScorePlayer.result > 21 && props.resultScoreComputer.result < 21 &&
    showAlertAndChangeComputerResign(props, winner, setWinner);

    props.resultScoreComputer.result > 21 && props.resultScorePlayer.result < 21 &&
    showAlertAndChangeBothResignForPositive(props, winner, setWinner);

    props.resultScoreComputer.result === 21 && props.resultScoreComputer.result > props.resultScorePlayer.result &&
    showAlertAndChangeBothResignForNegative(props, winner, setWinner);

    props.resultScorePlayer.result === 21 && props.resultScorePlayer.result > props.resultScoreComputer.result &&
    showAlertAndChangeBothResignForPositive(props, winner, setWinner);

    props.resultScoreComputer.result === props.resultScorePlayer.result && props.playerResign && props.computerResign &&
    showAlertAndChangeBothResignForTie(props, winner, setWinner);

    quickWin && showQuickWinAlertPositive(winner, setWinner);

    quickLose && showQuickWinAlertNegative(winner, setWinner);


    return (
        <Fragment>
            <PageContainer>
                <ColumnContainer>
                    <StartButton disabled={false} route='/'>
                        main page</StartButton>
                </ColumnContainer>

                <ColumnContainer>
                    <ColumnContainer>
                        <Computer>
                            {activeComputer()}
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
                        <BtnContainer>
                            <DrawCardsButton fetchPlayerResult={props.fetchPlayerResult}
                                             fetchComputerResult={props.fetchComputerResult}
                                             drawCards={props.drawCards}
                                             fetchData={fetchTwoCards}
                                             activePlayer={props.activePlayer}
                                             resultScorePlayer={props.resultScorePlayer}
                                             resultScoreComputer={props.resultScoreComputer}
                                             playerResign={props.playerResign}
                                             computerIsFetchingCards={props.computerIsFetchingCards}
                                             disabled={props.computerIsFetchingCardsActive || props.playerResign || props.activePlayer === 'computer'}

                            >
                                take cards
                            </DrawCardsButton>

                            <ResignDrawingCards resignFromPlayerDraw={props.resignFromPlayerDraw}
                                                activePlayer={props.activePlayer}
                                                disabled={props.playerResign || props.activePlayer === 'computer'}>
                                resign
                            </ResignDrawingCards>
                        </BtnContainer>
                    </ScoreAndBtnsContainer>
                </ColumnContainer>
            </PageContainer>
            {showResult()}
        </Fragment>

    )
};

export default SinglePlayerComponent;
