import React,{useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../github/type';


const GithubState = (props) => {

    const initialState = {
        users:[],
        user:{},
        repos:[],
        loading:false
    }

    
    const [state,dispatch] = useReducer(GithubReducer,initialState);

    //seatch Users;
    const searchUsers = async text => {
        setLoading();

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=3204ffdce24bf25d1770&client_secret=16a651230902abc0e408840f9917e2b1c2c963c9`);

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
        // setUsers(res.data.items);
        // setLoading(false)};
    }
       

    //Get user;
    const singleUser = async(username)=>{
        setLoading();
  
        const res = await axios.get(`https://api.github.com/users/${username}?AravindMurgan/19599f4dcba8ba1bb0e10264e6f73e755df56f05`);
  
        dispatch({
            type:GET_USER,
            payload:res.data
        })
      }

    // getRepos;

    const singleUserRepos = async(username)=>{

        setLoading();
  
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc/AravindMurgan/19599f4dcba8ba1bb0e10264e6f73e755df56f05`)
  
        dispatch({
            type:GET_REPOS,
             payload:res.data
        });
    
    }

    //clear Users//
    const clearUsers = ()=> dispatch({
        type:CLEAR_USERS
    });
    /// setLoading;
        const setLoading = ()=> dispatch({type:SET_LOADING});

    return (
        <GithubContext.Provider
    
        value={{
            users: state.users,
            user:state.user,
            repos:state.repos,
            loading:state.loading,
            searchUsers,
            clearUsers,
            singleUser,
            singleUserRepos

        }}>

            {props.children}
        </GithubContext.Provider>
    )

}

export default GithubState;
