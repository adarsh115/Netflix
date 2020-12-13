import React, {useEffect, useState} from 'react'
import instance from './axios';
import "./Banner.css";
import requests from './request';


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
        return request;
        }
        fetchData();
    }, []);
    console.log(movie)

    function truncate (str, n) {
        return (str?.length > n ? str.substr(0, n-1)+ "..." : str);
    }

    return (
        <header className="banner" style = {{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/"${movie?.backdrop_path})`, 
                backgroundPosition: "center center"
            }}>
            
            <div className="banner__contents">
                {/* title */}
                <h1 className="banner__title">{movie?.name || movie?.original_name ||movie?.title}</h1>
                <div className='banner__buttons'>
                    <button className= "banner__button">Play</button>
                    <button className= "banner__button">My List</button>
                </div>
                {/* description */}
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

        </header>
    )
}

export default Banner
