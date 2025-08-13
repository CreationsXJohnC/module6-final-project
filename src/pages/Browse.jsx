import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Browse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <body>
            <div id="wrapper">
                <section id="browse__page">
                    <nav>
                        <div className="nav__bar">
                            <img className="movie__logo" src="./assets/black white clean movie logo-removebg.png" alt="" />
                            <ul className="nav__links">
                                <li>
                                    <Link href="#" className="nav__link">Home</Link>
                                </li>
                                <li>
                                    <Link href="#" className="nav__link">Browse</Link>
                                </li>
                                <li>
                                    <Link href="#" className="nav__link">Details</Link>
                                </li>                    
                            </ul>
                        </div>
                    </nav>
                    <header className="header">
                        <div className="header__container">
                            <div className="header__description">
                                <h1>Find A Movie</h1>
                                <input className="searchBtn" type="text" placeholder="Search by Title, Genre or Keyword" onChange="searchChange(event)" />
                            </div>
                        </div>
                    </header>
                </section>
                <main>
                    <section className="searchName" id="search__movies">
                        <h2 className="search__results">Search Results:</h2>
                        <select className="selectOptions" onChange="sortMovies(event)">
                            <option value="default">select sorting</option>
                            <option value="year_asc">Sort by Year Up</option>
                            <option value="year_desc">Sort by Year Down</option>
                        </select>
                        <div className="search__nav">
                            <div className="movie"></div>
                            <div className="movie"></div>
                            <div className="movie"></div>
                            <div className="movie"></div>
                            <div className="movie"></div>
                            <div className="movie"></div>
                        </div>
                    </section>
                </main>
                <footer>
                    <div className="footer__container">
                        <div className="row__column">
                            <a href="#">
                                <figure className="footer__logo">
                                    <img className="footer__logo--img" src="./assets/black white clean movie logo.png" alt="" />
                                </figure>
                            </a>
                            <div className="footer__list">
                                <Link href="" className="footer__link">Home</Link>
                                <Link href="" className="footer__link">Browse</Link>
                                <Link href="" className="footer__link">Details</Link>
                            </div>
                            <div className="footer__copyright">Copyright © 2025 Movie Entertainment</div>
                        </div>
                    </div>
                </footer>
            </div>
        </body>
    );
};

export default Browse;