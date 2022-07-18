/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const MaiLayoutLoading = () =>{

    const [showLoading,setShowLoading] = useState(true);
    const grayZoneDom = useRef(null);
    const loadingWrapDom = useRef(null);

    let moveFlg = true;

    useEffect(()=>{
        //アニメーション開始
        setTimeout(() => loader(),1000)

    },[]);
 
    const loader = () =>{
    
        if(!moveFlg) return;

        gsap
        .timeline()
        .from(grayZoneDom.current,{
            y:"500px",
            duration:0.8,
            opacity:0.7,
            height:"300px",
        })
        .to(loadingWrapDom.current,
            {
                y:"-100%",
                duration:0.5,
                ease: "power2.inOut",
                delay:0.5,
                onComplete:() =>{
                    setShowLoading(false);
                }
            }
        )

        moveFlg = false
    }

    return  showLoading ? (
        <div ref={loadingWrapDom} css={styled.loadingWrap}>
            <div ref={grayZoneDom} css={styled.grayZone}></div>
        </div>
     ) : null
}

const styled = {

    loadingWrap:css({
        width:"100%",
        height:"100%",
        zIndex:"9999",
        position:"fixed",
        top:"0",
        background:"black"        
    }),
    grayZone:css({
        width:"100%",
        height:"0",
        content:`""`,
        background:"gray",
        opacity:0.1
    })
}

export default MaiLayoutLoading;