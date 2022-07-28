import Header from "../header/header";
import HomeTop from "./home-top/home-top";
import HomeAboutUs from "./home-about-us/home-about-us";
import HomeOurBest from "./home-our-best/home-our-best";
import Footer from "../footer/footer";
import "./home.scss";


const Home = () => {
    return (
        <div className="home-block">
            <header className="home-header">
                <Header/>
            </header>
            <div className="home-wrapper">
                <HomeTop />
                <HomeAboutUs />
                <HomeOurBest />
            </div>
            <footer className="home-footer">
                <Footer/>
            </footer>
        </div>
    )
}

export default Home;