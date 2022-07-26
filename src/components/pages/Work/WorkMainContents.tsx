/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import {workComponents} from "../../../data/WorkData";
import WorkAboutText from "./WorkAboutText";
import FullScreenImage from "./components/FullScreenImage";
import TwoImage from "./components/TwoImage";
import MoreThanThreeImages from "./components/MoreThanThreeImages";
export const WorkMainContents = ({contents}:{contents:workComponents}) => {

    const contentJsx = () => {
        return contents.map((value) => {
            let jsx = <div></div>

            if("url" in value){

                switch(value.url.length){
                    case 1:
                        jsx = (
                            <FullScreenImage workImage={value} key={Math.random()}/>
                        )
                        break;
                    case 2:
                        jsx = (
                            <TwoImage workImage={value} key={Math.random()} />
                        )
                        break;
                    default:
                        jsx = (
                            <MoreThanThreeImages workImage={value} key={Math.random()} />
                        )
                        break;    
                }
            }else if("title" in value){
                jsx = (
                    <WorkAboutText target={value} key={Math.random()}/>
                )
            }

            return jsx;
         
        })
    }


    return ( 
        <div css={styled.wrapper}>
                {contentJsx()}
        </div>
     );
}

const styled = {
    wrapper:css({
        fontFamily:"'Montserrat', sans-serif",
        width:"100%",
    }),
    contentArea:css({
        color:"black",
        width:"70%",
        textAlign:"left",
        margin:"0 auto"
    }),
    title:css({
        fontSize:"3rem",
        marginBottom:"20px",
        fontFamily:'"Spectral", serif',
        letterSpacing:"0.2rem",

    }),
    text:css({
        fontSize:"1rem",
        whiteSpace:"pre-wrap",
        letterSpacing:"0.1rem",
        opacity:0.8
    })


}

export default WorkMainContents;