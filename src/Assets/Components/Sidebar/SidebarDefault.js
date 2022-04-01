import React from "react";
import fi_home from "../../Img/fi_home.png";
import fi_cars from "../../Img/fi_truck.png";
import './Sidebar.css';


export const SidebarDefault = () => {
  return (
    <div className="sidebar">
        
        <div className="boxsidebar1">
            <div className="rectanglesidebar"></div>
        </div>

        <div className="boxsidebar2">
            <img src={fi_home} className="iconhome"></img>
            <a href="#home">Dashboard</a>
        </div>

        <div className="boxsidebar3">
            <img src={fi_cars} className="iconcar"></img>
            <a href="#services">Cars</a>
        </div>
        
    </div>
  );
};





