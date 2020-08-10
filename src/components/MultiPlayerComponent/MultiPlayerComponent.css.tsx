import styled from 'styled-components';
import {TableButton} from "../TableButtons/TableButtons.css";

export const PlayerContainer = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
position: absolute;
bottom: ${({theme}) => theme.spacing.x1}%;
left: ${({theme}) => theme.spacing.x5}%;
transform: translate(-${({theme}) => theme.spacing.x5}%, ${({theme}) => theme.spacing.x5}%);
text-align: center;
`;

export const MultiPlayerContainer = styled.div`
position: relative;
`;


export const StartWithNewPlayers = styled(TableButton)`
`;

export const ReshuffleMulti = styled(TableButton)`
`;