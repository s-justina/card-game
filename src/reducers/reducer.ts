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

export type Player = {
    name: string,
    score: number,
    resigned: boolean,
    cardValues: string[],
    cardImages: string[],
    id: number,
    won: boolean,
    lost: boolean,
    cardsFetchedInCurrentTurn: boolean
}

const MultiplayerInitialState: {
    activePlayer: Player,
    players: Player[],
    cardsFetching: boolean,
    gameFinished: boolean,
    gameActive: boolean,
} = {
    cardsFetching: false,
    gameFinished: false,
    gameActive: false,
    activePlayer: {
        name: '',
        score: 0,
        resigned: false,
        cardValues: [],
        cardImages: [],
        id: 0,
        won: false,
        lost: false,
        cardsFetchedInCurrentTurn: false
    },
    players: [
        {
            name: '',
            score: 0,
            resigned: false,
            cardValues: [],
            cardImages: [],
            id: 0,
            won: false,
            lost: false,
            cardsFetchedInCurrentTurn: false
        },
        {
            name: '',
            score: 0,
            resigned: false,
            cardValues: [],
            cardImages: [],
            id: 1,
            won: false,
            lost: false,
            cardsFetchedInCurrentTurn: false
        },
        {
            name: '',
            score: 0,
            resigned: false,
            cardValues: [],
            cardImages: [],
            id: 2,
            won: false,
            lost: false,
            cardsFetchedInCurrentTurn: false
        },
        {
            name: '',
            score: 0,
            resigned: false,
            cardValues: [],
            cardImages: [],
            id: 3,
            won: false,
            lost: false,
            cardsFetchedInCurrentTurn: false
        }
    ],
};

const initialPlayerData = {
    score: 0,
    resigned: false,
    cardValues: [],
    cardImages: [],
    won: false,
    lost: false,
    cardsFetchedInCurrentTurn: false
};


export const multiplayer = (state = MultiplayerInitialState, action: any) => {
    switch (action.type) {
        case 'SET_ACTIVE_PLAYER':
            state.activePlayer.cardsFetchedInCurrentTurn = false;
            return {
                ...state,
                activePlayer: action.payload
            };
        case ActionTypes.FETCH_CARDS_MULTI:
            console.warn('card remaining: ', action.payload.remaining)
            const updatedActivePlayer = state.activePlayer;
            updatedActivePlayer.cardImages = [...updatedActivePlayer.cardImages, ...action.payload.cards.map((card: any) => card.image)];
            updatedActivePlayer.cardValues = [...updatedActivePlayer.cardValues, ...action.payload.cards.map((card: any) => card.value)];
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
        case ActionTypes.CLEAR_TABLE:
            const clearedPlayers = [...state.players].map((player: Player) => ({
                ...player,
                ...initialPlayerData
            }));

            return {
                ...MultiplayerInitialState,
                players: clearedPlayers,
                activePlayer: clearedPlayers[0],
                gameActive: true
            };
        case 'PLAYER_RESIGNED':
            const markPlayerResigned = state.activePlayer;
            markPlayerResigned.resigned = true;
            return {
                ...state
            };
        case ActionTypes.MARK_PLAYER_WON:
            const currentPlayerWon = state.activePlayer;
            currentPlayerWon.won = true;
            return {
                ...state,
                gameFinished: true
            };
        case ActionTypes.MARK_PLAYER_LOST:
            const currentPlayerLost = state.activePlayer;
            currentPlayerLost.lost = true;
            console.log('MARK_PLAYER_LOST: ', currentPlayerLost);
            return {
                ...state
            };
        case ActionTypes.CARDS_FETCHING: {
            const cardFetchedInCurrentTurn = state.activePlayer;
            cardFetchedInCurrentTurn.cardsFetchedInCurrentTurn = true;
            return {
                ...state
            }
        }
        case ActionTypes.GAME_ACTIVE:
            return {
                ...state,
                gameActive: action.payload
            };
        case ActionTypes.NEW_DECK:
            const fullyClearedPlayers = [...state.players].map((player: Player) => ({
                ...player,
                ...initialPlayerData,
                name: '',
            }));
            return {
                ...state,
                ...MultiplayerInitialState,
                players: fullyClearedPlayers,


            };
        default:
            return state;
    }
};

//  fzpsawudpvot - do multi