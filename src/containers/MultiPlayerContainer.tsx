import {connect} from "react-redux";


import {
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

});

export default connect(mapStateToProps, mapDispatchToProps)(MultiPlayerComponent);
