import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blackWhiteLogo from "../assets/black white clean movie logo-removebg.png";
import originalLogo from "../assets/black white clean movie logo.png";

const Home = () => {
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
            <section id="landing__page">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1 className="header__description--title">The World's Largest Online Movie Library</h1>
                        <h2>Find your favorite Movie!</h2>
                        <Link to="/browse">
                            <button className="header__description--btn">Browse Movies</button>
                        </Link>
                    </div>
                    <figure className="header__img--wrapper">
                        <img alt="" />
                    </figure>
                </div>
            </header>
            </section>
            <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose our Library?
                    </h2>
                    <div className="highlight__wrapper">
                        <h3 className="highlight__wrapper--title1">Easy & Quick</h3>
                            <p>Search our library and find your film instantly.</p>
                        <h3 className="highlight__wrapper--title2">10,000+ Movies</h3>
                            <p>We have all kinds & genres of titles to choose from.</p>
                        <h3 className="highlight__wrapper--title3">Updated Information</h3>
                            <p>Our library is constatnly updated with newly released films.</p>
                    </div>
                </div>
            </div>
            </section>
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

export default Home;