import React from 'react';
import { SidebarDefault } from '../../Assets/Components/Sidebar/SidebarDefault';
import { NavbarDefault } from '../../Assets/Components/Navbar/NavbarDefault';
import { CardDefault } from '../../Assets/Components/Card/CardDefault';

export const Cars = () => {
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
