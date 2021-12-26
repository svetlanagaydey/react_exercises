import React from 'react';
import './style.css'

const OldPeople = (props) => {
    return (
        <div>
            <h1>List Old People Component</h1>
            {props.peoples.map((elem, index) => {
            return (
                <div key={index} className="card">
                    <h2>Name: {elem.name}</h2>
                    <h3>Birthday: {elem.birthday}</h3>
                    <h3>Favorite meats: 
                        {elem.favoriteFoods.meats.join(", ")}
                    </h3>
                    <h3>Favorite fish:
                        {elem.favoriteFoods.fish.join(", ")}
                    </h3>
                </div>
            )
            })} 
       </div>
    )
}
export default OldPeople;