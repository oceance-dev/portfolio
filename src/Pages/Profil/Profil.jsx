import "./Profil.css";

const Profil = () => {
    const projects = [
        {
            title: "Spotifarm",
            description: "Application d'agriculture de précision permettant le suivi des cultures et l'optimisation de la fertilisation azotée via imagerie satellite.",
            technologies: ["Web", "Imagerie satellite", "Agriculture"],
            link: "https://www.spotifarm.fr/",
            image: null // Ajoutez le chemin de l'image ici : import spotifarmImg from "../../Image/spotifarm.png"
        },
        {
            title: "Pictural",
            description: "Outil d'aide à la prise de décision pour la direction, permettant l'analyse et la visualisation de données stratégiques.",
            technologies: ["PHP", "Business Intelligence", "Dashboard"],
            link: "#",
            image: null // Ajoutez le chemin de l'image ici : import picturalImg from "../../Image/pictural.png"
        }
    ];

    const experiences = [
        {
            title: "Développeur PHP - Alternance",
            company: "Enedis",
            period: "2 ans",
            description: "Développement d'applications web avec PHP en alternance, maintenance et amélioration des systèmes existants"
        },
        {
            title: "Développeur Web - Alternance",
            company: "Isagri",
            period: "2 ans",
            description: "Développement web en alternance, participation à des projets variés et apprentissage des méthodologies professionnelles"
        }
    ];

    const formations = [
        {
            title: "Mastère Développement web et informatique",
            school: "La Manu",
            period: "Niveau Mastère",
            description: "Formation avancée en développement web et informatique"
        },
        {
            title: "Licence Réseau et Génie Informatique",
            school: "Proméo",
            period: "",
            description: "Formation en réseaux informatiques et génie logiciel"
        },
        {
            title: "Certification Développeur Web",
            school: "OpenClassrooms",
            period: "",
            description: "Certification professionnelle en développement web"
        }
    ];

    return (
        <div className="profil-container">
            <div className="profil-header">
                <h1>Mon Profil</h1>
                <p>Découvrez mes projets et mon parcours professionnel</p>
            </div>

            <section className="projects-section">
                <h2>Mes Projets</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            {project.image && (
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                            )}
                            {!project.image && (
                                <div className="project-image-placeholder">
                                    <span>📸</span>
                                    <p>Image à venir</p>
                                </div>
                            )}
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="technologies">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="project-link">Voir le projet →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="skills-section">
                <h2>Mes Compétences</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <div className="skill-icon">💻</div>
                        <h4>Frontend</h4>
                        <p>React, JavaScript, HTML/CSS</p>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">⚙️</div>
                        <h4>Backend</h4>
                        <p>Node.js, Express, C#</p>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">🗄️</div>
                        <h4>Base de données</h4>
                        <p>MySQL, SQL Server</p>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon">🛠️</div>
                        <h4>Outils</h4>
                        <p>Git, Visual Studio, VS Code, Cursor</p>
                    </div>
                </div>
            </section>

            <section className="experience-section">
                <h2>Mon Expérience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{exp.title}</h3>
                                <h4>{exp.company}</h4>
                                <span className="period">{exp.period}</span>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="formation-section">
                <h2>Ma Formation</h2>
                <div className="timeline">
                    {formations.map((formation, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{formation.title}</h3>
                                <h4>{formation.school}</h4>
                                <span className="period">{formation.period}</span>
                                <p>{formation.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Profil;
