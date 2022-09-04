import  ParallaxHorizontalScrollPage from './ParallaxHorizontalScrollPage';
import NavBar from "../NavBar";
import HomeLoading from '../loading/HomeLoading';
import ReferenceBadge from '../pages/components/ReferenceBadge';
const Home = () => {
    
    return ( 
        <div className="main-area">
            <HomeLoading/>
            <NavBar theme={"white"} target="About"/>
            <ParallaxHorizontalScrollPage />
            <div style={{position:"fixed",bottom:0,right:"10px"}}>
                <ReferenceBadge />
            </div>
        </div>
     );
}

export default Home;