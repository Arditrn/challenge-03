import React from 'react';
import { CardDefault } from '../../Assets/Components/Card/CardDefault';
import { NavbarDefault } from "../../Assets/Components/Navbar/NavbarDefault";
import { SidebarDefault} from "../../Assets/Components/Sidebar/SidebarDefault";
import './Homepage.css';

export const Homepage = () => {
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
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><strong></strong></a>
        </li>   
        </ul>
    </div>
    <div className='content2'>
      
    </div>
          
  </div>

        
      


  );
};