import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { AddFastParity } from '../../../../redux/action/FetchData';
import swal from 'sweetalert';
import error from "../../../../images/error.png"
import fastTypeBg from "../../../../images/fastTypeBg.png"
import fastNum1 from "../../../../images/fastNum1.png"
import fastNum2 from "../../../../images/fastNum2.png"
import fastNum3 from "../../../../images/fastNum3.png"
import fastNum4 from "../../../../images/fastNum4.png"
import fastNum5 from "../../../../images/fastNum5.png"
import fastNum6 from "../../../../images/fastNum6.png"
import fastNum7 from "../../../../images/fastNum7.png"
import fastNum8 from "../../../../images/fastNum8.png"
import fastNum9 from "../../../../images/fastNum9.png"
import fastNum0 from "../../../../images/fastNum0.png"






const AddNumber = ({ period, socket, status, point, dispatch, res }) => {
    const login_data = JSON.parse(sessionStorage.getItem('login'))

    const [show, setShow] = useState(false);
    const [number, setNumber] = useState(5)
    const [Multi, setMulti] = useState(10)
    const [credit, setCredit] = useState()
    const [show1, setShow1] = useState(false);
    const [amountValue, setAmountValue] = useState({
        type1: true,
        type2: false,
        type3: false,
        type3: false

    })
    const [finalAmount, setFinalAmount] = useState({
        period: "",
        user: login_data.userId,
        select_number: "",
        point: "",
        Amount: "",


    })

    useEffect(() => {
        setFinalAmount({
            ...finalAmount,
            period: period && period
        })
    }, [period])

    const [calc, setCalc] = useState({
        delivery: ((Multi * number) - ((Multi * number) * 0.20 / 10)).toFixed(2),
        fee: ((Multi * number) * 0.20 / 10).toFixed(2),
        amount: ((Multi * number) - ((Multi * number) * 0.20 / 10)).toFixed(2)
    })
    // HANDLE MODAL1
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    //HANDLE MODAL 
    const handleClose = () => setShow(false);
    const handleShow = (value1, num) => {

        setFinalAmount({
            ...finalAmount,
            select_number: value1
        })
        if (status == true) {
            setShow(false)
        }
        else {
            setShow(true);
        }
        setCredit(num)
        // if(value1 =="Green" || value1 =="Violet"||value1 == "Red")
        // {
        //     setFinalAmount({
        //         ...finalAmount,
        //         value:"char"
        //     })
        // }
        // else{
        //     setFinalAmount({
        //         ...finalAmount,
        //         value:"number"
        //     })
        // }
    }

    socket.on("balance_low", (data) => {
        // alert(data)
        setShow1(true)
    })
    const handleChange = (e) => {
        if (e.target.value == "10") {
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
        setNumber(e.target.value)
    }
    // CALCULATE AMOUNT FUNCTION 
    const Calculation = (value, number) => {
        const num = ((value * number) - ((value * number) * 0.20 / 10))
        const a = (num * credit - num)
        setCalc({
            delivery: num.toFixed(2),
            fee: ((value * number) * 0.20 / 10).toFixed(2),
            amount: (num + a).toFixed(2)
        })
        setFinalAmount({
            ...finalAmount,
            point: Number(value * number),
            Amount: (num + a).toFixed(2)
        })
    }
    const handleNumber = (mode, value) => {
        if (mode == 0) {
            if (number == 0) {
                setNumber(number)
            }
            else {
                setNumber(number - value)
            }
        }
        else {
            setNumber(number + value)
        }
    }
    useEffect(() => {
        Calculation(Multi, number)

    }, [number, credit])
    const handleMulti = (mode, value) => {
        setMulti(value)
        Calculation(value, number)
    }
    // CALL API OF ADD AMOUNT IN FAST PARITY GAME 
    const handleSubmit = (e) => {
        e.preventDefault()

        socket.emit("join_fast_parity", finalAmount)
        swal({ text: `₹${finalAmount.point} Add Successfully`, "timer": 2000 })
        handleClose()
    }
    return (
        <>
            <Modal show={show1} onHide={handleClose1} animation={false}>

                <Modal.Body>
                    <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "286px", top: "331px", width: "402px" }}>
                        <div className="css-1dbjc4n r-1awozwy r-1777fci r-s9qnr1">
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci">
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010">
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${error})` }}></div>
                                    <img alt="" draggable="false" src={error} className="css-9pa8cd" /></div>
                                <div dir="auto" className="css-901oao" style={{ fontSize: "24px", marginLeft: "14px" }}>Error message</div>
                            </div><div className="css-1dbjc4n" style={{ marginTop: "40px" }}><div dir="auto" className="css-901oao r-5zpi7z r-b88u0q" style={{ fontSize: "34px" }}>Not enough points</div></div><div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginTop: "46px", transitionDuration: "0s", width: "326px" }}>
                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={() => setShow1(false)}>Recharge Now</div></div></div></div>
                </Modal.Body>
            </Modal>
            {show &&

                <div className="css-1dbjc4n r-drfeu3 r-1p0dtai r-1d2f490 r-1xcajam r-zchlnj r-ipm5af r-13qz1uu r-dvx3qi" style={{ height: "919px" }}>
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-19z077z r-1i6wzkk r-lrvibr r-13qz1uu" style={{ height: "319px", transitionDuration: "0s" }}></div>

                    <div className="css-1dbjc4n r-14lw9ot r-chstv r-1nlznlq r-1p0dtai r-1d2f490 r-u8s1d r-13qz1uu" style={{ height: "666px", zIndex: "25" }}>
                        <div className="css-1dbjc4n">
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-13qz1uu" style={{ height: "30px", marginTop: "14px" }}>
                                <div dir="auto" className="css-901oao r-5zpi7z r-b88u0q" style={{ fontSize: "34px" }}>Parity-<span className="css-901oao css-16my406" style={{ color: "rgb(0, 194, 130)" }}>Green</span></div>
                            </div>
                            <div className="css-1dbjc4n r-14lw9ot r-1pi2tsx r-1idfib4">
                                <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-1q9bdsx r-1d2vvjm r-18u37iz r-1wtj0ep r-1ifxtd0 r-thmkab r-23eiwj">
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci">
                                        <div dir="auto" className="css-901oao">Point</div>
                                        <div dir="auto" className="css-901oao r-5zpi7z r-zz5t5d r-b88u0q" style={{ marginLeft: "8px" }}>{point}</div>
                                    </div>
                                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1l506o1 r-1llaxt6 r-1l5va9f r-1loqt21 r-18u37iz r-uvuy5l r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-13i4ljo" style={{ transitionDuration: "0s" }}>
                                        <div dir="auto" className="css-901oao r-jwli3a">Recharge</div>
                                    </div>
                                </div>
                                <div className="css-1dbjc4n">
                                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z">Contract Point</div>
                                    {/* <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1ifxtd0 r-1wzrnnt">
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-1dzdj1l r-1d2vvjm r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru" style={{ transitionDuration: "0s" }} onClick={() => handleMulti(2, 10)}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q">10</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-1dzdj1l r-1d2vvjm r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru" style={{ transitionDuration: "0s" }} onClick={() => handleMulti(2, 100)}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q">100</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-1dzdj1l r-1d2vvjm r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru" style={{ transitionDuration: "0s" }} onClick={() => handleMulti(2, 1000)}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q">1000</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-1dzdj1l r-1d2vvjm r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru" style={{ transitionDuration: "0s" }} onClick={() => handleMulti(2, 10000)}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q">10000</div>
                                        </div>
                                    </div> */}
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1ifxtd0 r-1wzrnnt">
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-1dzdj1l r-1d2vvjm r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru" style={{ backgroundColor: amountValue.type1 && "rgb(59, 59, 69)", boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px", transitionDuration: "0s", width: "102px" }}>
                                            <div dir="auto" className={`css-901oao ${amountValue.type1 && "r-jwli3a"}  r-b88u0q`} style={{ color: !amountValue.type1 && "rgb(56, 59, 69)", fontSize: "26px" }}>10</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-1dzdj1l r-1d2vvjm r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru" style={{ backgroundColor: amountValue.type2 && "rgb(59, 59, 69)", boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px", transitionDuration: "0s", width: "102px" }}>
                                            <div dir="auto" className={`css-901oao ${amountValue.type2 && "r-jwli3a"}  r-b88u0q`} style={{ color: !amountValue.type2 && "rgb(56, 59, 69)", fontSize: "26px" }}>100</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-1dzdj1l r-1d2vvjm r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru" style={{ backgroundColor: amountValue.type3 && "rgb(59, 59, 69)", boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px", transitionDuration: "0s", width: "102px" }}>
                                            <div dir="auto" className={`css-901oao ${amountValue.type3 && "r-jwli3a"}  r-b88u0q`} style={{ color: !amountValue.type3 && "rgb(56, 59, 69)", fontSize: "26px" }}>1000</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-1dzdj1l r-1d2vvjm r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru" style={{ backgroundColor: amountValue.type4 && "rgb(59, 59, 69)", boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px", transitionDuration: "0s", width: "102px" }}>
                                            <div dir="auto" className={`css-901oao  ${amountValue.type4 && "r-jwli3a"}  r-b88u0q`} style={{ color: !amountValue.type4 && "rgb(56, 59, 69)", fontSize: "26px" }}>10000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="css-1dbjc4n">
                                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z">Number</div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1ifxtd0 r-1wzrnnt">
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-rpao8l r-1dzdj1l r-rs99b7 r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1kv6naz" style={{ transitionDuration: "0s", }} onClick={() => handleNumber(0, 5)}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">- 5</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-rpao8l r-1dzdj1l r-rs99b7 r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1kv6naz" style={{ transitionDuration: "0s", }} onClick={() => handleNumber(0, 1)}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">- 1</div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci">
                                            <input maxLength="4" autoCapitalize="sentences" autoComplete="on" autoCorrect="on" dir="auto" spellCheck="true" inputMode="numeric" data-focusable="true" className="css-11aywtz r-14a6gy1 r-3i2nvb r-b88u0q r-q4m81j r-v53qcl" value={number} onChange={handleChange} />
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-rpao8l r-1dzdj1l r-rs99b7 r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1kv6naz" style={{ transitionDuration: "0s", }} onClick={() => handleNumber(1, 1)}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">+ 1</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-rpao8l r-1dzdj1l r-rs99b7 r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1kv6naz" style={{ transitionDuration: "0s", }} onClick={() => handleNumber(1, 5)}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">+ 5</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="css-1dbjc4n r-obd0qt">
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci" style={{ height: "30px" }}>
                                        <div dir="auto" className="css-901oao r-1az3528">Delivery:</div>
                                        <div className="css-1dbjc4n r-obd0qt r-rmd8tk">
                                            <div dir="auto" className="css-901oao r-5zpi7z r-1i10wst">{calc.delivery}</div>
                                        </div>
                                    </div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci" style={{ height: "30px" }}>
                                        <div dir="auto" className="css-901oao r-1az3528">Fee:</div>
                                        <div className="css-1dbjc4n r-obd0qt r-rmd8tk">
                                            <div dir="auto" className="css-901oao r-5zpi7z r-1i10wst">{calc.fee}</div>
                                        </div>
                                    </div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci" style={{ height: "30px" }}>
                                        <div dir="auto" className="css-901oao r-1az3528">Win:</div>
                                        <div className="css-1dbjc4n r-obd0qt r-rmd8tk">
                                            <div dir="auto" className="css-901oao r-5zpi7z r-1i10wst">{calc.amount}</div>
                                        </div>
                                    </div>
                                </div>
                                <div data-focusable="true" tabIndex="0" onClick={handleSubmit} className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 8px", marginTop: "24px", transitionDuration: "0s" }}>
                                    <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Confirm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* ADD LOTTERY AMOUNT MODAL */}


            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-11c0sde">
                <div className="css-1dbjc4n r-bnwqim">
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className={`css-1dbjc4n r-1awozwy green r-kdyh1x r-18tnvcm r-1loqt21 r-eqz5dr r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1vzx1hx ${status ? "unable" : "able"} `}
                        style={{ height: "82px", transitionDuration: "0s" }}
                        onClick={() => handleShow("Green", 2)}
                    >
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "36px", width: "44px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: `url(${fastTypeBg})` }}
                            ></div>
                            <img alt="" draggable="false" src={fastTypeBg} className="css-9pa8cd" />
                        </div>
                        <div dir="auto" className="css-901oao r-jwli3a r-adyw6z r-b88u0q">Join Green</div>
                    </div>
                    <div dir="auto" className="css-901oao r-q4m81j" style={{ color: "rgb(153, 153, 153)" }}>1:2</div>
                </div>
                <div className="css-1dbjc4n r-bnwqim">
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className={`css-1dbjc4n r-1awozwy violet r-kdyh1x r-1czo7zw r-1loqt21 r-eqz5dr r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1vzx1hx ${status ? "unable" : "able"}`}
                        style={{ height: "82px", transitionDuration: "0s" }}
                        onClick={() => handleShow("Violet", 4.5)}

                    >
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "36px", width: "44px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: `url(${fastTypeBg})` }}
                            ></div>
                            <img alt="" draggable="false" src={fastTypeBg} className="css-9pa8cd" />
                        </div>
                        <div dir="auto" className="css-901oao r-jwli3a r-adyw6z r-b88u0q">Join Violet</div>
                    </div>
                    <div dir="auto" className="css-901oao r-q4m81j" style={{ color: "rgb(153, 153, 153)" }}>1:4.5</div>
                </div>
                <div className="css-1dbjc4n r-bnwqim">
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className={`css-1dbjc4n r-1awozwy red r-kdyh1x r-q2denb r-1loqt21 r-eqz5dr r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1vzx1hx ${status ? "unable" : "able"}`}
                        style={{ height: "82px", transitionDuration: "0s" }}
                        onClick={() => handleShow("Red", 2)}

                    >
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "36px", width: "44px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: `url(${fastTypeBg})` }}
                            ></div>
                            <img alt="" draggable="false" src={fastTypeBg} className="css-9pa8cd" />
                        </div>
                        <div dir="auto" className="css-901oao r-jwli3a r-adyw6z r-b88u0q">Join Red</div>
                    </div>
                    <div dir="auto" className="css-901oao r-q4m81j" style={{ color: "rgb(153, 153, 153)" }}>1:2</div>
                </div>
            </div>
            <div className="css-1dbjc4n">
                <div className="css-1dbjc4n r-18u37iz r-1w6e6rj r-1wtj0ep r-14gqq1x">
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className={`css-1dbjc4n r-1awozwy r-14lw9ot r-131i89u r-kdyh1x r-rs99b7 r-1loqt21 r-18u37iz r-102gzdx r-1777fci r-l71dzp r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru ${status ? "unable" : "able"}`}
                        style={{ transitionDuration: "0s" }}
                        onClick={() => handleShow("1", 9)}

                    >
                        <div dir="auto" className="css-901oao" >1</div>
                        {!status &&
                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1d2f490 r-1udh08x r-u8s1d r-ipm5af r-13qz1uu r-417010">
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-x3cy2q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${fastNum1})` }}
                                ></div>
                                <img alt="" draggable="false" src={fastNum1} className="css-9pa8cd" />
                            </div>
                        }
                    </div>
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className={`css-1dbjc4n r-1awozwy r-14lw9ot r-131i89u r-kdyh1x r-rs99b7 r-1loqt21 r-18u37iz r-102gzdx r-1777fci r-l71dzp r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru ${status ? "unable" : "able"}`}
                        style={{ transitionDuration: "0s" }}
                        onClick={() => handleShow("2", 9)}

                    >
                        <div dir="auto" className="css-901oao" >2</div>
                        {!status &&

                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1d2f490 r-1udh08x r-u8s1d r-ipm5af r-13qz1uu r-417010">
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-x3cy2q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${fastNum2})` }}
                                ></div>
                                <img alt="" draggable="false" src={fastNum2} className="css-9pa8cd" />
                            </div>
                        }
                    </div>
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className={`css-1dbjc4n r-1awozwy r-14lw9ot r-131i89u r-kdyh1x r-rs99b7 r-1loqt21 r-18u37iz r-102gzdx r-1777fci r-l71dzp r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru ${status ? "unable" : "able"}`}
                        style={{ transitionDuration: "0s" }}
                        onClick={() => handleShow("3", 9)}

                    >
                        <div dir="auto" className="css-901oao" >3</div>
                        {!status &&

                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1d2f490 r-1udh08x r-u8s1d r-ipm5af r-13qz1uu r-417010">
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-x3cy2q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${fastNum3})` }}
                                ></div>
                                <img alt="" draggable="false" src={fastNum3} className="css-9pa8cd" />
                            </div>
                        }
                    </div>
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className={`css-1dbjc4n r-1awozwy r-14lw9ot r-131i89u r-kdyh1x r-rs99b7 r-1loqt21 r-18u37iz r-102gzdx r-1777fci r-l71dzp r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru ${status ? "unable" : "able"}`}
                        style={{ transitionDuration: "0s" }}
                        onClick={() => handleShow("4", 9)}

                    >
                        <div dir="auto" className="css-901oao" >4</div>
                        {!status &&

                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1d2f490 r-1udh08x r-u8s1d r-ipm5af r-13qz1uu r-417010">
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-x3cy2q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${fastNum4})` }}
                                ></div>
                                <img alt="" draggable="false" src={fastNum4} className="css-9pa8cd" />
                            </div>
                        }
                    </div>
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className={`css-1dbjc4n r-1awozwy r-14lw9ot r-131i89u r-kdyh1x r-rs99b7 r-1loqt21 r-18u37iz r-102gzdx r-1777fci r-l71dzp r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru ${status ? "unable" : "able"}`}
                        style={{ transitionDuration: "0s" }}
                        onClick={() => handleShow("5", 9)}

                    >
                        <div dir="auto" className="css-901oao"  >5</div>
                        {!status &&

                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1d2f490 r-1udh08x r-u8s1d r-ipm5af r-13qz1uu r-417010">
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-x3cy2q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${fastNum5})` }}
                                ></div>
                                <img alt="" draggable="false" src={fastNum5} className="css-9pa8cd" />
                            </div>
                        }
                    </div>
                </div>
                <div className="css-1dbjc4n r-18u37iz r-1w6e6rj r-1wtj0ep r-14gqq1x">
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className={`css-1dbjc4n r-1awozwy r-14lw9ot r-131i89u r-kdyh1x r-rs99b7 r-1loqt21 r-18u37iz r-102gzdx r-1777fci r-l71dzp r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru ${status ? "unable" : "able"}`}
                        style={{ transitionDuration: "0s" }}
                        onClick={() => handleShow("6", 9)}

                    >
                        <div dir="auto" className="css-901oao" >6</div>
                        {!status &&

                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1d2f490 r-1udh08x r-u8s1d r-ipm5af r-13qz1uu r-417010">
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-x3cy2q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${fastNum6})` }}
                                ></div>
                                <img alt="" draggable="false" src={fastNum6} className="css-9pa8cd" />
                            </div>
                        }
                    </div>
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className={`css-1dbjc4n r-1awozwy r-14lw9ot r-131i89u r-kdyh1x r-rs99b7 r-1loqt21 r-18u37iz r-102gzdx r-1777fci r-l71dzp r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru ${status ? "unable" : "able"}`}
                        style={{ transitionDuration: "0s" }}
                        onClick={() => handleShow("7", 9)}

                    >
                        <div dir="auto" className="css-901oao" >7</div>
                        {!status &&

                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1d2f490 r-1udh08x r-u8s1d r-ipm5af r-13qz1uu r-417010">
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-x3cy2q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${fastNum7})` }}
                                ></div>
                                <img alt="" draggable="false" src={fastNum7} className="css-9pa8cd" />
                            </div>
                        }
                    </div>
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className={`css-1dbjc4n r-1awozwy r-14lw9ot r-131i89u r-kdyh1x r-rs99b7 r-1loqt21 r-18u37iz r-102gzdx r-1777fci r-l71dzp r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru ${status ? "unable" : "able"}`}
                        style={{ transitionDuration: "0s" }}
                        onClick={() => handleShow("8", 9)}

                    >
                        <div dir="auto" className="css-901oao" >8</div>
                        {!status &&

                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1d2f490 r-1udh08x r-u8s1d r-ipm5af r-13qz1uu r-417010">
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-x3cy2q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${fastNum8})` }}
                                ></div>
                                <img alt="" draggable="false" src={fastNum8} className="css-9pa8cd" />
                            </div>
                        }
                    </div>
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className={`css-1dbjc4n r-1awozwy r-14lw9ot r-131i89u r-kdyh1x r-rs99b7 r-1loqt21 r-18u37iz r-102gzdx r-1777fci r-l71dzp r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru ${status ? "unable" : "able"}`}
                        style={{ transitionDuration: "0s" }}
                        onClick={() => handleShow("9", 9)}

                    >
                        <div dir="auto" className="css-901oao" >9</div>
                        {!status &&

                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1d2f490 r-1udh08x r-u8s1d r-ipm5af r-13qz1uu r-417010">
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-x3cy2q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${fastNum9})` }}
                                ></div>
                                <img alt="" draggable="false" src={fastNum9} className="css-9pa8cd" />
                            </div>
                        }
                    </div>
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className={`css-1dbjc4n r-1awozwy r-14lw9ot r-131i89u r-kdyh1x r-rs99b7 r-1loqt21 r-18u37iz r-102gzdx r-1777fci r-l71dzp r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru ${status ? "unable" : "able"}`}
                        style={{ transitionDuration: "0s" }}
                        onClick={() => handleShow("0", 9)}

                    >
                        <div dir="auto" className="css-901oao" >0</div>
                        {!status &&

                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1d2f490 r-1udh08x r-u8s1d r-ipm5af r-13qz1uu r-417010">
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-x3cy2q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${fastNum0})` }}
                                ></div>
                                <img alt="" draggable="false" src={fastNum0} className="css-9pa8cd" />
                            </div>
                        }
                    </div>
                </div>
                <div dir="auto" className="css-901oao r-q4m81j" style={{ color: "rgb(153, 153, 153)" }}>1:9</div>
            </div>
        </>
    )
}

export default AddNumber