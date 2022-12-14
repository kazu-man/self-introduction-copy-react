import React, { useEffect,ReactNode } from 'react';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainLayoutLoading from '../loading/MainLayoutLoading';
import NavBar from "../NavBar"

type propType = {
    children:ReactNode
}

const MainLayout = ({ children }: propType) => {

    //アニメーション用のdivで囲う
    const body = ():ReactNode => React.Children.map(children, child => <div className="skewElem">{child}</div>)

    useEffect(() => {
        //プラグインを定義
        gsap.registerPlugin(ScrollTrigger);

        let proxy = { skew: 0,scale:1 },
        skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
        clamp = gsap.utils.clamp(-1, 1); // don't let the skew go beyond 20 degrees. 

        // heightYsetter = gsap.quickSetter(".skewElem", "scaleY"), // fast
        // const scaleClamp = gsap.utils.clamp(0.7, 1); // don't let the skew go beyond 20 degrees. 

        ScrollTrigger.create({
        onUpdate: (self) => {
            let skew = clamp(self.getVelocity() / -300);
            // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
            if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
            }

            // let scale = scaleClamp(1 - (Math.abs(self.getVelocity() / -12000)))
            // if (Math.abs(scale) < Math.abs(proxy.scale)) {
            //     proxy.scale = Math.abs(scale);
            // }

            gsap.to(proxy, {scale:1,skew:0,duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => {
                // heightYsetter(proxy.scale)
                skewSetter(proxy.skew)
            }});

        }
        });

        // make the right edge "stick" to the scroll bar. force3D: true improves performance
        gsap.set(".skewElem", {transformOrigin: "right center"});

    }, [])

    return (
            
        <div className="area js-area">
            <MainLayoutLoading/>
            <NavBar theme={"black"} target="Work"/>
            <div style={{background:"white"}}>
                {body()}
            </div>
        </div>

    )
}

export default MainLayout;