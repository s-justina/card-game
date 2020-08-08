import styled from "styled-components";

import {TableButton} from '../TableButtons/TableButtons.css';

export const FinalInformation = styled.div`
position: absolute;
top: 0;
left: 0;
height: ${({theme})=>theme.spacing.x5*2}%;
width: ${({theme})=>theme.spacing.x5*2}%;
background-color: orange;
`;

export const Title = styled.div`
position:absolute;
top: ${({theme})=>theme.spacing.xl}%;
left:${({theme})=>theme.spacing.x5}%;
transform: translateX(-${({theme})=>theme.spacing.x5}%);
text-transform: uppercase;
font-weight: bold;
`;

export const Span = styled.div`
color:red;
line-height:${({theme})=>theme.spacing.xs}vh;
`;

export const SummaryScore = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
position: absolute;
top: ${({theme})=>theme.spacing.xxl}%;
left: 0;
width: ${({theme})=>theme.spacing.x5*2}%;
transform: translateY(-${({theme})=>theme.spacing.x5}%;);
text-transform: uppercase;
font-weight: bold;
text-align: center;
`;

export const CloseInformationBtnAndReshuffle = styled(TableButton)`
position: absolute;
bottom: ${({theme})=>theme.spacing.xl}px;
left: ${({theme})=>theme.spacing.x5}%;
transform: translateX(-${({theme})=>theme.spacing.x5}%);
`;