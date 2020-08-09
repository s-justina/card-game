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
const initialResign: boolean = false;

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

export const activePlayer = (state = initialPlayer, action: any) => {
    switch (action.type) {
        case ActionTypes.FETCH_RESULT_SCORE_PLAYER:
        case ActionTypes.FETCH_RESULT_SCORE_COMPUTER:
            return state === 'player' ? 'computer' : 'player';
        case ActionTypes.CLEAR_TABLE:
            return state = initialPlayer;
        case ActionTypes.RESIGN_FROM_PLAYER_DRAW:
        case ActionTypes.SKIP_PLAYER:
            return state = 'computer';
        case ActionTypes.SKIP_COMPUTER:
            return state = 'player';
        default:
            return state
    }
};

export const playerResign = (state = initialResign, action: any) => {
    switch (action.type) {
        case ActionTypes.RESIGN_FROM_PLAYER_DRAW:
            return state = true;
        case ActionTypes.CLEAR_TABLE:
            return initialResign;
        default:
            return state
    }
};

export const computerResign = (state = initialResign, action: any) => {
    switch (action.type) {
        case ActionTypes.RESIGN_FROM_COMPUTER_DRAW:
            return state = true;
        case ActionTypes.CLEAR_TABLE:
            return initialResign;
        default:
            return state
    }
};

export const computerIsFetchingCardsActive = (state = false, action: any) => {
    switch (action.type) {
        case ActionTypes.COMPUTER_IS_FETCHING_CARDS:
            return state = action.payload;
        default:
            return state
    }
};

export const gameActive = (state = false, action: any) => {
    switch (action.type) {
        case ActionTypes.SET_ACTIVE_GAME_STATUS:
            return state = action.payload;
        case ActionTypes.FETCH_RESULT_SCORE_PLAYER:
            return state = true;
        case ActionTypes.CLEAR_TABLE:
            return state = false;
        default:
            return state
    }
};

const MultiplayerInitialState = {
  activePlayer:{
      name: '',
      score: 0,
      resigned: false,
      cardValues: [],
      cardImages: [],
      id: 0
  },
  players:[
      {
          name: 'aaaa',
          score: 0,
          resigned: false,
          cardValues: [],
          cardImages: [],
          id: 0
      },
      {
          name: 'bbbb',
          score: 0,
          resigned: false,
          cardValues: [],
          cardImages: [],
          id: 1
      },
      {
          name: 'cccc',
          score: 0,
          resigned: false,
          cardValues: [],
          cardImages: [],
          id: 2
      },
      {
          name: 'dddd',
          score: 0,
          resigned: false,
          cardValues: [],
          cardImages: [],
          id: 3
      }
  ],

};

export const multiplayer = (state=MultiplayerInitialState, action:any)=>{
  switch(action.type){
      case 'SET_ACTIVE_PLAYER':
          return {
              ...state,
              activePlayer: action.payload
          };
      case 'FETCH_CARDS':
          const updatedActivePlayer = state.activePlayer;
          updatedActivePlayer.cardImages = action.payload.cards.map((card: any) => card.image)
          updatedActivePlayer.cardValues = action.payload.cards.map((card: any) => card.value)
          const result = [
              ...updatedActivePlayer.cardValues,
          ].reduce((result: number, current: any) => {
              // @ts-ignore
              return FiguresScore.value[current] + result
          }, 0);
          updatedActivePlayer.score = result;
          return {
              ...state
          };
      case 'SET_PLAYER_NAME':
          const currentPlayers = state.players;
          currentPlayers[action.player].name = action.payload;
          return {
              ...state,
              players: currentPlayers
          };
      case 'RESET_MULTIPLAYER_GAME':
          return MultiplayerInitialState;
      default:
          return state;
  }
};