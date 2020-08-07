import React from 'react';
import {Link} from 'react-router-dom';

import {StartPage} from './StartComponent.css';
import {Button, BackButton} from '../../components';

const StartComponent = (props:any) => {

    return (
        <StartPage>
            <StartButton route='/singleplayer'>{props.gameActive ? 'return to game' : 'single player' } </StartButton>
            <StartButton route='/multiplayer'>multiplayer</StartButton>
        </StartPage>
    )
};

// @ts-ignore
export const StartButton = ({route, children}) => {
    return (
        route === '/' ?
            (<Link to={route}>
                <BackButton>{children}</BackButton>
            </Link>) : (<Link to={route}>
                <Button>{children}</Button>
            </Link>)

    )
};


export default StartComponent;