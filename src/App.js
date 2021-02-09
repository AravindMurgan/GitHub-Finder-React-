import React, { Component, Fragment } from 'react';
import Navbar from "./component/layout/Navbar.js";
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Users from "./component/User/Users.js";
import User from "./component/User/User.js";
import Search from "./component/layout/Search";
import Alert from "./component/layout/Alert";
import About from "./component/pages/About";
import './App.css';

let REACT_APP_GITHUB_TOKEN = '19599f4dcba8ba1bb0e10264e6f73e755df56f05';

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN }
})



class App extends Component {
    state={
      users:[],
      repos:[],
      user:{},
      loading:false,
      alert:null
    }
    

    searchUsers = async text => {
      this.setState({loading:true});

      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=3204ffdce24bf25d1770&client_secret=16a651230902abc0e408840f9917e2b1c2c963c9`);

      this.setState({users:res.data.items ,loading:false});
    }

    singleUser = async(username)=>{
      this.setState({loading:true});

      const res = await axios.get(`https://api.github.com/users/${username}?AravindMurgan/19599f4dcba8ba1bb0e10264e6f73e755df56f05`);

      this.setState({user:res.data ,loading:false});
    }

    singleUserRepos = async(username)=>{
      this.setState({loading:true});

      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc/AravindMurgan/19599f4dcba8ba1bb0e10264e6f73e755df56f05`)

      this.setState({repos:res.data ,loading:false});
    }


    clearUsers = ()=> this.setState({users:[], loading:false});

    setAlert = (msg,type)=>{
      this.setState({loading:false});
      this.setState({alert : {msg:msg,type:type}});

      setTimeout(()=>{
        this.setState({alert : null})
      },3000)
    }
  

   
    render(){
      const {loading,user,users,repos}= this.state;
      return (
        <Router>
          <div className='App'>
            <Navbar icon="fab fa-github" title = "GitHub Finder"/>;
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props =>(
                  <Fragment>
                    <div style={containerStyle}>
                      <Search  searchUsers={this.searchUsers} 
                                clearUsers={this.clearUsers} 
                                showClear={users.length > 0 ? true:false}
                                setAlert={this.setAlert} />
                      <Users loading={loading} users={users} />
                    </div>
                  </Fragment>
                )}/>

                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' render={(props)=>
                (
                  <User {...props} singleUser={this.singleUser}  users={user} singleUserRepos={this.singleUserRepos} repos={repos} loading={loading} />
                )} />

            </Switch>
            
          </div> 
        </Router>
        
      );
    }
   

}

const containerStyle = {
  margin:'0 2.5rem'
}

export default App;



// 19599f4dcba8ba1bb0e10264e6f73e755df56f05