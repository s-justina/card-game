import { combineReducers } from "redux";
import {
    activePlayer,
    computerResign,
    drawImages,
    playerResign,
    resultScoreComputer,
    resultScorePlayer
} from "./reducer";

export default combineReducers({
    resultScorePlayer,
    resultScoreComputer,
    drawImages,
    activePlayer,
    playerResign,
    computerResign,
});