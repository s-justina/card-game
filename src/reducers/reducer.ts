import {ActionTypes} from "../actions";
import {FiguresScore} from '../utils/Figures_score';

const initialState: [] = [];
const resultScoreInitialState: {
    cardValues: string[],
    result: number
} = {
    cardValues: [],
    result: 0
};
const initialPlayer: string = 'player';
const initialResign: boolean=false;

export const resultScorePlayer = (state = resultScoreInitialState, action: any) => {
    switch (action.type) {
        case ActionTypes.FETCH_RESULT_SCORE_PLAYER:
            const result = [
                ...state.cardValues,
                ...action.payload
            ].reduce((result: number, current: any) => {
                // @ts-ignore
                return FiguresScore.value[current] + result
            }, 0);

            return {
                cardValues: [
                    ...state.cardValues,
                    ...action.payload
                ],
                result
            };
        case ActionTypes.CLEAR_TABLE:
            return resultScoreInitialState;
        default:
            return state
    }
};

export const resultScoreComputer = (state = resultScoreInitialState, action: any) => {
    switch (action.type) {
        case ActionTypes.FETCH_RESULT_SCORE_COMPUTER:
            const result = [
                ...state.cardValues,
                ...action.payload
            ].reduce((result: number, current: any) => {
                // @ts-ignore
                return FiguresScore.value[current] + result
            }, 0);

            return {
                cardValues: [
                    ...state.cardValues,
                    ...action.payload
                ],
                result
            };
        case ActionTypes.CLEAR_TABLE:
            return resultScoreInitialState;
        default:
            return state
    }
};


export const drawImages = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.FETCH_CARD_IMAGES:
            return [...state, ...action.payload];
        case ActionTypes.CLEAR_TABLE:
            return initialState;
        default:
            return state
    }
};

export const activePlayer = (state=initialPlayer, action:any)=>{
    // console.log(action.type, action.payload)
  switch(action.type){
      case ActionTypes.FETCH_RESULT_SCORE_PLAYER:
      case ActionTypes.FETCH_RESULT_SCORE_COMPUTER:
          return state === 'player' ? 'computer' : 'player';
      case ActionTypes.CLEAR_TABLE:
          return state = initialPlayer;
      case ActionTypes.RESIGN_FROM_PLAYER_DRAW:
      case ActionTypes.SKIP_PLAYER:
          return state ='computer';
      case ActionTypes.SKIP_COMPUTER:
          return state = 'player';
      default:
          return state
  }
};

export const playerResign = (state=initialResign, action:any)=>{
    switch(action.type){
        case ActionTypes.RESIGN_FROM_PLAYER_DRAW:
            return state = true;
        // case ActionTypes.CLOSE_GAME_RESULT:
        //     return state = initialResign;
        case ActionTypes.CLEAR_TABLE:
            return initialResign;
        default:
            return state
    }
};

export const computerResign = (state=initialResign, action:any)=>{
    switch(action.type){
        case ActionTypes.RESIGN_FROM_COMPUTER_DRAW:
            return state = true;
        // case ActionTypes.CLOSE_GAME_RESULT:
        //     return state = initialResign;
        case ActionTypes.CLEAR_TABLE:
            return initialResign;
        default:
            return state
    }
};