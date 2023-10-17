import React, { useEffect, useState } from "react";
import * as icon from "../Assets/Images/index";
import search from "../Assets/Images/searchs.svg";
import "./CommonComponent.scss"

function MultiFunctionalDropdown(props) {
    const [drpOption, setDrpOption] = useState([]);
    const [selectedOption, setSelectedOption] = useState(props.label);
    const [selectedVal, setSelectedVal] = useState([]);
    const [openSelect, setOpenSelect] = useState(false);
    const [checkall, setCheckall] = useState(false);
    const [tempArr, setTempArr] = useState([]);

    useEffect(() => {
        let tempOption = props.options;
        let newArr = [];
        for (let i = 0; i < tempOption.length; i++) {
            newArr.push({ name: props.options[i].name, isChecked: false });
        }
        setDrpOption(newArr);
        setTempArr(newArr);
    }, [props.options]);

    const handleChange = (event) => {
        const { checked, id, value } = event.currentTarget;
        let SelArrEle = drpOption.findIndex((ele) => ele?.name === id);
        if (drpOption[SelArrEle].ischecked === true) {
            drpOption[SelArrEle].ischecked = false;
        } else {
            drpOption[SelArrEle].ischecked = true;
        }
        setSelectedVal((prev) =>
            checked
                ? [...prev, id]
                : prev.filter((val) => val !== id)
        );
        let sel = checked
            ? [...selectedVal, id]
            : selectedVal.filter((val) => val !== id);

        if (drpOption.length === sel.length && drpOption.length !== 0) {
            setCheckall(true);
        } else {
            setCheckall(false);
        }
    };
    const handelOpen = () => {
        setOpenSelect(!openSelect);
    };
    const handelSelect = (e) => {
        setSelectedOption(e);
        setOpenSelect(false);
        setDrpOption(tempArr);
    };

    const handelSelectall = () => {
        let arr = []
        if (checkall === false) {
            for (let i = 0; i < drpOption.length; i++) {
                drpOption[i].ischecked = true;
                arr.push(drpOption[i].name)
            }
            setSelectedVal(arr);
        }
        else {
            for (let i = 0; i < drpOption.length; i++) {
                drpOption[i].ischecked = false;
                arr.push(drpOption[i].name)
            }
            setSelectedVal([]);
        }
        setCheckall(!checkall);
    }

    const handleSearchDropdown = () => {
        var input, search;
        let filterData = [];
        input = document.getElementById("search_drop");
        search = input.value.toUpperCase();
        filterData = tempArr.filter((item) => {
            if (item.name.toUpperCase().indexOf(search) !== -1) {
                return true;
            }
        });
        setDrpOption(filterData);
    };
    return (
        <div className=" Segcon_multiSelect mt-2">
            <div onClick={handelOpen} className="selecedOption">
                {(props.type === "MultiSelect" && selectedVal?.length === 0) ? (
                    <div className=" multiselect_option">
                        <p className="mb-0 zoom_me">{selectedOption}</p>
                    </div>
                ) :
                    selectedVal?.length === 1 || selectedVal?.length === 2 ?
                        <ul>
                            {selectedVal.map((element, index) => {
                                return <li className="zoom_me" key={index}>{element}</li>;
                            })}
                        </ul> :
                        selectedVal?.length > 2 ?
                            <span className="zoom_me">{selectedVal?.length + " Selected"}</span>
                            :
                            <p className="zoom_me mb-0 d-flex">{selectedOption}
                            </p>}
                {selectedOption !== props.label ? <p className="move_up m-0">{props.label}</p> : null}
                <img loading="lazy" src={icon.downarrow.src} alt="downarrow" />
            </div>
            {openSelect ? (
                <div className={"label_collection"} id="options_ul">
                    <div className="search_main">
                        <img loading="lazy" className="search_logo" src={search} alt="plus icon" />
                        <input
                            id="search_drop"
                            type="text"
                            placeholder="Search"
                            onKeyUp={handleSearchDropdown}
                            className="dropbtn"
                        />
                        {props.type === "MultiSelect" ?
                            <div className="d-flex align-items-center">
                                <input type="checkbox" className="mx-2" id="selectall" checked={checkall} onChange={() => { handelSelectall() }} />
                                <label htmlFor="selectall"> All</label>
                            </div> : null}
                    </div>
                    <div className="blank_line_DROP"></div>
                    {drpOption?.length === 0 ? <p className="m-0 p-2">No Search Results!!!</p> : null}
                    {drpOption?.length > 0 && drpOption.map((ele, index) => {
                        return (
                            <div className="check_with_label" key={index}>
                                {props.type === "MultiSelect" ?
                                    <div className="d-flex">
                                        <input id={ele.name}
                                            onChange={(e) => handleChange(e)}
                                            checked={ele.ischecked}
                                            value={ele.name}
                                            type="checkbox" />
                                        <label htmlFor={ele.name}>{ele.name}</label> </div> :
                                    <label
                                        className="label"
                                        key={index}
                                        onClick={() => {
                                            handelSelect(ele.name);
                                        }}
                                    >
                                        {ele.name}
                                    </label>
                                }
                            </div>
                        );
                    })
                    }
                </div>
            ) :
                null
            }
        </div>
    )
}

export default MultiFunctionalDropdown