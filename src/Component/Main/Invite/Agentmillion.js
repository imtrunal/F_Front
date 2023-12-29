import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import agentLv1 from "../../../images/agentLv1.png";
import agentLv2 from "../../../images/agentLv2.png";
import agentLv3 from "../../../images/agentLv3.png";
import agentLv4 from "../../../images/agentLv4.png";
import agentLv5 from "../../../images/agentLv5.png";
import agentLv6 from "../../../images/agentLv6.png";
import agentLv7 from "../../../images/agentLv7.png";
import agentLv1Done from "../../../images/agentLv1Done.png";
import agentLv2Done from "../../../images/agentLv2Done.png";
import agentLv3Done from "../../../images/agentLv3Done.png";
import agentLv4Done from "../../../images/agentLv4Done.png";
import agentLv5Done from "../../../images/agentLv5Done.png";
import agentLv6Done from "../../../images/agentLv6Done.png";

import backWhite from "../../../images/backWhite.png";
import { connect } from "react-redux";

import agentPlanTop from "../../../images/agentPlanTop.png";
import swal from "sweetalert";

import Swal from "sweetalert2";
import { GrowthPlanDetails, GrowthPlanStatusDetails } from "../../../redux/action/FetchData";
import Leval1 from "./Leval/Leval1";
import Leval1Modal from "./Leval/Leval1Modal";
import Leval2 from "./Leval/Leval2";
import Leval3 from "./Leval/Leval3";
import Leval4 from "./Leval/Leval4";
import Leval5 from "./Leval/Leval5";
import Leval6 from "./Leval/Leval6";
import Leval7 from "./Leval/Leval7";

function Agentmillion({ dispatch, res, res1 }) {
    const navigate = useNavigate()
    const [que, setque] = useState(false)
    const [leval1, setLeval1] = useState(false)
    const [leval2, setLeval2] = useState(false)
    const [leval3, setLeval3] = useState(false)
    const [leval4, setLeval4] = useState(false)
    const [leval5, setLeval5] = useState(false)
    const [leval6, setLeval6] = useState(false)
    const [leval7, setLeval7] = useState(false)


    const [collapse, setCollapse] = useState(false)
    const login_data = JSON.parse(sessionStorage.getItem('login'))

    const messgeprint = () => {
        swal({
            text: "Copy successfully",
            timer: 1400,
        });
    };
    const handleFinal = () => {
        setque(true)
    }
    useEffect(() => {
        dispatch(GrowthPlanDetails())
    }, [dispatch])
    const handleShow = (point, base, leval) => {
        setque(false)
        Swal.fire({
            title: `<h1 style="color:orange">+₹${point}</h1>`,
            html:
                `<h3>Congratultions on being promoted to ${base}</h3> <span style="font-size:21px">In Fiewin ,agent account withdrawal does not charge any handling fee, and there is no maximum amount limit of 30 for the first two times</span>`,

            showCancelButton: false,

            confirmButtonText: 'Go to Withdrawal',
            confirmButtonColor: "rgb(242, 123, 34)"
        }).then(async (result) => {
            dispatch(GrowthPlanStatusDetails({ leval: leval, userId: login_data.userId, point: point }))
            navigate("/withdraw/2")
        });
    }
    return (
        <>
            {que &&
                <Leval1Modal show={handleShow} />}
            <div id="react-root">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                        <div className="css-1dbjc4n r-150rngu r-13awgt0 r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh">
                            <div className="css-1dbjc4n">
                                <div data-focusable="true" tabIndex="0" onClick={() => navigate(-1)} className="css-1dbjc4n r-1awozwy r-1loqt21 r-sga3zk r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-18tzken r-mhe3cw" style={{ transitionDuration: "0s", zIndex: "1" }}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "32px", width: "16px",marginLeft:"26px" }}>
                                        <div
                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                            style={{ backgroundImage: `url(${backWhite})` }}
                                        ></div>
                                        <img alt="" draggable="false" src={backWhite} className="css-9pa8cd" />
                                    </div>
                                </div>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "326.667px" }}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${agentPlanTop})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={agentPlanTop} className="css-9pa8cd" />
                                </div>
                                <div className="css-1dbjc4n r-1idfib4" style={{ backgroundColor: "rgb(42, 42, 42)", paddingBottom: "44px" }}>
                                    <div className="css-1dbjc4n r-18u37iz" style={{ marginBottom: "50px" }}>
                                        <div dir="auto" className="css-901oao css-cens5h r-jwli3a r-evnaw" style={{ flex: "6 1 0%", lineHeight: "42px", paddingRight: "14px" }} >
                                            The FieWin Agent Million Cash  {collapse ? <>Growth Plan is divided into 7 levels, and each level has generous rewards. Complete the highest level and get a reward of
                                                <span className="css-901oao css-16my406" style={{ color: "rgb(242, 123, 34)" }}>₹1000000</span> immediately.</> : "..."}
                                            {/* <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-xoduu5 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}> */}
                                            <span className="css-901oao css-16my406 r-1jrmi80 pointer" onClick={() => setCollapse(!collapse)}>{collapse ? <span>Collapse</span> : <span>Expand</span>}</span>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                  


                                    {res.data.data && res.data.data.map((data) => {
                                        if (data.leval == "1" && data.status == "2") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>
                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }} onClick={() => setLeval1(!leval1)}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv1Done})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv1Done} className="css-9pa8cd" />
                                                        </div>
                                                        {leval1 && <Leval1 status="2" />}
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "1" && (data.status == "0" || data.status == "1")) {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv1})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv1} className="css-9pa8cd" />
                                                        </div>
                                                        {res.data.data && res.data.data.map((data) => {

                                                            if (data.leval == "1" && (data.status == "0" || data.status == "1")) {
                                                                return <Leval1 status={data.status} setFinal={handleFinal} />
                                                            }

                                                        })}
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "1" && data.status == "3") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv1})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv1} className="css-9pa8cd" />
                                                        </div>
                                                       
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "2" && data.status == "2") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }} onClick={() => setLeval2(!leval2)}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv2Done})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv2Done} className="css-9pa8cd" />
                                                        </div>
                                                        {leval2 && <Leval2 status="2" />}
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "2" && (data.status == "0" || data.status == "1")) {

                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }} >
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv2})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv2} className="css-9pa8cd" />
                                                        </div>
                                                        {res.data.data && res.data.data.map((data) => {

                                                            if (data.leval == "2" && (data.status == "0" || data.status == "1")) {
                                                                return <Leval2 status={data.status} setFinal={() => handleShow("50.00", "Sliver", 2)} />
                                                            }

                                                        })}
                                                    </div>
                                                </>
                                            )
                                        }

                                        else if (data.leval == "2" && data.status == "3") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv2})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv2} className="css-9pa8cd" />
                                                        </div>
                                                       
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "3" && data.status == "2") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }} onClick={() => setLeval3(!leval3)}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv3Done})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv3Done} className="css-9pa8cd" />
                                                        </div>
                                                        {leval2 && <Leval3 status="2" />}
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "3" && (data.status == "0" || data.status == "1")) {

                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }} >
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv3})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv3} className="css-9pa8cd" />
                                                        </div>
                                                        {res.data.data && res.data.data.map((data) => {

                                                            if (data.leval == "3" && (data.status == "0" || data.status == "1")) {
                                                                return <Leval3 status={data.status} setFinal={() => handleShow("300.00", "Gold", 3)} />
                                                            }

                                                        })}
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "3" && data.status == "3") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv3})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv3} className="css-9pa8cd" />
                                                        </div>
                                                       
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "4" && data.status == "2") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }} onClick={() => setLeval4(!leval4)}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv4Done})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv4Done} className="css-9pa8cd" />
                                                        </div>
                                                        {leval2 && <Leval4 status="2" />}
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "4" && (data.status == "0" || data.status == "1")) {

                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }} >
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv4})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv4} className="css-9pa8cd" />
                                                        </div>
                                                        {res.data.data && res.data.data.map((data) => {

                                                            if (data.leval == "4" && (data.status == "0" || data.status == "1")) {
                                                                return <Leval4 status={data.status} setFinal={() => handleShow("1500.00", "Platinum", 4)} />
                                                            }

                                                        })}
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "4" && data.status == "3") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv4})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv4} className="css-9pa8cd" />
                                                        </div>
                                                       
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "5" && data.status == "2") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }} onClick={() => setLeval5(!leval5)}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv5Done})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv5Done} className="css-9pa8cd" />
                                                        </div>
                                                        {leval2 && <Leval5 status="2" />}
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "5" && (data.status == "0" || data.status == "1")) {

                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }} >
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv5})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv5} className="css-9pa8cd" />
                                                        </div>
                                                        {res.data.data && res.data.data.map((data) => {

                                                            if (data.leval == "5" && (data.status == "0" || data.status == "1")) {
                                                                return <Leval4 status={data.status} setFinal={() => handleShow("4000.00", "Diamond", 5)} />
                                                            }

                                                        })}
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "5" && data.status == "3") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv5})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv5} className="css-9pa8cd" />
                                                        </div>
                                                       
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "6" && data.status == "2") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }} onClick={() => setLeval6(!leval6)}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv6Done})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv6Done} className="css-9pa8cd" />
                                                        </div>
                                                        {leval2 && <Leval6 status="2" />}
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "6" && (data.status == "0" || data.status == "1")) {

                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }} >
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv6})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv6} className="css-9pa8cd" />
                                                        </div>
                                                        {res.data.data && res.data.data.map((data) => {

                                                            if (data.leval == "3" && (data.status == "0" || data.status == "1")) {
                                                                return <Leval6 status={data.status} setFinal={() => handleShow("10000.00", "Master", 6)} />
                                                            }

                                                        })}
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "6" && data.status == "3") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv6})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv6} className="css-9pa8cd" />
                                                        </div>
                                                       
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "7" && data.status == "2") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }} onClick={() => setLeval7(!leval7)}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv6Done})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv6Done} className="css-9pa8cd" />
                                                        </div>
                                                        {leval2 && <Leval7 status="2" />}
                                                    </div>
                                                </>
                                            )
                                        }
                                        else if (data.leval == "7" && (data.status == "0" || data.status == "1")) {

                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }} >
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv7})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv7} className="css-9pa8cd" />
                                                        </div>
                                                        {res.data.data && res.data.data.map((data) => {

                                                            if (data.leval == "7" && (data.status == "0" || data.status == "1")) {
                                                                return <Leval7 status={data.status} setFinal={() => handleShow("1000000.00", "", 7)} />
                                                            }

                                                        })}
                                                    </div> 
                                                </>
                                            )
                                        }
                                        else if (data.leval == "7" && data.status == "3") {
                                            return (
                                                <>
                                                    <div className="css-1dbjc4n" style={{ marginBottom: "26px" }}>

                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "86px" }}>
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${agentLv7})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={agentLv7} className="css-9pa8cd" />
                                                        </div>
                                                       
                                                    </div>
                                                </>
                                            )
                                        }

                                    })}


                                </div>






                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

// redux connect
const mapStateToProps = (state) => ({
    res: state.growthplan,
    res1: state.growthstatus
});

export default connect(mapStateToProps)(Agentmillion);
