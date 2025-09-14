import "./Person.css"

import Icons from "../Icons/Icons"
import About from "../About/About"

import ProjectButton from "../Buttons/ProjectButton/ProjectButton"
import ContactButton from "../Buttons/ContactButton/ContactButton"


export default function Person() {
    return (
        <div className="person-container" id="home">
            <div className="person-content">
                <img src="/bio/photo.jpg" alt="image" />

                <div className="mini-bio">
                    <h1 className="name">Кирилл Тимошенко</h1>
                    <h2 className="speciality">Full-Stack Developer</h2>
                    <p className="description">Минималистичные веб-приложения с акцентом на функциональность</p>
                </div>
            </div>
            <Icons />
            
            <div className="button-row">
                <ProjectButton />
                <ContactButton />
            </div>
        </div>
    )
}