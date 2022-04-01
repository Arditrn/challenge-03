import React from 'react';
import { NavbarDefault } from "../../Assets/Components/Navbar/NavbarDefault";
import { SidebarDefault} from "../../Assets/Components/Sidebar/SidebarDefault";
import { CardDefault } from '../../Assets/Components/Card/CardDefault';
import 'bootstrap/dist/css/bootstrap.css';
import '../Cars/Cars.css';

export const Cars = () => {
  return (

    <div className='Container'>
    <nav>
      <NavbarDefault/>
    </nav>
    <div className='Sidebar'>
      <SidebarDefault/>
    </div>
    <div className='content1'>
    <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">CARS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><strong>Cars</strong></a>
        </li>   
        </ul>
    </div>
    <div className='content2'>
      <CardDefault/>
    </div>
          
  </div>
    
  )
}