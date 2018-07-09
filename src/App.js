import React, { Component } from 'react';
import Login from './components/login';
import Board from './components/people';
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

  set_login(token){
    this.setState(
      {
        login:{
          token: token,
          login_status: true
        }
      }
    )
  }

  logout(){
    console.log("logout");
    this.setState({
      login:{
        token: null,
        login_status: false
      }
    })
  }
  render() {
    const {login} = this.state;
    const root = login.login_status?
        <Board token={login.token} logout={()=>this.logout()}></Board>
        :
        <Login set_login={(token)=>this.set_login(token)}></Login>
    return (
      root
    );
  }
}

export default App;
