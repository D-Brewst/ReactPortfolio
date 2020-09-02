import React from "react";
import "../footer.css";

function MyFooter(){
    return (
        <div className="footer mt-auto py-3">
            <p>
                <a href="https://github.com/D-Brewst"><i class="fa fa-github" style={{fontSize: "36px"}}></i></a>
                <a href="https://www.linkedin.com/in/devon-brewster-3172a01b1/"><i class="fa fa-linkedin-square" style={{fontSize:"36px"}}></i></a>
            </p>
            <p>
                &copy; Devon Brewster, 2020
            </p>
        </div>
    )
}

export default MyFooter;

