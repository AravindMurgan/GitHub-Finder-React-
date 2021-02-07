import React, {Fragment}  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const Navbar = (props)=> {
        return (
            <Fragment>
                   <nav className="navbar bg-primary2">
                <h1>
                < i className ={props.icon} /> {props.title}
                </h1>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
             
            
            </Fragment>
         
            
        )
    
}

Navbar.defaultProps = {
    title:'GitHub Finder',
    icon:'fab fa-github',
};
Navbar.propTypes ={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
};

export default Navbar;