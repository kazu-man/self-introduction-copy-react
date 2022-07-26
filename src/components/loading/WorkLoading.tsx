/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const WorkLoading = ({setWorkLoadingFlg,image}:{setWorkLoadingFlg:Function,image:string}) =>{

    const grayZoneDom = useRef(null);
    const targetImage = useRef(null);
    const loadingWrapDom = useRef(null);
    const targetImageSize = document.getElementById("topImage")!.getBoundingClientRect();
    const targetStyle = {
        height:targetImageSize.height,
        width:targetImageSize.width,
        marginTop:targetImageSize.y,
        marginLeft:targetImageSize.left
    }

    let moveFlg = true;

    useEffect(()=>{
        //アニメーション開始
        gsap
        .set(grayZoneDom.current,{
            x:-1000,
        })
        setTimeout(() => loader(),1000)
    },[]);
 
    const loader = () =>{
    
        if(!moveFlg) return;

        gsap
        .timeline()
        .to(grayZoneDom.current,{
            x:0,
            duration:0.8,
            ease: "easeIn",
        })
        .set(targetImage.current,{
            opacity:1,
        })
        .to(grayZoneDom.current,
            {
                x:"100%",
                duration:1,
                ease: "power2.inOut",
                delay:0.5,
            },
            "sameTime"
        )
        .to(targetImage.current,
            {
                x:"-110%",
                duration:1,
                ease: "power2.inOut",
                delay:0.5,
            },
            "sameTime"
        )
        .to(loadingWrapDom.current,
            {
                x:"100%",
                duration:1,
                ease: "power2.inOut",
                delay:0.5,
                onComplete:() =>{
                    setWorkLoadingFlg(false);
                }
            },
            "sameTime"
        )

        moveFlg = false
    }

    return  (
        <div ref={loadingWrapDom} css={styled.loadingWrap}>
            <div css={styled.grayZone} style={{...targetStyle,opacity:0}} ref={targetImage}>
                <img src={image} style={{width:"100%"}} alt="" />
            </div>
            <div ref={grayZoneDom} css={styled.grayZone} style={targetStyle}></div>
        </div>
     ) 
}

const styled = {

    loadingWrap:css({
        width:"100%",
        height:"100%",
        zIndex:"99999",
        position:"fixed",
        top:"0",
        background:"black",
        overflow:"hidden"    
    }),
    grayZone:css({
        // marginLeft:"10%",
        // width:"90%",
        // height:"300px",
        content:`""`,
        background:"white",
        position:"absolute",
    })
}

export default WorkLoading;