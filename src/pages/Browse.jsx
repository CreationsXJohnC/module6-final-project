import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const moviesWrapper = document.querySelector('.search__nav')
const searchBtn = document.querySelector('.searchBtn')
let moviesArr = []


function searchChange(event) {
    renderMovies(event.target.value);
    searchBtn.innerHTML = event.target.value
}
// API Key 6ceac7f0 //
// http://www.omdbapi.com/?apikey=6ceac7f0& //

async function renderMovies(searchTerm) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=6ceac7f0&s=${searchTerm}`);
    const data = await response.json();
    moviesArr = data.Search;
    if (data.Response === 'False') {
        moviesArr = []
    }
    console.log(data);
    displayMovies()
}

function displayMovies() {
    moviesWrapper.innerHTML = moviesArr.slice(0, 6).map((movie) => {
        return `
        <div class="movie">
        <img src=${movie.Poster} alt="" />
        <h2>${movie.Year}</h2>
        <h4>${movie.Title}</h4>
        <button>Learn More</button>
        </div>
        `;        
    }).join("");
}

function sortMovies(event) {
    moviesArr.sort((a, b) => {
        if (event.target.value === 'year_asc') {
            return a.Year - b.Year
        }
        if (event.target.value === 'year_desc') {
            return b.Year - a.Year
        }
        return 0
    })
    displayMovies()
}

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
                                <Link to="/" href="" className="footer__link">Home</Link>
                                <Link to="/browse" href="" className="footer__link">Browse</Link>
                                <Link to="/details" href="" className="footer__link">Details</Link>
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