/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { css } from "@emotion/react";
import ShowWhenEnter from "./components/ShowWhenEnter"
type propType = {
    children:ReactNode,
    title:string
}

const AboutContent = ({ children,title }: propType) => {

    return (
        <ShowWhenEnter>
            <div css={styled.aboutContentWrapper}>
                <div css={styled.title}>
                    {title}
                </div>
                <div css={styled.content}>
                    {children}
                </div>
            </div>
        </ShowWhenEnter>  
    )
}

const styled = {
    aboutContentWrapper:css({
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",   
        padding:"50px 15%" ,
        fontFamily:"'Spectral', serif",
        textAlign:"left"
    }),
    title:css({
        gridColumn:"1/2",
        fontSize:"2rem",
        letterSpacing: "-1px",
        fontWeight:"bold"
    }),
    content:css({
        gridColumn:"2/4",
        fontSize:"1rem",
        textAlign:"left"
    })
}

export default AboutContent;