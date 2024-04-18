import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <div className="footer__title">Haseena</div>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://github.com/haseena-hassan" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-github"></i>
                </a>
                <a href="https://leetcode.com/haseena_hassan/" className="footer__social-link" target='_blank'>
                    <i class="bx bx-code-alt"></i>    
                </a>
                <a href="https://www.linkedin.com/in/haseena-hassan/" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/huh.seena/" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-instagram-alt"></i>
                </a>
                <a href="mailto:haseena2199@gmail.com" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-gmail"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer