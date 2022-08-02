import "./our-coffee-about.scss";
import about from "../../../components/image/about-our-beans.jpg";
import LogoBlock from "../../../components/logo-block/logo-block";

const OurCoffeeAbout = () => {
    return (
        <div className="coffee-about">
            <div className="coffee-about__wrap">
                <img className="coffee-about__image" src={about} alt="" />
                <div className="coffee-about__block">
                    <h3>About our beans</h3>
                    <LogoBlock />
                    <div className="coffee-about__block-item">
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p>Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.</p>
                        <p>As greatly removed calling pleased improve an.</p>
                        <p>Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                    </div>
                </div>
            </div>
            <div className="coffee-about__line"></div>
        </div>
    )
}

export default OurCoffeeAbout;