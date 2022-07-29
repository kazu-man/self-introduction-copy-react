/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import gsap from 'gsap'
import { useEffect,useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import {getObjById} from "../../../data/HomeData"

type propsType = {
    btn:"PREV" | "NEXT",
    id:number,
    showLoadingAnime:Function
}

const WorkPrevNextBtn = ({btn,id,showLoadingAnime}:propsType) => {
    const textPosition = btn === "PREV" ? {left:"-100%"} : {right:"-100%"};
    const textMoveTo =  btn === "PREV" ? 1 : -1;
    const targetBtnArea = useRef(null);
    const [showFlg,setShowFlg] = useState(false)
    const obj = getObjById(id);
    let navigate = useNavigate();
    let targetPage = "/about";

    if(id > 0 && obj !== undefined){
        const {title} = obj!;
        targetPage = "/work/" + title;
    }

    useEffect(() => {
        window.addEventListener('scroll', function(e) {
            const targetEl = this.document.getElementById("targetBgArea_" + btn);

            if(!targetEl) return;

            const targetY = targetEl!.getBoundingClientRect().y;

            if(targetY > 30){
                setShowFlg(false)
            }else{
                setShowFlg(true)
            }
          });
    },[btn])
    
    useEffect(() => {
        const showArea = () =>{
            gsap
            .timeline()
            .set("#targetBgArea_" + btn,{
                x:0,
                opacity:0
            })
            .to("#targetBgArea_" + btn,{
                duration:0.2,
                opacity:1
            })
        }
        const removeArea = () =>{
            gsap
            .timeline()
            .to("#targetBgArea_" + btn,{
                duration:0.2,
                opacity:0
            })
            .set("#targetBgArea_" + btn,{
                x:-1 * textMoveTo * 100 + "%",
                opacity:1
            })
        }
        if(showFlg){
            showArea()
        }else{
            removeArea()
        }

    },[btn, showFlg, textMoveTo])
    
    const handleMouseOver = () => {
        gsap.to("#targetBg_" + btn,{
            x:textMoveTo * 100 + "%"
        })
    }
    const handleMouseLeave = () => {
        gsap.to("#targetBg_" + btn,{
            x:-1 * textMoveTo * 100 + "%"
        })
    }

    const toTargetPage = () => {
        showLoadingAnime()
        navigate(targetPage)
    }
    
    return ( 
        <div id={`targetBgArea_${btn}`} ref={targetBtnArea} css={[styled.wrapper,btn === "PREV" ? styled.prevBtn : styled.nextBtn]} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={toTargetPage}>
            <div id={`targetBg_${btn}`} css={styled.dummyBg} style={textPosition}></div>
            <div css={styled.btnText}>
                <div>
                    {btn}
                </div>
            </div>
        </div>
     );
}

const styled = {
    wrapper:css({
        fontFamily:"'Montserrat', sans-serif",
        position:"sticky",
        top:"0",
        height:"100vh",
        width:"60px",
        marginTop:"-200px",
        mixBlendMode:"difference",
        cursor:"pointer",
        overflow:"hidden"
    }),
    dummyBg:css({
        content:`""`,
        height:"100%",
        width:"100%",
        position:"absolute",
        background:"white",
        mixBlendMode:"difference"
    }),
    prevBtn:css({
        float:"left",
    }),
    nextBtn:css({
        float:"right"
    }),
    btnText:css({
        writingMode: "vertical-rl",
        fontSize:"1rem",
        fontWeight:"bold",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
        color:"white"
    })


}

export default WorkPrevNextBtn;