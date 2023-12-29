import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import qrcode from "../../../../images/qrcode.png";
import feedBack from "../../../../images/feedBack.png";
import openTelegram from "../../../../images/openTelegram.png";
import chooseTypeM4B from "../../../../images/chooseTypeM4B.png";
import chooseTypeM1B from "../../../../images/chooseTypeM1B.png";
import chooseTypeM3B from "../../../../images/chooseTypeM3B.png";
import mrpm31q from "../../../../images/mrpm31q.png";
import mrpm32w from "../../../../images/mrpm32w.png";
import mrpm33q from "../../../../images/mrpm33q.png";
import mrpm34q from "../../../../images/mrpm34q.png";
import mrpm35q from "../../../../images/mrpm35q.png";
import mrpm36q from "../../../../images/mrpm36q.png";
import mrpm37q from "../../../../images/mrpm37q.png";
import Qrpaytem from "./QRPaytm";
import Qgpay from "./QGpay";

const QrCode = () => {
    const [text, setText] = useState({
        qpaytem: true,
        qponepay: false,
        qgpay: false,
      });
    
      const handelclick = () => {
        setText({
          ...text,
          qpaytem: false,
          qponepay: true,
          qgpay: false,
        });
      };
    
      const handelclick1 = () => {
        setText({
          ...text,
          qpaytem: true,
          qponepay: false,
          qgpay: false,
        });
      };
    
      const handelclick2 = () => {
        setText({
          ...text,
          qpaytem: false,
          qponepay: false,
          qgpay: true,
        });
      };
    
      return (
        <>
          <div className="container1">
            <div className="row">
              <div className="col-md-12 videodemo">
                <img src={qrcode} alt="" style={{ height: "410px" }} className="qr-width" />
              </div>
            </div>
    
            <div className="row">
              <div className="col-md-12  process">
                Use process of 3 payment methods:
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-12"
                style={{ display: "flex", widht: "483px" }}
              >
                <div className="col-md-4">
                  <NavLink to="">
                    <button
                      className={text.qponepay ? "choosetype1" : "choosetype5"}
                      onClick={handelclick}
                    >
                      <img src={chooseTypeM4B} alt="" className="choosetype" />
                    </button>
                  </NavLink>
                </div>
                <div className="col-md-4">
                  <NavLink to="">
                    <button
                      className={text.qpaytem ? "choosetype2" : "choosetype6"}
                      onClick={handelclick1}
                    >
                      <img src={chooseTypeM3B} alt="" className="choosetype" />
                    </button>
                  </NavLink>
                </div>
    
                <div className="col-md-4">
                  <NavLink to="">
                    <button
                      className={text.qgpay ? "choosetype3" : "choosetype7"}
                      onClick={handelclick2}
                    >
                      <img src={chooseTypeM1B} alt="" className="choosetype" />
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            {text.qponepay && (
              <div>
                <div>
                  <div className="opse JqbiwbW1"></div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <img src={mrpm31q} alt="" className="mrpmN" />
                  </div>
                </div>
                <div>
                  <div className="opse1"></div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <img src={mrpm32w} alt="" className="mrpm22" />
                  </div>
                </div>
                <div>
                  <div className="opse1"></div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <img src={mrpm33q} alt="" className="mrpm23" />
                  </div>
                </div>
                <div>
                  <div className="opse1"></div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <img src={mrpm34q} alt="" className="mrpm24" />
                  </div>
                </div>
                <div>
                  <div className="opse1"></div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <img src={mrpm35q} alt="" className="mrpm25" />
                  </div>
                </div>
                <div>
                  <div className="opse1"></div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <img src={mrpm36q} alt="" className="mrpm25" />
                  </div>
                </div>
                <div>
                  <div className="opse1"></div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <img src={mrpm37q} alt="" className="Aget3" />
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
            )}
    
            {text.qpaytem && (
              <div>
                <Qrpaytem />
              </div>
            )}
            {text.qgpay && (
              <div>
                <Qgpay />
              </div>
            )}
          </div>
        </>
      );
    }
    

export default QrCode