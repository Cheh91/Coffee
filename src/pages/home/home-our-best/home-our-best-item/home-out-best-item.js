import "./home-our-best-item.scss";
// import bestImage from "./../../../../components/image/home-best-1.png";

const HomeOurBestItem = (props) => {
    return (
        <a href="/" className="home-best-item">
            <img src={props.image} alt=""/>
            <span className="home-best-item__text">{props.name}</span>
            <span className="home-best-item__price">{props.price}</span>
        </a>
    )
}

export default HomeOurBestItem;

