import styled from "styled-components";

import {TableButton} from '../TableButtons/TableButtons.css';
import Background from '../../assets/poker-table-background.jpg';


export const FinalInformation = styled.div`
position: absolute;
top: 0;
left: 0;
height: ${({theme})=>theme.spacing.x5*2}%;
width: ${({theme})=>theme.spacing.x5*2}%;
background-image: url( ${ Background } );
color: ${({theme})=>theme.colors.black};
`;

export const Title = styled.div`
position:absolute;
top: 0;
left:0;
text-align: center;
height: ${({theme})=>theme.spacing.x5*2}%;
width: ${({theme})=>theme.spacing.x5*2}%;
font-family: 'Butcherman', cursive;
font-size: ${({theme})=>theme.spacing.x5*2}px;
text-transform: uppercase;
`;

export const Span = styled.div`
font-family: 'Holtwood One SC', serif;
line-height:${({theme})=>theme.spacing.xs}vh;
`;

export const Winner = styled.span`
margin-right: ${({theme})=>theme.spacing.xs}px;
animation-name: colors;
animation-duration: 4s;
animation-iteration-count: infinite;
animation-timing-function: ease;

@keyframes colors {
  0%   {color: red;}
  25%  {color: yellow;}
  50%  {color: blue;}
  100% {color: green;}
}
`;

export const SummaryScore = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
position: absolute;
top: ${({theme})=>theme.spacing.sm*3}%;
left: 0;
width: ${({theme})=>theme.spacing.x5*2}%;
transform: translateY(-${({theme})=>theme.spacing.x5}%;);
text-transform: uppercase;
font-weight: bold;
text-align: center;
`;

export const FinalBtnContainer=styled.div`
position: absolute;
bottom: ${({theme})=>theme.spacing.xl}px;
left: 0;
width:100%;
text-align:center;
`;

export const CloseInformationBtnAndReshuffle = styled(TableButton)`

height: ${({theme})=>theme.spacing.xl*2}%;
width: ${({theme})=>theme.spacing.x5/2}%;
// left: ${({theme})=>theme.spacing.x5}%;
// transform: translateX(-${({theme})=>theme.spacing.x5}%);
`;