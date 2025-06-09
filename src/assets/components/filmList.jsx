import { useEffect, useState } from "react";
const FilmList = () => {
    const showFilms = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

const [search, setSearch] = useState("");
const [films, setFilms] = useState(showFilms);

useEffect(() => {
    const filmFilter = showFilms.filter(film => 
        film.genre.toLowerCase().includes(search.toLowerCase())
    );
    setFilms(filmFilter); },

[search]
);


return(
    <>
    <div className="container text-center">
        <h1>ECCO LA LISTA DEI NOSTRI FILM</h1>
         <form className="my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca un genere..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
        <ul className="list-group my-5">
            {films.map((curFilm, index) => (
                <li key= {index} className="list-group-item">
                    {curFilm.title}
                </li>
            ))}
        </ul>
        <form>

        </form>
    </div>
    </>
);
};

export default FilmList;