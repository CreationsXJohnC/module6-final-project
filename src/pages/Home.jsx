import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <><div>Home</div>
            <nav>
                <div className="nav__bar">
                    <img className="movie__logo" src="./assets/black white clean movie logo-removebg.png" alt=""/>
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

            <footer>
                <div className="footer__container">
                    <div className="row__column">
                        <a href="#">
                            <figure className="footer__logo">
                                <img className="footer__logo--img" src="./assets/black white clean movie logo.png" alt=""/>
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
            </footer></>

    );
};

export default Home;