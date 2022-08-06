// import Header from "../header/header";
import HomeTop from "./home-top/home-top";
import HomeAboutUs from "./home-about-us/home-about-us";
import HomeOurBest from "./home-our-best/home-our-best";
// import Footer from "../footer/footer";
import "./home.scss";
import HomeBest_1 from "../../components/image/home-best-1.png";
import HomeBest_2 from "../../components/image/home-best-2.png";
import HomeBest_3 from "../../components/image/home-best-3.jpg";


const Home = () => {

    const dataHome = [
        {name: "Solimo", price: "68", image: HomeBest_1},
        {name: "Jacobse", price: "112", image: HomeBest_2},
        {name: "Espresso", price: "75", image: HomeBest_3},
        {name: "Espresso", price: "75", image: HomeBest_3}
      ];
    

    return (
        <div className="home-block">
            {/* <header className="home-header">
                <Header/>
            </header> */}
            <div className="home-wrapper">
                <HomeTop />
                <HomeAboutUs />
                <HomeOurBest data={dataHome}/>
            </div>
            {/* <footer className="home-footer">
                <Footer/>
            </footer> */}
        </div>
    )
}

export default Home;