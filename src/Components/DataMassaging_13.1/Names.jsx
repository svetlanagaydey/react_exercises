import React from 'react';
const Names = (props) => {
    return (
        <div>
            <h1>Names Component</h1>
            {props.names.map((el, index) => {
            return <div key={index}>{el}</div>
            })}
        </div>
    )
}
export default Names;