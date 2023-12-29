import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import rechargeHeader from "../../../images/rechargeHeader.png";
import rechargeType from "../../../images/rechargeType.png";
import chooseTypeM4B from "../../../images/chooseTypeM4B.png";
import chooseTypeM1B from "../../../images/chooseTypeM1B.png";
import chooseTypeM2B from "../../../images/chooseTypeM2B.png";
import chooseTypeM3B from "../../../images/chooseTypeM3B.png";
import mrpm31N from "../../../images/mrpm31N.png";
import mrpm32q from "../../../images/mrpm32q.png";
import mrpm33 from "../../../images/mrpm33.png";
import mrpmNew34 from "../../../images/mrpmNew34.png";
import mrpm from "../../../images/mrpm.png";
import feedBack from "../../../images/feedBack.png";
import openTelegram from "../../../images/openTelegram.png";
import arrowLeft from "../../../images/arrowLeft.png"
import Paytem from "./Help/Paytm";
import Amozon from "./Help/Amazon";
import Gpay from "./Help/Gpay";
import Qrcode from "./Help/QrCode";

import vidoes from "../../../images/rechargeGuideNew.mov";

function Help() {
    const [data, setData] = useState(true);
const navigate=useNavigate()
    const change = () => {
        setData(!data);
    };

    const [state, setState] = useState({
        phonepe: true,
        paytm: false,
        Amozon: false,
        gpay: false,
    });

    const handelclick = () => {
        setState({
            ...state,
            phonepe: true,
            paytm: false,
            Amozon: false,
            gpay: false,
        });
    };

    const handelclick1 = () => {
        setState({
            ...state,
            paytm: true,
            phonepe: false,
            Amozon: false,
            gpay: false,
        });
    };

    const handelclick2 = () => {
        setState({
            ...state,
            Amozon: true,
            phonepe: false,
            paytm: false,
            gpay: false,
        });
    };

    const handelclick3 = () => {
        setState({
            ...state,
            gpay: true,
            phonepe: false,
            paytm: false,
            Amozon: false,
        });
    };


    return (
        <>
            <section>
                <div className="container1">
                    <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-1k9zyfm r-1777fci r-p1pxzi r-bnwqim r-13qz1uu" style={{borderBottomColor: "rgb(241, 241, 241)"}}>
                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-18rd0c5 r-1loqt21 r-1k9zyfm r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{transitionDuration: "0s"}}>
                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" onClick={()=>navigate(-1)} style={{height: "34px", width: "16px"}}>
                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" 
                                style={{backgroundImage: `url(${arrowLeft})`}}></div>
                                <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd"/></div>
                        </div>
                        <div dir="auto" className="css-901oao r-b88u0q f-20" style={{color: "rgb(0, 0, 0)", fontSize: "26px", textAlign: "center"}}>Recharge instructions</div>
                    </div>
                    <div className="">
                        <div className="geWqpRE"></div>
                    </div>
                    <div className="instructions">
                        <div className="row r-help">
                            <div className="col-md-12">
                                <img src={rechargeHeader} alt=" " className="header" />
                            </div>
                        </div>
                        <div className="">
                            <div className="geWqpRE"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 pay">
                                <NavLink to="">
                                    <button
                                        className={`upipay  ${data ? "chngepage" : "chngepage1"}`}
                                        onClick={change}
                                    >
                                        UPI PAY
                                    </button>
                                </NavLink>
                                <NavLink to="">
                                    <button
                                        className={`upipay ${data ? "chngepage1" : "chngepage"}`}
                                        onClick={change}
                                    >
                                        QR code
                                    </button>
                                </NavLink>
                            </div>
                        </div>

                        <div className={data ? "fristpage" : "secondpage"}>
                            <div className="row">
                                <div className="col-md-12">
                                    <video width="320" height="240" controls>
                                        <source src={vidoes} type="video/mp4" />
                                        <source src={vidoes} type="video/ogg" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 videodemo">Video Demo</div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <img
                                        src={rechargeType}
                                        alt=""
                                        className="r-recharge"
                                        style={{
                                            height: "937px",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12  process">
                                    Use process of 4 payment methods:
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12" style={{ display: "contents" }}>
                                    <div className="col-md-3">
                                        <NavLink to="">
                                            <button
                                                className={
                                                    state.phonepe ? "choosetype1" : "choosetype5"
                                                }
                                                onClick={handelclick}
                                            >
                                                <img
                                                    src={chooseTypeM4B}
                                                    alt=""
                                                    className="choosetype"
                                                />
                                            </button>
                                        </NavLink>
                                    </div>
                                    <div className="col-md-3">
                                        <NavLink to="">
                                            <button
                                                className={state.paytm ? "choosetype2" : "choosetype6"}
                                                onClick={handelclick1}
                                            >
                                                <img
                                                    src={chooseTypeM3B}
                                                    alt=""
                                                    className="choosetype"
                                                />
                                            </button>
                                        </NavLink>
                                    </div>
                                    <div className="col-md-3">
                                        <NavLink to="">
                                            <button
                                                className={state.Amozon ? "choosetype3" : "choosetype7"}
                                                onClick={handelclick2}
                                            >
                                                <img
                                                    src={chooseTypeM1B}
                                                    alt=""
                                                    className="choosetype"
                                                />
                                            </button>
                                        </NavLink>
                                    </div>
                                    <div className="col-md-3">
                                        <NavLink to="">
                                            <button
                                                className={state.gpay ? "choosetype4" : "choosetype8"}
                                                onClick={handelclick3}
                                            >
                                                <img
                                                    src={chooseTypeM2B}
                                                    alt=""
                                                    className="choosetype"
                                                />
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            {state.phonepe && (
                                <div>
                                    <div>
                                        <div className="opse JqbiwbW1"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img src={mrpm31N} alt="" className="mrpmN" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="opse1"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img src={mrpm32q} alt="" className="mrpmN1" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="opse1"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img src={mrpm33} alt="" className="mrpmN2" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="opse1"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img src={mrpmNew34} alt="" className="mrpmN2" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="opse1"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img src={mrpm} alt="" className="mrpmN3" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="opse"></div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div style={{ padding: "22px" }}>
                                                <NavLink to="/tabIndex/2">
                                                    <button className="igotit">I got it</button>
                                                </NavLink>
                                                <p className="provide">
                                                    If you have any questions, please contact us, we
                                                    provide services 24 hours a day:
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
                            {state.paytm && (
                                <div>
                                    <Paytem />
                                </div>
                            )}
                            {state.Amozon && (
                                <div>
                                    <Amozon />
                                </div>
                            )}
                            {state.gpay && (
                                <div>
                                    <Gpay />
                                </div>
                            )}
                        </div>
                        <div className={data ? "secondpage" : "fristpage"}>
                            <Qrcode />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Help;
