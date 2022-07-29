/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import gsap from 'gsap';

const AboutFooter = () => {
    const handleEnter = () => {

        gsap.timeline()
        .to("#dummyBg",{
            x:"100%",
            duration:0.2
        })
        .set("#dummyBg",{
            x:0,
            background:"#000000"
        })
        .set("#footer",{
            background:"#222"
        })

        gsap.set("#footerText",{
            color:"white"
        })
        
    }
    const handleLeave = () => {
        
        gsap.timeline()
        .to("#dummyBg",{
            x:"100%",
            duration:0.2
        })
        .set("#dummyBg",{
            x:0,
            background:"#222"
        })
        .set("#footer",{
            background:"#000000"
        })

        gsap.set("#footerText",{
            color:"black"
        })
        
    }

    return (
            
        <div css={[styled.aboutFooter,styled.smallScreen]} id="footer" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div css={styled.dummyBg} id="dummyBg"></div>
            <div css={styled.footetText} id="footerText">Please Message</div>
        </div>

    )
}

const styled = {
    aboutFooter:css({
        padding:"50px 15%" ,
        fontFamily:"'Spectral', serif",
        position:"relative",
        background:"#000000",
        overflow:"hidden",
        cursor:"pointer"
    }),
    dummyBg:css({
        position:"absolute",
        content:`""`,
        width:"100%",
        height:"100%",
        left:"0",
        top:"0",
        background:"#222"  
    }),
    footetText:css({
        zIndex:"9",
        position:"relative",
        fontSize:"4rem",
        color:"black",
        WebkitTextStroke:"1px white",
        fontFamily:'"Objective-bold", sans-serif'
    }),
    smallScreen:css`
    @media (max-width: 768px){
        #footerText{
            font-size:2rem;
        }
    }
`

}

export default AboutFooter;