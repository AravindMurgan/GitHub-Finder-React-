import React, { Component } from 'react';
import Navbar from "./component/layout/Navbar.js";
import UserItem from "./component/User/UserItem.js";
import Users from "./component/User/Users.js";
import './App.css';


class App extends Component{

  render(){
    return (
      <div className='App'>
        <Navbar icon="fab fa-github" title = "GitHub Finder"/>,
    
        <Users />
      </div>
    );
  }

}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//     </div>
//   );
// }