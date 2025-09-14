import './Header.css'

export default function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="logo">
                    KT
                </a>
                <div className="nav-links">
                    <a href="#home">Главная</a>
                    <a href="#about">Обо мне</a>
                    <a href="#portfolio">Портфолио</a>
                    <a href="#contact">Контакты</a>
                </div>
            </div>
        </nav>
    )
}
