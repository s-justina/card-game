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

export const WhoseTurn = styled(RowContainer)`
margin: ${({theme})=>theme.spacing.xs}px auto; 
text-transform: capitalize;
font-weight: bold;
text-decoration: underline;
`;

export const SinglePanel = styled(ColumnContainer)`
justify-content: flex-start;
padding: ${({theme})=>theme.spacing.sm}px;
height: ${({theme})=>theme.spacing.xxl}vw;
width: ${({theme})=>theme.spacing.xxl}vw;
text-align: center;
text-transform: capitalize;
font-weight: bold;
text-decoration: underline;
`;

