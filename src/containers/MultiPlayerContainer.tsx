import {connect} from "react-redux";


import {
    markPlayerResigned, markPlayerWon,
    removeCardsMulti,
    setActivePlayer,
    setPlayerName,
    markPlayerLost, cardsFetchingMulti, setGameActive, createNewDeck, fetchCardsMulti, markGameFinished
} from "../actions";
import {MultiPlayerComponent} from "../components";

const mapStateToProps = (state:any)=>{
    return{
        multiplayer: state.multiplayer
    }
};

const mapDispatchToProps = (dispatch:any)=>({
    setPlayerName: (name:string, index:number)=>dispatch(setPlayerName(name, index)),
    setActivePlayer: (activePlayer: any) => dispatch(setActivePlayer(activePlayer)),
    fetchCardsMulti: (response: any) => dispatch(fetchCardsMulti(response)),
    removeCardsMulti: ()=>dispatch(removeCardsMulti()),
    markPlayerResigned: () => dispatch(markPlayerResigned()),
    markPlayerWon: () => dispatch(markPlayerWon()),
    markPlayerLost: () => dispatch(markPlayerLost()),
    cardsFetchingMulti: (status: boolean) => dispatch(cardsFetchingMulti(status)),
    setGameActive: (status: boolean) => dispatch(setGameActive(status)),
    createNewDeck: () => dispatch(createNewDeck()),
    markGameFinished: () => dispatch(markGameFinished())

});

export default connect(mapStateToProps, mapDispatchToProps)(MultiPlayerComponent);
