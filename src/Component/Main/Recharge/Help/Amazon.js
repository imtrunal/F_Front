import React from "react";
import { NavLink } from "react-router-dom";
import mrpm71N from "../../../../images/mrpm71N.png";
import mrpm72 from "../../../../images/mrpm72.png";
import mrpm73 from "../../../../images/mrpm73.png";
import mrpm74 from "../../../../images/mrpm74.png";
import mrpm75 from "../../../../images/mrpm75.png";
import mrpm76 from "../../../../images/mrpm76.png";
import feedBack from "../../../../images/feedBack.png";
import openTelegram from "../../../../images/openTelegram.png";

const Amazon = () => {
  return (
<>
<div>
        <div className="opse"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm71N} alt="" className="mrpmN" />
        </div>
      </div>
      <div>
        <div className="opse1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm72} alt="" className="prms1" />
        </div>
      </div>
      <div>
        <div className="opse1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm73} alt="" className="mrpmN2" />
        </div>
      </div>
      <div>
        <div className="opse1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm74} alt="" className="mrpm2" />
        </div>
      </div>
      <div>
        <div className="opse1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm75} alt="" className="mrpm3" />
        </div>
      </div>

      <div>
        <div className="opse1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm76} alt="" className="Aget3" />
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

export default Amazon