import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../Navbar/Navbar.css';
import fi_menu from "../../Img/fi_menu.png";
import fi_profil from "../../Img/Group 15.png";
import Vektor from "../../Img/Vector.png";




export const NavbarDefault = () => {
  return (
    <div>
 
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <div className="rectanglebrand"></div>
    </a>
    <img src={fi_menu} className="icon-menu"></img>
    <form className="d-flex justify-content-center" id="navkanan">
        <input type="search" className="form-control mf-dashboard-search-input" placeholder="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
          &emsp;
          <img src={fi_profil} alt="" className="iconprofil" />
          <spam className="namaprofil">Ardi Triyana</spam>
          <img src={Vektor} alt="" className="iconvector" />
        </form>
    {/* <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </nav>

      
    </div>
  );
};