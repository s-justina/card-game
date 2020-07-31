import React, {Fragment} from "react";
import {BtnContainer} from "../SinglePlayerComponent/SinglePlayerComponent.css";
import {StartButton} from "../StartComponent/StartComponent";

const MultiPlayerComponent = ()=>{
    return(
        <Fragment>
            <BtnContainer>
                <StartButton route='/' onCLick={()=>console.log('onClick na przycisk wróć')}>main page</StartButton>
            </BtnContainer>
            <div>Multi player game</div>
        </Fragment>

    )
};

export default MultiPlayerComponent;