import styled from "styled-components";

import {TableButton} from '../TableButtons/TableButtons.css';

export const FinalInformation = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: orange;
text-align: center;
line-height: 100vh;
`;

export const Title = styled.div`
text-transform: uppercase;
font-weight: bold;
`;

export const CloseInformationBtnAndReshuffle = styled(TableButton)`
position: absolute;
bottom: ${({theme})=>theme.spacing.xl}px;
left: ${({theme})=>theme.spacing.x5}%;
transform: translateX(-${({theme})=>theme.spacing.x5}%);
`;