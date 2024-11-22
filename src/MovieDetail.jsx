import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();

  const [getMovie, setGetMovie] = useState("");
  const api_detail = "http://www.omdbapi.com/?apikey=c79b3cdd&plot=full";

  useEffect(() => {
    const detailMovie = async () => {
      const response = await fetch(`${api_detail}&i=${id}`);
      const desc = await response.json();
      setGetMovie(desc);
      console.log(getMovie);
    };
    detailMovie();
  }, [id]);

  const navigate = useNavigate();
  const BackButton = () => {
    navigate("/");
  };

  return (
    <>
      <div className="detail-section">
        <div className="close-btn">
          <button onClick={BackButton}>X</button>
        </div>

        <img src={getMovie.Poster} alt="" />
        <h2 className="heading">{getMovie.Title}</h2>
        <h3>
          <span className="title">Genre :</span> {getMovie.Genre}
        </h3>
        <h3>
          <span className="title">Language :</span> {getMovie.Language}
        </h3>
        <h3>
          <span className="title">Actors : </span>
          {getMovie.Actors}
        </h3>
        <h3>
          <span className="title">Director : </span>
          {getMovie.Director}
        </h3>
        <h3>
          <span className="title">Released :</span> {getMovie.Released}
        </h3>
        <p className="detail-plot">
          <span className="title">Plot : </span>
          {getMovie.Plot}
        </p>
      </div>
    </>
  );
}

export default MovieDetail;
