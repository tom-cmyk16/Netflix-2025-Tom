import React from "react";
import "./Hader.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Hader() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <span>NITFLIX</span>
            </li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by languages</li>
          </ul>
        </div>

        <div className="header_write">
          <ul>
            <li><SearchIcon/></li>
            <li>< NotificationsIcon/></li>
            <li><AccountCircleIcon/></li>
            <li><ArrowDropDownIcon/></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Hader;
