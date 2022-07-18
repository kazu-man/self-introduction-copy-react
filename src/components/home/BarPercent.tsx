//App.tsx

/** @jsxImportSource @emotion/react */

import { css  }  from '@emotion/react'
import { MutableRefObject } from 'react';

type propsType = {
    percent:number,
    ref?:MutableRefObject<null> | null
}
  const BarPercent = ( {percent}:propsType ) => {

    return (
            
        <div css={styled.blankBar}>
            <div css={styled.coloredBar} style={{width: percent + "%"}}></div>
        </div>
    )
}

const styled = {

    blankBar:css({
        background:"#4c4c4c",
        width:"100%",
        margin:"auto",
        overflow:"hidden",
        borderRadius:"5px"
    }),
    coloredBar:css({
        background:"white",
        height:"1px"
    })

}
  
export default BarPercent;