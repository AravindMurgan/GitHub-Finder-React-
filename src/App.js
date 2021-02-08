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


class App extends Component {
    state={
      users:[],
      user:{},
      loading:false,
      alert:null
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

    singleUser = async(login)=>{
      this.setState({loading:true});

      const res = await axios.get(`https://api.github.com/users/${login}`);

      this.setState({users:res.data ,loading:false});
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
      const {loading,user,users}= this.state;
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
                  <User {...props} singleUser={this.singleUser} user={user} loading={loading} />
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
