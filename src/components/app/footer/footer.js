import Header from "../header/header";
import LogoBlock from "../logo-block/logo-block";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__menu">
                <Header/>
            </div>
            <div className="footer__logo">
                <LogoBlock/>
            </div>
        </div>
    )
}

export default Footer;