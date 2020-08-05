import React from "react";
import {connect} from "react-redux";


import {drawCards, removeCards, fetchPlayerResult, fetchComputerResult} from "../actions";
import {SinglePlayerComponent} from "../components";


const mapStateToProps = (state:any) => {
    console.log('state: ', state);
    return {
        resultScorePlayer: state.resultScorePlayer,
        resultScoreComputer: state.resultScoreComputer,
        drawImages: state.drawImages,
        activePlayer: state.activePlayer,
    }
};
const mapDispatchToProps = (dispatch:any)=>({
    fetchPlayerResult: (resultScorePlayer:any)=>dispatch(fetchPlayerResult(resultScorePlayer)),
    fetchComputerResult: (resultScoreComputer:any)=>dispatch(fetchComputerResult(resultScoreComputer)),
    drawCards: (drawImages:any)=>dispatch(drawCards(drawImages)),
    removeCards: ()=>dispatch(removeCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayerComponent);
