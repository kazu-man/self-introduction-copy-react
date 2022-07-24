//App.tsx

/** @jsxImportSource @emotion/react */

import React from 'react';
import { css  }  from '@emotion/react'
import {contentBoxType } from "./ParallaxHorizontalScrollPage"
import { useNavigate } from "react-router-dom";

type propsType = {
    content:contentBoxType,
    even:boolean
}
const ContentBox = ( props:propsType ) => {
    const {even, content} = props;
    const {leftPic,rightPic} = content;
    let navigate = useNavigate();
    
    const toTargetPage = (targetPage:string) => {
        navigate("/work/" + targetPage)
    }

    return (
            
        <div css={styled.area}>
            <div css={[styled.picture, even ? styled.up : styled.down]} onClick={()=>toTargetPage(leftPic.title)}>
                <div css={styled.picTitle}>{leftPic.title}</div>
                {/* <img alt="" css={[styled.image]} src={`${window.location.origin}/${leftPic.image}`} /> */}
                <img alt="" css={[styled.image]} src={leftPic.image}/>
                <div css={styled.subTitle}>{leftPic.subTitle}</div>
            </div>
            {
                rightPic &&
                <div css={[styled.picture]} onClick={()=>toTargetPage(leftPic.title)}>
                    <div css={styled.picTitle}>{rightPic.title}</div>
                    {/* <img alt="" css={[styled.image]} src={`${window.location.origin}/${rightPic.image}`} /> */}
                    <img alt="" css={[styled.image]} src={rightPic.image}/>
                    <div css={styled.subTitle}>{rightPic.subTitle}</div>
              </div>
            }

        </div>
    )
}

const styled = {

    area:css({
        overflow: "hidden",
        display:"flex",
        alignItems:"center",
        justifyItems:"center",
    }),
    topLogo:css({
        width:"100%",
        fontSize:"7rem"
    }),
    topSubtitle:css({
        width:"100%",
        fontSize:"3rem"
    }),
    picture:css({
        width:"50%",
        position:"relative",
        cursor:"pointer"
    }),
    image:css({
        width:"80%",
        opacity:"0.75"  
    }),
    picTitle:css({
        position:"absolute",
        zIndex:"99"
    }),
    subTitle:css({
        position:"absolute",
        bottom: "-20px",
        fontSize: "0.8rem",
        right: "20%",
        fontWeight: "normal",
        opacity: "0.8",
        fontFamily: "'Spectral', serif"
    }),
    up:css({
        marginTop:"-5%"
    }),
    down:css({
        marginTop:"5%"
    })


}
  
export default ContentBox;