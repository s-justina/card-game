import {ActionTypes} from "../actions";

const initialState: [] = [];


export const resultScore = (state = initialState, action:any) => {
    switch (action.type) {
        case ActionTypes.FETCH_RESULT_SCORE:
            return {
                ...action.resultScore

            };
        default:
            return state
    }
};


 export const drawImages = (state= initialState, action:any)=>{

   switch(action.type){
       case ActionTypes.FETCH_CARD_IMAGES:
           return [...state, ...action.payload];
       case ActionTypes.CLEAR_TABLE:
           return initialState;
       default:
           return state
   }
 };
