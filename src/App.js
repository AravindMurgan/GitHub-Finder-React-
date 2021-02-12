import React from 'react';
import Navbar from "./component/layout/Navbar.js";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import User from "./component/User/User.js";
import Alert from "./component/layout/Alert";
import About from "./component/pages/About";
import GithubState from "./component/context/github/GithubState";
import AlertState from "./component/context/alert/Alertstate";
import './App.css';
import Home from './component/pages/Home';
import NotFound from './component/pages/NotFound';

// // let REACT_APP_GITHUB_TOKEN = '19599f4dcba8ba1bb0e10264e6f73e755df56f05';

// // const github = axios.create({
// //   baseURL: 'https://api.github.com',
// //   headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN }
// })



const App =  ()=> {

      return (
        <GithubState>
          <AlertState>
        <Router>
          <div className='App'>
            <Navbar icon="fab fa-github" title = "GitHub Finder"/>;
            <Alert/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound} />
            </Switch>

          </div> 
        </Router>
        </AlertState>
        </GithubState>
      );
                
    
}

export default App;



// 19599f4dcba8ba1bb0e10264e6f73e755df56f05