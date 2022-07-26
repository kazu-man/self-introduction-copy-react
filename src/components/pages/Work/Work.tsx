/** @jsxImportSource @emotion/react */
import MainLayout from "../../layout/MainLayout";
import { css } from "@emotion/react";
import { useParams } from 'react-router-dom';
import { getObjByName } from "../../../data/HomeData";
import { getWorkDataByName,workHistory,workDataType } from "../../../data/WorkData";
import WorkFooter from "./WorkFooter";
import WorkAboutText from "./WorkAboutText";
import {useLocation} from "react-router-dom"
import { useEffect,useState,useRef } from "react";
import WorkPrevNextBtn from "./WorkPrevNexBtn"
import WorkLoading from "../../loading/WorkLoading";
import gsap from "gsap"

const Work = () => {
    const params = useParams();
    const targetObj = getObjByName(params.id!)!;
    const {id, title, image, subTitle} = targetObj;
    const location = useLocation();
    const [workLoadingFlg,setWorkLoadingFlg] = useState(false);
    const wrapper = useRef(null);
    const target:workDataType = getWorkDataByName(params.id!)!;
    const targetHistory:workHistory = getWorkDataByName(params.id!)!.workHistory;

    useEffect(() => {
    //   window.scrollTo(0, 0);
      
    }, [location]);

    const pageChangeAnimation = () =>{
        gsap.to(wrapper.current,{
            opacity:0,
            duration:1,
            onComplete:()=>{
                window.scrollTo(0, 0);
                setWorkLoadingFlg(true);
                gsap.to(wrapper.current,{
                    opacity:1,
                    delay:0.5
                })
            }
        })   
    }
  
    const showLoadingAnime = () => {
        pageChangeAnimation()
    }

    const imageTexts = () => {

        if(!targetHistory){
            return null
        }

        return (
            targetHistory.map((data,index) => {
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
        <div ref={wrapper}>
            {
                workLoadingFlg && <WorkLoading setWorkLoadingFlg={setWorkLoadingFlg} image={image}/>
            }

            <MainLayout>


                <div css={styled.wrapper}>

                    <div css={styled.topWrap}>
                        <div css={styled.top} >
                            <div css={styled.subTitle}>{subTitle}</div>
                            <div css={styled.title}>{title}</div>
                        </div>
                    </div>


                    <div css={styled.contentArea} >

                        <div css={styled.topImage}>
                            <img src={image} alt="" style={{width:"90%"}} id="topImage"/>
                        </div>

                        <div css={styled.imageTextArea}>

                            {imageTexts()}
                            
                        </div>
                    </div>

                    <div css={styled.mainArea}>
                        <WorkPrevNextBtn id={id - 1} btn="PREV" showLoadingAnime={showLoadingAnime}/>
                        <WorkPrevNextBtn id={id + 1} btn="NEXT" showLoadingAnime={showLoadingAnime}/>

                        <div css={styled.contents}>
                            
                            <WorkAboutText target={target}/>

                        </div>

                        <WorkFooter showLoadingAnime={showLoadingAnime} />
                    </div>


                </div>
            </MainLayout>
        </div>
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

    }),
    mainArea:css({
        width:"100%",
        position:"relative"
    }),
    contents:css({
        height:"500px"
    })

}

export default Work;