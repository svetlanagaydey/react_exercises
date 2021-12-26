import React from 'react';
import axios from 'axios';
import Card from './Card.jsx'

class Avatar extends React.Component {
    state = {  users: [], }
  
    componentDidMount = async () => {
        const response = await axios.get(
            "https://randomuser.me/api/?results=5&inc=name,picture");
        this.setState({users: response.data.results});
        console.log(this.state.users)
    }

    generateUsersCards = () => {
        return (
        <div className="cards">
            {this.state.users.map((user, index) => {
            return <Card key={index} user={user} />;
            })}
        </div>
        );
      };

    render () {
        return(
            <div>
                <input type="text"/>
                <button>Filter</button>
                {this.generateUsersCards}
                
            </div>
        )
    }
}

export default Avatar;