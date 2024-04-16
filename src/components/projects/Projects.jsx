import React, { useState } from 'react'
import './projects.css'

const Projects = () => {

    const [toggle, setToggle] = useState(0);

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">What I have built</span>

            <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <i className="uil uil-web-grid projects__icon"></i>
                        <h3 className="projects__title">Video <br/> Streamer</h3>
                    </div>
                    <span className="projects__button" onClick={() => setToggle(1)} >View More
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggle === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => setToggle(0)} ></i>
                            <h3 className="projects__modal-title">Video Streamer</h3>
                            <p className="projects__modal-description">
                                Platform for streaming videos real-time
                            </p>

                            <ul className="projects__modal-items grid">
                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Added user authentication using JWT tokens.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Simple user interface for streaming videos.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Deployed in AWS EC2 instance using CI/CD pipelines.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Used message queues - RabbitMQ.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        ReactJS, NestJS, MongoDB, AWS, Ci/CD pipelines.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-arrow projects__icon"></i>
                        <h3 className="projects__title">Video <br/> Streamer</h3>
                    </div>
                    <span className="projects__button" onClick={() => setToggle(2)} >View More
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggle === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => setToggle(0)} ></i>
                            <h3 className="projects__modal-title">Video Streamer</h3>
                            <p className="projects__modal-description">
                                Platform for streaming videos real-time
                            </p>

                            <ul className="projects__modal-items grid">
                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Added user authentication using JWT tokens.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Simple user interface for streaming videos.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Deployed in AWS EC2 instance using CI/CD pipelines.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Used message queues - RabbitMQ.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        ReactJS, NestJS, MongoDB, AWS, Ci/CD pipelines.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-edit projects__icon"></i>
                        <h3 className="projects__title">Video <br/> Streamer</h3>
                    </div>
                    <span className="projects__button" onClick={() => setToggle(3)} >View More
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggle === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i className="uil uil-times projects__modal-close" onClick={() => setToggle(0)} ></i>
                            <h3 className="projects__modal-title">Video Streamer</h3>
                            <p className="projects__modal-description">
                                Platform for streaming videos real-time
                            </p>

                            <ul className="projects__modal-items grid">
                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Added user authentication using JWT tokens.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Simple user interface for streaming videos.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Deployed in AWS EC2 instance using CI/CD pipelines.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        Used message queues - RabbitMQ.
                                    </p>
                                </li>

                                <li className="projects__modal-item">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">
                                        ReactJS, NestJS, MongoDB, AWS, Ci/CD pipelines.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects