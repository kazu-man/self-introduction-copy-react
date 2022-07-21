/** @jsxImportSource @emotion/react */
import MainLayout from "../layout/MainLayout";
import { css } from "@emotion/react";
import TextMoveImage from "./TextMoveImage";


const About = () => {

    return ( 
        <MainLayout>
            <div css={styled.topWrap}>
                <div css={styled.top}>
                    <div css={styled.topLeft}>
                        <div css={styled.name}>Makoto Hirao</div>
                        <div css={styled.subtitle}>平尾 誠/Currentry based in Japan - Osaka & Tokyo</div>
                    </div>
                    <div css={styled.topRight}>
                        <img alt="" css={[styled.topImage]} src={`${window.location.origin}/cssda-judge-monogram.png`} />
                    </div>
                </div>
            </div>

            <TextMoveImage />

        </MainLayout>
     );
}

const styled = {
    top:css({
        display:"grid",
        gridTemplateColumns:"repeat(6,1fr)",
        
    }),
    topLeft:css({
        gridColumn:"1/5",
        color:"white",
        background:"black",
        padding:"80px"
    }),
    topRight:css({
        gridColumn:"5/7",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }),
    name:css({
        fontSize:"3rem",
        fontWeight:"bold"
    }),
    subtitle:css({
        fontSize:"1rem",
        marginTop:"30px",
    }),
    topImage:css({
        width:"100px",

    }),
    topWrap:css({
        paddingTop:"80px",
        background:"#F9F9F9"
    }),

}

export default About;