import axios from 'axios';
import React, { useState, useEffect } from 'react';
const Algolia = () => {
    const [request, setrequest] = useState('hooks');
    const [searchList, setSearchList] = useState([]);
    const [onInput, setOnInput] = useState('hooks')

    useEffect(() => {
        const req = async() => {
            const response = await axios.get(`https://hn.algolia.com/api/v1/search?query={${request}}`)
            console.log(response.data.hits);
            const temp = [];
            response.data.hits.map(el => {
                temp.push({name: el.title,
                            id: el.objectID,
                            url: el.url})
            })
            setSearchList(temp);
            
        }
        req();
    }, [request] )

    const printResult = () => {
        return searchList.map(el => {
            return (
                <div key={el.id}>
                    <a href={el.url}>{el.name}</a>
                </div>
            )
        })
    }
    const setToState= (e) => {
        setOnInput(e.target.value);
    };
    const doNewSearch = () => {
        setrequest(onInput);
    }
    console.log(onInput)
    console.log(request);

    return (
        <div>
            <h1>Algolia</h1>
            {printResult()}
            <input type="text" value={onInput} onChange={setToState}/>
            <button onClick={doNewSearch}>Search</button>
        </div>
    )
}
export default Algolia;