import "./our-coffee-item.scss";
import coffeeItem from "../../../components/image/home-best-3.png";

const OurCoffeeItem = () => {
    return (
        <div>
            <a href="/pleasure" className="our-coffee__item">
                <img src={coffeeItem} alt=""/>
                <span className="our-coffee__item-info">
                    <span>Aromistico</span> Coffee 1 kg
                </span>
                <span className="our-coffee__item-country">
                    Brasil
                </span>
                <span className="our-coffee__item-price">
                    6.99$
                </span>
            </a>
            
        {/* <a href="#" className="our-coffee__item">
            
        </a> */}
        </div> 
    )
}

export default OurCoffeeItem;