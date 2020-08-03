import { combineReducers } from "redux";
import { drawImages, resultScore} from "./reducer";

export default combineReducers({
    resultScore,
    drawImages,
});