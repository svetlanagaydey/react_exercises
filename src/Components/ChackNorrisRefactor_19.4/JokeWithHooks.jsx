import axios from 'axios';
import React, { useState, useEffect } from 'react';
    const JokeWithHooks = () => {
        const [categories, setCategories] = useState([]);
        const [randomJoke, setRandomJoke] = useState('');
        
        const getRandomJoke =  () => {
            axios.get('https://api.chucknorris.io/jokes/random')
            .then((response)=>console.log(response.data.value))
        }
        useEffect( () => {
            (async() => {
                const response = await axios.get(
                    "https://api.chucknorris.io/jokes/categories");
                setCategories(response.data)    ;
                console.log(response.data);
            })()
            
            
        }, []);
        
        const getJokeFromCategory = async (category) => {
            const response = await axios.get(
                `https://api.chucknorris.io/jokes/random?category=${category}`
            );
            console.log(response.data.value)
            setRandomJoke(response.data.value);
        }
        const createCategories = () => {
            return categories.map((category) => (
                <button
                    key={category}
                    onClick={() => getJokeFromCategory(category)}
                    >{category}
                </button>
            ))
        }

        return (
            <div>
                <div>
                    <button >Random Joke</button>
                    {createCategories()}
                    <h2>{randomJoke}</h2>
                </div>
            </div>
        )
    }
export default JokeWithHooks;    