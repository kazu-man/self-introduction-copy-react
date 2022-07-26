/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import {workDataType} from "../../../data/WorkData";

export const WorkAboutText = ({target}:{target:workDataType}) => {
    const { workAbout } = target;
    return ( 
        <div css={styled.wrapper}>
            <div css={styled.contentArea}>
                <div css={styled.title}>
                    {workAbout.title}
                </div>
                <div css={styled.text}>
                    {workAbout.text}
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
        background:"#f9f9f9"
    }),
    contentArea:css({
        color:"black",
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