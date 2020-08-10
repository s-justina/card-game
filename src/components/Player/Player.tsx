import React, {Fragment, useEffect} from "react";
import {RowContainer, ScoreAndBtnsContainer, ScoreTable} from "../SinglePlayerComponent/SinglePlayerComponent.css";
import theme from "../../utils/theme";
import {MultiDrawCardsButton, NextPlayerButton, MultiResignDrawingCards} from './Player.css';
import {fetchCardsMulti} from "../../utils/API_network_functions";
import {Card} from "../../components";
import {Player} from "../../reducers/reducer";
import Swal from "sweetalert2";


const PlayerPanel = (props: any) => {

    const renderCardImages = () => {
        return props.player.cardImages.map((img: string) => {
            return <Card key={img} src={img}/>
        });
    };

    const checkIfPlayerWon = () => {
        let won = false;
        if (props.player.lost) {
            return
        }

        if (props.player.cardValues.length === 2 && props.player.cardValues.every((cardValue: string) => cardValue === 'ACE')) {
            won = true
        }

        if (!props.player.lost && props.multiplayer.players.filter((player: Player) => player.lost).length === 3) {
            won = true
        }

        if (props.player.score === 21) {
            won = true
        }

        return won
    };

    const findWinnerIfAllResigned = () => {
        const results = props.multiplayer.players.map((player: Player) => {
            return 21 - player.score
        });
        const min = Math.min(...results);
        const winnerIndex = results.findIndex((result: number) => result === min);
        props.setActivePlayer(props.multiplayer.players[winnerIndex]);
        props.markPlayerWon();
    };

    const generateAlert = ((title: string) => {
        Swal.fire({
            title: `${title}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    });

    useEffect(() => {
        const playerWon = checkIfPlayerWon();
        if (playerWon) {
            props.markPlayerWon();
        } else {
            if (props.multiplayer.players.every((player: Player) => player.resigned)) {
                findWinnerIfAllResigned()
            } else if (props.player.resigned || props.player.lost) {
                props.setActivePlayer(props.multiplayer.players[props.player.id < 3 ? props.player.id + 1 : 0])
            } else if (props.player.score > 21) {
                Swal.fire({
                    title: `Not this time, you lose, ${props.player.name}!`,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                }).then(() => {
                    props.markPlayerLost();
                    props.setActivePlayer(props.multiplayer.players[props.player.id < 3 ? props.player.id + 1 : 0])
                });

            }
        }
    });

    const onTakeCardsPress = () => {
        fetchCardsMulti(props.player.score > 0 ? 1 : 2, props.fetchCardsMulti, props.cardsFetchingMulti)
    };

    const onNextPlayerPress = () => {
        if (!props.player.cardsFetchedInCurrentTurn) {
            return generateAlert(`Don\'t cheat! You have to fetch card or resign, ${props.player.name}!`)
        }
        props.setActivePlayer(props.multiplayer.players[props.player.id < 3 ? props.player.id + 1 : 0])
    };

    const onResignPress = () => {
        if (props.player.cardsFetchedInCurrentTurn) {
            generateAlert(`You can resign or fetch cards in one turn!`)
        } else {
            props.markPlayerResigned()
        }

    };

    return (
        <Fragment>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4' style={{textAlign: 'center'}}>{props.player.name}</div>
                <div className='col-4'></div>
            </div>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>{renderCardImages()}</div>
                <div className='col-1'></div>
            </div>
            <div style={{marginBottom: 200 + 'px'}}/>
            <ScoreAndBtnsContainer>
                <ScoreTable>
                    <div> player score: {props.player.score}
                        <span style={{paddingLeft: `${theme.spacing.xl}px`}}>

</span>
                    </div>
                </ScoreTable>
                <RowContainer>
                    <MultiDrawCardsButton
                        onClick={() => !props.player.cardsFetchedInCurrentTurn && !props.player.resigned && onTakeCardsPress()}>
                        take cards
                    </MultiDrawCardsButton>
                    <NextPlayerButton onClick={() => onNextPlayerPress()}>
                        Next player
                    </NextPlayerButton>

                    {!(props.player.score === 0) && <MultiResignDrawingCards
                        onClick={() => onResignPress()}
                    >
                        resign
                    </MultiResignDrawingCards>}
                </RowContainer>
            </ScoreAndBtnsContainer>
        </Fragment>
    )

};

export default PlayerPanel;