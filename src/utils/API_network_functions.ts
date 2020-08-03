import axios from 'axios';

type Card = {
    code: string,
    image: string,
    images: { svg: string, png: string },
    suit: string,
    value: string,
}

export const fetchTwoCards = (drawCards: any, fetchResult: (cardsValue: string[]) => {type: string, payload: string[]}) => {

    const deck_id = 'lbtqsss7b4mn';

    axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
        .then((response) => {
            console.log('fetchTwoCards: ', response.data);

            const imageUrlDrwanCards = response.data.cards.map((card: Card) => {
                return card.image
            });
            drawCards(imageUrlDrwanCards);

            const valueDrawnCards = response.data.cards.map((card: Card) => {
                console.log('card: ', card.value);
                return card.value
            });
            fetchResult(valueDrawnCards);
        })
};

// export const shuffleForNewTable = () => {
//     // const deck_id = 'lbtqsss7b4mn';
//     axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//         .then((response) => {
//             console.log('shuffleForNewTable', response);
//         })
// };

export const reshuffleTheCards = (removeCards: () => void) => {
    const deck_id = 'lbtqsss7b4mn';
    axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`)
        .then((response) => {
            console.log('reshuffleTheCards', response);
            removeCards();
        })
};

