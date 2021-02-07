import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

 const UserItem = ({users:{login,avatar_url,html_url}})=> {
        return (
            <div>
                <div className="card text-center">
                    <img src={avatar_url} alt="image_url" className='round-img' style={{width:'60px'}} />

                    <h3>{login}</h3>
                    <br/>
                   <Link to={`/user/${login}`} className='btn btn-dark'>More</Link>
                </div>
            </div>
        )
    
}


UserItem.propTypes ={
    user: PropTypes.object.isRequired,
};

export default UserItem;
