import React, { Component } from 'react';
import Login from './components/login'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      login:{
        token:null,
        login_status: false
      },
    }
  }

  render() {
    const {login} = this.state;
    const root = login.login_status?null:<Login></Login>
    return (
      root
    );
  }
}

export default App;
