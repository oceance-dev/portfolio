import { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [formStatus, setFormStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulation d'envoi de formulaire
        setFormStatus("Message envoyé avec succès !");
        setTimeout(() => {
            setFormStatus("");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        }, 3000);
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Me contacter</h1>
                <p>N'hésitez pas à me contacter pour discuter de vos projets</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Informations de contact</h2>

                    <div className="info-item">
                        <div className="info-icon">📧</div>
                        <div>
                            <h3>Email</h3>
                            <p>oceance@example.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">📱</div>
                        <div>
                            <h3>Téléphone</h3>
                            <p>+33 6 12 34 56 78</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">📍</div>
                        <div>
                            <h3>Localisation</h3>
                            <p>Paris, France</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <h3>Réseaux sociaux</h3>
                        <div className="social-icons">
                            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://www.linkedin.com/in/oceancefourdain/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h2>Envoyez-moi un message</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Nom complet</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Votre nom"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="votre.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Sujet</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Sujet de votre message"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                placeholder="Votre message..."
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            Envoyer le message
                        </button>

                        {formStatus && (
                            <div className="form-status">{formStatus}</div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
