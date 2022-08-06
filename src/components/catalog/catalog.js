import "./catalog.scss";

import CatalogItem from "./catalog-item/catalog-item";

const Catalog = ({data}) => {


    const component = data.map(item => {
        return (
            <CatalogItem name={item.name} country={item.country} image={item.image} price={item.price}/>
        )
    })

    return (

        <div className="catalog-wrap">
            {/* <CatalogItem/>
            <CatalogItem/>
            <CatalogItem/>
            <CatalogItem/>
            <CatalogItem/>
            <CatalogItem/> */}
            {component}
        </div>
    )
}

export default Catalog;