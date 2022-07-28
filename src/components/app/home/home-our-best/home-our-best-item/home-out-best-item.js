import "./home-our-best-item.scss";
import bestImage from "../../../../../image/home-best-1.png";

const HomeOurBestItem = () => {
    return (
        <div className="home-best-item">
            <img src={bestImage} alt=""/>
            <span className="home-best-item__text">Solimo Coffee Beans 2 kg</span>
            <span className="home-best-item__price">10.73$</span>
        </div>
    )
}

export default HomeOurBestItem;

