import axios from 'axios';

export const fetchTwoCards = () => {

    const deck_id = 'lbtqsss7b4mn';

    axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
        .then((response) => {
            console.log('fetchTwoCards: ', response);
        })
};

export const shuffleForNewTable = ()=>{
    // const deck_id = 'lbtqsss7b4mn';
axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then((response)=>{
        console.log('shuffleForNewTable', response);
    })
};

export const reshuffleTheCards = ()=>{
    const deck_id = 'lbtqsss7b4mn';
    axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`)
        .then((response)=>{
            console.log('reshuffleTheCards', response)
        })
};

