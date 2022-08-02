import "./our-coffee-filter.scss";

const OurCoffeeFilter = () => {
    return (
        <div className="our-filter">
            <div className="our-filter__search">
                <span className="our-filter__text">Lookiing for</span>
                <input type="text" className="our-filter__search-control" placeholder="start typing here..."/>
            </div>
            <div className="our-filter__panel">
                <span className="our-filter__text">Or filter</span>
                <button className="our-filter__panel-button-first">
                    Brazil
                </button>
                <button>
                    Kenya
                </button>
                <button className="our-filter__panel-button-last">
                    Columbia
                </button>
            </div>
        </div>
    )
}

export default OurCoffeeFilter;