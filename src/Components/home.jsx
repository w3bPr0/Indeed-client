import React, { useEffect } from "react";
import Button from "./button";
import Nav from "./nav";
import Footer from "./footer";
import Field from "./input";
// import Button from "./Components/button";
import Link from "./link";
import Locations from "./locations";
import {Styles} from './css/styles.style.js';

const Locate = Locations();

function home(props){
    document.title=props.title;
    return (
    
    <Styles className="App">
      <header className="App-header">
    <Nav />
    </header>
        <div className="big-search">
          <Field type="search" placeholder="what" />
          <Field type="search" placeholder="where"/>
          <Link class="ca-btns" content="Find jobs"/>
       </div>
       <h3 ><a href="#">Post your CV</a> - It only takes a few seconds</h3>
       <h3 ><a href="#">Employers: Post a job</a> - Your next hire is here</h3>
      <div className="big-search pop">
        <h2>Popular Searches</h2>
         {Locate.map(function(location){
          return <Link class="search-items" content={location}/>}
        )}
       </div>
       <p>For jobs in the United States, visit <a href="www.indeed.com">www.indeed.com</a></p>
       <hr />
       <Footer />
    </Styles>
    )
}

export default home;