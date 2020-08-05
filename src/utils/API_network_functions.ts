import axios from 'axios';
import {resultScoreComputer} from "../reducers/reducer";

type Card = {
    code: string,
    image: string,
    images: { svg: string, png: string },
    suit: string,
    value: string,
}

export const fetchTwoCards = (drawCards: any,
                              fetchPlayerResult: (cardsValue: string[]) => { type: string, payload: string[] },
                              fetchComputerResult: (cardsValue: string[]) => { type: string, payload: string[] },
                              activePlayer: string,
                              resultScorePlayer: any,
                              resultScoreComputer: any,
) => {

    const deck_id = 'lbtqsss7b4mn';
    axios.get(resultScorePlayer.result < 1 || resultScoreComputer.result < 1 ?
        `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2` : `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
        .then((response) => {
            console.log('fetchTwoCards: ', response.data);

            const imageUrlDrwanCards = response.data.cards.map((card: Card) => {
                return card.image
            });

            activePlayer === 'player' && drawCards(imageUrlDrwanCards);

            const valueDrawnCards = response.data.cards.map((card: Card) => {
                console.log('card: ', card.value);
                return card.value
            });

            activePlayer === 'player' ? fetchPlayerResult(valueDrawnCards) : fetchComputerResult(valueDrawnCards);
        })
};


export const reshuffleTheCards = (removeCards: () => void) => {
    const deck_id = 'lbtqsss7b4mn';
    axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`)
        .then((response) => {
            console.log('reshuffleTheCards', response);
            removeCards();
        })
};


// export const shuffleForNewTable = () => {
//     // const deck_id = 'lbtqsss7b4mn';
//     axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//         .then((response) => {
//             console.log('shuffleForNewTable', response);
//         })
// };