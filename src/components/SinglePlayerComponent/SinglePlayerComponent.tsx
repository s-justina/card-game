import React, {Fragment} from "react";
import {BtnContainer} from "./SinglePlayerComponent.css";
import {StartButton} from "../StartComponent/StartComponent";


const SinglePlayerComponent = ()=>{
    return(
        <Fragment>
            <BtnContainer>
                <StartButton route='/' onCLick={()=>console.log('onClick na przycisk wróć')}>main page</StartButton>
            </BtnContainer>
            <div>Single player game</div>
        </Fragment>

    )
};

export default SinglePlayerComponent;