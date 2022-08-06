import "./about.scss";
// import about from "../image/about-our-beans.jpg";

import LogoBlock from "../logo-block/logo-block";

const About = (props) => {
    return (
        <div className="about">
            <div className="about__wrap">
                <img className="about__image" src={props.image} alt="" />
                <div className="about__block">
                    {/* <h3>About our beans</h3> */}
                    <h3>About our {props.title}</h3>
                    <LogoBlock />
                    <div className="about__block-item">
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p>Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.</p>
                        <p>As greatly removed calling pleased improve an.</p>
                        <p>Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                    </div>
                </div>
            </div>
            <div className="about__line"></div>
        </div>

    )
}

export default About;