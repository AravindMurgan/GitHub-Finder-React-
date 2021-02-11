import React, { useState, Fragment } from 'react';
import Navbar from "./component/layout/Navbar.js";
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Users from "./component/User/Users.js";
import User from "./component/User/User.js";
import Search from "./component/layout/Search";
import Alert from "./component/layout/Alert";
import About from "./component/pages/About";
import GithubState from "./component/context/github/GithubState";
import './App.css';

// // let REACT_APP_GITHUB_TOKEN = '19599f4dcba8ba1bb0e10264e6f73e755df56f05';

// // const github = axios.create({
// //   baseURL: 'https://api.github.com',
// //   headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN }
// })



const App =  ()=> {

    const [users,setUsers]= useState([]);
    const [repos,setRepos]= useState([]);
    const [user,setUser]= useState({});
    const [loading,setLoading]= useState(false);
    const [alert,setAlert]= useState(null);
  

      
    

      const singleUser = async(username)=>{
      setLoading(true);

      const res = await axios.get(`https://api.github.com/users/${username}?AravindMurgan/19599f4dcba8ba1bb0e10264e6f73e755df56f05`);

      setUser(res.data);
      setLoading(false);
    }

      const singleUserRepos = async(username)=>{

      setLoading(true);

      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc/AravindMurgan/19599f4dcba8ba1bb0e10264e6f73e755df56f05`)

      setRepos(res.data);
      setLoading(false);
    }


      const clearUsers = ()=> {
        setUsers([]);
        setLoading(false);
      }

      
      const showAlert = (msg,type)=>{
      setAlert({msg,type});


      setTimeout(()=>{
        setAlert(null);
      },3000)
    }
  
      return (
        <GithubState>
        <Router>
          <div className='App'>
            <Navbar icon="fab fa-github" title = "GitHub Finder"/>;
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={props =>(
                  <Fragment>
                    <div>
                      <Search   clearUsers={clearUsers} 
                                showClear={users.length > 0 ? true:false}
                                setAlert={showAlert} />
                      <Users loading={loading} users={users} />
                    </div>
                  </Fragment>
                )}/>

                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' render={(props)=>
                (
                  <User {...props} singleUser={singleUser}  users={user} singleUserRepos={singleUserRepos} repos={repos} loading={loading} />
                )} />

            </Switch>
            
          </div> 
        </Router>
        </GithubState>
      );
                
    
}

export default App;



// 19599f4dcba8ba1bb0e10264e6f73e755df56f05