import axios from 'axios';
import {DrawCardsButtonProps} from "../components/TableButtons/TableButtons";

type Card = {
    code: string,
    image: string,
    images: { svg: string, png: string },
    suit: string,
    value: string,
}

export const fetchTwoCards = (props: DrawCardsButtonProps) => {
    const {
        drawCards,
        fetchPlayerResult,
        fetchComputerResult,
        activePlayer,
        resultScorePlayer,
        resultScoreComputer,
        playerResign} = props;
    const deck_id = 'lbtqsss7b4mn';
    axios.get(resultScorePlayer.result < 1 || resultScoreComputer.result < 1 ?
        `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2` : `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
        .then((response) => {

            const imageUrlDrwanCards = response.data.cards.map((card: Card) => {
                return card.image
            });

            activePlayer === 'player' && drawCards(imageUrlDrwanCards);

            const valueDrawnCards = response.data.cards.map((card: Card) => {
                console.log('card: ', card.value);
                return card.value
            });

            activePlayer === 'player' ?
                fetchPlayerResult(valueDrawnCards) :
                playerResign ?
                    fetchComputerResult(valueDrawnCards) : setTimeout(() => fetchComputerResult(valueDrawnCards), 5000);
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