import './home-top.scss';
import logo from '../../../../image/top-title-image.png';

const HomeTop = () => {
    return (
        <div className="home-top">
            <h1>Everything You Love About Coffee</h1>
            <img className="home-top__image" src={logo} alt=""/>
            <h2 className="home-top__title">We makes every day full of energy and taste</h2>
            <h2 className="home-top__title"> Want to try our beans?</h2>
            <button className="home-top__button">More</button>
        </div>
    )
}

export default HomeTop;