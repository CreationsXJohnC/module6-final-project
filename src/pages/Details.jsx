import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blackWhiteLogo from "../assets/black white clean movie logo-removebg.png";
import originalLogo from "../assets/black white clean movie logo.png";

const Details = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="wrapper">
            <nav>
                <div className="nav__bar">
                    <img className="movie__logo" src={blackWhiteLogo} alt=""/>
                    <ul className="nav__links">
                        <li>
                            <Link to="/" href="#" className="nav__link">Home</Link>
                        </li>
                        <li>
                            <Link to="/browse" href="#" className="nav__link">Browse</Link>
                        </li>
                        <li>
                            <Link to="/details" href="#" className="nav__link">Details</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="movie__container">
                    <div className="row">
                        <div className="movie__selected--top">
                            <Link to="/movies" className="movie__link">
                            </Link>
                            <Link to="/movies" className="movie__link">
                                <h2 className="movie__selected--title--top">Movies</h2>
                            </Link>
                        </div>
                        <div className="movie__selected">
                            <figure className="movie__selected--figure">
                                <img alt="" className="movie__selected--img" />
                            </figure>
                            <div className="movie__selected--description">
                                <h2 className="movie__selected--title">Movie title</h2>
                            </div>
                            <div className="movie__summary">
                                <h3 className="movie__summary--title">
                                    Summary
                                </h3>
                                <p className="movie__summary--para">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi temporibus culpa ut rem architecto vitae porro doloribus. Sint, quidem! Fugiat incidunt dignissimos labore a odit sint, aperiam ea sed dicta.
                                </p>
                                <p className="movie__summary--para">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi temporibus culpa ut rem architecto vitae porro doloribus. Sint, quidem! Fugiat incidunt dignissimos labore a odit sint, aperiam ea sed dicta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            <footer>
                <div className="footer__container">
                    <div className="row__column">
                        <a href="#">
                            <figure className="footer__logo">
                                <img className="footer__logo--img" src={originalLogo} alt=""/>
                            </figure>
                        </a>
                        <div className="footer__list">
                            <Link to="/" href="" className="footer__link">Home</Link>
                            <Link to="/browse" href="" className="footer__link">Browse</Link>
                            <Link to="/details" href="" className="footer__link">Details</Link>
                        </div>
                        <div className="footer__copyright">Copyright © 2025 Movie Entertainment</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Details;