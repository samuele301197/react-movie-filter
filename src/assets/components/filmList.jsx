import { useState } from "react";
const FilmList = () => {
    const showFilms = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];
const [films, setFilms] = useState(showFilms);
return(
    <>
    <div className="container text-center">
        <h1>ECCO LA LISTA DEI NOSTRI FILM</h1>
        <ul className="list-group my-5">
            {showFilms.map((curFilm, index) => (
                <li key= {index} className="list-group-item">
                    {curFilm.title}
                </li>
            ))}
        </ul>
    </div>
    </>
);
};

export default FilmList;