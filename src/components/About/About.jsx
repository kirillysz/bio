import "./About.css"

import AboutCards from "./AboutCards/AboutCards"

export default function About() {
    return (
        <div className="about-container" id="about">
            <h1>Обо мне</h1>
            <div className="about-content">
                <div className="about-text">
                    <p>Full-stack разработчик с фокусом на создание элегантных, функциональных решений. Специализация: Python/FastAPI backend, React frontend.</p>
                    <p>Философия работы строится на принципах минимализма, чистого кода и максимальной производительности. Каждая строка кода имеет свою цель.</p>
                </div>
            <AboutCards />
            </div>
        </div>
    )
}