// gsapスクロールでscale .skewを変更する
// https://codepen.io/GreenSock/pen/eYpGLYL


import React, { useEffect } from 'react';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollSkew = () => {

    useEffect(() => {
  //プラグインを定義
  gsap.registerPlugin(ScrollTrigger);

  let proxy = { skew: 0,scale:1 },
  skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
  heightYsetter = gsap.quickSetter(".skewElem", "scaleY"), // fast
  clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 
  const scaleClamp = gsap.utils.clamp(0.7, 1); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    let scale = scaleClamp(1 - (Math.abs(self.getVelocity() / -12000)))
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
    }
    if (Math.abs(scale) < Math.abs(proxy.scale)) {
        proxy.scale = Math.abs(scale);
    }
    gsap.to(proxy, {scale:1,skew:0,duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => {
        heightYsetter(proxy.scale)
        skewSetter(proxy.skew)
    }});

  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "right center"});


    }, [])


    
    return (
            

<div className="area js-area">
<img width="600" height="600" src="https://picsum.photos/600/600?random=1" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=2" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=3" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=4" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=5" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=6" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=7" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=8" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=9" alt="" class="skewElem"/>
<img width="600" height="600" src="https://picsum.photos/600/600?random=10" alt="" class="skewElem"/>


</div>



    )
}

/* skew */

/* body {
  text-align: center;
  background-color: #111;
}
body > img {
  margin-bottom: 20vh;
}



h1 {
  color: white;
  text-shadow: 1px 1px 3px black;
  z-index: 1;
  font-size: 3em;
  font-weight: 400;
  display: none;
}

header .name {
  color: white;
} */