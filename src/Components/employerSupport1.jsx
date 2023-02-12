import React, { useEffect } from "react";
import Button from "./button";
import {EmployerSupports} from './css/employerSupport.style';

function employerSupport(props){
    document.title=props.title;
    return (
    <EmployerSupports>
        <nav class="App-header">
        <div  class="nav-tabs">
        <span class="left-tabs">
            <button class="Logo">Logo</button>
            <a class="tabs" href="employerSupport1.html">Home</a>
            <a class="tabs"href="#">Help Center topics</a>
            <a class="tabs"href="/">Find a job</a>
            <a class="tabs"href="#">Post a job</a>
            
        </span>
        </div>
        
    </nav>
    <div class="section2">
        <h1>Employer Help Center</h1>
        <p class="b-txt">How can we help today?</p>
        <input type="search" class="search" name="hcSearch" placeholder="I'm looking for..." />
    </div>

    <section class="bg-gry">
        <p>We stand in solidarity with the people of Ukraine. We advocate for peace and an immediate withdrawal by Russian Forces</p>
    </section>
    
    <section >
        <h3>Popular topics</h3>
        <div class="wrapper">
        <div class="box">
            
            <h4>Create your free account</h4>
            <p>All you need is your emil address to Create
                an account and start building your job post.
            </p>
        </div>

        <div class="box">
            
            <h4>Create your free account</h4>
            <p>All you need is your emil address to Create
                an account and start building your job post.
            </p>
        </div>

        <div class="box">
            
            <h4>Create your free account</h4>
            <p>All you need is your emil address to Create
                an account and start building your job post.
            </p>
        </div>

        <div class="box">
            
            <h4>Create your free account</h4>
            <p>All you need is your emil address to Create
                an account and start building your job post.
            </p>
        </div>

        <div class="box">
          
            <h4>Create your free account</h4>
            <p>All you need is your emil address to Create
                an account and start building your job post.
            </p>
        </div>

        <div class="box">
            
            <h4>Create your free account</h4>
            <p>All you need is your emil address to Create
                an account and start building your job post.
            </p>
        </div>

        
    </div>
    </section>

    <section>
        <h6>Preferred Language</h6>
        <div class="emty-bg">English (US)</div>
        <div class="bg-only"></div>
    </section>

    <footer>
        <p>©2022 Indeed - Cookies, Privacy and Terms - Job Seeker Help Center -
            Do Not Sell My Personal Information - About Us
        </p>
    </footer>
    </EmployerSupports>
    )
}

export default employerSupport;