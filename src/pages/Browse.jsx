import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blackWhiteLogo from "../assets/black white clean movie logo-removebg.png";
import originalLogo from "../assets/black white clean movie logo.png";

const Browse = () => {
  const [moviesArr, setMoviesArr] = useState([]);
  const [ sortValue, setSortValue ] = useState("default");

  function searchChange(event) {
    renderMovies(event.target.value);
  }
  // API Key 6ceac7f0 //
  // http://www.omdbapi.com/?apikey=6ceac7f0& //

  async function renderMovies(searchTerm) {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=6ceac7f0&s=${searchTerm}`
    );
    const data = await response.json();
    setMoviesArr(data.Search);
    if (data.Response === "False") {
      setMoviesArr([]);
    }
    console.log(data);
  }

  function sortMovies(event) {
    setSortValue(event.target.value)
  }

  useEffect(() => {
    console.log(moviesArr)
  }, [moviesArr]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <section id="browse__page">
        <nav>
          <div className="nav__bar">
            <img
              className="movie__logo"
              src={blackWhiteLogo}
              alt=""
            />
            <ul className="nav__links">
              <li>
                <Link to="/" href="#" className="nav__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/browse" href="#" className="nav__link">
                  Browse
                </Link>
              </li>
              <li>
                <Link to="/details" href="#" className="nav__link">
                  Details
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <header className="header">
          <div className="header__container">
            <div className="header__description">
              <h1>Find A Movie</h1>
              <input
                className="searchBtn"
                type="text"
                placeholder="Search by Title, Genre or Keyword"
                onChange={searchChange}
              />
            </div>
          </div>
        </header>
      </section>
      <main>
        <section className="searchName" id="search__movies">
          <h2 className="search__results">Search Results:</h2>
          <select className="selectOptions" onChange={sortMovies}>
            <option value="default">select sorting</option>
            <option value="year_asc">Sort by Year Up</option>
            <option value="year_desc">Sort by Year Down</option>
          </select>
          <div className="search__nav">
            {moviesArr
              .sort((a, b) => {
                if (sortValue === "year_asc") {
                  return a.Year - b.Year;
                }
                if (sortValue === "year_desc") {
                  return b.Year - a.Year;
                }
                return 0;
              })
              .slice(0, 6)
              .map((movie) => (
                <div className="movie">
                  <img src={movie.Poster} alt="" />
                  <h2>{movie.Year}</h2>
                  <h4>{movie.Title}</h4>
                  <Link to={`/details/${movie.imdbID}`}><button>Learn More</button></Link>
                </div>
              ))}
          </div>
        </section>
      </main>
      <footer>
        <div className="footer__container">
          <div className="row__column">
            <a href="#">
              <figure className="footer__logo">
                <img
                  className="footer__logo--img"
                  src={originalLogo}
                  alt=""
                />
              </figure>
            </a>
            <div className="footer__list">
              <Link to="/" href="" className="footer__link">
                Home
              </Link>
              <Link to="/browse" href="" className="footer__link">
                Browse
              </Link>
              <Link to="/details" href="" className="footer__link">
                Details
              </Link>
            </div>
            <div className="footer__copyright">
              Copyright © 2025 Movie Entertainment
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Browse;
