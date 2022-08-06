import "./home-our-best.scss";
import HomeOurBestItem from "./home-our-best-item/home-out-best-item";

const HomeOurBest = ({data}) => {

    const elements = data.map(item => {
        return (
            <HomeOurBestItem name={item.name} price={item.price + " $"} image={item.image}/>
        )
    })

    return (
        <div className="home-best">
            <h3>Our best</h3>
            <div className="home-best__wrap">
                {/* <HomeOurBestItem/>
                <HomeOurBestItem/>
                <HomeOurBestItem/> */}
                {elements}
            </div>
        </div>
    )
}

export default HomeOurBest;