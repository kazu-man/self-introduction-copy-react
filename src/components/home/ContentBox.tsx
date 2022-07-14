//App.tsx

/** @jsxImportSource @emotion/react */

import React from 'react';
import { css  }  from '@emotion/react'
import {contentBoxType } from "./ParallaxHorizontalScrollPage"

type propsType = {
    content:contentBoxType,
    even:boolean
}
  const ContentBox = ( props:propsType ) => {
    const {even, content} = props;
    const {leftPic,rightPic} = content;

    return (
            
        <div css={styled.area}>
            <div css={[styled.picture, even ? styled.up : styled.down]}>
                <div css={styled.picTitle}>{leftPic.title}</div>
                <img alt="" css={[styled.image]} src={`${window.location.origin}/${leftPic.image}`} />
            </div>
            <div css={[styled.picture]}>
                <div css={styled.picTitle}>{rightPic.title}</div>
                <img alt="" css={[styled.image]} src={`${window.location.origin}/${rightPic.image}`} />
            </div>

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
        position:"relative"     
    }),
    image:css({
        width:"80%"
    }),
    picTitle:css({
        position:"absolute",
    }),
    up:css({
        marginTop:"-5%"
    }),
    down:css({
        marginTop:"5%"
    })


}
  
export default ContentBox;