import {createGlobalStyle} from "styled-components";
import {normalize} from "styled-normalize";

export default createGlobalStyle`
${normalize}
    *{
        margin:0;
        padding:0;
    }
    
    body{
        background-color: pink;
    }
`;