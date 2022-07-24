/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { getAllList } from "../../../data/HomeData";
import gsap from 'gsap'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const WorkFooter = () => {

    const dataList = getAllList();
    let navigate = useNavigate();

    const handleMouseOver = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        gsap.to(e.currentTarget, {
            scale:1.1,
            duration:1
        })
        gsap.to(e.currentTarget.nextElementSibling, {
            opacity:0,
            duration:1
        })

    }
    const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        gsap.to(e.currentTarget, {
            scale:1,
            duration:1
        })
        gsap.to(e.currentTarget.nextElementSibling, {
            opacity:1,
            duration:1
        })
    }

    const toTargetPage = (targetPage:string) => {
        navigate("/work/" + targetPage)
    }

    const boxList = () => {
        return (
            dataList.map((data,index) => {
                return (
                    <div key={index} css={styled.box} style={{marginTop: (index - 1)%3===0 ? "5%" : "0"}}>
                        <Link to={`/work/${data.title}`}>
                            <img src={data.image} alt="" style={{width:"100%",cursor:"pointer"}} onMouseOver={(e) => handleMouseOver(e)} onMouseLeave={(e) => handleMouseLeave(e)} onClick={() => toTargetPage(data.title)}/>
                            <div css={styled.textInPic}>{data.title}</div>
                        </Link>
                    </div>
                )
            })
        )
    }

    
    return ( 
        <div css={styled.wrapper}>
            <div css={styled.listTitle}>
                All List
            </div>
            <div css={styled.boxList}>
                {boxList()}
            </div>
        </div>
     );
}

const styled = {
    wrapper:css({
        background:"black",
        padding:"30px 0",
        fontFamily:"'Montserrat', sans-serif"
    }),
    boxList:css({
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gridColumnGap:"10%",
        width:"70%",
        margin:"auto"
    }),
    box:css({
        position:"relative",
        marginBottom:"30%"
    }),
    textInPic:css({
        position:"absolute",
        bottom:"15%",
        left:"5%",
        color:"white",
    }),
    listTitle:css({
        color:"white",
        textAlign:"left",
        paddingLeft:"15%",
        margin:"5% 0",
        fontWeight:"bold"
    }),


    topWrap:css({
        padding:"0 5%",
        textAlign:"right",
    }),
    contentArea:css({
        color:"white",

    }),
    top:css({
        display: "inline-block",
        margin:"100px 0"
    }),
    title:css({
        fontSize:"4rem",
        fontWeight:"bold"
    }),
    subTitle:css({
        textAlign:"left",
        fontSize:"0.8rem"
    }),
    topImage:css({
        width:"100%",
        textAlign: "right"
    }),
    imageTextArea:css({
        padding:"10%",
        background:"#222222",
        marginTop:"-100px",
        paddingTop:"150px",
    }),
    imageText:css({
        width:"100%",
        display:"flex",
        paddingBottom:"5px",
        fontFamily:"'Spectral', serif",

    })

}

export default WorkFooter;