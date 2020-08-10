import React from 'react';
import {Link} from 'react-router-dom';

import {StartPage} from './StartComponent.css';
import {Button, BackButton} from '../../components';

const StartComponent = (props: any) => {
    return (
        <StartPage>
            <StartButton disabled={props.multiPlayerGameActive} route='/singleplayer'>{props.singlePlayerGameActive ? 'return to game' : 'single player'} </StartButton>
            <StartButton disabled={props.singlePlayerGameActive} route='/multiplayer'>{props.multiPlayerGameActive ? 'return to game' : 'multiplayer'} </StartButton>
        </StartPage>
    )
};

// @ts-ignore
export const StartButton = ({route, children, disabled}) => {
    return (
        route === '/' ?
            (<Link to={route}>
                <BackButton disabled={disabled}>{children}</BackButton>
            </Link>) :
            (<Link to={route}>
                <Button disabled={disabled}>{children}</Button>
            </Link>)
    )
};


export default StartComponent;