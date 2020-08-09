import React, {Fragment} from "react";
import {RowContainer, ScoreAndBtnsContainer, ScoreTable} from "../SinglePlayerComponent/SinglePlayerComponent.css";
import theme from "../../utils/theme";
import {ResignDrawingCards} from "../TableButtons";
import {MultiDrawCardsButton} from './Player.css';
import {fetchCardsMulti} from "../../utils/API_network_functions";

const Player = (props: any) => {
    return (
        <Fragment>
            <div className='row' >
                <div className='col-4' ></div>
                <div className='col-4' style={{textAlign: 'center'}} >{props.player.name}</div>
                <div className='col-4' ></div>
            </div>
            <ScoreAndBtnsContainer>
                <ScoreTable>
                    <div> player score: {props.player.score}
                        <span style={{paddingLeft: `${theme.spacing.xl}px`}}>
{/*{props.resultScorePlayer.result}*/}
</span>
                    </div>
                </ScoreTable>
                <RowContainer>
                    <MultiDrawCardsButton onClick={() => fetchCardsMulti(2, props.fetchCardsMulti)} >
                        take cards
                    </MultiDrawCardsButton>

                    <ResignDrawingCards
                        // resignFromPlayerDraw={props.resignFromPlayerDraw}
                        //                 activePlayer={props.activePlayer}
                        //                 disabled={props.playerResign || props.activePlayer === 'computer'}
                    >
                        resign
                    </ResignDrawingCards>
                    {/*<CloseInformationBtnAndReshuffle onClick={()=>reshuffleTheCards(props.removeCards)}>*/}
                    {/*    reshuffle*/}
                    {/*</CloseInformationBtnAndReshuffle>*/}
                </RowContainer>
            </ScoreAndBtnsContainer>
        </Fragment>
    )

};

export default Player;