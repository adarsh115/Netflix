import React, {useState, useEffect} from 'react'
import instance from './axios';
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, islargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);



    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
  
            {/* container -> posters */}            
            <div className = "row__posters">
                {movies.map((movie) => <img 
                    className = {`row__poster ${islargeRow && "row__posterLarge"}`}
                    key = {movie.id}
                    src = { `${ baseUrl }${ islargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                )}

            </div>
        </div>
    )
}

export default Row
