import React from 'react';
const Card = (props) => {
    const fullName = props.user.name.first + " " + props.user.name.last
    return (
        <div key={props.key}>
            <h2>hello</h2>
            <div>
                {fullName}
            </div>
            <img src={props.user.picture} alt=""/>
        </div>
    )
}
export default Card;