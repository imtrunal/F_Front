import React from "react";
import { NavLink } from "react-router-dom";
import mrpm11N from "../../../../images/mrpm11N.png";
import mrpm12N from "../../../../images/mrpm12N.png";
import mrpm13N from "../../../../images/mrpm13N.png";
import mrpm14N from "../../../../images/mrpm14N.png";
import mrpm15N from "../../../../images/mrpm15N.png";
import feedBack from "../../../../images/feedBack.png";
import openTelegram from "../../../../images/openTelegram.png";

const Gpay = () => {
  return (
<>
<div>
        <div className="opse"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm11N} alt="" className="mrpmN" />
        </div>
      </div>
      <div>
        <div className="opse1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm12N} alt="" className="mrpm1" />
        </div>
      </div>
      <div>
        <div className="opse1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm13N} alt="" className="mrpmN2" />
        </div>
      </div>
      <div>
        <div className="opse1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm14N} alt="" className="mrpmN2" />
        </div>
      </div>
      <div>
        <div className="opse1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img src={mrpm15N} alt="" className="Aget3" />
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

export default Gpay