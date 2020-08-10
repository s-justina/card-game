import React, {Fragment} from "react";
import {ColumnContainer} from "../SinglePlayerComponent/SinglePlayerComponent.css";
import {PlayerContainer, StartWithNewPlayers, ReshuffleMulti, MultiPlayerContainer} from './MultiPlayerComponent.css'
import {StartButton} from "../StartComponent/StartComponent";
import {Player} from '../../components';
import {CreatePlayers} from "../../components";
import {reshuffleTheCards} from "../../utils/API_network_functions";


const MultiPlayerComponent = (props: any) => {
    const findWinner = () => {
        if (!props.multiplayer.gameFinished) {
            return false
        }

        if (props.multiplayer.tie) {
            return 'No one'
        }

        return props.multiplayer.players.find((player: any) => player.won).name
    };

    const renderScores = () => {
        return (
            <div style={{textAlign: 'center'}}>
                {props.multiplayer.players.map((player: any, index: number) => {
                    return <h3 key={player.name + '-' + index}>Player: {player.name} - Score: {player.score}</h3>
                })}
            </div>
        )
    };

    return (
        <Fragment>
            <MultiPlayerContainer>
                <ColumnContainer>
                    <StartButton disabled={false} route='/'>
                        main page</StartButton>
                </ColumnContainer>
                <MultiPlayerContainer>
                    {!props.multiplayer.gameActive && !props.multiplayer.gameFinished &&
                    <CreatePlayers setPlayerName={props.setPlayerName} multiplayer={props.multiplayer}
                                   gameActive={props.multiplayer.gameActive} setActivePlayer={props.setActivePlayer}
                                   setGameActive={props.setGameActive}/>}
                    {props.multiplayer.gameActive && !props.multiplayer.gameFinished ? <Player
                        markPlayerResigned={props.markPlayerResigned}
                        setActivePlayer={props.setActivePlayer}
                        markGameFinished={props.markGameFinished}
                        multiplayer={props.multiplayer} removeCards={props.removeCards} m
                        fetchCardsMulti={props.fetchCardsMulti} player={props.multiplayer.activePlayer}
                        markPlayerWon={props.markPlayerWon}
                        markPlayerLost={props.markPlayerLost}
                        cardsFetchingMulti={props.cardsFetchingMulti}
                    /> : findWinner() ? <PlayerContainer><h2>GAME FINISHED: {findWinner()} won!</h2>
                        {renderScores()}
                        <ReshuffleMulti onClick={() => reshuffleTheCards(props.removeCards)}>
                            reshuffle
                        </ReshuffleMulti>
                        <StartWithNewPlayers onClick={() => props.createNewDeck()}>New deck</StartWithNewPlayers>
                    </PlayerContainer> : null}
                </MultiPlayerContainer>
            </MultiPlayerContainer>
        </Fragment>
    )
};

export default MultiPlayerComponent;