import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* cloumn 1*/}
          <div className="col">
            <h4>GIFT OF BLOOD</h4>
            <ul className="list-unstyled">
              <li>No. 555/5D, Elvitigala Mawatha,</li>
              <li>Narahenpita,Colombo 05,</li>
              <li>Sri Lanka</li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ul className="list-unstyled">
              <li>Dank mems</li>
              <li>nianjwd</li>
              <li>jkaujnaw</li>
            </ul>
          </div>
          {/* column 3 */}
          <div className="col">
            <h4>Stuff</h4>
            <ul className="list-unstyled">
              <li>Dank mems</li>
              <li>nianjwd</li>
              <li>jkaujnaw</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} GIFT OF BLOOD | All right reserved
            | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
