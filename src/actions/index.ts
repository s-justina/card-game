export enum ActionTypes {
    FETCH_RESULT_SCORE = 'FETCH_RESULT_SCORE',
    FETCH_CARD_IMAGES= 'FETCH_CARD_IMAGES',
    CLEAR_TABLE = 'CLEAR_TABLE',
}

export const fetchResult = (resultScore:any) => ({
    type: ActionTypes.FETCH_RESULT_SCORE,
    payload: resultScore
});

export const drawCards = (drawImages:any) =>({
   type: ActionTypes.FETCH_CARD_IMAGES ,
   payload: drawImages
});

export const removeCards = ()=>({
   type:  ActionTypes.CLEAR_TABLE,
});