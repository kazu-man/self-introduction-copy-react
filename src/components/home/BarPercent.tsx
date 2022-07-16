//App.tsx

/** @jsxImportSource @emotion/react */

import { css  }  from '@emotion/react'

type propsType = {
    percent:number
}
  const BarPercent = ( props:propsType ) => {
    const {percent} = props;

    return (
            
        <div css={styled.area}>
            <div css={styled.blankBar}>
                <div css={styled.coloredBar} style={{width: percent + "%"}}></div>
            </div>
        </div>
    )
}

const styled = {

    area:css({
        position: "fixed",
        bottom:"30px",
        width:"100%",
        color:"white"
    }),
    blankBar:css({
        background:"#4c4c4c",
        width:"60%",
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