export enum ActionTypes {
    FETCH_RESULT_SCORE_PLAYER = 'FETCH_RESULT_SCORE_PLAYER',
    FETCH_RESULT_SCORE_COMPUTER = 'FETCH_RESULT_SCORE_COMPUTER',
    FETCH_CARD_IMAGES = 'FETCH_CARD_IMAGES',
    CLEAR_TABLE = 'CLEAR_TABLE',
    CLEAR_TABLE_MULTI = 'CLEAR_TABLE_MULTI',
    RESIGN_FROM_PLAYER_DRAW = 'RESIGN_FROM_PLAYER_DRAW',
    RESIGN_FROM_COMPUTER_DRAW = 'RESIGN_FROM_COMPUTER_DRAW',
    SKIP_PLAYER = 'SKIP_PLAYER',
    SKIP_COMPUTER = 'SKIP_COMPUTER',
    COMPUTER_IS_FETCHING_CARDS = 'COMPUTER_IS_FETCHING_CARDS',
    SET_ACTIVE_GAME_STATUS = 'SET_ACTIVE_GAME_STATUS',
    SET_ACTIVE_PLAYER = 'SET_ACTIVE_PLAYER',
    SET_PLAYER_NAME = 'SET_PLAYER_NAME',
    RESET_MULTIPLAYER_GAME = 'RESET_MULTIPLAYER_GAME',
    PLAYER_RESIGNED = 'PLAYER_RESIGNED',
    MARK_PLAYER_WON = 'MARK_PLAYER_WON',
    MARK_PLAYER_LOST = 'MARK_PLAYER_LOST',
    CARDS_FETCHING = 'CARDS_FETCHING',
    GAME_ACTIVE = 'GAME_ACTIVE',
    NEW_DECK = 'NEW_DECK',
    FETCH_CARDS_MULTI = 'FETCH_CARDS_MULTI',
    MARK_GAME_FINISHED = 'MARK_GAME_FINISHED',
}

export const fetchPlayerResult = (resultScorePlayer: string[]) => ({
    type: ActionTypes.FETCH_RESULT_SCORE_PLAYER,
    payload: resultScorePlayer
});

export const fetchComputerResult = (resultScoreComputer: string[]) => ({
    type: ActionTypes.FETCH_RESULT_SCORE_COMPUTER,
    payload: resultScoreComputer
});

export const drawCards = (drawImages: any) => ({
    type: ActionTypes.FETCH_CARD_IMAGES,
    payload: drawImages
});

export const removeCards = () => ({
    type: ActionTypes.CLEAR_TABLE,
});

export const removeCardsMulti = () => ({
    type: ActionTypes.CLEAR_TABLE_MULTI,
});

export const resignFromPlayerDraw = () => ({
    type: ActionTypes.RESIGN_FROM_PLAYER_DRAW,
});

export const resignFromComputerDraw = () => ({
    type: ActionTypes.RESIGN_FROM_COMPUTER_DRAW,
});

export const skipPlayer = () => ({
    type: ActionTypes.SKIP_PLAYER,
});

export const skipComputer = () => ({
    type: ActionTypes.SKIP_COMPUTER,
});

export const computerIsFetchingCards = (status: boolean) => ({
    type: ActionTypes.COMPUTER_IS_FETCHING_CARDS,
    payload: status,
});

export const setActiveGameStatus = (status: boolean) => ({
    type: ActionTypes.SET_ACTIVE_GAME_STATUS,
    payload: status,
});

export const setActivePlayer= (activePlayer: any)=>({
    type: ActionTypes.SET_ACTIVE_PLAYER,
    payload: activePlayer
});

export const setPlayerName = (name:string, index:number)=>({
    type: ActionTypes.SET_PLAYER_NAME,
    payload: name,
    player: index,
});

export const ccc = ()=>({
    type: ActionTypes.RESET_MULTIPLAYER_GAME
});

export const markPlayerResigned = () => ({
    type: ActionTypes.PLAYER_RESIGNED
});

export const markPlayerWon = () => ({
    type: ActionTypes.MARK_PLAYER_WON
});

export const markPlayerLost = () => ({
    type: ActionTypes.MARK_PLAYER_LOST
});

export const cardsFetchingMulti = (status: boolean) => ({
    type: ActionTypes.CARDS_FETCHING,
    payload: status
});

export const setGameActive = (status: boolean) => ({
    type: ActionTypes.GAME_ACTIVE,
    payload: status
});

export const createNewDeck = () => ({
    type: ActionTypes.NEW_DECK,
});

export const fetchCardsMulti = (response: any) => ({
    type: ActionTypes.FETCH_CARDS_MULTI,
    payload: response
});

export const markGameFinished = () => ({
    type: ActionTypes.MARK_GAME_FINISHED
});