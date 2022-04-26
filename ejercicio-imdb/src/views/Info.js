import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Info() {
  let { filmId } = useParams();
  const [films, setFilms] = useState(null);
  console.log(films);

  useEffect(() => {
    async function fetchFilms() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${filmId}?api_key=bfc609b0ab629bf60cda50625ad1fec4&language=es-ES`
      );
      let json = await res.json();
      setFilms(json);
    }
    fetchFilms();
  }, [filmId]);

  if (!films) {
    return <h1>No hay nada que ver</h1>;
  }

  return (
    <div className="container mt-5">
      <div className="m-auto" style={{ width: "40rem" }} key={films.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${films.backdrop_path}`}
          className="card-img-top"
          alt=""
        />
        <div>
          <h1 className="mt-3">{films.original_title}</h1>
          <p>{films.release_date}</p>
          <p>{films.overview}</p>
          <a
            href={`https://www.imdb.com/title/${films.imdb_id}`}
            type="button"
            target="_blank"
            rel="noreferrer"
            className="btn btn-warning"
          >
            IMDb
          </a>
        </div>
      </div>
    </div>
  );
}
