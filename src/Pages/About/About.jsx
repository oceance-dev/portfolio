import "./About.css";

const About = () => {
    // Ajoutez vos images ici : import img1 from "../../Image/gallery1.jpg"
    const galleryImages = [
        { id: 1, src: null, alt: "Photo 1" },
        { id: 2, src: null, alt: "Photo 2" },
        { id: 3, src: null, alt: "Photo 3" },
        { id: 4, src: null, alt: "Photo 4" }
    ];

    return (
        <div className="about-container">
            <div className="about-header">
                <h1>À propos de moi</h1>
                <p>Passionné par le code et l'innovation</p>
            </div>

            <section className="about-content">
                <div className="about-intro">
                    <h2>Mon parcours</h2>
                    <p>
                        Développeur web passionné avec une expertise en technologies modernes,
                        je crée des applications web performantes et intuitives. Mon parcours
                        m'a permis d'acquérir une solide expérience dans le développement
                        full stack et une compréhension approfondie des besoins utilisateurs.
                    </p>
                    <p>
                        Je suis constamment à la recherche de nouveaux défis et j'aime apprendre
                        de nouvelles technologies pour rester à la pointe du développement web.
                    </p>
                </div>

                <div className="about-values">
                    <h2>Mes valeurs</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🎯</div>
                            <h3>Excellence</h3>
                            <p>Je m'efforce de livrer un code de qualité et des solutions optimales</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🚀</div>
                            <h3>Innovation</h3>
                            <p>J'explore constamment de nouvelles technologies et méthodologies</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Collaboration</h3>
                            <p>Je crois en la force du travail d'équipe et du partage de connaissances</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">📚</div>
                            <h3>Apprentissage</h3>
                            <p>L'apprentissage continu est au cœur de ma démarche professionnelle</p>
                        </div>
                    </div>
                </div>

                <div className="about-interests">
                    <h2>Centres d'intérêt</h2>
                    <div className="interests-list">
                        <div className="interest-item">
                            <span className="interest-emoji">💻</span>
                            <div>
                                <h4>Technologies Web</h4>
                                <p>React, Node.js, TypeScript, et les frameworks modernes</p>
                            </div>
                        </div>
                        <div className="interest-item">
                            <span className="interest-emoji">🎨</span>
                            <div>
                                <h4>UI/UX Design</h4>
                                <p>Création d'interfaces élégantes et expériences utilisateur fluides</p>
                            </div>
                        </div>
                        <div className="interest-item">
                            <span className="interest-emoji">🔧</span>
                            <div>
                                <h4>DevOps</h4>
                                <p>Automatisation, CI/CD, et déploiement d'applications</p>
                            </div>
                        </div>
                        <div className="interest-item">
                            <span className="interest-emoji">🌐</span>
                            <div>
                                <h4>Open Source</h4>
                                <p>Contribution à la communauté et partage de projets</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-gallery">
                    <h2>Galerie</h2>
                    <div className="gallery-grid">
                        {galleryImages.map((img) => (
                            <div key={img.id} className="gallery-item">
                                {img.src ? (
                                    <img src={img.src} alt={img.alt} />
                                ) : (
                                    <div className="gallery-placeholder">
                                        <span>🖼️</span>
                                        <p>Image à venir</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
