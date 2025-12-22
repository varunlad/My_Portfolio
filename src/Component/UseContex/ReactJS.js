import { useContext, useState } from "react";
import * as icon from "../../Assets/Images/index";
import "./Common.scss";
import UserProfile from "./UserProfile";
import ErReactMultiSelect from "../../Common/SingleDropdown";
import UserContext from "../../Contex/UserContext";

function ReactJS() {
  const user = useContext(UserContext);
  const [arrOptions] = useState([
    { lable: "Red", value: "red" },
    { lable: "Green", value: "green" },
    { lable: "Pink", value: "pink" },
    { lable: "Orange", value: "orange" },
    { lable: "Yellow", value: "yellow" },
    { lable: "Blue", value: "blue" },
    { lable: "Gray", value: "gray" },
    { lable: "Black", value: "black" },
    { lable: "White", value: "white" },
  ]);
  const [dropdownType, setDropdownType] = useState("single");
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const [isSelectAllEnabled, setIsSelectAllEnabled] = useState(false);
  const [dropdownName, setDropdownName] = useState("Varun Custom Dropdown");
  const [primaryColor, setPrimaryColor] = useState("#1ed760");
  const [isCustom, setIsCustom] = useState(true);

  const handelIsCustom = () => {
    setIsCustom(!isCustom);
  };
  const handleDropdownTypeChange = (event) => {
    setDropdownType(event.target.value);
  };

  const handleSearchEnabledChange = (event) => {
    setIsSearchEnabled(event.target.value === "yes");
  };

  const handleSelectAllEnabledChange = (event) => {
    setIsSelectAllEnabled(event.target.value === "yes");
  };

  return (
    <div className="container my_smooth_animation">
      <div className="row box_shadow">
        <div className="col-md-12">
          <h3 style={{ color: "#1ed760" }}>
            {" "}
            React JS Skills
            <img
              className={user.windownView === 0 && "my_icons"}
              src={icon.react.src}
              alt="react"
            />{" "}
          </h3>
          <p className="d-flex">
            <span className="mx-2">&#187;</span>
            Proficient in building both Class Components and Functional
            Components in ReactJS.
          </p>
          <p className="d-flex">
            <span className="mx-2">&#187;</span>
            Extensive understanding and practical experience with React Hooks,
            including useEffect for managing side effects and component
            lifecycle .
          </p>
          <p className="d-flex">
            <span className="mx-2">&#187;</span>
            In-depth knowledge of React component lifecycle methods, including
            componentDidMount, componentDidUpdate, and componentWillUnmount.
          </p>
          <p className="d-flex">
            <span className="mx-2">&#187;</span>
            Skilled in creating custom reusable components and optimizing their
            performance for better code maintainability and scalability.
          </p>
          <p className="d-flex">
            <span className="mx-2">&#187;</span>
            Experience with state management libraries like Redux and Context
            API for managing complex application states efficiently.
          </p>
          <p className="d-flex">
            <span className="mx-2">&#187;</span>
            Familiarity with React Router for implementing navigation and
            routing within single-page applications (SPAs).
          </p>
          <p className="d-flex">
            <span className="mx-2">&#187;</span>
            Proficient in integrating third-party libraries and APIs into React
            applications to enhance functionality and user experience.
          </p>
          <p className="d-flex">
            <span className="mx-2">&#187;</span>
            Strong understanding of React best practices, code organization
            patterns, and design principles to ensure clean, maintainable, and
            scalable codebases.
          </p>
          <p className="d-flex">
            <span className="mx-2">&#187;</span>
            Experience in working with UI component libraries such as
            Material-UI, Ant Design, and Bootstrap for rapid prototyping and
            consistent UI design.
          </p>
          <p className="d-flex">
            <span className="mx-2">&#187;</span>
            Knowledge of modern JavaScript(ES6+) features and syntax, including
            arrow functions, destructuring, spread/rest operators, and template
            literals, to write concise and efficient code.
          </p>
        </div>

        <div className="col-md-12">
          <div className="my_card">
            <div
              onClick={handelIsCustom}
              style={{ cursor: "pointer" }}
              className="d-flex justify-content-between w-100"
            >
              <h3 style={{ color: "#1ed760" }}>Built custom component ?</h3>
              <img
                src={icon.new_white_down_icon.src}
                alt="icon"
                className={isCustom && "rotate_me"}
              />
            </div>
            {isCustom && (
              <form className="mb-3 zoom_me d-flex flex-column align-items-center">
                <p>
                  **Here I have made common select component which can be used
                  as both single and multi select with the help of props, we can
                  also add search, select all, theme color by simply passing the
                  respective props to my custom select component.
                </p>
                <div className="d-flex align-items-center mb-3">
                  Dropdown:
                  <input
                    type="radio"
                    value="single"
                    checked={dropdownType === "single"}
                    onChange={handleDropdownTypeChange}
                    className="mx-2"
                    id="selectSingle"
                  />
                  <label htmlFor="selectSingle">Single </label>
                  <input
                    type="radio"
                    value="multi"
                    checked={dropdownType === "multi"}
                    onChange={handleDropdownTypeChange}
                    className="mx-2"
                    id="selectMulti"
                  />
                  <label htmlFor="selectMulti">Multi</label>
                </div>
                <div className="d-flex align-items-center mb-3">
                  Search enabled:
                  <input
                    type="radio"
                    value="yes"
                    checked={isSearchEnabled}
                    onChange={handleSearchEnabledChange}
                    id="yes"
                    className="mx-2"
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    type="radio"
                    value="no"
                    checked={!isSearchEnabled}
                    onChange={handleSearchEnabledChange}
                    id="no"
                    className="mx-2"
                  />
                  <label htmlFor="no">No</label>
                </div>
                {dropdownType !== "single" && (
                  <div className="d-flex align-items-center mb-3 zoom_me">
                    Select all :
                    <input
                      type="radio"
                      value="yes"
                      checked={isSelectAllEnabled}
                      onChange={handleSelectAllEnabledChange}
                      id="yesSelect"
                      className="mx-2"
                    />
                    <label htmlFor="yesSelect">Yes</label>
                    <input
                      type="radio"
                      value="no"
                      checked={!isSelectAllEnabled}
                      onChange={handleSelectAllEnabledChange}
                      id="noSelect"
                      className="mx-2"
                    />
                    <label htmlFor="noSelect">No</label>
                  </div>
                )}
                <div className="d-flex align-items-center mb-3">
                  <label>Name:</label>
                  <input
                    type="text"
                    value={dropdownName}
                    onChange={(e) => setDropdownName(e.target.value)}
                    className="mx-2"
                  />
                </div>
                <div className="d-flex align-items-center mb-3">
                  <label>Primary color:</label>
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="mx-2"
                  />
                </div>
              </form>
            )}
            {isCustom && (
              <p style={{ color: "#1ed760" }} className="m-0 mb-2">
                Live Chages <i className="bi bi-arrow-down-up"></i>
              </p>
            )}
            <ErReactMultiSelect
              width={"250px"}
              height={"200px"}
              primaryColor={primaryColor}
              ismultiselect={dropdownType === "single" ? false : true}
              isSelectAll={isSelectAllEnabled}
              isSearch={isSearchEnabled}
              options={arrOptions}
              attrLabel={dropdownName}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="my_card">
            <h3 style={{ color: "#1ed760" }}>Use Contex Hook</h3>
            <UserProfile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactJS;
