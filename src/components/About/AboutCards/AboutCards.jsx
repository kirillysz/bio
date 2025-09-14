import "./AboutCards.css"

export default function AboutCards() {
    return (
        <div className="skills-grid">
            <div className="skill-item">
                <h3>Backend</h3>
                <p>Python / FastAPI / PostgreSQL / MongoDB</p>
            </div>
            <div className="skill-item">
                <h3>Frontend</h3>
                <p>JavaScript / React / HTML5 / CSS3</p>
            </div>
            <div className="skill-item">
                <h3>Backend</h3>
                <p>Python / FastAPI / PostgreSQL</p>
            </div>
            <div className="skill-item devops-card">
                <h3>DevOps</h3>
                <p>Docker / Git / Linux</p>
            </div>
        </div>
    )
}
