import React, { useContext } from 'react'
import * as icon from "../../Assets/Images/index";
import UserContext from '../../Contex/UserContext';

function JavaScript() {
    const user = useContext(UserContext);

    return (
        <div className='container my_smooth_animation'>
            <div className='row box_shadow'>
                <div className='col-md-12'>
                    <h3 style={{ color: "#1ed760" }}>Technical Javascript Skills<img className={user.windownView === 0 && 'my_icons'} src={icon.javascripticon.src} alt="js"/> </h3>
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
                {/* <div className='col-md-6'>
                    <div className='my_card' style={{ height: "410px", justifyContent: "start", overflow: "auto" }}>
                        <p>
                            <h4> ✨ Difference between Rest and Spread operator ?</h4>

                        //Note : JavaScript uses three dots (...) for both the rest and spread operators.<br />

                        //Rest Operator<br />
                            rest(1,2,3);<br />
                            function rest (...n)<br />
                            console.log(n); // op : [ 1, 2, 3 ]<br />

                    //Note : We use Rest operator when our inputs are not fix and it is always use in function parameter.<br />

                        //spread Operator<br />

                            let spreadArr = [1,3,5];<br />
                            let newSpreadArr = [...spreadArr, 7];<br />
                            console.log("newSpreadArr===", newSpreadArr); <br /> op : newSpreadArr=== [ 1, 3, 5, 7 ]<br />
                    //Note : Here three dots (...) are not used in a function thus it is spread operator and spread syntax expands iterables into individual elements.
                        </p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='my_card' style={{ height: "410px", justifyContent: "start", overflow: "auto" }}>
                        <p>
                            <h4> ✨ What are Closures in JS?</h4>
                            let product = function (a,b,c)﹛<br />
                            console.log("first product = ", a * b) //6 <br />
                            return function ()﹛<br />
                            return a*b*c<br />
                            ﹜<br />
                            ﹜
                            <br />
                            let container = product(2,3,4);<br />
                            console.log("final product = ", container()); //24<br />

                    //note : closures is a function inside another function that has access to the outer function veriable.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default JavaScript