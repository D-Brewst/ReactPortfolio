import React from 'react';
import "./skills.css";

function Skills(){
    return (
        <div class="skills">
            <li>
                <p className="grade">90%</p>
                <h5>HTML</h5><span className="bar"><span className="html"></span></span>
            </li>
            <li>
                <p className="grade">90%</p>
                <h5>CSS</h5><span className="bar"><span className="css"></span></span>
            </li>
            <li>
                <p className="grade">90%</p>
                <h5>JavaScript</h5><span className="bar"><span className="javascript"></span></span>
            </li>
            <li>
                <p className="grade">90%</p>
                <h5>jQuery</h5><span className="bar"><span className="jquery"></span></span>
            </li>
            <li>
                <p className="grade">90%</p>
                <h5>React</h5><span className="bar"><span className="react"></span></span>
            </li>
            <li>
                <p className="grade">90%</p>
                <h5>Node.js</h5><span className="bar"><span className="node"></span></span>
            </li>
            <li>
                <p className="grade">80%</p>
                <h5>MySQL</h5><span className="bar"><span className="mysql"></span></span>
            </li>
            <li>
                <p className="grade">80%</p>
                <h5>MongoDB</h5><span className="bar"><span className="mongo"></span></span>
            </li>
        </div>
    )
}

export default Skills;