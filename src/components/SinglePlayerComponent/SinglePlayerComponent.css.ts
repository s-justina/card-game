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
justify-content: flex-end;
margin-top: ${({theme})=>theme.spacing.xs}px;
margin-right: ${({theme})=>theme.spacing.xs}px;
`;

export const PageContainer = styled(ColumnContainer)`
position: relative;
`;

export const SinglePanel = styled(ColumnContainer)`
border: 2px solid black;
justify-content: flex-start;
padding: ${({theme})=>theme.spacing.sm}px;
height: ${({theme})=>theme.spacing.xl*2}vh;
width: ${({theme})=>theme.spacing.xxl*2}vh;
`;

export const Computer = styled(SinglePanel)`
margin-top: ${({theme})=>theme.spacing.xs}px;
height: ${({theme})=>theme.spacing.sm}vw;
`;

export const Player = styled.div`
text-transform: capitalize;
font-weight: bold;
text-decoration: underline;
`;

export const ActivePlayer = styled(Player)`
color: red;
`;

export const InactivePlayer = styled(Player)`
color: black;
text-decoration: none;
`;

export const ScoreTable = styled(ColumnContainer)`
margin: ${({theme})=>theme.spacing.xs}px;
padding: ${({theme})=>theme.spacing.xl}px;
border: 2px dashed ${({theme})=>theme.colors.grenade};
text-transform: uppercase;
`;

export const ScoreAndBtnsContainer = styled(ColumnContainer)`
border: 2px solid black;
margin-top: ${({theme})=>theme.spacing.x5*2}px;
justify-content: flex-end;
`;