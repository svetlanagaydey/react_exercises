import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [input, searchInput] = useState('');

    const getCountries = async() => {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const temp = [];
        response.data.map(el => {
            temp.push(el.name.common)
        })
        setCountries(temp.sort())
    }

    useEffect( () => {
        getCountries()
        }, []);

    useEffect( () => {
        
    }, [countries]);    
    
    const printCounries = () => {
        return (
            <ul>
                {countries.map(el => {
                    if (el.toLowerCase().match(input)) {
                        return <li key={el}>{el}</li>
                    }
                })}
            </ul>
        )
    }
    const filterSearch = (event) => {
        searchInput(event.target.value);
        console.log(event.target.value);
    }
    
    return (
        <div>
            <h1>Countries list</h1>
            <input type="text" onChange={filterSearch}/>
            {printCounries()}

        </div>
    )
}
export default Countries;