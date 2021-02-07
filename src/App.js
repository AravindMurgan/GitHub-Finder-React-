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

    clearUsers = ()=> this.setState({users:[], loading:false});

    setAlert = (msg,type)=>{
      
    }

   
    render(){
      const {loading,users}= this.state;
      return (
        <div className='App'>
          <Navbar icon="fab fa-github" title = "GitHub Finder"/>;
         
          <div style={containerStyle}>
             <Search  searchUsers={this.searchUsers} 
                      clearUsers={this.clearUsers} 
                      showClear={users.length > 0 ? true:false}
                      setAlert={this.setAlert} />
             <Users loading={loading} users={users} />
          </div>
         
        </div>
      );
    }
   

}

const containerStyle = {
  margin:'0 2.5rem'
}

export default App;
