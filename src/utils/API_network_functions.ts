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
        playerResign,
        computerIsFetchingCards
    } = props;
    const deck_id = 'ioju81cij7bo';
    computerIsFetchingCards(true);

    axios.get(resultScorePlayer.result < 1 || resultScoreComputer.result < 1 ?
        `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2` : `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
        .then((response) => {

            const imageUrlDrwanCards = response.data.cards.map((card: Card) => {
                return card.image
            });

            activePlayer === 'player' && drawCards(imageUrlDrwanCards);

            const valueDrawnCards = response.data.cards.map((card: Card) => {
                return card.value
            });

            activePlayer === 'player' ?
                setTimeout(() => {
                    fetchPlayerResult(valueDrawnCards);
                    computerIsFetchingCards(false)
                }) :
                playerResign ?
                    setTimeout(() => {
                        fetchComputerResult(valueDrawnCards);
                        computerIsFetchingCards(false)
                    }) : setTimeout(() => {
                        fetchComputerResult(valueDrawnCards);
                        computerIsFetchingCards(false);
                    }, 5000);
        })
};


export const reshuffleTheCards = (removeCards: () => void) => {
    const deck_id = 'ioju81cij7bo';
    axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`)
        .then((response) => {
            removeCards();
        })
};

export const fetchCardsMulti = (cardsNumber: number, callback: any, cardsFetchingMulti: (status: boolean) => void) => {
    const deck_id = 'ioju81cij7bo';
    cardsFetchingMulti(true);
    axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${cardsNumber}`)
        .then((response) => {
            callback(response.data);
            cardsFetchingMulti(false);
        })
};