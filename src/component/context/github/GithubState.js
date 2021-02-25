import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../github/type'

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const github = axios.create({
    baseURL: 'https://api.github.com',
    headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN }
  })

  //seatch Users;
  const searchUsers = async (text) => {
    setLoading()

    const res = await github.get(`/search/users?q=${text}`)

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })
  }

  //Get user;
  const singleUser = async (username) => {
    setLoading()

    const res = await github.get(`/users/${username}?`)

    dispatch({
      type: GET_USER,
      payload: res.data
    })
  }

  // getRepos;

  const singleUserRepos = async (username) => {
    setLoading()

    const res = await github.get(
      `/users/${username}/repos?per_page=5&sort=created:asc?`
    )

    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  }

  //clear Users//
  const clearUsers = () =>
    dispatch({
      type: CLEAR_USERS
    })
  /// setLoading;
  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        singleUser,
        singleUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
