import  ParallaxHorizontalScrollPage from './ParallaxHorizontalScrollPage';
import NavBar from "../NavBar";
import HomeLoading from '../loading/HomeLoading';

const Home = () => {
    
    return ( 
        <div className="main-area">
            <HomeLoading/>
            <NavBar theme={"white"} target="About"/>
            <ParallaxHorizontalScrollPage />
        </div>
     );
}

export default Home;