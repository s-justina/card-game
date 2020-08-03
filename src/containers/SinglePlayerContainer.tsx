import React from "react";
import {connect} from "react-redux";


import {drawCards, removeCards, resultFetched} from "../actions";
import {SinglePlayerComponent} from "../components";


const mapStateToProps = (state:any) => {
    console.log('state: ', state);
    return {
        resultScore: state.resultScore,
        drawImages: state.drawImages,
    }
};
const mapDispatchToProps = (dispatch:any)=>({
    resultFetched: (resultScore:any)=>dispatch(resultFetched(resultScore)),
    drawCards: (drawImages:any)=>dispatch(drawCards(drawImages)),
    removeCards: ()=>dispatch(removeCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayerComponent);
