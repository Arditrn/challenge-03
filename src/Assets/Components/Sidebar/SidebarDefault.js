import React from "react";
import fi_home from "../../Img/fi_home.png";
import fi_cars from "../../Img/fi_truck.png";
import './Sidebar.css';


export const SidebarDefault = () => {
  return (
    <div className="sidebar">
        
        <div className="boxsidebar">
            <div className="rectangle"></div>
        </div>

        <div className="boxsidebar">
            <img src={fi_home} className="icon"></img>
            <a href="#home">Dashboard</a>
        </div>

        <div className="boxsidebar">
            <img src={fi_cars} className="icon"></img>
            <a href="#services">Cars</a>
        </div>
        
    </div>
  );
};





