import axios from 'axios';
import React, { useState, useEffect } from 'react';

const SimpleFetch = () => {

    const [movies, setmovies] = useState({});
    useEffect(() => {
        const getData = async() => {
            const proxy ='https://intense-mesa-62220.herokuapp.com/';
            const {data} = await axios.get(proxy + 'https://swapi.co/api/films/1/');
            console.log(data);
            setmovies(data);
        };
        getData();
    }, []);
    
    return(
        <div>
            <h1>Movies list</h1>
            <div>m1</div>
            <div>m2</div>
        </div>
    )
}
export default SimpleFetch;