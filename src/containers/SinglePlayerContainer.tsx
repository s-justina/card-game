import {connect} from "react-redux";


import {
    drawCards,
    removeCards,
    fetchPlayerResult,
    fetchComputerResult,
    resignFromPlayerDraw,
    resignFromComputerDraw,
    skipPlayer,
    skipComputer, computerIsFetchingCards,
    // closeGameResult,
} from "../actions";
import {SinglePlayerComponent} from "../components";


const mapStateToProps = (state:any) => {
    return {
        resultScorePlayer: state.resultScorePlayer,
        resultScoreComputer: state.resultScoreComputer,
        drawImages: state.drawImages,
        activePlayer: state.activePlayer,
        playerResign: state.playerResign,
        computerResign: state.computerResign,
        computerIsFetchingCardsActive: state.computerIsFetchingCardsActive,
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
    skipComputer: ()=>dispatch(skipComputer()),
    computerIsFetchingCards: (status: boolean)=>dispatch(computerIsFetchingCards(status)),
    // closeGameResult: ()=>dispatch(closeGameResult()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayerComponent);
