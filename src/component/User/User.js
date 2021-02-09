import React, { Fragment,useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Repo from '../repos/Repo';


    const User = ({singleUser,singleUserRepos,repos,loading,match,users})=> {

        useEffect(()=> {
            singleUser(match.params.login);
            singleUserRepos(match.params.login);
        })

        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = users;

        if(loading){
            return <Spinner/>
        }
       
        return (
            <Fragment>
               <Link to='/' className="btn btn-dark ">Back to Search</Link>
               
               Hireable:{' '}
               {hireable ? (<i className="fa fa-check text-success" />) :(<i className="fa fa-times-circle text-danger"/>) }

               <div className="card grid-2">
                    <div className="all-center">
                        <img
                        src={avatar_url}
                        className="round-img"
                        alt=""
                        style={{width:'150px'}}
                        />
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                        <p>Followers: {followers}</p>
                        <p>Following: {following}</p>
                    </div>
                    <div>
                        {bio &&
                        <Fragment>
                            <h2>Bio 😎</h2>
                            <p>{bio}</p>
                        </Fragment>
                        }
                        <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>

                        <ul>
                            <li>
                                {login &&
                                    <Fragment>
                                        <strong>Login: </strong>{login}
                                    </Fragment>}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                {blog &&
                                    <Fragment>
                                        <strong>Blog: </strong>{blog}
                                    </Fragment>}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                {company &&
                                    <Fragment>
                                        <strong>Company: </strong>{company}
                                    </Fragment>}
                            </li>
                        </ul>
                    </div>
                    
               </div>

               <div className="card text-center">
                   <div className="badge" style={{background:'#c23616',color:'#fff'}}>Followers: {followers}</div>
                   <div className="badge" style={{background:'#dcdde1',color:'#fff'}}>Following: {following}</div>
                   <div className="badge" style={{background:'#718093',color:'#fff'}}>Public Repos: {public_repos}</div>
                   <div className="badge" style={{background:'#192a56',color:'#fff'}}>Public Gists: {public_gists}</div>
               </div>

               <Repo repos={repos} />
            </Fragment>
        )
    
}

User.propTypes = {
    loading:PropTypes.bool.isRequired,
    singleUser:PropTypes.func.isRequired,
    singleUserRepos:PropTypes.func.isRequired,
    users:PropTypes.object.isRequired,
    repos:PropTypes.array.isRequired,
}


export default User;