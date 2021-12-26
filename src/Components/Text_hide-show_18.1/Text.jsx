import React, { useState } from 'react';


const Text = () => {
    const myText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis error ipsa exercitationem pariatur ducimus officia totam quibusdam aspernatur optio suscipit eaque quae veniam dicta quos illum nam, quod fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro omnis error ipsa exercitationem pariatur ducimus officia totam quibusdam aspernatur optio suscipit eaque quae veniam dicta quos illum nam, quod fuga.'
    const [text, setText] = useState(myText);
    const [maxLength, setLength] = useState(100);

    const printText = (text) => {
        if (text.length > maxLength) {
            return (
                <div>{text}...
                    <button onClick={showLess}>Show less</button>
                </div>
             )
        } else if (text.length <= maxLength) {
            return(
                <div>{text}...
                    <button onClick={readMore}> Read more</button>
                </div>
            )
        }      
    }

    const showLess = () => {
        setText(text.substr(0, 50));
        
    }
    const readMore = () => {
        setText(myText);
    }

    return (
        <div>
            {printText(text)}
        </div>
    )
}
export default Text;
