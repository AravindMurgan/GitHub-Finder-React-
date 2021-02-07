import React,{Component} from 'react';
import PropTypes from 'prop-types';


export class Search extends Component {
    state = {
        text:''
    };

     onSubmit = (e)=>{
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text:''});
        

    }

    onChange = (e)=>{
        this.setState({text:e.target.value})
    };

   

    render(){
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit} >
                    <input 
                        type="text" 
                        placeholder="Search Users..."
                        value={this.state.text}
                        onChange={this.onChange}
                        />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                <button className="btn-block btn-light" style={{width:'100%'}} >Clear</button>
            </div>
        )
    }
    
}

Search.propTypes = {
    searchUsers:PropTypes.func.isRequired,
}

export default Search
