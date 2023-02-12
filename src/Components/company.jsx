import React, { useEffect } from "react";
import Button from "./button";
import {Companys} from './css/company.style';

function Company(props){
    document.title=props.title;
    return (
    <Companys>
        <div  class="nav-tabs">
        <span class="left-tabs">
            <button>Logo</button>
            <a class="tabs" href="#">Find jobs</a>
            <a class="tabs"href="#">Company reviews</a>
            
        </span>
        <span class="right-tabs">
            <a class="tabs"href="#">Create your cv</a>
            <a class="tabs" id="signin" href="signIn.html">Sign in</a>
            <a class="tabs"href="employers.html">Employers / Post job</a>
        
        </span>
        
        
    </div>
<hr />
        <section>
            <div className="head">
                <h1 className="b-txt">Find great places to work</h1>
                <p className="m-txt">Get access to millions of company reviews</p>
                <h3>Company name or job title</h3>
                <span>
                    <input type="search" className="search" />
                    <a href="#" className="ca-btn">Find Companies</a>
                </span>
                <a href="#">Do you want to search for salaries</a>
            </div>
            <div className="section1">
                <h1>Popular companies</h1>
                <div className="wrap-3">
                    <div className="f-card">
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <a href="#">243 reviews</a>
                            </div>
                        </div>
                        <div>
                            <span>salaries</span>
                            <span className="lr-space">Q&A</span>
                            <span>Open jobs</span>
                        </div>
                    </div>
    
                    <div className="f-card">
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <a href="#">243 reviews</a>
                            </div>
                        </div>
                        <div>
                            <span>salaries</span>
                            <span className="lr-space">Q&A</span>
                            <span>Open jobs</span>
                        </div>
                    </div>
    
                    <div className="f-card">
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <a href="#">243 reviews</a>
                            </div>
                        </div>
                        <div>
                            <span>salaries</span>
                            <span className="lr-space">Q&A</span>
                            <span>Open jobs</span>
                        </div>
                    </div>
    
                    <div className="f-card">
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <a href="#">243 reviews</a>
                            </div>
                        </div>
                        <div>
                            <span>salaries</span>
                            <span className="lr-space">Q&A</span>
                            <span>Open jobs</span>
                        </div>
                    </div>
    
                    <div className="f-card">
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <a href="#">243 reviews</a>
                            </div>
                        </div>
                        <div>
                            <span>salaries</span>
                            <span className="lr-space">Q&A</span>
                            <span>Open jobs</span>
                        </div>
                    </div>
    
                    <div className="f-card">
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <a href="#">243 reviews</a>
                            </div>
                        </div>
                        <div>
                            <span>salaries</span>
                            <span className="lr-space">Q&A</span>
                            <span>Open jobs</span>
                        </div>
                    </div>
    
                    <div className="f-card">
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <a href="#">243 reviews</a>
                            </div>
                        </div>
                        <div>
                            <span>salaries</span>
                            <span className="lr-space">Q&A</span>
                            <span>Open jobs</span>
                        </div>
                    </div>
    
                    <div className="f-card">
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <a href="#">243 reviews</a>
                            </div>
                        </div>
                        <div>
                            <span>salaries</span>
                            <span className="lr-space">Q&A</span>
                            <span>Open jobs</span>
                        </div>
                    </div>
    
                    <div className="f-card">
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <a href="#">243 reviews</a>
                            </div>
                        </div>
                        <div>
                            <span>salaries</span>
                            <span className="lr-space">Q&A</span>
                            <span>Open jobs</span>
                        </div>
                    </div>
    
                </div>
            </div>
    
            <div className="section2">
                <h1>Compare working at</h1>
                <div className="wrap-2">
                <a href="#">
                    <div className="f-card i-flex bdr">
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <p>243 reviews</p>
                            </div>
                        </div>
                        <p className="vs">VS</p>
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <p>243 reviews</p>
                            </div>
                        </div>
                    </div>
                </a>
    
                <a href="#">
                    <div className="f-card i-flex bdr">
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <p>243 reviews</p>
                            </div>
                        </div>
                        <p className="vs">VS</p>
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <p>243 reviews</p>
                            </div>
                        </div>
                    </div>
                </a>
    
                <a href="#">
                    <div className="f-card i-flex bdr">
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <p>243 reviews</p>
                            </div>
                        </div>
                        <p className="vs">VS</p>
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <p>243 reviews</p>
                            </div>
                        </div>
                    </div>
                </a>
    
                <a href="#">
                    <div className="f-card i-flex bdr">
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <p>243 reviews</p>
                            </div>
                        </div>
                        <p className="vs">VS</p>
                        <div className="i-flex">
                            <div className="e-box">Logo</div>
                            <div className="content">
                                <h3>Coca-Cola HBC Italia</h3>
                                <p>243 reviews</p>
                            </div>
                        </div>
                    </div>
                </a>
                </div>
            </div>
    
            <div className="section3">Rate your recent company: <input type="text" /></div>
        </section>
        <div>
        <a class="tabs" >Browse Jobs</a>
        <a class="tabs" >Browse Companies</a>
        <a class="tabs">Countries</a>
        <a class="tabs" >About</a>
        <a class="tabs" >Help Center</a>
      </div><br />
      <div>
        <span class="date">© 2022 Indeed</span>
        <a class="tabs" >Accessibility at Indeed</a>
        <a class="tabs" >Privacy Center</a>
        <a class="tabs" >Cookies</a>
        <a class="tabs" >Privacy</a>
        <a class="tabs" >Terms</a>
      </div><br />
    </Companys>
        
   
    )
}

export default Company;