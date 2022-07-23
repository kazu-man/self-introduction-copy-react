/** @jsxImportSource @emotion/react */
import MainLayout from "../../layout/MainLayout";
import { css } from "@emotion/react";
import { useParams } from 'react-router-dom';
import { getObjByName } from "../../../data/HomeData";
import { getTextByName } from "../../../data/WorkData";
import WorkFooter from "./WorkFooter";
import {useLocation} from "react-router-dom"
import { useEffect } from "react";

const Work = () => {
    const params = useParams();
    const {title, image, subTitle} = getObjByName(params.id!);
    const location = useLocation();

    useEffect(() => {
      console.log("Location changed");
      window.scrollTo(0, 0);
      
    }, [location]);
  

    const imageTexts = () => {
        const target = getTextByName(params.id!);

        if(!target){
            return null
        }

        return (
            getTextByName(params.id!).map((data,index) => {
                return (
                    <div css={styled.imageText} key={index}>
                        <div style={{width:"20%",textAlign:"left",opacity:"0.5"}}>{data.title}</div>
                        <div style={{width:"30%",textAlign:"left"}}>{data.subtitle}</div>
                        <div style={{width:"50%",padding:"0 0 0 10px",textAlign:"left"}}>{data.text}</div>
                    </div>
                    )

            })
        )
    }
    
    return ( 
        <MainLayout>
            <div css={styled.wrapper}>

                <div css={styled.topWrap}>
                    <div css={styled.top} >
                        <div css={styled.subTitle}>{subTitle}</div>
                        <div css={styled.title}>{title}</div>
                    </div>
                </div>


                <div css={styled.contentArea} >

                    <div css={styled.topImage} id="topImage">
                        <img src={image} alt="" style={{width:"90%"}}/>
                    </div>

                    <div css={styled.imageTextArea}>

                        {imageTexts()}
                        
                    </div>
                </div>


                <WorkFooter />
            </div>
        </MainLayout>
     );
}

const styled = {
    wrapper:css({
        background:"#F9F9F9",
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

export default Work;