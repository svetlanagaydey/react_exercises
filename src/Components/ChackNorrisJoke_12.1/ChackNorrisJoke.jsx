import React from 'react';
import './style.css';
import axios from 'axios';

class ChackNorrisJoke extends React.Component {
    state = {categories: [], randomJoke: ''}
    getRandomJoke =  () => {
        axios.get('https://api.chucknorris.io/jokes/random')
        .then((response)=>console.log(response.data.value))
    }
    componentDidMount = async () => {
        const response = await axios.get(
          "https://api.chucknorris.io/jokes/categories");
        this.setState({ categories: response.data });
        console.log(response.data)
    }
    getJokeFromCategory = async (category) => {
        const response = await axios.get(
            `https://api.chucknorris.io/jokes/random?category=${category}`
        );
        this.setState({ randomJoke: response.data.value });
    }
    createCategories = () => {
        return this.state.categories.map((category) => (
            <button
                key={category}
                onClick={() => this.getJokeFromCategory(category)}
                >{category}
            </button>
        ))
    }
  
    render () {
        return (
        <div className="content">
            <button className="randomJoke" onClick={this.getRandomJoke}>Random Joke</button>
            {this.createCategories()}
            <h2>{this.state.randomJoke}</h2>
        </div>
        )
    }
}


export default ChackNorrisJoke;