import React from 'react';
import "./skills.css";

function Skills(){
    return (
        <div class="skills">
            <li>
                <h3>HTML</h3><span className="bar"><span className="html"></span></span>
            </li>
            <li>
                <h3>CSS</h3><span className="bar"><span className="css"></span></span>
            </li>
            <li>
                <h3>JavaScript</h3><span className="bar"><span className="javascript"></span></span>
            </li>
            <li>
                <h3>jQuery</h3><span className="bar"><span className="jquery"></span></span>
            </li>
            <li>
                <h3>React</h3><span className="bar"><span className="react"></span></span>
            </li>
            <li>
                <h3>Node.js</h3><span className="bar"><span className="node"></span></span>
            </li>
            <li>
                <h3>MySQL</h3><span className="bar"><span className="mysql"></span></span>
            </li>
            <li>
                <h3>MongoDB</h3><span className="bar"><span className="mongo"></span></span>
            </li>
        </div>
    )
}

export default Skills;