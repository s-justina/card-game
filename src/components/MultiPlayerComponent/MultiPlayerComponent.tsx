import React, {Fragment, useState} from "react";
import {BtnContainer, PageContainer, RowContainer} from "../SinglePlayerComponent/SinglePlayerComponent.css";
import {PlayerContainer, StartWithNewPlayers, ReshuffleMulti, MultiPlayerContainer} from './MultiPlayerComponent.css'
import {StartButton} from "../StartComponent/StartComponent";
import {Player} from '../../components';
import {CreatePlayers} from "../../components";
import {reshuffleTheCards} from "../../utils/API_network_functions";
import {CloseInformationBtnAndReshuffle} from "../FinalScore/FinalScore.css";

const MultiPlayerComponent = (props: any) => {
    const findWinner = () =>{
        if(!props.multiplayer.gameFinished){
            return false
        }
        return props.multiplayer.players.find((player: any) => player.won).name
    };

    const renderScores = () => {
        return (
            <div style={{textAlign: 'center'}}>
                {props.multiplayer.players.map((player: any) => {
                    return <h3>Player: {player.name} - Score: {player.score}</h3>
                })}
            </div>
        )
    };

    return (
        <Fragment>
            <>
                <BtnContainer>
                    <StartButton disabled={false} route='/'>
                        main page</StartButton>
                </BtnContainer>
                <MultiPlayerContainer>
                    {!props.multiplayer.gameActive && !props.multiplayer.gameFinished && <CreatePlayers setPlayerName={props.setPlayerName} multiplayer={props.multiplayer}
                                                   gameActive={props.multiplayer.gameActive} setActivePlayer={props.setActivePlayer}
                                                   setGameActive={props.setGameActive}/>}
                    {props.multiplayer.gameActive && !props.multiplayer.gameFinished ? <Player markPlayerResigned={props.markPlayerResigned} setActivePlayer={props.setActivePlayer}
                            multiplayer={props.multiplayer} removeCards={props.removeCards}m
                            fetchCardsMulti={props.fetchCardsMulti} player={props.multiplayer.activePlayer}
                            markPlayerWon={props.markPlayerWon}
                            markPlayerLost={props.markPlayerLost}
                            cardsFetchingMulti={props.cardsFetchingMulti}
                    />  : findWinner() ? <PlayerContainer><h2>GAME FINISHED: {findWinner() } won!</h2>
                            {renderScores()}
                        <ReshuffleMulti onClick={()=>reshuffleTheCards(props.removeCards)}>
                            reshuffle
                        </ReshuffleMulti>
                        <StartWithNewPlayers  onClick={()=>props.createNewDeck()} >New deck</StartWithNewPlayers>
                    </PlayerContainer> : null}
                    {/*<CloseInformationBtnAndReshuffle onClick={()=>reshuffleTheCards(props.removeCards)}>*/}
                    {/*    reshuffle*/}
                    {/*</CloseInformationBtnAndReshuffle>*/}
                </MultiPlayerContainer>
            </>
            {/*{showResult()}*/}
        </Fragment>
    )
};

export default MultiPlayerComponent;