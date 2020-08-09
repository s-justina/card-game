import {connect} from "react-redux";


import {
    setActivePlayer,
    setPlayerName
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
    fetchCardsMulti: (response: any) => dispatch({type: 'FETCH_CARDS', payload: response})
});

export default connect(mapStateToProps, mapDispatchToProps)(MultiPlayerComponent);
