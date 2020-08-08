import styled from 'styled-components';

export const Image = styled.img`
margin: ${({theme}) => theme.spacing.sm}px;
height: ${({theme}) => theme.spacing.xxl * 4}px;
position: relative;
transition: 0.3s;
animation-name: mymove;
animation-delay: 2s;
animation-duration: 1.5s;
animation-timing-function: ease;
animation-fill-mode: forwards;


@keyframes mymove {
  from {top: 0px;}
  to {top: 200px;
  height: ${({theme}) => theme.spacing.xxl * 3}px;
  transform: translateY(${({theme}) => theme.spacing.xs}px) rotate(360deg);
}
`;