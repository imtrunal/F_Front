import React from "react";
import { NavLink } from "react-router-dom";
import mrpm21N from "../../../../images/mrpm21N.png";
import mrpm22 from "../../../../images/mrpm22.png";
import mrpm23 from "../../../../images/mrpm23.png";
import mrpm24 from "../../../../images/mrpm24.png";
import mrpm25 from "../../../../images/mrpm25.png";
import feedBack from "../../../../images/feedBack.png";
import openTelegram from "../../../../images/openTelegram.png";

const Paytm = () => {
  return (
 <>
  <div>
        <div className="opse"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm21N} alt="" className="mrpmN" />
        </div>
      </div>
      <div>
        <div className="opse1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm22} alt="" className="mrpmN1" />
        </div>
      </div>
      <div>
        <div className="opse1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm23} alt="" className="mrpmN2" />
        </div>
      </div>
      <div>
        <div className="opse1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm24} alt="" className="mrpmN2" />
        </div>
      </div>
      <div>
        <div className="opse1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm25} alt="" className="mrpmN3" />
        </div>
      </div>
      <div>
        <div className="opse"></div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div style={{ padding: "22px" }}>
            <NavLink to="/recharga">
              <button className="igotit">I got it</button>
            </NavLink>
            <p className="provide">
              If you have any questions, please contact us, we provide services
              24 hours a day:
            </p>
            <div>
              <img src={feedBack} alt="" className="telegram1" />
              <img src={openTelegram} alt="" className="telegram" />
            </div>
          </div>
        </div>
      </div>
 </>
  )
}

export default Paytm