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
      <div className='content1'>konten 1</div>
      <div className='content2'>
        <CardDefault/>
      </div>
            
    </div>

        
      


  );
};