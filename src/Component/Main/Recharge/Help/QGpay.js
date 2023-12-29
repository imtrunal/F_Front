import React from "react";
import feedBack from "../../../../images/feedBack.png";
import { NavLink } from "react-router-dom";
import openTelegram from "../../../../images/openTelegram.png";
import mrpm11q from "../../../../images/mrpm11q.png";
import mrpm12q from "../../../../images/mrpm12q.png";
import mrpm13q from "../../../../images/mrpm13q.png";
import mrpm14q from "../../../../images/mrpm14q.png";
import mrpm15q from "../../../../images/mrpm15q.png";
import mrpm16q from "../../../../images/mrpm16q.png";
import mrpm17q from "../../../../images/mrpm17q.png";

const QGpay = () => {
  return (
<section>
        <div>
          <div>
            <div className="opse"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm11q} alt="" className="mrpmN" />
            </div>
          </div>
          <div>
            <div className="opse1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm12q} alt="" className="jeki1" />
            </div>
          </div>
          <div>
            <div className="opse1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm13q} alt="" className="mrpm23q" />
            </div>
          </div>
          <div>
            <div className="opse1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm14q} alt="" className="mrpm24q" />
            </div>
          </div>
          <div>
            <div className="opse1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm15q} alt="" className="mrpm25" />
            </div>
          </div>
          <div>
            <div className="opse1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm16q} alt="" className="mrpm25" />
            </div>
          </div>
          <div>
            <div className="opse1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src={mrpm17q} alt="" className="Aget3" />
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

export default QGpay