import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import car from "../../Img/image 1.png";
import icondel from "../../Img/fi_trash-2.png";
import iconedit from "../../Img/fi_edit.png";
import '../Card/Card.css'

export const CardDefault = () => {
  return (
 
      <div className="card">
        <img src={car} className="card-img-top"/>
        <div className="card-body">
          <p className="card-text">Nama/Tipe Mobil</p>
          <h5 className="card-title">Rp 430.000 / hari</h5>
          <p className="card-text"><i class={}></i>Start rent - Finish rent</p>
          <p className="card-text"><i class="fab fa-twitter me-2"></i> Updated at 4 Apr 2022, 09.00</p>
          <a href="#" className="btn btn-outline-danger"><i class="fab fa-twitter me-2"></i>Delete</a>
          <a href="#" className="btn btn-success"><i class="fab fa-twitter me-2"></i>Edit</a>
        </div>

      
    </div>
  );
};

