import "./home-about-us.scss";
import homeAbout from "../../../../image/home-about-image.png";

const HomeAboutUs = () => {
    return (
        <div className="home-about">
            <h3>About Us</h3>
            <img src={homeAbout} alt=""/>
        </div>
    )
}

export default HomeAboutUs;