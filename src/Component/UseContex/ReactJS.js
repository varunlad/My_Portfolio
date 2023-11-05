import React, { useEffect, useState } from "react";
import * as icon from "../../Assets/Images/index";
import "./Common.scss"
import MultiFunctionalDropdown from '../../Common/SingleDropdown';
import UserProfile from "./UserProfile";

function ReactJS() {
    const [option, setOption] = useState([
        { name: "Option 1", value: 1 },
        { name: "Option 2", value: 2 },
        { name: "Option 3", value: 3 },
        { name: "Option 4", value: 4 },
        { name: "Option 5", value: 5 },
    ]);
    let [num, setNum] = useState(0);
    let incNum = () => {
        setNum(Number(num) + 1);
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    return (
        <div className="container">
            <div className='row box_shadow'>
                <div className='col-md-4'>
                    <div className='my_card'>
                        <h5>Single Select Component</h5>
                        <MultiFunctionalDropdown label={"Single Select"} type={"SingleSelect"} options={option} />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='my_card'>
                        <h5>Multi Select Component</h5>
                        <MultiFunctionalDropdown label={"Multi Select"} type={"MultiSelect"} options={option} />
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='my_card'>
                        <h5>Increment / Decrement</h5>
                        <div className="input-group" style={{ justifyContent: "center" }}>
                            <div className="input-group-prepend mx-1">
                                <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                            </div>
                            <input type="text" className="form-control" style={{ maxWidth: "60px", borderRadius: "5px" }} value={num} onChange={handleChange} />
                            <div className="input-group-prepend mx-1">
                                <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='my_card'>
                        <h5>Use Contex Hook</h5>
                        <UserProfile />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReactJS