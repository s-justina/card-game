import React, {Fragment, useState} from "react";
import {BtnContainer, PageContainer} from "../SinglePlayerComponent/SinglePlayerComponent.css";
import {PlayerContainer} from './MultiPlayerComponent.css'
import {StartButton} from "../StartComponent/StartComponent";
import {Player} from '../../components';
import { CreatePlayers} from "../../components";

const MultiPlayerComponent = (props: any) => {
    const [gameActive, setGameActive] = useState(false);

    return (
        <Fragment>
            <>
                <BtnContainer>
                    <StartButton route='/'>
                        main page</StartButton>
                </BtnContainer>
                <PlayerContainer>
                    {!gameActive && <CreatePlayers setPlayerName={props.setPlayerName} multiplayer={props.multiplayer}
                                                   gameActive={gameActive} setActivePlayer={props.setActivePlayer} setGameActive={setGameActive}/>}
                    {gameActive && <Player fetchCardsMulti={props.fetchCardsMulti} player={props.multiplayer.activePlayer}/>}

                </PlayerContainer>
            </>
            {/*{showResult()}*/}
        </Fragment>
    )
};

export default MultiPlayerComponent;