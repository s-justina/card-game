import styled from "styled-components";

//Button
// font-family: 'Arbutus', cursive;
// font-family: 'Butcherman', cursive;
// font-family: 'Holtwood One SC', serif;

const Button = styled.button`
margin-top:${({theme})=>theme.spacing.sm}px;
margin-bottom:${({theme})=>theme.spacing.sm}px;
padding: ${({theme})=>theme.spacing.xl}px ${({theme})=>theme.spacing.xl *2}px;
border: 2px solid ${({theme})=>theme.colors.green};
height: ${({theme})=>theme.spacing.xs}%;
width: ${({theme})=>theme.spacing.x5*2}%;
background-color: ${({theme})=>theme.colors.black};
color: ${({theme})=>theme.colors.green};
text-transform: uppercase;
font-family: 'Arbutus', cursive;
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