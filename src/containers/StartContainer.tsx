import {connect} from "react-redux";

import {StartComponent} from "../components";
import {setActiveGameStatus} from "../actions";

const mapStateToProps = (state:any) => {
    return {
        gameActive: state.gameActive,
    }
};
const mapDispatchToProps = (dispatch:any)=>({
    setActiveGameStatus: (status:boolean)=>dispatch(setActiveGameStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartComponent);