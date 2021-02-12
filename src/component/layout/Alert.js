import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';

 const Alert = () => {
     const alertContext = useContext(AlertContext);

     const {alert} = alertContext;
    return (
       alert !==null && (
           <div className={`alert alert-${alert.type}`} style={{margin:'0 2.5rem'}}>
               <i className="fas fa-info-circle"></i> {alert.msg}
           </div>
       )

    )
}

export default Alert;