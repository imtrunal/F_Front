import  { useEffect, useState } from 'react'
import * as React from 'react'

import { connect } from 'react-redux';
import AddNumber from './AddNumber';
import Continues from './Continues';
import Modal from "react-bootstrap/Modal";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Alert from './Alert';
import Probablity from './Probablity';
import arrowLeft from "../../../../images/arrowLeft.png"
import fastImgNew from "../../../../images/fastImgNew.png"
import question from "../../../../images/question.png"
import moreOrder from "../../../../images/moreOrder.png"
import { UserOrderDetails,WalletAmountParity } from '../../../../redux/action/FetchData';

const FastParity1 = ({ socket,dispatch, res,res1 }) => {

    const navigate = useNavigate()
    const [Socket, setSocket] = useState([])
    const [alert, setAlert] = useState(false)
    const [status1, SetStatus1] = useState(false)

    const [alertData, setAlertData] = useState([{}])

    const [tab, setTab] = useState({
        continue: false,
        record: true,
        probablity: false
    })
    const [tab1, setTab1] = useState({
        everyone: true,
        my: false,
    })
    const [finalresult, setFinalResult] = useState()
    const [countdown, setCountDown] = useState()
    const [finalAllresult, setFinalAllResult] = useState([{}])
    const [status, setStatus] = useState(false)
    // const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)
    const year = new Date().getFullYear().toString().slice(-2);
    const month = ("0" + (new Date().getMonth() + 1)).toString().slice(-2)
    const day = String(new Date().getDate()).padStart(2, '0');
    const fullDate = year + month + day
    const index = "0"
    useEffect(() => {
        dispatch(UserOrderDetails())
        dispatch(WalletAmountParity())
    }, [dispatch])
   
    socket.on("fast_parity_data", (data) => {
        setSocket([
            data,
            ...Socket

        ])
    })

    socket.on("countdown", (data) => {
        setCountDown(data)
    })
    socket.on("period_number1", (data) => {
        setFinalResult(data)
    })
    useEffect(() => {
        if (countdown == "03") {
            if (socket) {

                socket.emit("check_result", finalresult)
            }
        }
        else if (countdown <= "03") {
            setStatus(true)
        }
        else {
            setStatus(false)
        }

    }, [countdown])

    const login_data = JSON.parse(sessionStorage.getItem('login'))
    socket.on("alert", (data) => {
        data.map((user,index) => {
            if (user.data.user == login_data.userId) {

                setAlert(true)
                setAlertData(user)
            }
        })
        // alert(data)
    })
    useEffect(() => {

        socket && socket.on("result_all_fast_parity", (data) => {
            setFinalAllResult(data)
        })
    }, [])
    const onHandle = (value) => {
        setAlert(false)
    }
    const handleClick = () => {
        SetStatus1(true)
    }


    return (
        <>
            {alert && <Alert props={alertData && alertData} handle={onHandle} />}
            {/* <Alert/> */}
            <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-1iihdsi r-qklmqi r-uvuy5l r-1777fci r-1ehh1yr r-bnwqim">
                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-18u37iz r-uvuy5l r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-cfp7ip" style={{ left: "14px", transitionDuration: "0s" }}>
                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "26px", width: "16px" }} onClick={() => navigate(-1)}>
                        <div
                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                            style={{ backgroundImage: `url(${arrowLeft})` }}
                        ></div>
                        <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" />
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-18u37iz" style={{ width: "70%" }}>
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className="css-1dbjc4n r-1awozwy r-2mrr8d r-6t5ypu r-1wlyorm r-kicko2 r-rs99b7 r-4290zf r-1loqt21 r-18u37iz r-h3s6tt r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1f720gc"
                        style={{ transitionDuration: "0s" }}
                    >
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "34px", width: "28px" }} >
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: `url(${fastImgNew})` }}
                            ></div>
                            <img alt="" draggable="false" src={fastImgNew} className="css-9pa8cd" />
                        </div>
                        <div dir="auto" className="css-901oao r-jwli3a r-adyw6z r-b88u0q">Fast-Parity</div>
                    </div>
                    {/* <div
                        data-focusable="true"
                        tabIndex="0"
                        className="css-1dbjc4n r-1awozwy r-14lw9ot r-1dpl46z r-1wlyorm r-notknq r-rs99b7 r-4290zf r-1loqt21 r-18u37iz r-h3s6tt r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1f720gc"
                        style={{transitionDuration: "0s"}}
                    >
                        <div dir="auto" className="css-901oao r-1jrmi80 r-adyw6z r-b88u0q">Parity</div>
                    </div> */}
                </div>
                <div data-focusable="true" onClick={handleClick} tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-18u37iz r-uvuy5l r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-cfp7ip" style={{ right: "14px", transitionduration: "0s" }}>
                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "20px", marginRight: "6px", width: "20px" }}>
                        <div
                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                            style={{ backgroundImage: `url(${question})` }}
                        ></div>
                        <img alt="" draggable="false" src={question} className="css-9pa8cd" />
                    </div>
                    <div dir="auto" className="css-901oao">Rule</div>
                </div>
            </div>
            <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-zh076v r-11yh6sk r-1rnoaur r-i03k3n r-1sncvnh">
                <div className="css-1dbjc4n">
                    <div className="css-1dbjc4n r-14lw9ot r-1cad53l r-1idfib4">
                        <div className="css-1dbjc4n r-18u37iz r-1wtj0ep">
                            <div className="css-1dbjc4n">
                                <div dir="auto" className="css-901oao r-1az3528 r-1i10wst">Period</div>
                                <div dir="auto" className="css-901oao r-5zpi7z r-zz5t5d r-b88u0q" >{finalresult}</div>

                            </div>
                            <div className="css-1dbjc4n r-obd0qt">
                                <div dir="auto" className="css-901oao r-1az3528 r-1i10wst">Count Down</div>
                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-kc8jnq">
                                    {/* 00:{countdown} */}

                                    <div className="css-1dbjc4n r-1awozwy r-1nt8t1s r-1w5ypp5 r-r7j6xl r-z2wwpe r-18u37iz r-1a8msfu r-1777fci r-1d4mawv r-199wky7">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-zz5t5d r-b88u0q r-15zivkp r-4amgru">0</div>
                                    </div>
                                    <div className="css-1dbjc4n r-1awozwy r-1nt8t1s r-1w5ypp5 r-r7j6xl r-z2wwpe r-18u37iz r-1a8msfu r-1777fci r-199wky7">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-zz5t5d r-b88u0q r-15zivkp r-4amgru">0</div>
                                    </div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-zz5t5d r-b88u0q r-15zivkp r-4amgru">:</div>
                                    <div className="css-1dbjc4n r-1awozwy r-1nt8t1s r-1w5ypp5 r-r7j6xl r-z2wwpe r-18u37iz r-1a8msfu r-1777fci r-1d4mawv r-199wky7">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-zz5t5d r-b88u0q r-15zivkp r-4amgru">{countdown && String(countdown).charAt(0)}</div>
                                    </div>
                                    <div className="css-1dbjc4n r-1awozwy r-1nt8t1s r-1w5ypp5 r-r7j6xl r-z2wwpe r-18u37iz r-1a8msfu r-1777fci r-199wky7">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-zz5t5d r-b88u0q r-15zivkp r-4amgru">{countdown && String(countdown).charAt(1)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <AddNumber period={finalresult && finalresult} socket={socket} status={status}   point={
    res1.data.data &&
    res1.data.data[0] &&
    res1.data.data[0].amount &&
    res1.data.data[0].amount
      ? res1.data.data[0].amount
      : 0
  } />

                    <div className="css-1dbjc4n r-1cad53l">

                        <div className="css-1dbjc4n r-1awozwy r-18u37iz" style={{ justifyContent: "space-around", boxPack: "justify" }}>
                            <div
                                data-focusable="true"
                                tabIndex="0"
                                className="css-1dbjc4n r-1awozwy r-14lw9ot r-chstv r-1nlznlq r-xem82l r-1loqt21 r-13awgt0 r-uxrrfj r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr"
                                style={{ transitionDuration: "0.25s", zIndex: "1" }}
                                onClick={() => setTab({
                                    continue: true,
                                    record: false,
                                    probablity: false
                                })}

                            >
                                <div dir="auto" className={`css-901oao ${tab.continue ? "r-5zpi7z" : "r-1az3528"} r-1az3528 r-evnaw r-b88u0q`}>Continuous</div>
                                {tab.continue && <div dir="auto" className="css-901oao r-2mrr8d r-1p0dtai r-epq5cr r-1d2f490 r-u8s1d r-zchlnj"></div>}

                            </div>
                            <div
                                data-focusable="true"
                                tabIndex="0"
                                className="css-1dbjc4n r-1awozwy r-14lw9ot r-chstv r-1nlznlq r-xem82l r-1loqt21 r-13awgt0 r-uxrrfj r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr"
                                style={{ transitionDuration: "0.25s", zIndex: "1" }}
                                onClick={() => setTab({
                                    continue: false,
                                    record: true,
                                    probablity: false
                                })}

                            >
                                <div dir="auto" className={`css-901oao ${tab.record ? "r-5zpi7z" : "r-1az3528"}  r-evnaw r-b88u0q`}>Record</div>
                                {tab.record && <div dir="auto" className="css-901oao r-2mrr8d r-1p0dtai r-epq5cr r-1d2f490 r-u8s1d r-zchlnj"></div>}
                            </div>
                            <div
                                data-focusable="true"
                                tabIndex="0"
                                className="css-1dbjc4n r-1awozwy r-14lw9ot r-chstv r-1nlznlq r-xem82l r-1loqt21 r-13awgt0 r-uxrrfj r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr"
                                style={{ transitionDuration: "0.25s", zIndex: "1" }}
                                onClick={() => setTab({
                                    continue: false,
                                    record: false,
                                    probablity: true
                                })}
                            >
                                <div dir="auto" className={`css-901oao ${tab.probablity ? "r-5zpi7z" : "r-1az3528"} r-1az3528 r-evnaw r-b88u0q`}>Probability</div>
                                {tab.probablity && <div dir="auto" className="css-901oao r-2mrr8d r-1p0dtai r-epq5cr r-1d2f490 r-u8s1d r-zchlnj"></div>}

                            </div>
                        </div>
                        <div className={`css-1dbjc4n r-14lw9ot r-1u2l4po r-1cad53l r-1idfib4 ${tab.continue ? "d-visible" : "d-hidden"}`}>
                            <Continues socket={socket} />
                        </div>
                        <div className={`css-1dbjc4n r-14lw9ot r-1u2l4po r-1cad53l r-1idfib4 ${tab.record ? "d-visible" : "d-hidden"}`}>
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                                <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">FastParity Record</div>
                                <div data-focusable="true" onClick={() => navigate("/more/parity")} tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                    <div dir="auto" className="css-901oao r-1az3528" style={{ fontSize: "16px" }}>more &gt;</div>
                                </div>
                            </div>
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1w6e6rj r-13qz1uu">


                                {finalAllresult.slice(0).reverse().map((data,index) => {
                                    if (data.win_number && data.win_number.color.includes("G") && data.win_number.color.includes("V") && data.win_number.color.includes("R")) {
                                        return (
                                            <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7" key={index}>
                                                <div dir="auto" className="css-901oao r-q4m81j">{data.period && data.period.substring(6)}</div>
                                                <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                    <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                                    <div className="css-1dbjc4n red r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" style={{ top: "18px" }}></div>

                                                    <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                            </div>
                                        )

                                    }

                                    else if (data.win_number && data.win_number.color.includes("V")) {

                                        if (data.win_number && data.win_number.color.includes("G")) {
                                            return (
                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                                    <div dir="auto" className="css-901oao r-q4m81j">{data.period && data.period.substring(6)}</div>
                                                    <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                        <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>

                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                                </div>
                                            )
                                        }
                                        else if (data.win_number && data.win_number.color.includes("R")) {
                                            return (
                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                                    <div dir="auto" className="css-901oao r-q4m81j">{data.period && data.period.substring(6)}</div>
                                                    <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                        <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                                </div>
                                            )
                                        }
                                        else {

                                            return (
                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                                    <div dir="auto" className="css-901oao r-q4m81j">{data.period && data.period.substring(6)}</div>
                                                    <div className="css-1dbjc4n r-1awozwy  r-y47klf violet r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{data.win_number && data.win_number.number[0]}</div></div>
                                                </div>
                                            )
                                        }
                                    }
                                    else if (data.win_number && data.win_number.color.includes("R")) {
                                        if (data.win_number && data.win_number.color.includes("V")) {
                                            return (
                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                                    <div dir="auto" className="css-901oao r-q4m81j">{data.period && data.period.substring(6)}</div>
                                                    <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                        <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                                </div>
                                            )
                                        }
                                        else if (data.win_number && data.win_number.color.includes("G")) {
                                            return (
                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                                    <div dir="auto" className="css-901oao r-q4m81j">{data.period && data.period.substring(6)}</div>
                                                    <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                        <div className="css-1dbjc4n  r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw red"></div>
                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                                    <div dir="auto" className="css-901oao r-q4m81j">{data.period && data.period.substring(6)}</div>
                                                    <div className="css-1dbjc4n r-1awozwy  r-y47klf red r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{data.win_number && data.win_number.number[0]}</div></div>
                                                </div>
                                            )
                                        }
                                    }
                                    else if (data.win_number && data.win_number.color.includes("G")) {
                                        if (data.win_number && data.win_number.color.includes("V")) {
                                            return (
                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                                    <div dir="auto" className="css-901oao r-q4m81j">{data.period && data.period.substring(6)}</div>
                                                    <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                        <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                                </div>
                                            )
                                        }
                                        else if (data.win_number && data.win_number.color.includes("R")) {
                                            return (
                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                                    <div dir="auto" className="css-901oao r-q4m81j">{data.period && data.period.substring(6)}</div>
                                                    <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                        <div className="css-1dbjc4n red r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                                    <div dir="auto" className="css-901oao r-q4m81j">{data.period && data.period.substring(6)}</div>
                                                    <div className="css-1dbjc4n r-1awozwy  r-y47klf green r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{data.win_number && data.win_number.number[0]}</div></div>
                                                </div>
                                            )
                                        }
                                    }

                                    else {
                                        return (
                                            <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                                <div dir="auto" className="css-901oao r-q4m81j">{data.period && data.period.substring(6)}</div>
                                                <div className="css-1dbjc4n r-1awozwy  r-y47klf  r-131i89u r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst" style={{ color: "black" }}>{data.win_number && data.win_number.number[0]}</div></div>
                                            </div>
                                        )
                                    }

                                })}
                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                    <div dir="auto" className="css-901oao" style={{ textAlign: "center" }}>{finalresult && finalresult.toString().substring(6)}</div>
                                    <div className="css-1dbjc4n r-1awozwy r-iz8rmo r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                        <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">?</div>
                                    </div>
                                </div>
                                {/* <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                    <div dir="auto" className="css-901oao r-q4m81j">{finalresult && finalresult.period}</div>
                                    <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{finalresult && finalresult.select_number}</div></div>
                                </div> */}

                            </div>
                        </div>
                        <div className={`css-1dbjc4n r-14lw9ot r-1u2l4po r-1cad53l r-1idfib4 ${tab.probablity ? "d-visible" : "d-hidden"}`}>
                            <Probablity />
                            {/* <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                                <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">FastParity Probablity</div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                    <div dir="auto" className="css-901oao r-1az3528" style={{ fontSize: "16px" }}>more &gt;</div>
                                </div>
                            </div>
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1w6e6rj r-13qz1uu">
                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                    <div dir="auto" className="css-901oao r-q4m81j">991</div>
                                    <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">6</div></div>
                                </div>
                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                    <div dir="auto" className="css-901oao r-q4m81j">992</div>
                                    <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">8</div></div>
                                </div>

                            </div> */}
                        </div>
                    </div>
                    <div className="css-1dbjc4n r-14lw9ot r-1nxhmzv">
                        <div className="css-1dbjc4n r-1awozwy  r-14lw9ot r-18u37iz r-1wtj0ep">
                            <div
                                data-focusable="true"
                                tabIndex="0"
                                className="css-1dbjc4n r-1awozwy r-14lw9ot r-j9b53g r-1i97xy8 r-177kwc2 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1f720gc"
                                style={{ transitionDuration: "0s", zIndex: "2" }}
                                onClick={() => {
                                    setTab1({
                                        everyone: true,
                                        my: false
                                    })
                                }}
                            >
                                <div dir="auto" className="css-901oao r-1az3528" style={{ color: tab1.everyone && "rgb(0, 0, 0)", fontSize: "24px" }}>Everyone's Order</div>
                                {tab1.everyone && <div className="css-1dbjc4n r-2mrr8d r-1jkafct r-1p0dtai r-epq5cr r-u8s1d r-13qz1uu"></div>}
                            </div>
                            <div
                                data-focusable="true"
                                tabIndex="0"
                                className="css-1dbjc4n r-1awozwy r-14lw9ot r-j9b53g r-1i97xy8 r-177kwc2 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1f720gc"
                                style={{ transitionDuration: "0s", zIndex: "1" }}
                                onClick={() => {
                                    setTab1({
                                        everyone: false,
                                        my: true
                                    })
                                }}
                            >
                                <div dir="auto" className="css-901oao r-1az3528" style={{ color: tab1.my && "rgb(0, 0, 0)", fontSize: "24px" }}>My Order</div>
                                {tab1.my && <div className="css-1dbjc4n r-2mrr8d r-1jkafct r-1p0dtai r-epq5cr r-u8s1d r-13qz1uu"></div>}

                            </div>
                        </div>
                        {tab1.everyone &&
                            <div className={`css-1dbjc4n`}>
                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1s2bzr4 r-1ehh1yr">
                                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "4 1 0%", boxflex: "4" }}>Period</div>
                                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "4 1 0%", paddingRight: "6px", textAlign: "right", boxFlex: "4" }}>User</div>
                                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z r-q4m81j r-fast" style={{ flex: " 2 1 0%", boxFlex: "2" }}>Select</div>
                                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "3 1 0%", textAlign: "right", boxFlex: "3" }}>Point</div>
                                </div>
                                <div className="css-1dbjc4n" style={{ height: "1664px" }}>
                                    <div className="css-1dbjc4n r-l71dzp r-1udh08x r-bnwqim r-13qz1uu" style={{ height: "1664px" }}>
                                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-1pi2tsx r-11yh6sk r-buy8e9 r-19z077z r-1sncvnh">
                                            <div className="css-1dbjc4n">

                                                {Socket && Socket.map((data,index) => {
                                                    return (

                                                        <div className="css-1dbjc4n r-1awozwy r-o5e8d5 r-18u37iz r-1ehh1yr" key={index} style={{ height: "45px", willChange: "transform" }}>
                                                            <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z" style={{ flex: "4 1 0%", boxflex: "4" }}>{data.period}</div>
                                                            <div className="css-1dbjc4n r-1awozwy r-18u37iz" style={{ flex: "4 1 0%", justifyContent: "flex-end", paddingRight: "6px", boxFlex: "4", boxPack: "end" }}>
                                                                <img
                                                                    src={data.avtar}
                                                                    style={{ width: "34px", height: "34px", borderRadius: "18px", objectFit: "cover" }}
                                                                />
                                                                <div dir="auto" className="css-901oao r-1b43r93" style={{ color: "rgb(168, 168, 168)" }}>{data.user.replace(/(\d{1})(.*)(\d{3})/, '***$3')}</div>
                                                            </div>
                                                            <div className="css-1dbjc4n r-18u37iz r-1777fci" style={{ flex: " 2 1 0%", boxFlex: "2" }}>
                                                                <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                    <div dir="auto" className="css-901oao r-jwli3a r-1i10wst r-b88u0q">{data.select_number}</div>
                                                                </div>
                                                            </div>
                                                            <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z" style={{ flex: "3 1 0%", textAlign: "right", boxFlex: "3" }}>{data.currency}{data.point}</div>
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu r-d1gdsc" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}></div>
                                    </div>
                                </div>
                            </div>
                        }

                        {tab1.my &&
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-l71dzp r-1ehh1yr">
                                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "4 1 0%" }}>Period</div>
                                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z r-q4m81j" style={{ flex: "2 1 0%" }}>Select</div>
                                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "3 1 0%", paddingRight: "14px", textAlign: "right" }}>Point</div>
                                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z r-q4m81j r-fast" style={{ flex: "2 1 0%" }}>Result</div>
                                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "4 1 0%", textAlign: "right", }}>Amount</div>
                                </div>
                                {res.data.data && res.data.data.map((data,index) => {
                                    return (
                                        <>
                                            <div className="css-1dbjc4n r-l71dzp r-13qz1uu" key={index}>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-sga3zk r-1ehh1yr r-4zbufd">
                                                    <div dir="auto" className="css-901oao r-5zpi7z r-1i10wst" style={{ flex: "4 1 0%" }}>{data.period}</div>
                                                    <div className="css-1dbjc4n r-18u37iz r-1777fci" style={{ flex: "2 1 0%" }}>
                                                        <div className={`css-1dbjc4n r-1awozwy ${data.select == "G" ? "green" :data.select == "V"?"violet":data.select == "R"?"red":"r-1nt8t1s"}  r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0`}>
                                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">{data.select}</div>
                                                        </div>
                                                    </div>
                                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw" style={{ flex: "3 1 0%", paddingRight: "14px", textAlign: "right" }}>₹{data.point}</div>
                                                    {data.win_number.color &&
                                                    ((data.win_number.color.includes("G") && data.win_number.color.includes("V") && data.win_number.color.includes("R")) ?

                                                        <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                            <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                                                <div className="css-1dbjc4n red r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" ></div>

                                                                <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number.number}</div></div>
                                                        </div>
                                                        :
                                                        (data.win_number.color.includes("V")) ?

                                                            (data.win_number.color.includes("G")) ?

                                                                <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                    <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                        <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" ></div>

                                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number.number}</div></div>
                                                                </div>
                                                                :
                                                                (data.win_number.color.includes("R")) ?

                                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                        <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                            <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" ></div>
                                                                            <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number.number}</div></div>
                                                                    </div>
                                                                    :

                                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                        <div className="css-1dbjc4n r-1awozwy  r-y47klf violet r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{data.win_number.number}</div></div>
                                                                    </div>
                                                            :
                                                            (data.win_number.color.includes("R")) ?
                                                                (data.win_number.color.includes("V")) ?

                                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                        <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                            <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" ></div>
                                                                            <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number.number}</div></div>
                                                                    </div>
                                                                    :
                                                                    (data.win_number.color.includes("G"))
                                                                        ?
                                                                        <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                            <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                                <div className="css-1dbjc4n  r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw red" ></div>
                                                                                <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number.number}</div></div>
                                                                        </div>
                                                                        :

                                                                        <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                            <div className="css-1dbjc4n r-1awozwy  r-y47klf red r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{data.win_number.number}</div></div>
                                                                        </div>

                                                                :
                                                                (data.win_number.color.includes("G")) ?
                                                                    (data.win_number.color.includes("V"))
                                                                        ?
                                                                        <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                            <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                                <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" ></div>
                                                                                <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number.number}</div></div>
                                                                        </div>
                                                                        :
                                                                        (data.win_number.color.includes("R"))
                                                                            ?
                                                                            <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                                <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                                    <div className="css-1dbjc4n red r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" ></div>
                                                                                    <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number.number}</div></div>
                                                                            </div>
                                                                            :
                                                                            <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                                <div className="css-1dbjc4n r-1awozwy  r-y47klf green r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0 " ><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{data.win_number.number}</div></div>
                                                                            </div>
                                                                    : <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                        <div className="css-1dbjc4n r-1awozwy  r-y47klf  r-131i89u r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0" ><div dir="auto" className="css-901oao r-jwli3a r-1i10wst" style={{ color: "black" }}>{data.win_number.number}</div></div>
                                                                    </div>
                                )}
                                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw" style={{ flex: "4 1 0%", textAlign: "right" }}>{data.status == "profit" && "+" }{data.currency}{Number(data.amount) - Number(data.point)}</div>
                                                </div>


                                            </div>
                                        </>
                                    )
                                })}
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ margin: "16px", transitionDuration: "0s" }} onClick={()=>navigate("/OrderRecord")}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-sga3zk r-1udh08x r-13qz1uu r-417010">
                                        <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${moreOrder})` }}></div>
                                        <img alt="" draggable="false" src={moreOrder} className="css-9pa8cd" /></div>
                                </div>
                            </div>
                        }

                    </div>
                    <div className={`css-1dbjc4n ${tab1.my ? "d-visible" : "d-hidden"}`}>

                    </div>
                </div>
            </div>
            {status1 &&
                <div className="css-1dbjc4n r-drfeu3 r-1p0dtai r-16y7rff r-1d2f490 r-1xcajam r-zchlnj r-ipm5af1 r-13qz1uu r-dvx3qi">
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-cob1ji r-19z077z r-1i6wzkk r-lrvibr r-13qz1uu" style={{ transitionDuration: "0s" }}></div>
                    <div className="css-1dbjc4n r-14lw9ot r-chstv r-1nlznlq r-1p0dtai r-1d2f490 r-u8s1d r-13qz1uu" style={{ height: "860px", zIndex: "25" }}>
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-1pi2tsx r-11yh6sk r-1rnoaur r-1vi0db5 r-ikwi4x r-95jzfe r-bnwqim r-1sncvnh r-13qz1uu">
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-18u37iz r-1777fci">
                                    <div className="css-1dbjc4n r-1awozwy r-1l506o1 r-a1yn9n r-1l5va9f r-18u37iz r-1sn7ly2 r-1777fci r-1jgb5lz r-1jslnhd"><div dir="auto" className="css-901oao r-jwli3a r-yy2aun">FastParity Rule</div></div>
                                </div>
                                <div className="css-1dbjc4n r-1wzrnnt">
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q" style={{ lineHeight: "42px" }}>
                                        30 seconds 1 issue, 27 seconds to order, 3 seconds to show the lottery result. It opens all day. The total number of trade is 2880 issues.
                                    </div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q" style={{ lineHeight: "42px" }}>If you spend 100 rupees to trade, after deducting 2 rupees service fee, your contract amount is 98 rupees:</div>
                                </div>
                                <div className="css-1dbjc4n r-18u37iz r-knv0ih">
                                    <div className="css-1dbjc4n r-1awozwy r-iz8rmo r-t23y2h r-18u37iz r-mabqd8 r-1777fci r-1oa8saw r-knv0ih r-1iww7jx"><div dir="auto" className="css-901oao r-jwli3a">1</div></div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw" style={{ lineHeight: "42px" }}>JOIN GREEN: if the result shows 1,3,7,9, you will get (98*2) 196 rupees; If the result shows 5, you will get (98*1.5) 147 rupees.</div>
                                </div>
                                <div className="css-1dbjc4n r-18u37iz r-knv0ih">
                                    <div className="css-1dbjc4n r-1awozwy r-iz8rmo r-t23y2h r-18u37iz r-mabqd8 r-1777fci r-1oa8saw r-knv0ih r-1iww7jx"><div dir="auto" className="css-901oao r-jwli3a">2</div></div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw" style={{ lineHeight: "42px" }}>JOIN RED: if the result shows 2,4,6,8, you will get (98*2) 196 rupees; If the result shows 0, you will get (98*1.5) 147 rupees.</div>
                                </div>
                                <div className="css-1dbjc4n r-18u37iz r-knv0ih">
                                    <div className="css-1dbjc4n r-1awozwy r-iz8rmo r-t23y2h r-18u37iz r-mabqd8 r-1777fci r-1oa8saw r-knv0ih r-1iww7jx"><div dir="auto" className="css-901oao r-jwli3a">3</div></div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw" style={{ lineHeight: "42px" }}>JOIN VIOLET: if the result shows 0 or 5, you will get (98*4.5) 441 rupees.</div>
                                </div>
                                <div className="css-1dbjc4n r-ji1w04 r-1ljd8xs r-z2wwpe r-5kkj8d r-18u37iz r-1wzrnnt">
                                    <div className="css-1dbjc4n r-lgvlli">
                                        <div className="css-1dbjc4n r-1awozwy r-1nt8t1s r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1sn7ly2 r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">Select</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci" style={{ borderBottomWidth: "0px" }}>
                                            <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(0, 194, 130)", transform: "translateY(20px)" }}>Join Green</div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao"></div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci" style={{ borderBottomWidth: "0px" }}>
                                            <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(250, 60, 9)", transform: "translateY(20px)" }}>Join Red</div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao"></div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(102, 85, 211)" }}>Join Violet</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-b88u0q">Number</div></div>
                                    </div>
                                    <div className="css-1dbjc4n r-kgf08f">
                                        <div className="css-1dbjc4n r-1awozwy r-1nt8t1s r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1sn7ly2 r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">Result</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">1, 3, 7, 9</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">5</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">2, 4, 6, 8</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">0</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">0, 5</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">n</div></div>
                                    </div>
                                    <div className="css-1dbjc4n r-lgvlli">
                                        <div className="css-1dbjc4n r-1awozwy r-1nt8t1s r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1sn7ly2 r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">Multiplier</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">2</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">1.5</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">2</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">1.5</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">4.5</div></div>
                                        <div className="css-1dbjc4n r-1awozwy r-qklmqi r-ji1w04 r-13l2t4g r-18u37iz r-1ugchlj r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">9</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="css-1dbjc4n r-14lw9ot r-1p0dtai r-1d2f490 r-u8s1d r-13qz1uu" style={{ height: "112px" }}>
                            <div
                                data-focusable="true"
                                tabIndex="0"
                                className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-1u8kdu r-xem82l r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-9z1w0z r-1udh08x r-u8s1d r-ucscaq r-1otgn73 r-1i6wzkk r-lrvibr"
                                style={{ transitionDuration: "0s" }}
                                onClick={() => SetStatus1(false)}
                            >
                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">I GOT IT</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

// redux connect
const mapStateToProps = (state) => ({
    res: state.userorder,
    res1: state.walletAmount,
});

export default connect(mapStateToProps)(FastParity1);