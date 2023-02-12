import React from "react";
import Link from "./link";

function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer>
          <div>
            <Link class="tabs" content="Browse Jobs" />
            <Link class="tabs" content="Browse Companies" />
            <Link class="tabs" content="Countries" />
            <Link class="tabs" content="About" />
            <Link class="tabs" content="Help Center" />
          </div>
          <div>
            <span className="date">© {year} Indeed</span>
            <Link class="tabs" content="Accessibility at Indeed" />
            <Link class="tabs" content="Privacy Center" />
            <Link class="tabs" content="Cookies" />
            <Link class="tabs" content="Privacy" />
            <Link class="tabs" content="Terms" />
          </div>
          <div className="ftr-lnk">
              <h4>Easily Apply to jobs</h4>
              <Link class="ca-btns" content="Upload Your CV" />
          </div>
        </footer>
    )
}
export default Footer;