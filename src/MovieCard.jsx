import { useNavigate } from "react-router-dom";

const MovieCard = (movie) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/MovieDetail/${movie.state.imdbID}`);
    console.log("ivide");
  };
  
  return (
    <div onClick={handleDetailClick}>
      <div className="movie">
        <div>
          <p> {movie.state.Year}</p>
        </div>

        <div>
          <img src={movie.state.Poster} alt="Movie Poster" />
        </div>

        <div>
          <span>{movie.state.Title}</span>
          <h3>{movie.state.Year}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
