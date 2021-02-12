import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="row">
            {/* TITLE */}
            <h2>{title}</h2>
            {/* container ===> posters */}
            <div className="row-posters">
                {movies.map((item, i) => 
                    <img 
                        className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                        src={`${base_url}${isLargeRow ? item.poster_path : item.backdrop_path}`} 
                        alt={item.name} 
                        key={item.id}  
                    />
                )}
            </div>
        </div>
    )
}

export default Row