import styled from "styled-components";

export const TableButton = styled.button`
padding: ${({theme})=>theme.spacing.sm*2}px ${({theme})=>theme.spacing.xl}px;
border: 1px solid ${({theme})=>theme.colors.green};
height: ${({theme})=>theme.spacing.xl*2}%;
width: ${({theme})=>theme.spacing.x5/2}%;
background-color: ${({theme}) => theme.colors.black};
font-family: 'Holtwood One SC', serif;
color: ${({theme}) => theme.colors.green};
text-transform: uppercase;
transition: .3s;

&:hover{
    opacity: .8;
}
`;