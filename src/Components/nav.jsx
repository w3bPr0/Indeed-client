import React from "react";
import Button from "./button";

function nav(){
    return (
        <div>
            <div  classNameName="nav-tabs">
            <span classNameName="left-tabs">
                <Button content="Logo"/>
                <a className="tabs" href="#">Find jobs</a>
                <a className="tabs" href="/company">Company reviews</a>
                
            </span>
            <span classNameName="right-tabs">
                <a className="tabs" href="#">Create your cv</a>
                <a className="tabs" id="signin" href="signIn.html">Sign in</a>
                <a className="tabs" href="/employers">Employers / Post job</a>
            
            </span>
            
        </div>
        <hr />
        </div>
    )
}

export default nav;