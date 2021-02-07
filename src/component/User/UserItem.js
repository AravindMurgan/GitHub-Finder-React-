import React from 'react';
import PropTypes from 'prop-types';

 const UserItem = ({users:{login,avatar_url,html_url}})=> {
        return (
            <div>
                <div className="card text-center">
                    <img src={avatar_url} alt="image_url" className='round-img' style={{width:'60px'}} />

                    <h3>{login}</h3>
                    <br/>
                   <a href={html_url} className='btn btn-dark'>More</a>
                </div>
            </div>
        )
    
}


UserItem.propTypes ={
    user: PropTypes.object.isRequired,
};

export default UserItem;
