import { combineReducers } from "redux";
import {activePlayer, drawImages, resultScoreComputer, resultScorePlayer} from "./reducer";

export default combineReducers({
    resultScorePlayer,
    resultScoreComputer,
    drawImages,
    activePlayer
});