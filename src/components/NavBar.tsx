/** @jsxImportSource @emotion/react */

import {useRef} from "react";
import { css  }  from '@emotion/react'
import gsap from "gsap"

  const NavBar = ( ) => {
    const circle = useRef(null);
    const aboutCircle = useRef(null);


    const circleMove = () =>{
    
        gsap.timeline()
        .to(circle.current, 
            {  
                duration:0.3,
                scale:1.5,
                opacity:0,
            },
        )
        .set(circle.current,
            {
                opacity:1,
                scale:1   
            }
        )
    
    }

    const aboutCircleMove = () =>{

        gsap.timeline()
        .to(aboutCircle.current, 
        {  
            duration:0.1,
            y:50,
            opacity:0,
        })
        .set(aboutCircle.current,{
            opacity:0,
            y:-50,
        })
        .to(aboutCircle.current, 
        {  
            duration:0.5,
            y:0,
            opacity:1,
            ease:"bounce"
        })

    }

    return (
        <div css={styled.area}>
            <div>
                <div css={styled.circle} ></div>
                <div css={styled.circle} ref={circle} onMouseOver={circleMove}></div>
            </div>
            <div css={styled.aboutLink} onMouseOver={aboutCircleMove}>
                <div css={styled.aboutCircle} ref={aboutCircle}></div>
                About
            </div>
        </div>
    )
}

const styled = {

    area:css({
        position: "fixed",
        height:"40px",
        top:"20px",
        width:"94%",
        margin: "0 3%",
        display:"flex",
        justifyContent:"space-between",
        flexWrap: "wrap",
        zIndex:"99"
    }),
    circle:css({
        background:"red",
        borderRadius:"50%",
        width:"40px",
        height:"40px",
        cursor:"pointer",
        position:"absolute",
    }),
    aboutLink:css({
        color:"white",
        display:"flex",
        alignItems:"center",
        fontSize:"1.2rem",
        cursor:"pointer"
    }),
    aboutCircle:css({
        background:"white",
        borderRadius:"50%",
        width:"15px",
        height:"15px",
        marginRight:"5px"
    })


}
  
export default NavBar;