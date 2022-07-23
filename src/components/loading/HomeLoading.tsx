/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
import BarPercent from "../home/BarPercent";
import gsap from "gsap";

const HomeLoading = () =>{

    const [percentNum,setPercentNum] = useState(0);
    const [showLoading,setShowLoading] = useState(true);
    const barDom = useRef(null);
    const nameDom = useRef(null);
    
    let moveFlg = true;

    useEffect(()=>{

        //バーの表示開始
        moveBar()

    },[]);
    
    const moveBar = () =>{
        
        let timer :NodeJS.Timer | null;
        if(!moveFlg) return;

        gsap
        .timeline()
        .from(nameDom.current,{
            y:"-100%",
            skewY:-10,
            duration:0.5
        })
        .from(barDom.current,
            {
                x:-500,
                duration:1,
                ease: "power2.inOut",
            }
        )

                
        setTimeout(()=> {

            //バーのゲージを100%にする
            timer = setInterval(() => {

                setPercentNum(num => {
                    if(num >= 100){
                        //barが100%になったらloading終了
                        clearInterval(timer!);
                        closeLoading()

                        return 100;
                    }
                    return num + 1;
                });
            },10)
            
        },1500)
        moveFlg = false
    }

    const closeLoading = () => {
        gsap.timeline()
        .to(nameDom.current,
            {
                y:"100%",
                duration:0.5,
                delay:0.5,
                ease: "power2.inOut",
            },
        )
        .to(barDom.current,
            {
                x:500,
                duration:1,
                ease: "power2.inOut",
            }
        )
        .to(".belt",
            {
                x:"100%",
                duration:1,
                stagger:0.2,
                ease: "power2.inOut",
                onComplete:() =>{
                    setShowLoading(false);
                }
            },
        )
    }

    return  showLoading ? (

        <div css={styled.loadingWrap}>
            <div className="belt" css={styled.belt}></div>
            <div className="belt" css={[styled.belt, styled.centerBelt]}>
                <div css={styled.name}>
                    <div ref={nameDom}>YAMADA TARO</div>
                </div>
                <div css={styled.barPercent}>
                    <div ref={barDom}>
                        <BarPercent percent={percentNum} />
                    </div>
                </div>
            </div>
            <div className="belt" css={styled.belt}></div>
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
        display:"flex",
        flexFlow: "column",
        
    }),
    belt:css({
        height:"33.3%",
        width:"100%",
        content:`""`,
        background:"black"
    }),
    centerBelt:css({
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexFlow: "column",
        color:"white",
    }),
    barPercent:css({
        width:"20%",
        marginTop:"10px",
        display:"block",
        overflow:"hidden"
    }),
    name:css({
        overflow:"hidden"
    })
}

export default HomeLoading;