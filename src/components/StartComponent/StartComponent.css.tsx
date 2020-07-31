import styled from 'styled-components';


export const StartButton = styled.button`
padding: ${({theme})=>theme.spacing.xl}px ${({theme})=>theme.spacing.xl *2}px;
border: 2px solid ${({theme})=>theme.colors.gray.dark};
background-color: ${({theme})=>theme.colors.blue};
color: ${({theme})=>theme.colors.grenade};
text-transform: uppercase;

&:hover{
opacity:.8;
}
`;

export const Wrapper = styled.div`
display:flex;
height: 100vh;
align-items: center;
justify-content: space-around;
`;