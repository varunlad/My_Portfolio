import React, { useContext } from 'react'
import * as icon from "../../Assets/Images/index";
import UserContext from '../../Contex/UserContext';

function JavaScript() {
    const user = useContext(UserContext);

    return (
        <div className='container my_smooth_animation'>
            <div className='row box_shadow'>
                <div className='col-md-12'>
                    <h3 style={{ color: "#1ed760" }}>Technical Javascript Skills<img className={user.windownView === 0 && 'my_icons'} src={icon.javascripticon.src} alt="js" /> </h3>
                    <p className="d-flex"><span className="mx-2">&#187;</span>
                        Proficient in modern JavaScript (ES6+) features and syntax, including arrow functions, template literals, destructuring, spread/rest operators, and async/await for handling asynchronous operations.</p>
                    <p className="d-flex"><span className="mx-2">&#187;</span>
                        Strong understanding of fundamental concepts such as variables, data types, operators, control structures, and functions.</p>
                    <p className="d-flex"><span className="mx-2">&#187;</span>
                        Skilled in working with JSON (JavaScript Object Notation) for data interchange between the server and client-side applications.
                    </p>
                    <p className="d-flex"><span className="mx-2">&#187;</span>
                        Familiarity with client-side storage options like localStorage and sessionStorage for storing data persistently in web applications.</p>
                </div>
                <div className='col-md-12'>
                    <h3 style={{ color: "#1ed760" }}>Technical Typescript <img className={user.windownView === 0 && 'my_icons'} src={icon.typescript.src} alt="js" /> & JQuery Skills <img className={user.windownView === 0 && 'my_icons'} src={icon.jquery.src} alt="js" /> </h3>
                    <p className="d-flex"><span className="mx-2">&#187;</span>
                        Skilled in TypeScript for writing clean and reliable code, making development smoother and less error-prone.
                    </p>
                    <p className="d-flex"><span className="mx-2">&#187;</span>
                        Familiar with jQuery for easily manipulating web page elements and enhancing user interactions.
                    </p>
                    <p className="d-flex"><span className="mx-2">&#187;</span>
                        Capable of using jQuery plugins to add extra functionality and improve the overall user experience.
                    </p>
                    <p className="d-flex"><span className="mx-2">&#187;</span>
                        Proficient in integrating TypeScript and jQuery to create dynamic and responsive web applications.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default JavaScript