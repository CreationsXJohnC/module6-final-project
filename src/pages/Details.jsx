import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import blackWhiteLogo from "../assets/black white clean movie logo-removebg.png";
import originalLogo from "../assets/black white clean movie logo.png";
import axios from "axios";

const Details = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { imdbID } = useParams();

  async function main() {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=6ceac7f0&i=${imdbID}`
    );
    setMovieDetails(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    main();
    window.scrollTo(0, 0);
  }, []);

  //www.omdbapi.com/?apikey=6ceac7f0&i=tt15398776

  https: return (
    <div id="wrapper">
      <nav>
        <div className="nav__bar">
          <img className="movie__logo" src={blackWhiteLogo} alt="" />
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
          </ul>
        </div>
      </nav>
      <div id="movie__details" className="movie__container">
        <div className="row">
          <div className="movie__selected">
            <figure className="movie__selected--figure">
              <img
                alt=""
                src={movieDetails.Poster}
                className="movie__selected--img"
              />
            </figure>
            <div className="movie__summary">
            <div className="movie__selected--description">
              <h3 className="movie__selected--title1">
                Movie Title:
                <p>{movieDetails.Title}</p>
              </h3>
              <h3 className="movie__selected--title2">
                Movie Year: {movieDetails.Year}
              </h3>
            </div>
            
              <h3 className="movie__summary--title">Summary/Description</h3>
              <p className="movie__summary--para">{movieDetails.Plot}</p>
              {movieDetails.Ratings &&
                movieDetails.Ratings.map((rating, index) => (
                  <div key={index}>
                    <h3 className="movie__summary--title">
                      Rating Source: {rating.Source}
                    </h3>
                    <p className="movie__summary--para">
                      Rating Value: {rating.Value}
                    </p>
                  </div>
                ))}
                <h3 className="movie__summary--title">Awards & Nominations:</h3>    
              <p className="movie__summary--para">{movieDetails.Awards}</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer__container">
          <div className="row__column">
            <a href="#">
              <figure className="footer__logo">
                <img className="footer__logo--img" src={originalLogo} alt="" />
              </figure>
            </a>
            <div className="footer__list">
              <Link to="/" href="" className="footer__link">
                Home
              </Link>
              <Link to="/browse" href="" className="footer__link">
                Browse
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

export default Details;
