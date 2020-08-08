import styled from "styled-components";


const Button = styled.button`
padding: ${({theme})=>theme.spacing.xl}px ${({theme})=>theme.spacing.xl *2}px;
border: 2px solid ${({theme})=>theme.colors.gray.dark};
background-color: ${({theme})=>theme.colors.blue};
color: ${({theme})=>theme.colors.grenade};
text-transform: uppercase;
font-weight: bold;
font-size: ${({theme})=>theme.spacing.xl}px;
transition: .3s;

&:hover{
opacity:.8;
}
`;

export const BackButton = styled(Button)`
padding: ${({theme})=>theme.spacing.sm}px ${({theme})=>theme.spacing.sm *2}px;
`;

export default Button;