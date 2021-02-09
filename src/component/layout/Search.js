import React,{useState} from 'react';
import PropTypes from 'prop-types';


const Search=({showClear,clearUsers,setAlert,searchUsers})=> {
   const [text,setText] = useState(''); 


     const onSubmit = (e)=>{
        e.preventDefault();
        if(text === ''){
            setAlert('Please Enter Username ...', 'light' );
        }
            searchUsers(text);

            setText('');
        

    }

    const onChange = (e)=>{
        setText(e.target.value);
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit} >
                <input 
                    type="text" 
                    placeholder="Search Users..."
                    value={text}
                    onChange={onChange}
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

Search.propTypes = {
    searchUsers:PropTypes.func.isRequired,
    showClear:PropTypes.func.isRequired,
    setAlert:PropTypes.func.isRequired,
    clearUsers:PropTypes.bool.isRequired,
}

export default Search
