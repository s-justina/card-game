import styled from 'styled-components';

export const RowContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const BtnContainer = styled.div`
display:flex;
justify-content: center;
width: 100%;
`;

export const PageContainer = styled.div`
position: relative;
width: 100vw;
height: 100vh;
`;

export const SinglePanel = styled(ColumnContainer)`
justify-content: flex-start;
padding: ${({theme})=>theme.spacing.sm}px;
height: ${({theme})=>theme.spacing.xl*2}vh;
width: ${({theme})=>theme.spacing.xxl*2}vh;
`;

export const Computer = styled(SinglePanel)`
margin-top: ${({theme})=>theme.spacing.xs}px;
padding: ${({theme})=>theme.spacing.sm}px ${({theme})=>theme.spacing.sm}px;
height: ${({theme})=>theme.spacing.sm}%;
`;

export const Player = styled.div`
padding: ${({theme})=>theme.spacing.xs/2}px ${({theme})=>theme.spacing.sm}px;
font-family: 'Holtwood One SC', serif;
text-decoration: underline;
text-align: center;
`;

export const ActivePlayer = styled(Player)`
background-color: ${({theme})=>theme.colors.black};
color: red;
`;

export const InactivePlayer = styled(Player)`
color: ${({theme})=>theme.colors.black};
opacity: .4;
text-decoration: none;
`;

export const AdditiveText = styled.div`
font-family: 'Arbutus', cursive;
color: ${({theme})=>theme.colors.black};
`;

export const ScoreTable = styled(ColumnContainer)`
margin: ${({theme})=>theme.spacing.xs}px;
padding: ${({theme})=>theme.spacing.xl}px;
border: 2px dashed ${({theme})=>theme.colors.yellow};
font-family: 'Butcherman', cursive;
font-size: ${({theme})=>theme.spacing.xxl}px;
color: ${({theme})=>theme.colors.yellow};
text-transform: uppercase;
letter-spacing: 1px;
animation-name: colors;
animation-duration: 4s;
animation-iteration-count: infinite;
animation-timing-function: ease;

@keyframes colors {
  0%   {border-color: red;}
  25%  {border-color: yellow;}
  50%  {border-color: blue;}
  100% {border-color: green;}
}
\`;
`;

export const ScoreAndBtnsContainer = styled(ColumnContainer)`
width: 100%;
position:absolute;
bottom: ${({theme})=>theme.spacing.xs*2}px;
left: ${({theme})=>theme.spacing.x5}%;
transform: translateX(-${({theme})=>theme.spacing.x5}%);
`;