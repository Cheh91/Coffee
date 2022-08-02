import OurCoffeeTop from "./our-coffee-top/our-coffee-top";
import OurCoffeeAbout from "./our-coffee-about/our-coffee-about";
import OurCoffeeFilter from "./our-coffee-filter/our-coffee-filter";
import OurCoffeeItem from "./our-coffee-item/our-coffee-item";
import "./our-coffee.scss";


const OurCoffee = () => {
    return (
        <div>
            <OurCoffeeTop/>
            <OurCoffeeAbout/>
            <OurCoffeeFilter/>
            <div className="our-coffee__wrap">
                <OurCoffeeItem/>
                <OurCoffeeItem/>
                <OurCoffeeItem/>
                <OurCoffeeItem/>
                <OurCoffeeItem/>
                <OurCoffeeItem/>
            </div>
        </div>
    )
}

export default OurCoffee;