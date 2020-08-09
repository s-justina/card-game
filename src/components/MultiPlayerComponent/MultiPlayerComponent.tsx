import React, {Fragment, useState} from "react";
import {
    BtnContainer,
    ColumnContainer,
    PageContainer, RowContainer, ScoreAndBtnsContainer, ScoreTable,
} from "../SinglePlayerComponent/SinglePlayerComponent.css";
import {StartButton} from "../StartComponent/StartComponent";
import theme from "../../utils/theme";
import {ResignDrawingCards} from "../TableButtons";
import {Player, CreatePlayers} from '../../components';

const MultiPlayerComponent = (props: any) => {

    const [gameActive, setGameActive] = useState(false);

    const renderPlayers = () => {
        return props.multiplayer.players.map((player: any, index: number) => {
            return <Player key={`${player.name + '-' + index}`} playerName={player.name}/>
        })
    };
    return (
        <Fragment>
            <PageContainer>
                <BtnContainer>
                    <StartButton route='/'>
                        main page</StartButton>
                </BtnContainer>
                <ColumnContainer>
                    {!gameActive && <CreatePlayers setPlayerName={props.setPlayerName} multiplayer={props.multiplayer}
                                                   gameActive={gameActive} setGameActive={setGameActive}/>}
                    {gameActive && renderPlayers()}
                    <ScoreAndBtnsContainer>
                        <ScoreTable>
                            <div> player score:
                                <span style={{paddingLeft: `${theme.spacing.xl}px`}}>
{/*{props.resultScorePlayer.result}*/}
</span>
                            </div>
                        </ScoreTable>
                        <RowContainer>
                            {/*<DrawCardsButton */}
                            {/*    // fetchPlayerResult={props.fetchPlayerResult}*/}
                            {/*    //              fetchComputerResult={props.fetchComputerResult}*/}
                            {/*    //              drawCards={props.drawCards}*/}
                            {/*    //              fetchData={fetchTwoCards}*/}
                            {/*    //              activePlayer={props.activePlayer}*/}
                            {/*    //              resultScorePlayer={props.resultScorePlayer}*/}
                            {/*    //              resultScoreComputer={props.resultScoreComputer}*/}
                            {/*    //              playerResign={props.playerResign}*/}
                            {/*    //              computerIsFetchingCards={props.computerIsFetchingCards}*/}
                            {/*    //              disabled={props.computerIsFetchingCardsActive || props.playerResign || props.activePlayer === 'computer'}*/}

                            {/*>*/}
                            {/*    take cards*/}
                            {/*</DrawCardsButton>*/}

                            <ResignDrawingCards
                                // resignFromPlayerDraw={props.resignFromPlayerDraw}
                                //                 activePlayer={props.activePlayer}
                                //                 disabled={props.playerResign || props.activePlayer === 'computer'}
                            >
                                resign
                            </ResignDrawingCards>
                            {/*<CloseInformationBtnAndReshuffle onClick={()=>reshuffleTheCards(props.removeCards)}>*/}
                            {/*    reshuffle*/}
                            {/*</CloseInformationBtnAndReshuffle>*/}
                        </RowContainer>
                    </ScoreAndBtnsContainer>
                </ColumnContainer>
            </PageContainer>
            {/*{showResult()}*/}
        </Fragment>
    )
};

export default MultiPlayerComponent;