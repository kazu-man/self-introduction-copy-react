/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import {workAbout} from "../../../data/WorkData";

export const WorkAboutText = ({target}:{target:workAbout}) => {

    return ( 
        <div css={styled.wrapper} style={{background:target.background ? target.background : "",color:target.background ? "white" : ""}}>
            <div css={styled.contentArea}>
                <div css={styled.title}>
                    {target.title}
                </div>
                <div css={styled.text}>
                    {target.text}
                </div>
            </div>
        </div>
     );
}

const styled = {
    wrapper:css({
        padding:"100px 0",
        fontFamily:"'Montserrat', sans-serif",
        width:"100%",
    }),
    contentArea:css({
        width:"70%",
        textAlign:"left",
        margin:"0 auto"
    }),
    title:css({
        fontSize:"3rem",
        marginBottom:"20px",
        fontFamily:'"Spectral", serif',
        letterSpacing:"0.2rem",

    }),
    text:css({
        fontSize:"1rem",
        whiteSpace:"pre-wrap",
        letterSpacing:"0.1rem",
        opacity:0.8
    }),


}

export default WorkAboutText;