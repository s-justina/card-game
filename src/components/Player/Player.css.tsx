import styled from 'styled-components';
import {TableButton} from "../TableButtons/TableButtons.css";
import {ScoreAndBtnsContainer} from "../SinglePlayerComponent/SinglePlayerComponent.css";


export const MultiDrawCardsButton = styled(TableButton)`
`;

export const NextPlayerButton = styled(TableButton)``;

export const MultiResignDrawingCards = styled(TableButton)``;

export const MultiScoreContainer = styled(ScoreAndBtnsContainer)`
position:relative;
margin-top:${({theme})=>theme.spacing.sm}%;
bottom: -${({theme})=>theme.spacing.xs}px;
`;