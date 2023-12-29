import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { InviteDetails, WalletAmountParity, WithdrawAccountDataDetails, WithdrawAccountDetails } from '../../../redux/action/FetchData'
import Modal from "react-bootstrap/Modal";
import WithdrawMethod from './WithdrawMethod';
import swal from 'sweetalert';
import checked from "../../../images/checked.png"
import arrowLeft from "../../../images/arrowLeft.png"
import plus from "../../../images/plus.png"
import cLoseBtn from "../../../images/cLoseBtn.png"
import withdrawalTask from "../../../images/withdrawalTask.png"
import withdrawalCheckin from "../../../images/withdrawalCheckin.png"
import error from "../../../images/error.png"



const Withdraw = ({ dispatch, res, res1, res2, res3 }) => {
    const params = useParams()
    const login_data = JSON.parse(sessionStorage.getItem('login'))
    const navigate = useNavigate()
    const location = useLocation()
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [status, setStatus] = useState(false)
    const [status1, setStatus1] = useState(false)

    const [state, setState] = useState({
        point: "",
        userId: login_data.userId,
        name: location.state && location.state.name,
        mode: location.state && location.state.mode,
        account: location.state && location.state.number,
        ifsc: location.state && location.state.ifsc,
        type: params.id
    })
    const handleClose = () => setShow(false)
    const handleClose1 = () => setShow1(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        if (value.length && state.account) {
            setStatus(true)
        }
        setState({
            ...state, [name]: value
        })
    }
    useEffect(() => {
        params.id == 1 ?
            dispatch(WalletAmountParity())
            :
            dispatch(InviteDetails())
        dispatch(WithdrawAccountDataDetails())
    }, [dispatch])
    const api_res = res && res.data
    const wallet_res = res3 && res3.data
    const handleWithdraw = () => {
        if (params.id == 1 && api_res.data && api_res.data[0].amount < 30) {
            setStatus1(true)
        }
        else if (!location.state) {
            swal({ "text": "Please add UPI", "timer": 2000, "icon": "info" })
        }
        else if (!state.point.length) {
            swal({ "text": "Please add Amount", "timer": 2000, "icon": "info" })

        }
        else {
            setShow(true)
        }
    }
    const handleModal = () => {
        setShow(false)
        setShow1(true)
    }
    const handleModal1 = (e) => {
        e.preventDefault()
        setShow1(false)
        dispatch(WithdrawAccountDetails(state))
    }

    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-cb25cm r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-uxrrfj r-1777fci r-p1pxzi r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-uxrrfj r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", width: "16px" }} onClick={() => navigate(-1)}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${arrowLeft})` }}></div>
                                    <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" />
                                </div>
                            </div>
                            <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(0, 0, 0)", fontSize: "26px", textAlign: "center" }}>WithDrawal</div>
                        </div>
                        
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{ height: "828px" }}>
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-14lw9ot r-1cad53l r-1idfib4">
                                    <div dir="auto" className="css-901oao r-1az3528 r-evnaw r-q4m81j">My Point</div>
                                    <div className="css-1dbjc4n r-obd0qt r-18u37iz r-1777fci">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-zz5t5d r-b88u0q">₹</div>
                                        <div dir="auto" className="css-901oao r-5zpi7z r-nyc15k r-b88u0q">{params.id == 1 ? api_res.data && api_res.data[0].amount : wallet_res.data && wallet_res.data[0].amount}</div>
                                    </div>
                                    {location.state ?
                                        <>
                                            {/* <div style={{ backgroundColor: "aliceblue", padding: "55px", margin: "10px", position: "relative" }} >
                                                <div style={{ backgroundColor: "blue", width: "fit-content", padding: "10px 20px ", color: "white", left: "5px", position: "absolute", top: "0px" }}>{location.state.mode == 0 ? "Upi" : "Bank"}</div>
                                                <div style={{ textAlign: "center" }}>
                                                    <p>{location.state.name}</p>
                                                    <p>{location.state.number}</p>
                                                </div>
                                            </div> */}
                                            <div className="css-1dbjc4n" style={{ paddingRight: "20px", paddingLeft: "20px" }} >
                                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1nt8t1s r-ji1w04 r-1dzdj1l r-eg6o18 r-rs99b7 r-deolkf r-1loqt21 r-11c0sde r-1udh08x r-whuqzp r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-417010" style={{ height: "42px", width: "42px" }}>
                                                        <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${checked})` }}></div><img alt="" draggable="false" src={checked} className="css-9pa8cd" /></div>
                                                    <div dir="auto" className="css-901oao r-2mrr8d r-1dpl46z r-notknq r-jwli3a r-evnaw r-195d4m8 r-1d2f490 r-tqlgve r-u8s1d r-q4m81j r-1evm3xx r-iv112m">Bank</div>

                                                    <div className="css-1dbjc4n r-1v1z2uz r-13qz1uu">
                                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1444osr">
                                                            <div dir="auto" className="css-901oao r-1az3528 r-evnaw">Name</div>
                                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{location.state.name}</div>
                                                        </div>
                                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1444osr">
                                                            <div dir="auto" className="css-901oao r-1az3528 r-evnaw">IFSC</div>
                                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{location.state.ifsc}</div>
                                                        </div>
                                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1444osr">
                                                            <div dir="auto" className="css-901oao r-1az3528 r-evnaw">Account Number</div>
                                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{location.state.number}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h5 style={{ textAlign: "end", cursor: "pointer" }} onClick={() => navigate(`/BankCard/${params.id}`)}>Change </h5>
                                        </>

                                        :
                                        <div
                                            data-focusable="true"
                                            tabIndex="0"
                                            className="css-1dbjc4n r-1awozwy r-1nt8t1s r-ji1w04 r-1dzdj1l r-rs99b7 r-1loqt21 r-18u37iz r-12b20jn r-1777fci r-1x0uki6 r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu"
                                            style={{ transitionDuration: "0s" }}
                                            onClick={() => navigate(`/BankCard/${params.id}`)}
                                        >
                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "22px", width: "22px" }}>
                                                <div
                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                    style={{ backgroundImage: `url(${plus})` }}
                                                ></div>
                                                <img alt="" draggable="false" src={plus} className="css-9pa8cd" />
                                            </div>
                                            <div dir="auto" className="css-901oao r-1az3528 r-1x35g6 r-ltgprq">Add Payment Method</div>
                                        </div>
                                    }
                                    <div className="css-1dbjc4n"><div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q r-1x0uki6">Withdrawal Amount</div></div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-l71dzp r-bnwqim">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-f9274a r-u8s1d">₹</div>
                                        <input
                                            placeholder="Please Input"
                                            autoCapitalize="sentences"
                                            autoComplete="on"
                                            autoCorrect="on"
                                            dir="auto"
                                            spellCheck="true"
                                            inputMode="numeric"
                                            data-focusable="true"
                                            className="css-11aywtz r-n2h5ot r-evnaw r-98c09q r-oyr0en r-cwlir5 r-18f9sac r-13qz1uu"
                                            value={state.point}
                                            name="point"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-knv0ih">
                                        <div dir="auto" className="css-901oao r-1az3528 r-adyw6z">Amount&lt;₹1500,fee ₹30</div>
                                        <div dir="auto" className="css-901oao r-1az3528 r-adyw6z">
                                            Maximum:
                                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-xoduu5 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                                <span className="css-901oao css-16my406 r-1jrmi80 r-adyw6z">₹{params.id == 1 ? api_res.data && api_res.data[0].amount : wallet_res.data && wallet_res.data[0].amount}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-knv0ih">
                                        <div dir="auto" className="css-901oao r-1az3528 r-adyw6z">Amount&gt;=₹1500,fee 2%</div>
                                        <div dir="auto" className="css-901oao r-1az3528 r-adyw6z">Minimum:₹35</div>
                                    </div>
                                    <div
                                        data-focusable="true"
                                        tabIndex="0"
                                        className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uvuy5l r-1777fci r-1x0uki6 r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                        style={{ backgroundColor: status ? "rgb(0, 147, 255)" : "rgb(214, 214, 214)", transitionDuration: "0s" }}
                                    >
                                        <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={handleWithdraw}>Withdrawal</div>
                                    </div>
                                </div>
                                <div className="css-1dbjc4n r-14lw9ot r-1cad53l r-1idfib4">
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q">Withdrawals Record</div>
                                    {res2.data && res2.data.data ?
                                        <WithdrawMethod res_data={res2.data} />
                                        :

                                        <div dir="auto" className="css-901oao r-1az3528 r-adyw6z r-4bskai r-1hmxqee r-q4m81j r-np636n r-emhjjp">No records</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {status1 &&
                        <div className="css-1dbjc4n r-1awozwy r-1p0dtai r-16y7rff r-1d2f490 r-1xcajam r-zchlnj r-ipm5af" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: "99" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                <div dir="auto" className="css-901oao"></div>
                            </div>
                            <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "420px", top: "316.5px", width: "402px" }}>
                                <div className="css-1dbjc4n r-1pi2tsx r-bnwqim r-13qz1uu">
                                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-sga3zk r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" onClick={() => setStatus1(false)} style={{ right: "8px", top: "-76px", transitionDuration: "0s" }}>
                                        <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010">
                                            <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${cLoseBtn})` }}></div><img alt="" draggable="false" src={cLoseBtn} className="css-9pa8cd" /></div>
                                    </div>
                                    <div className="css-1dbjc4n r-1awozwy r-1pi2tsx r-a2tzq0 r-1ehh1yr" style={{ paddingTop: "28px", paddingBottom: "28px" }}>
                                        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-q4m81j" style={{ lineHeight: "28px" }}>The account balance is too few and needs to be more than ₹30</div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-knv0ih r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu"
                                            style={{ transitionDuration: "0s" }} onClick={() => navigate("/Checkin")}>
                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", marginRight: "14px", width: "28px" }}>
                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${withdrawalTask})` }}></div><img alt="" draggable="false" src={withdrawalTask} className="css-9pa8cd" /></div>
                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Check In Reward</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" onClick={() => navigate("/TaskType")} className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-knv0ih r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" style={{ transitionDuration: "0s" }}>
                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", marginRight: "14px", width: "28px" }}>
                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${withdrawalCheckin})` }}></div><img alt="" draggable="false" src={withdrawalCheckin} className="css-9pa8cd" /></div>
                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Task Reward</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }} onClick={() => setStatus1(false)}>
                                            <div dir="auto" className="css-901oao r-rs3z27 r-evnaw">Later</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {show &&
                        <div className="css-1dbjc4n r-1awozwy r-1p0dtai r-16y7rff r-1d2f490 r-1xcajam r-zchlnj r-ipm5af" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: "99" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                <div dir="auto" className="css-901oao"></div>
                            </div>
                            <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "400px", top: "331px", width: "402px" }}>
                                    <div className="css-1dbjc4n r-1awozwy r-1777fci r-s9qnr1">
                                        <h2>Confirmation</h2>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci">
                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010">
                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${error})` }}></div>
                                            </div>
                                            <div dir="auto" className="css-901oao" style={{ fontSize: "24px", marginLeft: "14px" }}>Are you sure  to withdraw ₹{state.point} {location.state && location.state.name} ({location.state && location.state.number}) </div>
                                        </div>
                                        {/* <h1>{location.state.state}</h1> */}
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginTop: "46px", transitionDuration: "0s", width: "326px" }}>
                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={() => setShow(false)} >No</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginTop: "46px", transitionDuration: "0s", width: "326px" }}>
                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={handleModal}>Yes i am sure</div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    }

                    {show1 &&
                        <div className="css-1dbjc4n r-1awozwy r-1p0dtai r-16y7rff r-1d2f490 r-1xcajam r-zchlnj r-ipm5af" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: "99" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                <div dir="auto" className="css-901oao"></div>
                            </div>
                            <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "286px", top: "331px", width: "402px" }}>
                                    <div className="css-1dbjc4n r-1awozwy r-1777fci r-s9qnr1">
                                        <h2>Submitted successfully</h2>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci">
                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010">
                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${error})` }}></div>
                                            </div>
                                            <div dir="auto" className="css-901oao" style={{ fontSize: "24px", marginLeft: "14px" }}>If the information is filled in accurately ,the account will arrive in 10  minutes</div>
                                        </div>
                                        {/* <h1>{location.state.state}</h1> */}

                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginTop: "46px", transitionDuration: "0s", width: "326px" }}>
                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={handleModal1}>yes Got it</div>
                                        </div>
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
    res: state.walletAmount,
    res1: state.withdraw,
    res2: state.withdrawData,
    res3: state.invite
});

export default connect(mapStateToProps)(Withdraw);