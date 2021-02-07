import React, { Component } from 'react';
import Navbar from "./component/layout/Navbar.js";
import axios from 'axios';
import Users from "./component/User/Users.js";
import Search from "./component/layout/Search";
import './App.css';


class App extends Component {
    state={
      users:[],
      loading:false
    }

    // async componentDidMount() {
    //   this.setState({loading:true})

    //   const res = await axios.get('https://api.github.com/users');

    //   this.setState({users:res.data ,loading:false});
     
    // }

    searchUsers = async text => {
      this.setState({loading:true});

      const res = await axios.get(`https://api.github.com/search/users?q=${text}`);

      this.setState({users:res.data.items ,loading:false});
    }


    render(){
      return (
        <div className='App'>
          <Navbar icon="fab fa-github" title = "GitHub Finder"/>;
         
          <div>
             <Search  searchUsers={this.searchUsers} />
             <Users loading={this.state.loading} users={this.state.users} />
          </div>
         
        </div>
      );
    }
   

}

export default App;
