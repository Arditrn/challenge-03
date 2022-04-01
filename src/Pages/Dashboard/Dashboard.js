import React from 'react';
import { NavbarDefault } from "../../Assets/Components/Navbar/NavbarDefault";
import { SidebarDefault} from "../../Assets/Components/Sidebar/SidebarDefault";
import { Table } from '../../Assets/Components/Table/Table';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.css';

export const Dashboard = () => {
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
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">DASHBOARD</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><strong>Dashboard</strong></a>
        </li>   
        </ul>
    </div>
    <div className='content2'>
      <Table/>
    </div>
          
  </div>
    
  )
}