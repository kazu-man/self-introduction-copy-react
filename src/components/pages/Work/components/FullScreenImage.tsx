/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { workImage } from "../../../../data/WorkData";

export const FullScreenImage = ({workImage}:{workImage:workImage}) => {
    return ( 
        <div css={styled.wrapper}>
          
            <img src={workImage.url[0]} alt="" css={styled.image}/>

        </div>
     );
}

const styled = {
    wrapper:css({
        // width:"100%",
        width:"auto",
        height:"auto",
        maxWidth:"100%",
        maxHeight:"100%",
        display:"flex"
    }),
    image:css({
        width:"100%",
    }),



}

export default FullScreenImage;