import React from 'react';
class Copy extends React.Component {
    constructor () {
        super()
        this.inputRef = React.createRef();
        this.state = {
            text: "",
        }
    }

    copyFromTextarea = () => {
        // console.log(this.inputRef.current.value);
        // const copyBlock = document.createElement('p');
        // copyBlock.innerHTML=`${this.state.text}`;
        // document.querySelector("div").appendChild(copyBlock);
        navigator.clipboard.writeText(this.state.text)
    }
    textInState = () => {
        this.setState({text: this.inputRef.current.value,})
    }

    render() {
        return (
            <div>
                <label htmlFor="inputTextArea"></label>
                <textarea ref={this.inputRef} onChange={this.textInState} name="text" id="inputTextArea" cols="30" rows="10"></textarea>
                <button onClick={this.copyFromTextarea}>COPY</button>
            </div>
        )
    }
}
export default Copy;