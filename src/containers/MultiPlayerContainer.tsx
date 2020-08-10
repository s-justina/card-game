import {connect} from "react-redux";


import {
    markPlayerResigned, markPlayerWon,
    removeCards,
    setActivePlayer,
    setPlayerName,
    markPlayerLost, cardsFetchingMulti, setGameActive, createNewDeck, fetchCardsMulti
} from "../actions";
import {MultiPlayerComponent} from "../components";

const mapStateToProps = (state:any)=>{
    console.log('state', state.multiplayer);
    return{
        multiplayer: state.multiplayer
    }
};

const mapDispatchToProps = (dispatch:any)=>({
    setPlayerName: (name:string, index:number)=>dispatch(setPlayerName(name, index)),
    setActivePlayer: (activePlayer: any) => dispatch(setActivePlayer(activePlayer)),
    fetchCardsMulti: (response: any) => dispatch(fetchCardsMulti(response)),
    removeCards: ()=>dispatch(removeCards()),
    markPlayerResigned: () => dispatch(markPlayerResigned()),
    markPlayerWon: () => dispatch(markPlayerWon()),
    markPlayerLost: () => dispatch(markPlayerLost()),
    cardsFetchingMulti: (status: boolean) => dispatch(cardsFetchingMulti(status)),
    setGameActive: (status: boolean) => dispatch(setGameActive(status)),
    createNewDeck: () => dispatch(createNewDeck())

});

export default connect(mapStateToProps, mapDispatchToProps)(MultiPlayerComponent);
