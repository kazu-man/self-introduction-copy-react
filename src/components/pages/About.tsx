/** @jsxImportSource @emotion/react */
import MainLayout from "../layout/MainLayout";
import { css } from "@emotion/react";
import TextMoveImage from "./TextMoveImage";
import AboutContent from "./AboutContent";
import AboutFooter from "./AboutFooter";

const About = () => {

    return ( 
        <MainLayout>
            <div css={styled.topWrap}>
                <div css={styled.top}>
                    <div css={styled.topLeft}>
                        <div css={styled.name}>Makoto Hirao</div>
                        <div css={styled.subtitle}>平尾 誠/Currentry based in Japan - Osaka & Tokyo</div>
                    </div>
                    <div css={styled.topRight}>
                        <img alt="" css={[styled.topImage]} src={`${window.location.origin}/cssda-judge-monogram.png`} />
                    </div>
                </div>
            </div>

            <TextMoveImage text="CODE"/>

            <div css={styled.aboutContentArea}>
                <AboutContent title="Skill">
                    Design , Development , Direction , Branding ,SEO ,Writing
                    <br/>
                    <br/>
                    デザイン,マークアップ,アートディレクション,テクニカルディレクション,ブランディングコンサル,SEO,ライティング
                </AboutContent>

                <AboutContent title="Promise">
                    To break the existing rules, you must first know the importance of the rule.Understanding those, I aim for obliquely upward creatives.
                    <br/>
                    <br/>
                    既存のルールを破るには、まずはルールの重要さを知る必要があります。
                    それらを理解した上で、常識と非常識のちょうど真ん中を狙った、斜め上をいくクリエイティブを目指します。
                </AboutContent>

                <AboutContent title="Policy">
                    Web site is there are a lot of time hard.However, jokes such as Hollywood star no matter how in a pinch,It softens the place of air.Because I want to together the work I and such a person,I try to myself to do so.
                    <br/>
                    <br/>
                    Web制作の現場は大変です。でもピンチの時こそ、ハリウッドスターのような笑顔とジョークでその場の空気をなごませます。自分がそんな人と一緒に働きたいので、自分もそうするように心がけています。
                </AboutContent>

                <AboutContent title="I am a ...">
                    I am a web designer working in Tokyo. In Japan, it is often considered separately the design and the mark-up, is active is division of labor of work. However, those that should not be disconnected if the two are never original, and design that ignores the operation and information design, there should be no source code that ignored the ease of use and design. Two we believe it is the first time the web design in one.Only source code thought is that it is design, I think from the front-end side and going to always improve the design. "Front-end fighter" In describing me, this much catch copy obtained the target is not in the other.
                    <br/>
                    <br/>
                    私は Webデザイナーです。日本ではデザインとマークアップを分けて考えることが多く、作業の分業化が活発です。しかし、本来ならその二つは決して切り離してはいけません。情報設計と運用を無視したデザインや、美しさと使いやすさを無視したソースコードはあってはならないからです。
                    ふたつがひとつで初めて Webデザインと考えてます。
                    ソースコードこそがデザインだと考え、フロントエンド側からデザインを常に改良することを考えています。
                    ”戦うフロントエンド”
                    私を説明するにあたって、これほど的を得たキャッチコピーは他にありません。
                </AboutContent>
            </div>
            
            <AboutFooter />

        </MainLayout>
     );
}

const styled = {
    top:css({
        display:"grid",
        gridTemplateColumns:"repeat(6,1fr)",
        
    }),
    topLeft:css({
        gridColumn:"1/5",
        color:"white",
        background:"black",
        padding:"80px"
    }),
    topRight:css({
        gridColumn:"5/7",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }),
    name:css({
        fontSize:"3rem",
        fontWeight:"bold"
    }),
    subtitle:css({
        fontSize:"1rem",
        marginTop:"30px",
    }),
    topImage:css({
        width:"100px",

    }),
    topWrap:css({
        paddingTop:"80px",
        background:"#F9F9F9"
    }),
    aboutContentArea:css({
        background:"#f9f9f9"
    })

}

export default About;