import "./catalog-item.scss";
// import coffeeItem from "../../image/home-best-3.png";
// import Product from "../../../pages/product/product";
import { Link } from "react-router-dom";

const CatalogItem = (props) => {
    return (
        <div>
            {/* <Routes>
                <Route path="/product" element={<Product/>}/>
            </Routes> */}
            <Link to="/product" className="catalog-item">
                <img src={props.image} alt=""/>
                <span className="catalog-item__info">
                <span>{props.name}</span> Coffee 1 kg
                </span>
                <span className="catalog-item__country">
                    {props.country}
                </span>
                <span className="catalog-item__price">
                    {props.price + " $"}
                </span>
            </Link>

        </div> 
    )
}

export default CatalogItem;