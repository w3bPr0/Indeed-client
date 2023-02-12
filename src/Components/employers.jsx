import React, { useEffect } from "react";
import Button from "./button";
import {Employer} from './css/employers.style';

function employers(props){
    document.title=props.title;
    return (
    <Employer>
        <nav class="App-header">
        <div  class="nav-tabs">
            <span class="left-tabs">
                <button class="Logo">Logo</button>
                <a class="tabs" href="#">Post a job</a>
                <a class="tabs"href="#">Find CVs</a>
                <a class="tabs"href="#">Products</a>
            </span>
            <span class="right-tabs">
                <a class="tabs"href="employerSupport1.html">Help Center</a>
                <span class="tabs" id="signin">
                <a class="ca-btn"  href="signIn.html">Sign in</a>
                </span>
                <a class="tabs"href="/">Find jobs</a>
            
            </span>
        </div>
        </nav>
    <div class="sub-ctnr">
    <header>
        <div  class="cl2-3">
            <p class="b-txt">Let's make your next great hire. <em>Fast.</em> </p>
            <a class="ca-btn bg-btn" href="#">Post a job</a>
        </div>
        <img src="images/hire.png" alt="Make a great hire" />
        
    </header>
    <section class="wrapper">
        <div class="box">
            <h2>1</h2>
            <h1>Create your free account</h1>
            <p>All you need is your emil address to Create
                an account and start building your job post.
            </p>
        </div>
        <div class="box">
            <h2>1</h2>
            <h1>Create your free account</h1>
            <p>All you need is your emil address to Create
                an account and start building your job post.
            </p>
        </div>
        <div class="box">
            <h2>1</h2>
            <h1>Create your free account</h1>
            <p>All you need is your emil address to Create
                an account and start building your job post.
            </p>
        </div>
    </section>
    </div>
    <section class="sub-ctnr bg-smk">
        <p class="b-txt"><em>Save time and effort in your hiring journey.</em> </p>
        <p class="txt-gap">Finding the best fit for the job shouldn't be a full-time job. Indeed's simple
            and powerful tools let you source, screen, and hire faster. </p>
        <div class="wrap-3">
            <div class="i-box">
                <h1>Get more visibility</h1>
                <p>Sponsor your job to ensure it gets seen by the right people.</p>
            </div>
            <div class="i-box">
                <h1>Get more visibility</h1>
                <p>Sponsor your job to ensure it gets seen by the right people.</p>
            </div>
            <div class="i-box">
                <h1>Get more visibility</h1>
                <p>Sponsor your job to ensure it gets seen by the right people.</p>
            </div>
            <div class="i-box">
                <h1>Get more visibility</h1>
                <p>Sponsor your job to ensure it gets seen by the right people.</p>
            </div>
            <div class="i-box cl3-3">
                <a class="ca-btn bg-btn" href="#">Get Started</a>
                <div class="r-float">
                <p>You control your posts 24/7--edit, add, pause, or close them whenever you want.</p>
                <a href="#">Learn more about posting.</a>
                </div>
            </div>
            
        </div>    
    </section>

    <div class="sub-ctnr">
        <p class="b-txt c-float" >Want to fill your job faster? Sponsor it.</p>
        <p class="txt-gap c-float">Sponsored Jobs are over 4.5X more likely to result in a hire.
            Pick the daily budget that works for you; pay only for people
            clicking on your post.
        </p>
    </div>


    <div class="sub-ctnr bg-smk d-pads">
        <p class="b-txt c-float">You're in good company.</p>
        <p class="txt-gap c-float">Over 3,000,000 companies use Indeed to
            hire. See why these amazing companies use us as their platform
            to hire dream talent.
        </p>

        <div class="wrapper">
            <div class="box">
                <span class="e-box">Logo</span>
                <p>Indeed helps the world's largest family 
                    restaurant business to recruit high quality
                    candidates for its hard-to-fill positions.
                </p>
            </div>
            <div class="box">
                <span class="e-box">Logo</span>
                <p>Indeed helps the world's largest family 
                    restaurant business to recruit high quality
                    candidates for its hard-to-fill positions.
                </p>
            </div>
            <div class="box">
                <span class="e-box">Logo</span>
                <p>Indeed helps the world's largest family 
                    restaurant business to recruit high quality
                    candidates for its hard-to-fill positions.
                </p>
            </div>
        </div>
    </div>
    <div class="sub-ctnr bg-smk testi">
        <p class="p-testi">"<br />
            I've used other websites in the
            past for hiring; nothing has ever been this easy,
             this simple, and this effective. <br />
             " <br /><br />
            Darrell
        </p>
        <div class="limage">
            <img src="images/staff hire testimony.jpg" alt="staff hire testimony" class="i-testi" />
        </div>
    </div>

    <div class="sub-ctnr bg-smk st-pstn">
        <p class="b-txt c-float" >Get started in minutes.</p><br /><br />
        <a class="ca-btn bg-btn" href="#">Start posting</a><br /><br />
        <p class="txt-gap c-float">1. Indeed data (worldwide).
        </p>
    </div>

    <div class="wrap-2 d-pads">
        <div>
            <h1>We're here to help</h1>
            <p>Visit our Help Center for answers to common questions or contact us directly.</p>
            <div class="i-space">
                <a class="ca-btn" href="#">Help Center</a>
                <a class="ca-btn btn-gap" href="#">Contact support</a>
            </div>
        </div>
        <div class="cl-3">
            <ul>
                <h1>Indeed</h1>
                <p>Why Indeed</p>
                <p>Contact us</p>
                <p>Cookies, privacy, and terms</p>
                <p>Privacy center</p>
                <p>Sitemap</p>
            </ul>
            <ul>
                <h1>Solutions</h1>
                <p>All Products</p>
                <p>Resume</p>
            </ul>
            <ul>
                <h1>Resources</h1>
                <p>How it works</p>
                <p>FAQ</p>
            </ul>
        </div>

    </div>

    <footer class="">
        <span>© 2022 Indeed</span>
        <span class="right-tabs">
            <i class="fab ion ic-space large fa-apple"></i>
            <i class="fab ion ic-space large fa-android"></i>
            <i class="fab ion ic-space large fa-facebook"></i>
            <i class="fab ion ic-space large fa-twitter"></i>
            <i class="fab ion ic-space large fa-linkedin"></i>
            <i class="fab ion ic-space large fa-youtube"></i>
            <i class="fab ion ic-space large fa-instagram"></i>
        </span> 
    </footer>





    {/* <script src="../src/index.js" type="text/jsx"></script> */}
        
    </Employer>
    )
}

export default employers;