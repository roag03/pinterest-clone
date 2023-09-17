import React, { useState } from "react";
import "./Header.css";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import FaceIcon from "@mui/icons-material/Face";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";



function Header(props) {
  const [input, setInput] = useState("");

  const onSearchSubmit = (e) => {

    e.preventDefault();
      props.onSubmit(input)
   
  };
  return (
    <div className="header">
      {/* logo */}
      <PinterestIcon style={{ fontSize: 32 }} className="header__icon" />
      {/* home button */}
      <button className="header__homeButton">Home</button>

      {/* today button */}
      <button className="header__todayButton">Today</button>
      {/* search icon */}
      <div className="header__searchBar">
        <form className="header__form">
          <SearchIcon className="header__searchIcon" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={onSearchSubmit}    ></button>
        </form>
      </div>

      {/* 4icons*/}
      <div className="header__lastIcons">
        {/* notification */}
        <NotificationsIcon />
        {/* message */}
        <MapsUgcIcon />
        {/* face Icon */}
        <FaceIcon />
        {/* keydown */}
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );
}

export default Header;
