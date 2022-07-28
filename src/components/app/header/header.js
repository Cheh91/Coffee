import "./header.scss";

const Header = () => {
    return (
        <ul className="header">
            <li className="header__item"><a className="header__item-link" href="/our-coffee">Coffee house</a></li>
            <li className="header__item"><a className="header__item-link" href="http://www.google.com">Our coffee</a></li>
            <li className="header__item"><a className="header__item-link" href="http://www.google.com">For your pleasure</a></li>
        </ul>
    )
}

export default Header;