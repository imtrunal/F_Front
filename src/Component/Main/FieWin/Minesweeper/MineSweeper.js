import { useState, useEffect } from 'react'
import * as React from 'react'

import "react-minesweeper/lib/minesweeper.css";
import Minesweeper from "react-minesweeper/lib/dist/Minesweeper"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Eight from './eight';
import Four from './Four';
import Two from './Two';
import { connect } from 'react-redux';
import { MineSweeperDetails, WalletAmountParity } from '../../../../redux/action/FetchData';
import Modal from "react-bootstrap/Modal";
import { useNavigate } from 'react-router-dom';
import EveryOne from './EveryOne';
import Alert from './Alert';
import MyOrder from './MyOrder';
import { MyProfileDetails } from '../../../../redux/action/FetchData';
import swal from 'sweetalert';
import error from "../../../../images/error.png"
import arrowLeft from "../../../../images/arrowLeft.png"
import boomWallet from "../../../../images/boomWallet.png"
import Coin_b from "../../../../images/Coin_b.png"
import question from "../../../../images/question.png"
import boomCheckTextNew from "../../../../images/boomCheckTextNew.png"
import sweeperRule01N from "../../../../images/sweeperRule01N.png"
import sweeperRule1New from "../../../../images/sweeperRule1New.png"
import sweeperRule3N from "../../../../images/sweeperRule3N.png"
import sweeperRule4New from "../../../../images/sweeperRule4New.png"
import sweeperRule2New from "../../../../images/sweeperRule2New.png"
import sweeperRule5New from "../../../../images/sweeperRule5New.png"




const MineSweeper = ({ socket, dispatch, res, res1, res2 }) => {
    const login_data = JSON.parse(sessionStorage.getItem('login'))
    const navigate = useNavigate()
    const [status, setStatus] = useState(false)
    const [start, setStart] = useState(true)
    const [alert1, setAlert] = useState(false)
    const [alertLoss, setAlertLoss] = useState(false)
    const [alertbox, setAlertBox] = useState(false)


    const [count, setCount] = useState()
    const [type, setType] = useState({
        type1: false,
        type2: false,
        type3: false
    })
    const [tab, setTab] = useState({
        type1: true,
        type2: false,
        type3: false
    })
    const [amountValue, setAmountValue] = useState({
        type1: true,
        type2: false,
        type3: false,
        type3: false

    })
    const [tab1, setTab1] = useState({
        everyone: true,
        my: false,
    })
    const [bouns, setBouns] = useState(0)
    const [next, setNext] = useState(0)
    const [stop, setStop] = useState(false)
    const [show, setShow] = useState(false)
    const [id, setId] = useState("")

    const [state, setState] = useState({
        userId: login_data.userId,
        type: "",
        avtar: "",
        amount: 20
    })   // HANDLE MODAL1
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    socket.on("bonus", (data) => {
        setBouns(bouns + data)
    })
    useEffect(() => {
        dispatch(MyProfileDetails())
    }, [dispatch])
    useEffect(() => {
        if (res1.data.status == true) {
            setState({
                ...state,
                avtar: res1.data.data[0].avtar
            })
        }
    }, [res1])
    useEffect(() => {
        dispatch(WalletAmountParity())
    }, [dispatch])
    const api_res = res2.data

    // useEffect(() => {
    //     setStart(true)
    // }, [alert1])
    const handleStart = (value) => {
        setStatus(true)
        setState({ ...state, type: value })
    }
    const handleChange = (e) => {
        if (e.target.value == "20") {
            setAmountValue({
                type1: true,
                type2: false,
                type3: false,
                type4: false
            })
        }
        else if (e.target.value == "100") {
            setAmountValue({
                type1: false,
                type2: true,
                type3: false,
                type4: false
            })
        }
        else if (e.target.value == "1000") {
            setAmountValue({
                type1: false,
                type2: false,
                type3: true,
                type4: false
            })
        }
        else if (e.target.value == "10000") {
            setAmountValue({
                type1: false,
                type2: false,
                type3: false,
                type4: true
            })
        }
        else {
            setAmountValue({
                type1: false,
                type2: false,
                type3: false,
                type4: false
            })
        }
        setState({
            ...state,
            amount: e.target.value
        })
    }
    const handleMinus = () => {
        if (state.amount > 20) {
            setState({
                amount: state.amount - 20
            })
        }
    }
    const handlePlus = () => {
        setState({
            amount: state.amount + 20
        })
    }
    const handleSubmit = () => {
        swal({ text: `₹${state.amount} Add Successfully`, "timer": 2000 })
        dispatch(MineSweeperDetails(state))
    }
    useEffect(() => {
        if (res.data.status == true) {
            setId(res.data.id)
            setStatus(false)
            setStart(false)
            socket.emit("start", state)
            socket.emit("nextNumber", -1)
            if (state.type == "2") {
                setType({
                    type1: false,
                    type2: true,
                    type3: true
                })
            }
            else if (state.type == "4") {
                setType({
                    type1: true,
                    type2: false,
                    type3: true
                })
            }
            else {
                setType({
                    type1: true,
                    type2: true,
                    type3: false
                })
            }
        }
        else if (res.data.status == false) {
            setShow(true)
        }

    }, [res])
    const nextBouns = (data) => {
        setNext((data).toFixed(2))
    }
    const handleStop = () => {
        setStop(true)
        setAlert(true)
    }
    const handlegoBack = () => {
        {
            start ?
                window.history.go(-1)
                : handleStop()
        }
    }
    const handleCount = (value) => {
        setCount(value)
    }
    const handleLoss = (value) => {
        setAlertLoss(value)
    }
    const okStatus = (value) => {
        setAlertLoss(false)
        setAlert(false)
        setStart(true)
        setStop(false)
        setType({
            type1: false,
            type2: false,
            type3: false
        })
        setBouns(0)
        window.location.reload()
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>

                <Modal.Body>
                    <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "286px", top: "331px", width: "402px" }}>
                        <div classs="css-1dbjc4n r-1awozwy r-1777fci r-s9qnr1">
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci">
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010">
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${error})` }}></div>
                                    <img alt="" draggable="false" src={error} className="css-9pa8cd" /></div>
                                <div dir="auto" className="css-901oao" style={{ fontSize: "24px", marginLeft: "14px" }}>Error message</div>
                            </div><div className="css-1dbjc4n" style={{ marginTop: "40px" }}><div dir="auto" className="css-901oao r-5zpi7z r-b88u0q" style={{ fontSize: "34px" }}>Not enough points</div></div><div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginTop: "46px", transitionDuration: "0s", width: "326px" }}>
                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={() => navigate("/tabIndex/2")}>Recharge Now</div></div></div></div>
                </Modal.Body>


            </Modal>
            {alert1 && <Alert status="win" socket={socket} bonus={(bouns).toFixed(2)} point={state.amount} count={count} okStatus={okStatus} />}
            {alertLoss && <Alert status="loss" socket={socket} bonus="0.00" point={state.amount} count={count} okStatus={okStatus} />}

            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-14lw9ot r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
                        {status &&
                            <div className="css-1dbjc4n r-1awozwy r-1p0dtai r-1d2f490 r-zchlnj r-ipm5af" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "948px", overflow: "scroll", position: "fixed", zIndex: "99" }}>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                    <div dir="auto" className="css-901oao"></div>
                                </div>
                                <div className="css-1dbjc4n r-14lw9ot r-u8s1d r-width" style={{ borderRadius: "10px", height: "584px", top: "364px", width: "500px" }}>
                                    <div className="css-1dbjc4n">
                                        <div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "26px", fontWeight: "700", lineHeight: "44px", marginTop: "28px", textAlign: "center" }}>Choose game amount</div>
                                        <div className="css-1dbjc4n r-1awozwy r-rpao8l r-1q9bdsx r-rs99b7 r-1of3776 r-18u37iz r-1wtj0ep r-ikvlq0 r-thmkab r-23eiwj">
                                            <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                                <div dir="auto" className="css-901oao">Point</div>
                                                <div dir="auto" className="css-901oao f-27" style={{ color: "rgb(56, 59, 69)", fontSize: "36px", fontWeight: "700", marginLeft: "8px" }}>₹ {api_res.data && api_res.data[0].amount ?api_res.data[0].amount:0}</div>
                                            </div>
                                            <div data-focusable="true" tabIndex="0" onClick={() => navigate("/tabIndex/2")} className="css-1dbjc4n r-1awozwy r-1l506o1 r-1llaxt6 r-1l5va9f r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-13i4ljo" style={{ transitionDuration: "0s" }}>
                                                <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)" }}>Recharge</div>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0">
                                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-rpao8l r-rs99b7 r-1loqt21 r-18u37iz r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-height" style={{ backgroundColor: amountValue.type1 && "rgb(59, 59, 69)", borderRadius: "52px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px", height: "102px", transitionDuration: "0s", width: "102px" }}>
                                                <div dir="auto" className={`css-901oao ${amountValue.type1 && "r-jwli3a"}  r-b88u0q`} style={{ color: !amountValue.type1 && "rgb(56, 59, 69)", fontSize: "26px" }}>₹20</div>
                                            </div>
                                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-rpao8l r-rs99b7 r-1loqt21 r-18u37iz r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-height" style={{ backgroundColor: amountValue.type2 && "rgb(59, 59, 69)", borderRadius: "52px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px", height: "102px", transitionDuration: "0s", width: "102px" }}>
                                                <div dir="auto" className={`css-901oao ${amountValue.type2 && "r-jwli3a"}  r-b88u0q`} style={{ color: !amountValue.type2 && "rgb(56, 59, 69)", fontSize: "26px" }}>₹100</div>
                                            </div>
                                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-rpao8l r-rs99b7 r-1loqt21 r-18u37iz r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-height" style={{ backgroundColor: amountValue.type3 && "rgb(59, 59, 69)", borderRadius: "52px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px", height: "102px", transitionDuration: "0s", width: "102px" }}>
                                                <div dir="auto" className={`css-901oao ${amountValue.type3 && "r-jwli3a"}  r-b88u0q`} style={{ color: !amountValue.type3 && "rgb(56, 59, 69)", fontSize: "26px" }}>₹1000</div>
                                            </div>
                                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-rpao8l r-rs99b7 r-1loqt21 r-18u37iz r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-height" style={{ backgroundColor: amountValue.type4 && "rgb(59, 59, 69)", borderRadius: "52px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px", height: "102px", transitionDuration: "0s", width: "102px" }}>
                                                <div dir="auto" className={`css-901oao  ${amountValue.type4 && "r-jwli3a"}  r-b88u0q`} style={{ color: !amountValue.type4 && "rgb(56, 59, 69)", fontSize: "26px" }}>₹10000</div>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-ikvlq0 r-bnwqim">
                                            <div data-focusable="true" tabIndex="0" onClick={handleMinus} className="css-1dbjc4n r-1loqt21 r-1d2f490 r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr r-cfp7ip" style={{ transform: "translateY(-4px)", transitionDuration: "0s" }}>
                                                <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(168, 168, 168)", fontSize: "54px", textAlign: "center" }}>-</div>
                                            </div><input placeholder="Custom amount" maxLength="6" autoCapitalize="sentences" autoComplete="on" autoCorrect="on" dir="auto" spellCheck="true" inputMode="numeric" data-focusable="true" id="myInput" className="css-11aywtz r-cb25cm r-14a6gy1 r-zz5t5d r-b88u0q r-so7y2g r-1saoqge r-q4m81j r-13qz1uu"
                                                value={state.amount} onChange={handleChange} />
                                            <div data-focusable="true" tabIndex="0" onClick={handlePlus} className="css-1dbjc4n r-1loqt21 r-u8s1d r-zchlnj r-1otgn73 r-1i6wzkk r-lrvibr r-cfp7ip" style={{ transform: "translateY(-4px)", transitionDuration: "0s" }}>
                                                <div dir="auto" className="css-901oao r-b88u0q r-q4m81j" style={{ color: "rgb(168, 168, 168)", fontSize: "54px" }}>+</div>
                                            </div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" onClick={handleSubmit} className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-ikvlq0 r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 5px", transitionDuration: "0s" }}>
                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">OK</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        }




                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi  r-1777fci r-p1pxzi r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-1sn7ly2 r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "26px", width: "16px" }} onClick={handlegoBack}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${arrowLeft})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" />
                                </div>
                            </div>

                            <div className="css-1dbjc4n r-18u37iz r-1wtj0ep r-bnwqim">
                                <div data-focusable="true" tabIndex="0" onClick={() => setTab({ type1: true, type2: false, type3: false })} className={`css-1dbjc4n r-1awozwy  r-3456 ${tab.type1 ? "r-2mrr8d" : "r-6qh97a"} r-1loqt21 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr`} style={{ borderRadius: "22px", height: "42px", marginRight: "8px", marginLeft: "8px", transitionDuration: "0s", width: "94px" }}>
                                    <div dir="auto" className={`css-901oao ${tab.type1 && "r-jwli3a"} r-evnaw r-b88u0q`} style={{ color: !tab.type1 && "rgb(102, 102, 102)" }} >2 x 2</div>
                                </div>
                                <div data-focusable="true" tabIndex="0" onClick={() => setTab({ type1: false, type2: true, type3: false })} className={`css-1dbjc4n r-1awozwy r-3456 ${tab.type2 ? "r-2mrr8d" : "r-6qh97a"}  r-1loqt21 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr`} style={{ borderRadius: "22px", height: "42px", marginRight: "8px", marginLeft: "8px", transitionDuration: "0s", width: "94px" }}>
                                    <div dir="auto" className={`css-901oao  ${tab.type2 && "r-jwli3a"} r-evnaw r-b88u0q`} style={{ color: !tab.type2 && "rgb(102, 102, 102)" }}>4 x 4</div>
                                </div>
                                <div data-focusable="true" tabIndex="0" onClick={() => setTab({ type1: false, type2: false, type3: true })} className={`css-1dbjc4n r-1awozwy  r-3456 ${tab.type3 ? "r-2mrr8d" : "r-6qh97a"} r-1loqt21 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr`} style={{ borderRadius: "22px", height: "42px", marginRight: "8px", marginLeft: "8px", transitionDuration: "0s", width: "94px" }}>
                                    <div dir="auto" className={`css-901oao ${tab.type3 && "r-jwli3a"} r-evnaw r-b88u0q`} style={{ color: !tab.type3 && "rgb(102, 102, 102)" }}>8 x 8</div>
                                </div>

                            </div>
                        </div>
                        <div className="css-1dbjc4n r-dcqb1h r-1idfib4 r-bnwqim">
                            {tab.type1 && <Two onChange={handleStart} start={start} id={id} socket={socket} status1={status} nextBouns={nextBouns} stop={stop} bonus={(bouns).toFixed(2)} handleCount={handleCount} loss={handleLoss} />}
                            {tab.type2 && <Four onChange={handleStart} start={start} id={id} socket={socket} status1={status} nextBouns={nextBouns} stop={stop} bonus={(bouns).toFixed(2)} handleCount={handleCount} loss={handleLoss} />}
                            {tab.type3 && <Eight onChange={handleStart} start={start} id={id} socket={socket} status1={status} nextBouns={nextBouns} stop={stop} bonus={(bouns).toFixed(2)} handleCount={handleCount} loss={handleLoss} />}
                        </div>

                        {!start &&
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0 r-1tu9xh3" >
                                <div className="css-1dbjc4n">
                                    <div dir="auto" className="css-901oao r-1az3528 r-1i10wst">
                                        <div className="css-1dbjc4n r-xoduu5 r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", transform: "translateY(6px)", width: "28px" }}>
                                            <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-xoduu5 r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${boomWallet})` }}></div>
                                            <img alt="" draggable="false" src={boomWallet} className="css-9pa8cd" /></div> Bonus</div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-1ra0lkn r-knv0ih"><span className="css-901oao css-16my406 r-evnaw">₹</span>{(bouns).toFixed(2)}</div>
                                    <div dir="auto" className="css-901oao r-1az3528 r-1i10wst r-knv0ih">Points: ₹{state.amount}</div>
                                </div>
                                <div className="css-1dbjc4n">
                                    <div dir="auto" className="css-901oao r-1az3528 r-1i10wst">
                                        <div className="css-1dbjc4n r-xoduu5 r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", transform: "translateY(6px)", width: "28px" }}>
                                            <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-xoduu5 r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${Coin_b})` }}></div>
                                            <img alt="" draggable="false" src={Coin_b} className="css-9pa8cd" /></div> Next</div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-1ra0lkn r-knv0ih"><span className="css-901oao css-16my406 r-evnaw">+₹</span>{next}</div>
                                    <div dir="auto" className="css-901oao r-1az3528 r-1i10wst r-knv0ih">Fee: ₹1.00</div>
                                </div>
                                <div className="css-1dbjc4n">
                                    <div data-focusable="true" tabIndex="0" onClick={handleStop} className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-1loqt21 r-18u37iz r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-1vzx1hx" style={{ boxShadow: "rgba(0, 0, 0, 0.6) 0px 0px 5px", height: "74px", transitionDuration: "0s" }}>
                                        <div dir="auto" className="css-901oao r-jwli3a r-adyw6z r-b88u0q r-q4m81j">Stop and get bonus</div>
                                    </div>
                                    <div dir="auto" className="css-901oao r-1az3528 r-1i10wst r-knv0ih">Delivery: ₹{(state.amount - 1.00).toFixed(2)}</div>
                                </div>
                            </div>
                        }
                        <div data-focusable="true" tabIndex="0" onClick={() => setAlertBox(true)} className="css-1dbjc4n r-1awozwy r-1loqt21 r-18u37iz r-uvuy5l r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-cfp7ip r-opp" style={{ right: "14px", transitionDuration: "0s" }}>
                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "20px", marginRight: "6px", width: "20px" }}>
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${question})` }}
                                ></div>
                                <img alt="" draggable="false" src={question} className="css-9pa8cd" />
                            </div>
                            <div dir="auto" className="css-901oao" style={{ color: "rgb(168, 168, 168)", fontSize: "18px" }}>Rule</div>
                        </div>
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{ height: "833px" }}>
                            <div className="css-1dbjc4n">

                                <div className="css-1dbjc4n r-1awozwy r-1q9bdsx r-1777fci r-1tu9xh3 r-1ehh1yr" style={{ backgroundColor: "rgb(254, 239, 220)", paddingTop: "16px", paddingBottom: "16px" }}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-sga3zk r-1udh08x r-417010 r-1234" style={{ width: "422px" }}>
                                        <div
                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                            style={{ backgroundImage: `url(${boomCheckTextNew})` }}
                                        ></div>
                                        <img alt="" draggable="false" src={boomCheckTextNew} className="css-9pa8cd" />
                                    </div>
                                </div>
                                <div className="css-1dbjc4n r-cb25cm" style={{ height: "14px", marginTop: "20px" }}></div>
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
                                    {tab1.everyone && <EveryOne socket={socket} />}
                                    {tab1.my && <MyOrder />}
                                    {/* <Tabs>
                                        <TabList>
                                            <Tab>   <div
                                                data-focusable="true"
                                                tabIndex="0"
                                                className="css-1dbjc4n r-1awozwy r-14lw9ot r-j9b53g r-1i97xy8 r-177kwc2 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1f720gc"
                                                style={{ transitionDuration: "0s", zIndex: "2" }}
                                            >
                                                <div dir="auto" className="css-901oao r-1x35g6" style={{ color: "rgb(0, 0, 0)" }}>Everyone's Order</div>
                                                <div className="css-1dbjc4n r-2mrr8d r-1jkafct r-1p0dtai r-epq5cr r-u8s1d r-13qz1uu"></div>
                                            </div></Tab>
                                            <Tab>
                                                <div
                                                    data-focusable="true"
                                                    tabIndex="0"
                                                    className="css-1dbjc4n r-1awozwy r-14lw9ot r-j9b53g r-1i97xy8 r-177kwc2 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1f720gc"
                                                    style={{ transitionDuration: "0s", zIndex: "1" }}
                                                >
                                                    <div dir="auto" className="css-901oao r-1az3528 r-1x35g6">My Order</div>
                                                </div>
                                            </Tab>



                                        </TabList>

                                        <TabPanel>
                                            <EveryOne socket={socket} />
                                        </TabPanel>
                                        <TabPanel>
                                            <MyOrder />
                                        </TabPanel>

                                    </Tabs> */}


                                </div>
                            </div>
                        </div>
                    </div>
                    {alertbox &&
                        <div className="css-1dbjc4n r-1awozwy r-1p0dtai r-1d2f490 r-zchlnj r-ipm5af" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "985px", overflow: "scroll", position: "fixed", zIndex: "99" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                <div dir="auto" className="css-901oao"></div>
                            </div>
                            <div className="css-1dbjc4n r-14lw9ot r-u8s1d r-width" style={{ borderRadius: "10px", height: "837.25px", top: "147.75px", width: "500px" }}>
                                <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-1pi2tsx r-11yh6sk r-1rnoaur r-1sncvnh r-13qz1uu" style={{ marginBottom: "178px" }}>
                                    <div className="css-1dbjc4n">
                                        <div className="css-1dbjc4n r-1awozwy r-1pi2tsx" style={{ padding: "28px" }}>
                                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci" style={{ backgroundColor: "rgb(252, 148, 13)", borderRadius: "26px", boxShadow: "rgba(252, 148, 13, 0.6) 0px 0px 10px", height: "52px", marginBottom: "22px", marginRight: "auto", marginLeft: "auto", width: "258px" }}>
                                                <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "26px" }}>Minesweeper Rule</div>
                                            </div>
                                            <div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "20px", lineHeight: "38px", marginBottom: "28px" }}>You can choose 2×2, 4×4, 8×8 three ways to play. The number of levels and reward amounts for each method are different.</div>
                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "160px", width: "327px" }}>
                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${sweeperRule01N})` }}>
                                                </div><img alt="" draggable="false" src={sweeperRule01N} className="css-9pa8cd" /></div>
                                            <div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "20px", lineHeight: "38px", marginBottom: "28px" }}>The following is an example of 4×4:In the 16 boxes, one of them was buried with a mine. The goal of the game is to find a box without mines, and every time you find one, you will get a reward.</div>
                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                                style={{ height: "180px", width: "180px" }}>
                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${sweeperRule1New})` }}>
                                                </div><img alt="" draggable="false" src={sweeperRule1New} className="css-9pa8cd" /></div>
                                            <div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "22px", fontWeight: "700", marginBottom: "42px", marginTop: "68px" }}>Click start, select the amount to play</div>
                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "200px", width: "180px" }}>
                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${sweeperRule2New})` }}>
                                                </div><img alt="" draggable="false" src={sweeperRule2New} className="css-9pa8cd" /></div>
                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "340px", marginTop: "8px", marginBottom: "68px", width: "327px" }}>
                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${sweeperRule3N})` }}>
                                                </div><img alt="" draggable="false" src={sweeperRule3N} className="css-9pa8cd" /></div>
                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "238px", width: "180px" }}>
                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${sweeperRule4New})` }}>
                                                </div><img alt="" draggable="false" src={sweeperRule4New} className="css-9pa8cd" /></div>
                                            <div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "22px", lineHeight: "42px", marginBottom: "28px", marginTop: "62px" }}>If the mines are not avoided, the game is over</div>
                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "238px", width: "180px" }}>
                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${sweeperRule5New})` }}>
                                                </div><img alt="" draggable="false" src={sweeperRule5New} className="css-9pa8cd" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div data-focusable="true" onClick={()=>setAlertBox(false)} tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-1loqt21 r-18u37iz r-tumt6t r-1777fci r-1udh08x r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr" style={{ bottom: "82px", boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 5px", left: "10%", transitionDuration: "0s", width: "80%" }}>
                                    <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">I GOT IT</div>
                                </div>
                            </div>
                        </div>

                    }

                </div>
            </div>

        </>
    )
}

// redux connect
const mapStateToProps = (state) => ({
    res: state.mine,
    res1: state.myProfile,
    res2: state.walletAmount,
});

export default connect(mapStateToProps)(MineSweeper);