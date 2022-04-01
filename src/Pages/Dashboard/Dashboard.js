import React from 'react';
import { NavbarDefault } from "../../Assets/Components/Navbar/NavbarDefault";
import { SidebarDefault} from "../../Assets/Components/Sidebar/SidebarDefault";
import { Table } from '../../Assets/Components/Table/Table';
import './Dashboard.css';

export const Dashboard = () => {
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
      <Table/>
    </div>
          
  </div>
    
  )
}