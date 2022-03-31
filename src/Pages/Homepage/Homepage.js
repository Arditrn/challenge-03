import React from 'react';
import { CardDefault } from '../../Assets/Components/Card/CardDefault';
import { NavbarDefault } from "../../Assets/Components/Navbar/NavbarDefault";
import { SidebarDefault} from "../../Assets/Components/Sidebar/SidebarDefault";
import './Homepage.css';

export const Homepage = () => {
  return (

      <div className='parent'>
        <div className='sidebar'>
          <SidebarDefault />
        </div>

        <div className='konten'>
          <NavbarDefault />
          <CardDefault />
        </div>

      </div>
        
      


  )
}