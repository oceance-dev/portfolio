import "./Home.css";
import { Link } from 'react-router-dom';
import image from "../../Image/Me.png"

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-container-first">
                <div className="container-image">
                    <img src={image} alt="Océance" />
                </div>
                <div className="container-text">
                    <h1>Bonjour, je suis Océance</h1>
                    <h2>Développeur Full Stack</h2>
                    <p>Passionné par le développement web et la création d'expériences digitales innovantes. Fort de 4 ans d'expérience en alternance, je transforme des idées en applications web performantes.</p>
                    <div className="cta-buttons">
                        <Link to="/profil" className="btn-primary">Voir mes projets</Link>
                        <Link to="/contact" className="btn-secondary">Me contacter</Link>
                    </div>
                </div>
            </div>

            <div className="home-stats">
                <div className="stat-item">
                    <h3>4+</h3>
                    <p>Années d'expérience</p>
                </div>
                <div className="stat-item">
                    <h3>2</h3>
                    <p>Projets majeurs</p>
                </div>
                <div className="stat-item">
                    <h3>10+</h3>
                    <p>Technologies maîtrisées</p>
                </div>
                <div className="stat-item">
                    <h3>100%</h3>
                    <p>Engagement</p>
                </div>
            </div>
        </div>
    )
}
export default Home;