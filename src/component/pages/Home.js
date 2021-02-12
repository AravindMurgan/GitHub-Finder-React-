import React,{Fragment} from 'react';
import Users from '../User/Users';
import Search from '../layout/Search';
 const Home = () => {
    return (
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    )
}

export default Home;