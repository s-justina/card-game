import React from 'react';
import {Link} from 'react-router-dom';

import {StartPage} from './StartComponent.css';
import {Button, BackButton} from '../../components';

const StartComponent = () => {

    const handleToStartGame = ()=>{
console.log('onClick działa')
};

    return (
        <StartPage>
            <StartButton route='/singleplayer' onCLick={handleToStartGame}>single player</StartButton>
            <StartButton route='/multiplayer' onCLick={handleToStartGame}>multiplayer</StartButton>
        </StartPage>
    )
};

// @ts-ignore
export const StartButton = ({route, onCLick, children})=>{
    return (
        route==='/' ?
             (<Link to={route}>
                <BackButton onClick={onCLick}>{children}</BackButton>
            </Link>): (<Link to={route}>
                <Button onClick={onCLick}>{children}</Button>
            </Link>)

    )
};



export default StartComponent;