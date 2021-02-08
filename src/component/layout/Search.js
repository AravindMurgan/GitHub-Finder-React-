import React,{Component} from 'react';
import PropTypes from 'prop-types';


export class Search extends Component {
    state = {
        text:''
    };


     onSubmit = (e)=>{
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please Enter Username ...', 'light' );
        }
        this.props.searchUsers(this.state.text);
        this.setState({text:''});
        

    }

    onChange = (e)=>{
        this.setState({text:e.target.value})
    };

   

    render(){

        const {showClear,clearUsers} = this.props;
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit} >
                    <input 
                        type="text" 
                        placeholder="Search Users..."
                        value={this.state.text}
                        onChange={this.onChange}
                        />
                    <input type="submit" value="Search" className="btn btn-dark2 btn-block" />
                </form>

                {showClear && <button 
                className="btn-block btn-light" 
                style={{width:'100%',padding:'4.5px'}} 
                onClick={clearUsers}>Clear</button> }
                
            </div>
        )
    }
    
}

Search.propTypes = {
    searchUsers:PropTypes.func.isRequired,
    showClear:PropTypes.func.isRequired,
}

export default Search
