import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo"> Haseena</a>
            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#project" className="nav__link">
                            <i className="uil uil-image-check nav__icon"></i> Projects
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#experience" className="nav__link">
                            <i className="uil uil-bag nav__icon"></i> Experience
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="Education" className="nav__link">
                            <i className="uil uil-graduation-cap nav__icon"></i> Education
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>

                    <i class="uil uil-times nav__close"></i>
                </ul>
            </div>
            <div className="nav__toggle">
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header