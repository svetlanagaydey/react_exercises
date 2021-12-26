import React from 'react';
import './Focus.css'

class Focus extends React.Component {
  constructor () {
      super()
      this.inputRef = React.createRef();
  }

  componentDidMount(){
      this.inputRef.current.focus();
    }

  // toFocus = (input) => {
  //     this.inputRef = input;
  // }
  render() {
    return(
      <div>
        <input 
          defaultValue="Won't focus" 
        />
        <input 
          type="text"
          ref={this.inputRef} 
          defaultValue="will focus"
        />
      </div>
    );
  }
}
export default Focus;