import React from "react";
import { NavLink } from "react-router-dom";
import feedBack from "../../../../images/feedBack.png";
import openTelegram from "../../../../images/openTelegram.png";
import mrpm21q from "../../../../images/mrpm21q.png";
import mrpm22q from "../../../../images/mrpm22q.png";
import mrpm23q from "../../../../images/mrpm23q.png";
import mrpm24q from "../../../../images/mrpm24q.png";
import mrpm25q from "../../../../images/mrpm25q.png";
import mrpm26q from "../../../../images/mrpm26q.png";
import mrpm27q from "../../../../images/mrpm27q.png";


const QRPaytm = () => {
  return (
<section>
        <div>
          <div>
            <div className="opse"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm21q} alt="" className="mrpmN" />
            </div>
          </div>
          <div>
            <div className="opse1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm22q} alt="" className="jeki1" />
            </div>
          </div>
          <div>
            <div className="opse1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm23q} alt="" className="mrpm23q" />
            </div>
          </div>
          <div>
            <div className="opse1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm24q} alt="" className="jeki1" />
            </div>
          </div>
          <div>
            <div className="opse1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm25q} alt="" className="mrN3" />
            </div>
          </div>
          <div>
            <div className="opse1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm26q} alt="" className="mrpm3" />
            </div>
          </div>
          <div>
            <div className="opse1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm27q} alt="" className="Aget3" />
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
                  If you have any questions, please contact us, we provide
                  services 24 hours a day:
                </p>
                <div>
                  <img src={feedBack} alt="" className="telegram1" />
                  <img src={openTelegram} alt="" className="telegram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default QRPaytm