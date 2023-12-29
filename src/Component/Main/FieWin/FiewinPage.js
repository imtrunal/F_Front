import { useState, useEffect } from 'react'
import * as React from 'react'

import fastParityEnterV2 from "../../../images/fastParityEnterV2.png"
import indexCheckV1 from "../../../images/indexCheckV1.png"
import indexTaskV1 from "../../../images/indexTaskV1.png"
import mineSweeperEnterV2 from "../../../images/mineSweeperEnterV2.png"
import logo_b from "../../../images/logo_b.png"
import Theme from '../../../common/Theme'
import { NavLink, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { WalletAmountParity } from '../../../redux/action/FetchData'
import CountUp from 'react-countup';
import crashEnter from "../../../images/crashEnter.png"

const FiewinPage = ({ socket, dispatch, res }) => {
    const login_data = JSON.parse(sessionStorage.getItem('login'))
    const navigate = useNavigate()
    socket.emit("loginid", login_data._id)
    const [walletAmount, setWalletAmount] = useState({})
    const [state1, setState1] = useState([{
        avtar: "", mobile_no: "9875623145", win_amount: "5000", game_name: "Fast-parity"
    }])
    const [status, setStatus] = useState(false)
    const [status1, setStatus1] = useState(false)
    const [statusData, setStatusData] = useState()

    const getData = async () => {
        try {
            const login_data = JSON.parse(sessionStorage.getItem('login'))
            var response = await fetch(`http://161.97.146.42:7000/api/homePage`, {
                headers: {
                    "x-access-token": login_data.token,
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json()
            console.log(data);
            setStatusData(data);

        } catch (e) {
            console.log(e);
        }

    }

    // useEffect(() => {
    //     getData()
    // }, [])



    useEffect(() => {
        getData()
        dispatch(WalletAmountParity())
    }, [dispatch])
    const api_res = res.data
    socket.on("user-win", (data) => {
        setInterval(() => {
            let rand = Math.floor(Math.random() * data.length)
            setState1(data[rand])
        }, 2000)
    })
    useEffect(() => {
        setStatus(true)
    }, [state1])
    socket.on("invite-id", (data) => {
        console.log(data.userId);
        if (data.userId == login_data.userId) {
            setStatus1(true)
            setWalletAmount(data)
        }
    })



    return (
        <>
            {status1 &&
                <div class="css-1dbjc4n r-1awozwy r-2tavb8 r-1p0dtai r-bm04ic r-1d2f490 r-1xcajam r-zchlnj r-ipm5af" style={{ zIndex: "99" }}>
                    <div data-focusable="true" tabindex="0" class="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                        <div dir="auto" class="css-901oao"></div>
                    </div>
                    <div class="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "216px", top: "270.5px", width: "402px" }}>
                        <div class="css-1dbjc4n r-1roxt5m r-1dzdj1l r-1pi2tsx r-lhv16n r-1wsy6gc r-db3y9k r-bnwqim r-1vpntem">
                            <div class="css-1dbjc4n r-me5xia r-1d2f490 r-u8s1d r-1vxpgzs r-13qz1uu">
                                <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-417010" style={{ height: "242px", left: "82px", top: "-250px", width: "242px" }}>
                                    <div class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: " url('https://res.cloudinary.com/fiewin/image/upload/images/Shine.png')" }}></div><img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/Shine.png" class="css-9pa8cd" /></div>
                                <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-417010" style={{ height: "142px", left: "5%", top: "-153px", width: "90%" }}>
                                    <div class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/Congratulations.png')" }}></div><img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/Congratulations.png" class="css-9pa8cd" /></div>
                            </div>
                            <div dir="auto" class="css-901oao r-1m3jl8i r-evnaw r-37tt59 r-q4m81j">New agency income</div>
                            <div dir="auto" class="css-901oao r-14a6gy1 r-1ui5ee8 r-b88u0q r-q4m81j">₹{walletAmount.point}</div>
                            <div data-focusable="true" onClick={() => navigate("/tabIndex/1")} tabindex="0" class="css-1dbjc4n r-1awozwy r-1o2fd9h r-1dzdj1l r-1loqt21 r-1iud8zs r-1777fci r-1s2bzr4 r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" style={{ transitionDuration: "0s" }}>
                                <div dir="auto" class="css-901oao r-jwli3a r-adyw6z">Details</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Theme status="0">
                <div className="css-1dbjc4n r-1awozwy r-17c3jg3 r-18u37iz r-12b20jn r-1wtj0ep r-1ehh1yr r-lrx3fh">
                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "68px", width: "68px" }}>
                        <div
                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                            style={{ backgroundImage: `url(${logo_b})` }}
                        ></div>
                        <img alt="" draggable="false" src={`${logo_b}`} className="css-9pa8cd" />
                    </div>
                    <div dir="auto" className="css-901oao r-jwli3a r-yy2aun" style={{ fontSize: "26px" }}>FieWin APP</div>
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-102gzdx r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s", width: "202px" }}>
                        <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Download App</div>
                    </div>
                </div>
                {/* <div className="css-1dbjc4n r-1awozwy r-1iihdsi r-qklmqi r-18u37iz r-uxrrfj r-1777fci r-1udh08x r-13qz1uu r-1g40b8q" > */}
                <div className="css-1dbjc4n r-1awozwy r-1iihdsi r-18u37iz r-12b20jn r-1wtj0ep r-1ehh1yr r-lrx3fh r-qklmqis r-uxrrfj r-1777fci r-1udh08x  r-1g40b8q" >

                    <div className="css-1dbjc4n r-150rngu r-18u37iz r-16y2uox r-1wbh5a2 r-11yh6sk r-buy8e9 r-19z077z r-1sncvnh r-lrx3fh">
                        <div className="css-1dbjc4n r-18u37iz">
                            {state1 && state1.length ? state1.map((data) => {
                                return (
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-uxrrfj r-1aminmm r-lrx3fh">
                                        <img src={data.avtar} style={{ width: "34px", height: "34px", borderRadius: "18px", objectFit: "cover" }} />
                                        <div dir="auto" className="css-901oao r-5zpi7z r-ltgprq" style={{ fontSize: "20px" }}>{data.mobile_no} Wins <span className="css-901oao css-16my406" style={{ color: "rgb(0, 194, 130)" }}>{data.currency}{data.win_amount}</span> in {data.game_name} game</div>
                                    </div>
                                )
                            }) : <div></div>}
                                {/* <div >
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only"></span>
                                    </div>
                                </div>} */}
                         {state1 && <div className={`css-1dbjc4n r-1awozwy r-18u37iz r-uxrrfj r-1aminmm r-lrx3fh ${status ? "lineUp" : " "}`}>
                            <img src={state1.avtar && state1.avtar} style={{ width: "34px", height: "34px", borderRadius: "18px", objectFit: "cover" }} />
                            <div dir="auto" className="css-901oao r-5zpi7z r-ltgprq" style={{ fontSize: "20px" }}>{state1.mobile_no ? state1.mobile_no.replace(/(\d{1})(.*)(\d{3})/, '***$3') : "***375"} Wins <span className="css-901oao css-16my406" style={{ color: "rgb(0, 194, 130)" }}>{state1.currency ? state1.currency : "₹"}{state1.win_amount ? state1.win_amount : "5000"}</span> in {state1.game_name ? state1.game_name : "Fast-parity"} game</div>
                        </div>}
                        </div>
                    </div>
                </div>
                <div className="css-1dbjc4n " style={{ height: "812px" ,width:"466px" }}>
                    <div className="css-1dbjc4n" style={{ paddingBottom: "68px" }}>
                        <div className="css-1dbjc4n r-1awozwy r-1q9bdsx r-18u37iz r-ojh891 r-1wtj0ep r-ikvlq0 r-p1pxzi r-1ehh1yr">
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n"><div dir="auto" className="css-901oao" style={{ color: "rgb(151, 151, 151)", fontSize: "16px" }}>Point</div></div>
                                <div className="css-1dbjc4n r-obd0qt r-18u37iz r-c8eef1 r-9p0d5a">
                                    <div dir="auto" className="css-901oao r-5zpi7z r-3i2nvb r-b88u0q">
                                        <CountUp
                                            start={0.00}
                                            end={api_res.data && api_res.data[0].amount ? api_res.data[0].amount:0}
                                            duration={1}
                                            separator=" "
                                            decimals={2}
                                            decimal="."
                                        />
                                    </div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-1b43r93 r-b88u0q">rupee</div>
                                </div>
                                <div className="css-1dbjc4n"><div dir="auto" className="css-901oao " style={{ color: "rgb(151, 151, 151)", fontSize: "18px" }}>ID:{login_data.userId}</div></div>
                            </div>
                            <div className="css-1dbjc4n r-margin1">
                                <div
                                    data-focusable="true"
                                    tabIndex="0"
                                    className="css-1dbjc4n r-1awozwy r-2mrr8d r-nsiyw1 r-1loqt21 r-18u37iz r-102gzdx r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-h72nfg"
                                    style={{ backgroundImage: "linear-gradient(to right, rgb(52, 117, 245), rgb(11, 197, 244))", boxShadow: "rgba(46, 129, 245, 0.42) 0px 0px 6px", transitionDuration: "0s" }}
                                >
                                    <NavLink to="/tabIndex/2" style={{ textDecoration: "none" }}> <div dir="auto" className="css-901oao r-jwli3a r-b88u0q" style={{ fontSize: "20px" }}>Recharge</div></NavLink>
                                </div>
                                <div
                                    data-focusable="true"
                                    tabIndex="0"
                                    className="css-1dbjc4n r-1awozwy r-nsiyw1 r-1loqt21 r-18u37iz r-102gzdx r-1777fci r-1s2bzr4 r-1otgn73 r-1i6wzkk r-lrvibr r-h72nfg"
                                    style={{ backgroundColor: "rgb(237, 237, 237)", transitionDuration: "0s" }}
                                >
                                    <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(102, 102, 102)", fontSize: "20px" }} onClick={() => navigate("/withdraw/1")}>Withdraw</div>
                                </div>
                            </div>
                        </div>
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-z2wwpe r-18u37iz r-1wtj0e2 r-crgep1 r-1tu9xh3">
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1q9bdsx r-1loqt21 r-18u37iz r-y8nl5v r-s9qnr1 r-1otgn73 r-1i6wzkk r-lrvibr r-1jslnhd" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1iud8zs r-1udh08x r-417010" style={{ width: "50px", height: "50px" }}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${indexTaskV1})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={`${indexTaskV1}`} className="css-9pa8cd" />
                                </div>
                                <div dir="auto" className="css-901oao r-5zpi7z r-b88u0q r-ltgprq" onClick={() => navigate("/TaskType")}>Task reward</div>
                            </div>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1q9bdsx r-1loqt21 r-18u37iz r-y8nl5v r-s9qnr1 r-1otgn73 r-1i6wzkk r-lrvibr r-1jslnhd" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1iud8zs r-1udh08x r-417010" style={{ width: "50px", height: "50px" }}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${indexCheckV1})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={`${indexCheckV1}`} className="css-9pa8cd" />
                                </div>
                                <div dir="auto" className="css-901oao r-5zpi7z r-b88u0q r-ltgprq" onClick={() => navigate("/Checkin")}>Check in</div>
                            </div>
                        </div>
                        {/* <div className="css-1dbjc4n r-18u37iz r-1wtj0ep" style={{ margin: "18px" }}>
                            <NavLink to="/FastParity1">
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1q9bdsx r-deolkf r-1loqt21 r-ww80j5 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-tr7qqk" style={{ transitionDuration: "0s" }}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010">
                                        <div
                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                            style={{ backgroundImage: `url(${fastParityEnterV2})` }}
                                        ></div>
                                        <img alt="" draggable="false" src={`${fastParityEnterV2}`} className="css-9pa8cd" />
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="/minesweeper">
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1q9bdsx r-deolkf r-1loqt21 r-ww80j5 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-tr7qqk" style={{ transitionDuration: "0s" }}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010">
                                        <div
                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                            style={{ backgroundImage: `url(${mineSweeperEnterV2})` }}
                                        ></div>
                                        <img alt="" draggable="false" src={`${mineSweeperEnterV2}`} className="css-9pa8cd" />
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="css-1dbjc4n r-18u37iz r-1wtj0ep" style={{ margin: "18px" }}>

                            <NavLink to="/crash">
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1q9bdsx r-deolkf r-1loqt21 r-ww80j5 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-tr7qqk" style={{ transitionDuration: "0s" }}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010">
                                        <div
                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                            style={{ backgroundImage: `url(${crashEnter})` }}
                                        ></div>
                                        <img alt="" draggable="false" src={`${crashEnter}`} className="css-9pa8cd" />
                                    </div>
                                </div>
                            </NavLink>
                        </div> */}
                        <div className='mb-3 p-0 col-12'>
                            {/* <h1>data</h1> */}
                            <div className='row text-center '>
                                {statusData && statusData.length ? statusData.map((data) => {

                                    var link;
                                    if (data.game_number === '1') { link = "/FastParity1" }
                                    if (data.game_number === '2') { link = "/minesweeper" }
                                    if (data.game_number === '3') { link = "/crash" }
                                     return <>
                                        <div className={`col-sm-6 col-12 mt-3 ${data.game_status === 'false' && 'd-none'}`}>
                                            <div className='col-sm-12 col-12'>
                                                <NavLink to={link}>

                                                    <img src={data.game_logo} className='img-fluid' style={{marginTop:"6px"}}/>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </>
                                })
                                    :
                                    <div class="text-center mt-5">
                                        <div class="spinner-border" role="status">
                                            <span class="sr-only"></span>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </Theme>
        </>
    )
}

// redux connect
const mapStateToProps = (state) => ({
    res: state.walletAmount,// redux connect

});

export default connect(mapStateToProps)(FiewinPage);

