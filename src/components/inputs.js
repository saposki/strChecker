import React, { Component } from 'react';

class Input extends Component {
  render () {
      return <form>
        <div className="col-xs-3">
          <input onChange={(eventObject) => console.log(eventObject.target.value)} type="text" className="form-control" placeholder="Type of Paste a String"></input>
        </div>
        <input type="submit" className="btn btn-primary" value="check"></input>
        </form>
  }
}


export default Input;
