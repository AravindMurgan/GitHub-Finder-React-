import React,{useState,useContext} from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';
const Search=()=> {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

   const [text,setText] = useState(''); 


     const onSubmit = (e)=>{
        e.preventDefault();
        if(text === ''){
            alertContext.setAlert('Please Enter Username ...', 'light' );
        }else{
            githubContext.searchUsers(text);

            setText('');
        }
            
        

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

            {githubContext.users.length > 0 && 
            <button 
            className="btn-block btn-light" 
            style={{width:'100%',padding:'4.5px'}} 
            onClick={githubContext.clearUsers}>
                Clear
            </button> }
            
        </div>
    )
    
}


export default Search
