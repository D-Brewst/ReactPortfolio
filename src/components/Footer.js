import React from "react";
import { MDBIcon } from "mdbreact"
import "../footer.css";

function MyFooter(){
    return (
        <div className="footer mt-auto py-3">
            <p>
                <a href="https://github.com/D-Brewst"><MDBIcon id="github" className="icons" fab icon="github" style={{fontSize:"36px"}} /></a>
                <a href="https://linkedin.com/D-Brewst"><MDBIcon id="linkedin" className="icons" fab icon="linkedin" style={{fontSize:"36px"}} /></a>
            </p>
            <p>
                &copy; Devon Brewster, 2020
            </p>
        </div>
    )
}

export default MyFooter;

