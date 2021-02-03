import React, { Component } from 'react';

 class UserItem extends Component {
     state = {
         id:'id',
         login:'mojombo',
         avatar_url:"https://avatars.githubusercontent.com/u/1?v=4",
         html_url:'https://github.com/mojombo'
        
        };
    render() {
        const {login,avatar_url,html_url} = this.props.user;
        return (
            <div>
                <div className="card text-center">
                    <img src={avatar_url} alt="image_url" className='round-img' style={{width:'60px'}} />

                    <h3>{login}</h3>
                    <br/>
                    <button className='btn btn-dark' ><a href={html_url}></a>More</button>
                </div>
            </div>
        )
    }
}

export default UserItem
