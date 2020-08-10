import {createGlobalStyle} from "styled-components";
import {normalize} from "styled-normalize";
import Background from '../src/assets/poker-table-background.jpg'

export default createGlobalStyle`
${normalize}
    *{
        margin:0;
        padding:0;
    }
    
    body {
       background-image: url( ${ Background } )
    }
`;