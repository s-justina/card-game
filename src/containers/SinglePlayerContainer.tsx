import {connect} from "react-redux";


import {
    drawCards,
    removeCards,
    fetchPlayerResult,
    fetchComputerResult,
    resignFromPlayerDraw,
    resignFromComputerDraw,
    skipPlayer
} from "../actions";
import {SinglePlayerComponent} from "../components";


const mapStateToProps = (state:any) => {
    console.log('state: ', state);
    return {
        resultScorePlayer: state.resultScorePlayer,
        resultScoreComputer: state.resultScoreComputer,
        drawImages: state.drawImages,
        activePlayer: state.activePlayer,
        playerResign: state.playerResign,
        computerResign: state.computerResign,
    }
};
const mapDispatchToProps = (dispatch:any)=>({
    fetchPlayerResult: (resultScorePlayer:any)=>dispatch(fetchPlayerResult(resultScorePlayer)),
    fetchComputerResult: (resultScoreComputer:any)=>dispatch(fetchComputerResult(resultScoreComputer)),
    drawCards: (drawImages:any)=>dispatch(drawCards(drawImages)),
    removeCards: ()=>dispatch(removeCards()),
    resignFromPlayerDraw: ()=>dispatch(resignFromPlayerDraw()),
    resignFromComputerDraw: ()=>dispatch(resignFromComputerDraw()),
    skipPlayer: ()=>dispatch(skipPlayer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayerComponent);
