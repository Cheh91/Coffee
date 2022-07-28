import "./home-our-best.scss";
import HomeOurBestItem from "./home-our-best-item/home-out-best-item";

const HomeOurBest = () => {
    return (
        <div className="home-best">
            <h3>Our best</h3>
            <div className="home-best__wrap">
                <HomeOurBestItem/>
                <HomeOurBestItem/>
                <HomeOurBestItem/>
            </div>
        </div>
    )
}

export default HomeOurBest;