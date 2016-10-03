import React, { Component } from 'react';

class Input extends Component {
  constructor (props){
    super(props);

    this.state = { term: '' };
  }

render () {
  return (
    <div>
      <div className="col-xs-3">
        <input
          value={this.state.term}
          onChange={eventObject => this.setState({ term: eventObject.target.value })}
          className="form-control"
          placeholder="Type or Paste a String" >
        </input>
      </div>
        <input onClick={this.handleClick} type="button" className="btn btn-primary" value="check">
        </input>
      <ul>{Object.keys(this.state.term).map((i) => (
        <ul className="btn btn-info" >
          <li className="btn btn-success">{i}</li>
            <br/>
          <li className="btn btn-success">{this.state.term[i]}</li>
        </ul>
      ))}
      </ul>
    </div>
  );
}

handleClick = ()=> {
let string = this.state.term

// function to check analyze string and character frequency
let unique = (string) =>{
let obj = {};
for(let i = 0; i < string.length; i++){
  if(string.charAt(i) in  obj){
      obj[string.charAt(i)] = obj[string.charAt(i)] + 1;
   }else{
      obj[string.charAt(i)] = 1;
   }
  }
  return obj;
}
// end of function

this.setState({term: unique(string)});
}
}


export default Input;
