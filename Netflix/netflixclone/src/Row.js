import React, {useState, useEffect} from 'react'
import instance from './axios';
import "./Row.css"


function Row({ title, fetchUrl }) {
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
        <div>
        {/* title */}
        <h2>{title}</h2>

        {/* container -> posters */}

            
        </div>
    )
}

export default Row
