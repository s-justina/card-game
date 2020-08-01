import styled from "styled-components";

export const TableButton = styled.button`
padding: ${({theme})=>theme.spacing.sm}px ${({theme})=>theme.spacing.xl}px;
border: 2px solid ${({theme})=>theme.colors.gray.light};
background-color: ${({theme}) => theme.colors.grenade};
color: ${({theme}) => theme.colors.blue};
text-transform: uppercase;
transition: .3s;

&:hover{
    opacity: .8;
}
`;