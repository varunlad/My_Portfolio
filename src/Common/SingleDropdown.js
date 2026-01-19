import React, { useEffect, useState } from "react";
import "./CommonComponent.scss";
import downarrow from "../Assets/Images/new_white_down_icon.svg";
import search from "../Assets/Images/searchs.svg";


function ErReactMultiSelect(props) {
    const [drpOption, setDrpOption] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedVal, setSelectedVal] = useState([]);
    const [openSelect, setOpenSelect] = useState(false);
    const [checkall, setCheckall] = useState(false);
    const [tempArr, setTempArr] = useState([]);
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        setSelectedOption(props.attrLabel);
        setSelectedVal([])
        let tempOption = props.options;
        let newArr = [];
        for (let i = 0; i < tempOption.length; i++) {
            newArr.push({ lable: props.options[i].lable, isChecked: false });
        }
        setDrpOption(newArr);
        setTempArr(newArr);
        setCheckall(false);
    }, [props]);

    const handleChange = (event) => {
        const { checked, id } = event.currentTarget;
        let SelArrEle = drpOption.findIndex((ele) => ele?.lable === id);
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

        if (drpOption.length === sel.length && drpOption.length > 1) {
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
                arr.push(drpOption[i].lable)
            }
            setSelectedVal(arr);
        }
        else {
            for (let i = 0; i < drpOption.length; i++) {
                drpOption[i].ischecked = false;
                arr.push(drpOption[i].lable)
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
        // eslint-disable-next-line array-callback-return
        filterData = tempArr.filter((item) => {
            if (item.lable.toUpperCase().indexOf(search) !== -1) {
                return true;
            }
        });
        if(selectedVal.length >= filterData.length ){
            setCheckall(true);
        }
        else{
            setCheckall(false);
        }
        setDrpOption(filterData);
        setSearchValue(input.value);
    };
    return (
        <div className="ER_multiSelect" >
            <div onClick={handelOpen} className="selecedOption" style={props?.width !== '' || props?.primaryColor !== ''  ? {width:props.width,border:"1px solid "+props.primaryColor}: null}>
                {selectedVal?.length !== 0 ? <p style={props?.primaryColor !== '' ? {color:props.primaryColor}: null} className="move_up">{props.attrLabel}</p> : null}
                {(props.ismultiselect && selectedVal?.length === 0) ? (
                    <div className=" multiselect_option">
                        <p style={props?.primaryColor !== '' ? {color:props.primaryColor}: null} className=" my_text zoom_me">{selectedOption}</p>
                    </div>
                ) :
                props.ismultiselect && selectedVal?.length <= 2 ?
                        <ul>
                            {selectedVal.map((element, index) => {
                                return <li style={props?.primaryColor !== '' ? {color:props.primaryColor}: null} className="zoom_me" key={index}>{element}</li>;
                            })}
                        </ul> :
                        selectedVal?.length > 2 ?
                            <span className="zoom_me my_Selected selecteddVal" style={props?.primaryColor !== '' ? {color:props.primaryColor}: null}>{selectedVal?.length + " Selected"}</span>
                            :
                            <p  style={props?.primaryColor !== '' ? {color:props.primaryColor}: null} className="zoom_me my_text ">{selectedOption}
                            </p>}
                {selectedOption !== props.attrLabel  ? <p className="move_up" style={props?.primaryColor !== '' ? {color:props.primaryColor}: null}>{props.attrLabel}</p> : null}
                <img loading="lazy" className={openSelect ? "rotate_me" : ""} src={downarrow} alt="plus icon" />
            </div>
            {openSelect ? (
                <div className={"label_collection"} id="options_ul" style={props?.width !== '' || props?.height !== '' ? {width:props?.width,height:props?.height,position:props?.position,background:props?.backGround}: {position:props?.position,background:props?.backGround}}>
                    <div className="search_main">
                        {props.isSearch &&
                            <>
                                <img loading="lazy" className="search_logo" src={search} alt="plus icon" />
                                <input
                                    id="search_drop"
                                    type="text"
                                    placeholder="Search"
                                    onChange={handleSearchDropdown}
                                    className="dropbtn"
                                    value={searchValue}
                                />
                            </>
                        }
                        {props.ismultiselect && props.isSelectAll && drpOption.length > 1 && searchValue.length === 0 ?
                            <div className="all_select">
                                <input type="checkbox" id="selectall"  style={props?.primaryColor !== '' ? {accentColor:props.primaryColor}: null} checked={checkall} onChange={() => { handelSelectall() }} />
                                <label htmlFor="selectall">Select All</label>
                            </div> : null}
                    </div>
                    {drpOption?.length === 0 ? <p className="no_search">No search result found.</p> : null}
                    <ul>
                        {drpOption?.length > 0 && drpOption.map((ele, index) => {
                            return (
                                <li key={index} style={{listStyle:"none"}}>
                                    <div className="check_with_label" key={index}>
                                        {props.ismultiselect ?
                                            <div className="my_lable_box">
                                                <input id={ele.lable}
                                                    onChange={(e) => handleChange(e)}
                                                    checked={ele.ischecked}
                                                    value={ele.lable}
                                                    style={props?.primaryColor !== '' ? {accentColor:props.primaryColor}: null}
                                                    type="checkbox" />
                                                <label htmlFor={ele.lable}>{ele.lable}</label> </div> :
                                            <label
                                                className={selectedOption === ele.lable ? "selected_lable" : "my_label"}
                                                style={props?.primaryColor !== '' ? {color:selectedOption === ele.lable && props.primaryColor}: null}
                                                key={index}
                                                onClick={() => {
                                                    handelSelect(ele.lable);
                                                }}>
                                                {ele.lable}
                                            </label>
                                        }
                                    </div>
                                </li>
                            );
                        })
                        }
                    </ul>
                </div>
            ) :
                null
            }
        </div>
    )
}

export default ErReactMultiSelect