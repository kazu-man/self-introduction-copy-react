//App.tsx

/** @jsxImportSource @emotion/react */

import { css  }  from '@emotion/react'

const ReferenceBadge = () => {

    return (
        <div css={styled.refference}>
            Design referred from <a href="https://hiraomakoto.jp/" target="_blank" rel="noreferrer">hiraomakoto.jp</a>
        </div>
    )
}

const styled = {

    refference:css({
        color:"white",
        background:"black",
        textAlign:"right",
        fontFamily:"'Spectral', serif",
        fontSize:"0.5rem"
    }),

}


export default ReferenceBadge;