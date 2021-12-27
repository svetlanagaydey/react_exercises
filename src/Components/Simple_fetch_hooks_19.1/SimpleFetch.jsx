import axios from 'axios';
import React, { useState, useEffect } from 'react';

const SimpleFetch = () => {

    const [movies, setmovies] = useState({});
    useEffect(() => {
        const getData = async() => {
            
            const proxy ='https://intense-mesa-62220.herokuapp.com/';
            const {data} = await axios.get(proxy + 'http://swapi.co/api/films/');
            console.log(data);
            setmovies(data);
            
        };
        getData();
    }, []);
    
    return(
        <div>
            <h1>Movies list</h1>
                <div>{movies.href}</div>
                <div>{movies.title}</div>
        </div>
    )
}
export default SimpleFetch;