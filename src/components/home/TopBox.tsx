//App.tsx

/** @jsxImportSource @emotion/react */

import React from 'react';
import { css  }  from '@emotion/react'

const TopBox = () => {

    return (
            
        <div css={styled.area}>
            <div>
            <div css={styled.topLogo}>
                Code Is Design
            </div>
            <div css={styled.topSubtitle}>
                Makoto Hirao / ARUTEGA Inc.
            </div>

            </div>
        </div>

    )
}

const styled = {

    area:css({
        overflow: "hidden",
        display:"flex",
        alignItems:"center",
        justifyItems:"center"
    }),
    topLogo:css({
        width:"100%",
        fontSize:"7rem"
    }),
    topSubtitle:css({
        width:"100%",
        fontSize:"3rem",
        color:"black",
        WebkitTextStroke:"1px white"
    })


}
  
export default TopBox;