import React,{useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';


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
            payload: res.data
        })
        // setUsers(res.data.items);
        // setLoading(false)};

    //Get user;

    // getRepos;

    //clear Users//

    /// setLoading;
        const setLoading = ()=> dispatch({type:SET_LOADING});

    return (
        <GithubContext.Provider
    
        value={{
            users: state.users,
            user:state.user,
            repos:state.repos,
            loading:state.loading,
            searchUsers
        }}>
            
            {props.children}
        </GithubContext.Provider>
    )

}

export default GithubState;
