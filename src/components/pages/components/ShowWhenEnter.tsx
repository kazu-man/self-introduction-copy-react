import { ReactNode,useEffect,useRef } from 'react';
import gsap from "gsap"

type propType = {
    children:ReactNode
}

const ShowWhenEnter = ({ children }: propType) => {

    const targetContent = useRef<HTMLInputElement>(null);
    let showFlg = true;
    useEffect(()=>{

        const showEvent = () => {
            const target = targetContent.current!;
            if(!target) return;
            const targetTop = target.getBoundingClientRect().top + 100;
            const windowBottom = window.innerHeight + window.screenTop;
            const targetShow = targetTop < windowBottom;
            if(targetShow){
                gsap
                .timeline()
                .set(targetContent.current,{
                    y:"30px",
                    opacity:0,
                })
                .to(targetContent.current,
                {
                    duration:1,
                    opacity:1,
                    y:0,
                    stagger:0.2,
                })

                showFlg = false
                window.removeEventListener("scroll",showEvent)

            }
        }
        if(showFlg){
            window.addEventListener("scroll",showEvent)
        }

    },[])

    return (
        <div ref={targetContent} style={{opacity:0}}>
            {children}
        </div>
    )
}


export default ShowWhenEnter;