/** @jsxImportSource @emotion/react */
import {useEffect} from "react";
import { css } from "@emotion/react";
import gsap from "gsap";


const TextMoveImage = () => {
    let flg = true;
    useEffect(()=>{
        if(!flg) return;

        const textFlow = () => {
            console.log("FLOW")
            const client_w = document.getElementsByClassName('moveText')[0].clientWidth;
            const left = document.getElementById('imageBox')!.getBoundingClientRect().left ;
            const textStartPosition = -1  * client_w;

            gsap.set(".redText",{
                x: textStartPosition - left 
            });
            gsap.set(".blackText",{
                x: textStartPosition
            });
    
            gsap.to(".moveText",{
                duration: 20,
                ease: "none",
                x: "-=" + client_w, //move each box 500px to right
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % client_w) //force x value to be between 0 and 500 using modulus
                  },
                repeat: -1
            })
        }

        textFlow()

        flg = false;
    },[])

    return ( 
        <div css={styled.profileImageWrap}>
            <div css={styled.blackTextBox}>
                <div css={styled.blackText}>
                    <div style={{margin:"0",display:"inline-block"}} className="moveText blackText">
                    CODE IS DESIGN - 
                    </div> 
                    <div style={{margin:"0",display:"inline-block"}} className="moveText blackText">
                    CODE IS DESIGN - 
                    </div>                          
                    <div style={{margin:"0",display:"inline-block"}} className="moveText blackText">
                    CODE IS DESIGN - 
                    </div>     
                </div>
            </div>
            <div css={styled.picWithRedtextBox}>
                <img alt="" css={[styled.profilePic]} src="https://picsum.photos/600/600?random=1" id="imageBox"/>
                <div css={styled.redText} >
                    <div style={{margin:"0",display:"inline-block"}} className="moveText redText">
                    CODE IS DESIGN - 
                    </div>     
                    <div style={{margin:"0",display:"inline-block"}} className="moveText redText">
                    CODE IS DESIGN - 
                    </div>
                    <div style={{margin:"0",display:"inline-block"}} className="moveText redText">
                    CODE IS DESIGN - 
                    </div>
                </div>
            </div>
        </div>
     );
}

const styled = {
    profileImageWrap:css({
        width: "300px",
        margin: "100px auto"
    }),
    blackTextBox:css({}),
    blackText:css({
        color:"lightgray",
        position:"absolute",
        top:"20%" ,
        left:"0",
        whiteSpace:"nowrap",
        fontSize:"7rem",
        overflow:"hidden",
        width:"100%",
        fontFamily: "'Spectral', serif",
        fontWeight:"bold"

    }),
    picWithRedtextBox:css({
        width:"100%",
        margin:"auto",
        position:"relative",
        overflow:"hidden",
    }),
    redText:css({
       color:"red",
       position:"absolute",
       top:"20%" ,
       whiteSpace:"nowrap",
       fontSize:"7rem",
       overflow:"hidden",
       width:"100%",
       fontFamily: "'Spectral', serif",
       fontWeight:"bold"

    }),
    profilePic:css({
        width:"100%"
    })
}

export default TextMoveImage;