import React from "react";

function field(props){
    return (
 
            <input 
            className="search" 
            type={props.type} 
            placeholder= {props.placeholder==="what"?"  What   Job title, keywords, or company":"  Where   city or state"}
            name={props.name} />
   
    )
    
    }

export default field;