import React, { Component } from 'react';
import Userinput from './User/UserInput';
import Useroutput from './User/UserOutput';
import './App.css';

class App extends Component {
  state = {
    user: [
      { name: 'Rahaduzzaman' },
      { name: 'Md Zaman' }
    ]
  }

  changeNameHandler = (event) => {
    this.setState ( {
      user: [
        { name: event.target.value },
        { name: 'Md Zaman' }
      ]
    } )
  }

  render() {

    const inputStyle = {
      padding: '8px',
      marginTop: '30px',
      fontSize: '15px',
      color: 'blue'
    };

    return (
      <div className="App">
        <Userinput
          passStyle={inputStyle}
          name={this.state.user[0].name} 
          change={this.changeNameHandler}>
        </Userinput>
        
        <Useroutput 
          name={this.state.user[0].name}>
        </Useroutput>
        
      </div>
    );
  }
}

export default App;
