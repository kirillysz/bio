import "./Icons.css"

export default function Icons() {
    return (
        <div className="tech-container">
            <div className="tech-grid-wrapper">
                <div className="tech-grid">
                    <div className="tech-card">
                        <div className="tech-abbr">PY</div>
                        <div className="tech-name">Python</div>
                    </div>

                    <div className="tech-card">
                        <div className="tech-abbr">JS</div>
                        <div className="tech-name">JavaScript</div>
                    </div>

                    <div className="tech-card">
                        <div className="tech-abbr">PG</div>
                        <div className="tech-name">PostgreSQL</div>
                    </div>

                    <div className="tech-card">
                        <div className="tech-abbr">DC</div>
                        <div className="tech-name">Docker</div>
                    </div>

                    <div className="tech-card">
                        <div className="tech-abbr">FA</div>
                        <div className="tech-name">FastAPI</div>
                    </div>

                    <div className="tech-card">
                        <div className="tech-abbr">MD</div>
                        <div className="tech-name">MongoDB</div>
                    </div>

                    <div className="tech-card git-card">
                        <div className="tech-abbr">GIT</div>
                        <div className="tech-name">Git. Github</div>
                    </div>
                </div>
            </div>
        </div>
    )
}