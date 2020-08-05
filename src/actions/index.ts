export enum ActionTypes {
    FETCH_RESULT_SCORE_PLAYER = 'FETCH_RESULT_SCORE_PLAYER',
    FETCH_RESULT_SCORE_COMPUTER = 'FETCH_RESULT_SCORE_COMPUTER',
    FETCH_CARD_IMAGES= 'FETCH_CARD_IMAGES',
    CLEAR_TABLE = 'CLEAR_TABLE',
}

export const fetchPlayerResult = (resultScorePlayer:string[]) => ({
    type: ActionTypes.FETCH_RESULT_SCORE_PLAYER,
    payload: resultScorePlayer
});

export const fetchComputerResult = (resultScoreComputer:string[]) => ({
    type: ActionTypes.FETCH_RESULT_SCORE_COMPUTER,
    payload: resultScoreComputer
});

export const drawCards = (drawImages:any) =>({
   type: ActionTypes.FETCH_CARD_IMAGES ,
   payload: drawImages
});

export const removeCards = ()=>({
   type:  ActionTypes.CLEAR_TABLE,
});