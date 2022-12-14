//App.tsx

/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { css  }  from '@emotion/react'
import TopBox from './TopBox'
import ContentBox from './ContentBox';
import BarPercent from './BarPercent';
import { homeData, imageType } from '../../data/HomeData';

export type contentBoxType = {
  leftPic:imageType,
  rightPic?:imageType
}


const ParallaxHorizontalScrollPage = () => {

  const [scrollPercent, setScrollPercent] = useState <number>(0);

  const [contents] = useState <contentBoxType[]> (homeData)
  const [flg,setFlg] = useState(true);

  //必要な文字数

  useEffect(()=>{

      //プラグインを定義
        gsap.registerPlugin(ScrollTrigger);

        const area  = document.querySelector(".js-area")!;
        const wrap  = document.querySelector(".js-wrap");
        const items = document.querySelectorAll(".js-item");
        const num   = items.length;

        //横幅を指定
        gsap.set(wrap,  { width: num * 100 + "%"});
        gsap.set(items, { width: 100 / num + "%" });


        let proxy = { skew: 0,scale:1 },
        heightYsetter = gsap.quickSetter(".js-item", "scaleY") // fast
        const scaleClamp = gsap.utils.clamp(0.2, 1); // don't let the skew go beyond 20 degrees. 

      ScrollTrigger.create({
        onUpdate: (self) => {
          let scale = scaleClamp(1 - (Math.abs(self.getVelocity() / -30000)))

          if (Math.abs(scale) < Math.abs(proxy.scale)) {
              proxy.scale = Math.abs(scale);
          }

          gsap.to(proxy, 
            {
              scale:1,
              duration: 1,
              overwrite: true,
              onUpdate: () => {
                  let test = document.querySelector(".wrap");
                  if(!test) return;
                  heightYsetter(proxy.scale);
                  const windowWidth = test.clientWidth;
                  let {x, width} = document.querySelector(".first-box")!.getBoundingClientRect();
                  setScrollPercent(x / (windowWidth - width) * -100)
        
              }
            }
          );
        }
      });

      gsap.to(items, {
        xPercent: -100 * ( num - 1 ), //x方向に移動させる
        ease: "none",
        scrollTrigger: {
          trigger: area, //トリガー
          start: "top top", //開始位置
          end: "+=12000", //終了位置
          pin: true, //ピン留め
          scrub: 1, //スクロール量に応じて動かす
        },
      });

      setFlg(false)

    }, [flg])

    const contentsBoxList = () =>{
      return (
        contents.map((content, index) => {

          const even = (index % 2) === 0
          
          return (
              <div className="item item04 js-item" css={[styled.item]} key={index}>
                <ContentBox content={content} even={even}/>
              </div>
            )
          })
      )
    }

    
    return (
            

      <div className="area js-area" css={styled.area}>
        <div className="wrap js-wrap" css={styled.wrap}>
          <div className="item js-item first-box" css={[styled.item]}><TopBox /></div>
          {contentsBoxList()}
        </div>
        <div css={styled.barArea}>
          <div css={styled.barWidth}>
            <BarPercent percent={Math.ceil(scrollPercent)}/>
          </div>

        </div>
      </div>
    )
}

const styled = {
    test1:css({
        color:'green'
    }),
    area:css({
        overflow: "hidden"

    }),
    wrap:css({
        display: "flex"

    }),
    item:css({
      height: "100vh",
      width: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
        fontSize: "50px",
        fontWeight: "bold",
        color: "#fff",
    }),
    item04:css({
        background: "#e94d15"
    }),
    item05:css({
        background: "#f18d1d"
    }),
    item06:css({
        background: "#f8b633"
    }),
    barArea:css({
      position: "fixed",
      bottom:"30px",
      width:"100%",
      color:"white"
    }),
    barWidth:css({
      width:"60%",
      margin:"auto"
    })
}

  
export default ParallaxHorizontalScrollPage;