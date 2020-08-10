import { combineReducers } from "redux";
import {
    activePlayer,
    computerResign,
    drawImages,
    playerResign,
    resultScoreComputer,
    resultScorePlayer,
    computerIsFetchingCardsActive,
    gameActive,
    multiplayer,
} from "./reducer";

export default combineReducers({
    resultScorePlayer,
    resultScoreComputer,
    drawImages,
    activePlayer,
    playerResign,
    computerResign,
    computerIsFetchingCardsActive,
    gameActive,
    multiplayer,
});