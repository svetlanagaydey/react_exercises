import React from 'react';
import './style.css'
const Card = (props) => {
    const fullName = props.user.name.first + " " + props.user.name.last;
    return (
        <div className='userCard'>
            <h2>
                {fullName}
            </h2>
            <img src={props.user.picture.large} alt=""/>
        </div>
    )
}
export default Card;