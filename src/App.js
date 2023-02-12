
//import './App.css';
// import Nav from "./Components/nav";
// import Field from "./Components/input";
// import Button from "./Components/button";
// import Link from "./Components/link";
// import Locations from "./Components/locations";
// import Footer from "./Components/footer";
import React from 'react';
import Home from "./Components/home";
import Company from "./Components/company";
import Employers from "./Components/employers";
import empSupport from "./Components/employerSupport1";
import signIn from "./Components/signIn";
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';

// const Locate = Locations();

function App() {
  return (
    <Router>
    
        {/* <Nav /> */}
        {/* <Company /> */}
        <Routes>
          
          <Route exact path="/"  element={<Home title="Find The Best Companies to Work with" />}  />
          <Route exact path="/company"  element={<Company title="Find The Best Companies to Work with" />}  />
          <Route exact path="/employers"  element={<Employers title="Post a Job" />}  />
          <Route exact path="/employersupport1"  element={<empSupport title="Employer Help Center Home" />}  />
          <Route exact path="/signin"  element={<signIn title="Sign In" />}  />
         
        </Routes>
      
      {/* <div className="big-search">
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
       <hr /> */}
      {/* <Footer /> */}
      
   
    </Router>
  );
}

export default App;
