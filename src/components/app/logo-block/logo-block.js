import "./logo-block.scss";
import logo from "../../../image/home-about-image.png";

const LogoBlock = () => {
    return (
        <div className="logo-block">
            <span className="logo-block__line"></span>
            <img src={logo} alt=""/>
            <span className="logo-block__line"></span>
        </div>
    )
}

export default LogoBlock;