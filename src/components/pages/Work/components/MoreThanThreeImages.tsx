/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { workImage } from "../../../../data/WorkData";

export const MoreThanThreeImages = ({workImage}:{workImage:workImage}) => {
    const images = () => {
        return workImage.url.map((url) => {
            return (
                <div key={Math.random()}>
                    <img src={url} alt="" css={styled.image} />      
                </div>
            )
        })
    }

    return ( 
        <div css={styled.wrapper} style={{background:workImage.background ? workImage.background : ""}}>
          
          {images()}

        </div>
     );
}

const styled = {
    wrapper:css({
        height:"100%",
        width:"100%",
        padding:"10% 0"

    }),
    image:css({
        width:"60%",
        margin:"5% 0"
    }),



}

export default MoreThanThreeImages;