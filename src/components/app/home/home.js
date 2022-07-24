import HomeTop from "./home-top/home-top";
import HomeAboutUs from "./home-about-us/home-about-us";


const Home = () => {
    return (
        <div className="home-wrapper">
            <HomeTop/>
            <HomeAboutUs/>
        </div>
    )
}

export default Home;