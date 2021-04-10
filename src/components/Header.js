import React from "react";
import "../assets/styles/header.scss";

import {
  data,
  githubCatSvg,
  notificationSvg,
  addSvg,
  inputSvg,
  repositoriesSvg,
  signoutSvg,
} from "../assets/data";
import me from "../assets/me.png";
export const Header = () => {
  const {
    topBar: { inputDropdownList, addDropdownList, accountDropdownList },
  } = data;
  {
    const [styles, setStyles] = React.useState({
      displaySearch: "none",
      widthSearch: "545px",
      detailsOpen: false,
      ddList: [],
      displayDetails: "none",
    });
    const handleStyle = (e) => {
      // e.bubbles=false
      console.log(e.target.parentNode);
      switch (e.target.parentNode.id) {
        case "search":
          setStyles((prevState) => ({
            ...prevState,
            displaySearch: "block",
            widthSearch: "545px",
          }));
          break;
        case "add":
          setStyles((prevState) => ({
            ...prevState,
            displaySearch: "none",
            detailsOpen: !prevState.open,
            displayDetails:
              prevState.displayDetails === "block" ? "none" : "block",
            ddList: addDropdownList,
            marginList: "50px",
          }));
          break;
        case "avatar":
          setStyles((prevState) => ({
            ...prevState,
            displaySearch: "none",
            detailsOpen: !prevState.open,
            displayDetails:
              prevState.displayDetails === "block" ? "none" : "block",
            ddList: accountDropdownList,
            marginList: "20px",
          }));
          break;
        default:
          setStyles((prevState) => ({
            ...prevState,
            detailsOpen: false,
            displayDetails: "none",
            widthSearch: "264px",
            displaySearch: "none",
          }));
          break;
      }
    };
    const handleClose = (e) => {
      // e.stopPropagation()
      !["search", "add", "avatar"].includes(e.target.parentNode.id)
        ? setStyles({
            displaySearch: "none",
            widthSearch: "264px",
            detailsOpen: false,
            ddList: [],
            displayDetails: "none",
          })
        : null;
    };
    React.useEffect(() => {
      window.addEventListener("click", handleClose);
      return () => {
        window.removeEventListener("click", handleClose);
      };
    }, []);
    return (
      <header onClick={handleStyle}>
        <div className="github-icon">
          <a>{githubCatSvg}</a>
        </div>
        <div className="searchbar">
          <label id="search">
            <input placeholder="Search or jump to..." />
            <span>{inputSvg}</span>
          </label>
          <ul
            style={{ display: styles.displaySearch, width: styles.widthSearch }}
          >
            {inputDropdownList.map((el) => {
              return (
                <li key={el.id}>
                  <span>{repositoriesSvg}</span>
                  <p>{el.title}</p>
                  <button>Jump to</button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="menus">
          <div>
            <a>Pull requests</a>
          </div>
          <div>
            <a>Issues</a>
          </div>
          <div>
            <a>Marketplace</a>
          </div>
          <div>
            <a>Explore</a>
          </div>
        </div>
        <div className="right-tools">
          <span id="notification">{notificationSvg}</span>
          <span id="add">
            {addSvg}
            <i
              className="fa fa-caret-down"
              style={{ fontSize: "12px", color: "#cdd9e5" }}
            ></i>
          </span>
          <span id="avatar">
            <img alt="me" src={me} />
            <i
              className="fa fa-caret-down"
              style={{ fontSize: "12px", color: "#cdd9e5" }}
            ></i>
          </span>

          <details
            id="summary"
            open={styles.detailsOpen}
            style={{
              marginRight: styles.marginList,
              display: styles.displayDetails,
            }}
          >
            <summary></summary>
            {{} &&
              styles.ddList.map((el) => {
                return <p key={el.key}>{el.title}</p>;
              })}
          </details>
        </div>
      </header>
    );
  }
};
