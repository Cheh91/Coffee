import OurCoffeeTop from "./our-coffee-top/our-coffee-top";
import About from "../../components/about-block/about";
import OurCoffeeFilter from "./our-coffee-filter/our-coffee-filter";
import Catalog from "../../components/catalog/catalog";
import "./our-coffee.scss";
import Catalog_1 from "../../components/image/catalog-1.jpg";
import Catalog_2 from "../../components/image/catalog-2.jpg";
import Catalog_3 from "../../components/image/catalog-3.jpg";
import Catalog_4 from "../../components/image/catalog-4.jpg";
import Catalog_5 from "../../components/image/catalog-5.jpg";
import Catalog_6 from "../../components/image/catalog-6.png";
import OurCoffeeImage from "../../components/image/about-our-beans.jpg";


const catalog = [
    {name: "ROASTER", country: "Brasil", image: Catalog_1, price: "6.5"},
    {name: "CATCHI", country: "Italy", image: Catalog_2, price: "4.2"},
    {name: "IRISH", country: "Spain", image: Catalog_3, price: "6.7"},
    {name: "CUBANO", country: "France", image: Catalog_4, price: "3.8"},
    {name: "LATTE", country: "Portugal", image: Catalog_5, price: "5.2"},
    {name: "DEEP", country: "Colombia", image: Catalog_6, price: "8.5"}
];

// const cat = [
//     {image: OurCoffeeImage, title: "gfdgdfg"}
// ];

// const comp = cat.map(item => {
//     <About title={item.title} image={item.image}/>
// })




const OurCoffee = () => {
    return (
        <div>
            <OurCoffeeTop/>
            <About title="beans" image={OurCoffeeImage}/>
            <OurCoffeeFilter/>
            <Catalog data={catalog}/>
        </div>
    )
}

export default OurCoffee;