/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { workImage } from "../../../../data/WorkData";
import ShowWhenEnter from "../../components/ShowWhenEnter";

export const TwoImage = ({workImage}:{workImage:workImage}) => {
    return ( 
        <div css={styled.wrapper} style={{background:workImage.background ? workImage.background : ""}}>
            
                <ShowWhenEnter>
                    <img src={workImage.url[0]} alt="" css={styled.image}/>
                </ShowWhenEnter>      
                <ShowWhenEnter>
                    <img src={workImage.url[1]} alt="" css={styled.image}/>
                </ShowWhenEnter>      

            </div>
     );
}

const styled = {
    wrapper:css({
        height:"100%",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        columnGap:"10%",
        padding:"10% 0"
    }),
    image:css({
        width:"100%",
    }),



}

export default TwoImage;