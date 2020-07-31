import React from 'react';

import {StartButton, Wrapper} from './StartComponent.css';

const StartComponent = () => {
    return (
        <Wrapper>
            <StartButton>single player</StartButton>
            <StartButton>multiplayer</StartButton>
        </Wrapper>
    )
};

export default StartComponent;