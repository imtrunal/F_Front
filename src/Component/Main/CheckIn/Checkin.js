import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { CheckInBonusRewardDetails, CheckInPostRewardDetails, CheckInRewardDetails, } from '../../../redux/action/FetchData'
import Coin from "../../../images/Coin.png"
import Coin_pre from "../../../images/Coin_pre.png"
import CheckIn_bg from "../../../images/CheckIn_bg.png"
import backWhite from "../../../images/backWhite.png"
import Arrow from "../../../images/Arrow.png"
import Treasure_s from "../../../images/Treasure_s.png"
import Key_s from "../../../images/Key_s.png"
import Treasure_b from "../../../images/Treasure_b.png"
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'


const Checkin = ({ socket, dispatch, res, res1, res2 }) => {
    const navigate = useNavigate()
    const [state1, setState1] = useState([{}])
    const [status, setStatus] = useState(false)
    const [status1, setStatus1] = useState({
        value: true,
        coin: ""
    })
    const [status2, setStatus2] = useState(false)

    const login_data = JSON.parse(sessionStorage.getItem('login'))

    socket.on("user-win", (data) => {

        setInterval(() => {
            let rand = Math.floor(Math.random() * data.length)
            setState1(data[rand])
        }, 2000)
    })
    useEffect(() => {
        dispatch(CheckInRewardDetails())
    }, [dispatch])
    const year = new Date().getFullYear().toString().slice(-2);
    const month = ("0" + (new Date().getMonth() + 1)).toString().slice(-2)
    const day1 = new Date(new Date().setDate(new Date().getDate())).getDate()
    const fullDate = year + month + day1
    useEffect(() => {
        var val
        if (res && res.data.checkInAll == true) {
            setStatus2(true)
        }
        res.data.data && res.data.data.map((data) => {
            if (data.checkInDate == fullDate) {
                val = data
            }
            else {
                setStatus1({ value: true })
            }
        })
        val && val.todayCheckIn == "false" ? setStatus1({ value: false, coin: val.coin }) : setStatus1({ value: true })

    }, [res])
    useEffect(() => {
        setStatus(true)
    }, [state1])
    const handleClick = (coin) => {
        console.log("aa");
        const data = { userId: login_data.userId, checkInDate: fullDate, coin: coin }
        dispatch(CheckInPostRewardDetails(data))
    }
    useEffect(() => {
        if (res1 && res1.data.checkInAll == true) {
            setStatus2(true)
        }
    }, [res1])
    useEffect(() => {
        if (res1 && res1.data.status == true) {
            swal({ "text": "Add Reward Successfully", "timer": "2000" })
            setTimeout(() => {
                window.location.reload()
            }, [1000])
        }
    }, [res1])
    const handleBonus = () => {
        const data = { userId: login_data.userId }
        dispatch(CheckInBonusRewardDetails(data))
    }
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-lzq93c r-1udh08x r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-lrx3fh">
                        <div className="css-1dbjc4n r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af">
                            <div className="css-1dbjc4n r-1p0dtai r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-1wyyakw">
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-x3cy2q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${CheckIn_bg})` }}
                                ></div>
                                <img alt="" draggable="false" src={CheckIn_bg} className="css-9pa8cd" />
                            </div>
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-102gzdx r-1777fci r-bnwqim r-13qz1uu">
                                <div data-focusable="true" tabIndex="0" onClick={() => navigate(-1)} className="css-1dbjc4n r-1awozwy r-1loqt21 r-sga3zk r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-18tzken r-mhe3cw" style={{ transitionDuration: "0s", zIndex: "1" }}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "32px", width: "16px", marginLeft: "26px" }}>
                                        <div
                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                            style={{ backgroundImage: `url(${backWhite})` }}
                                        ></div>
                                        <img alt="" draggable="false" src={backWhite} className="css-9pa8cd" />
                                    </div>
                                </div>
                                <div dir="auto" className="css-901oao r-jwli3a r-1x35g6 r-b88u0q r-q4m81j">Check In</div>
                            </div>
                            <div className="css-1dbjc4n r-14lw9ot r-kdyh1x r-d5kwsl r-ikvlq0 r-bnwqim r-174rb6s">
                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1w6e6rj r-a2tzq0 r-13qz1uu">
                                    {res.data.data && res.data.data.map((data) => {
                                        return (
                                            <>
                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1x0uki6 r-1xce0ei">
                                                    <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z r-b88u0q">Day {data.index}</div>
                                                    <div className="css-1dbjc4n r-1mlwlqe r-knv0ih r-1udh08x r-417010" style={{ height: "38px", width: "38px" }}>
                                                        <div
                                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                            style={{ backgroundImage: data.todayCheckIn == "true" ? `url(${Coin_pre})` : `url(${Coin})` }}
                                                        ></div>
                                                        <img alt="" draggable="false" src={data.todayCheckIn == "true" ? Coin_pre : Coin} className="css-9pa8cd" />
                                                    </div>
                                                    <div dir="auto" className="css-901oao r-7zxnss r-1x35g6 r-b88u0q">+ {data.coin}</div>
                                                </div>
                                            </>
                                        )
                                    })}

                                    <div className="css-1dbjc4n r-1awozwy r-1777fci r-1x0uki6 r-bnwqim r-1xce0ei">
                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-417010" style={{ height: "8px", left: "-22px", width: "30px" }}>
                                            <div
                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                style={{ backgroundImage: `url(${Arrow})` }}
                                            ></div>
                                            <img alt="" draggable="false" src={Arrow} className="css-9pa8cd" />
                                        </div>
                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "94px", width: "94px" }}>
                                            <div
                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                style={{ backgroundImage: `url(${Treasure_s})` }}
                                            ></div>
                                            <img alt="" draggable="false" src={Treasure_s} className="css-9pa8cd" />
                                        </div>
                                    </div>
                                </div>
                                <div

                                    onClick={() => status1.value == false && handleClick(status1.coin)}
                                    tabIndex="0"
                                    className="css-1dbjc4n r-1awozwy r-1llaxt6 r-1u2soj2 r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-g1pmzj r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr r-1f720gc"
                                    style={{ backgroundColor: status1.value == false ? "rgb(68, 219, 94)" : "rgb(168,168,168)", transitionDuration: "0s" }}
                                >
                                    <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Check in</div>
                                </div>
                            </div>
                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-ikvlq0 r-q4m81j">
                                Check in for 7 consecutive days to get the key, use the
                                <div className="css-1dbjc4n r-xoduu5 r-1mlwlqe r-h0d30l r-1udh08x r-417010" style={{ width: "14px" }}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-xoduu5 r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${Key_s})` }}

                                    ></div>
                                    <img alt="" draggable="false" src={Key_s} className="css-9pa8cd" />
                                </div>
                                key treasure box, and receive mysterious prizes!
                            </div>
                            <div className="css-1dbjc4n r-1p0dtai r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-13qz1uu r-417010" style={{ height: "466px" }}>
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${Treasure_b})` }}
                                ></div>
                                <img alt="" draggable="false" src={Treasure_b} className="css-9pa8cd" />
                                {status2 &&
                                    <div
                                        data-focusable="true"
                                        tabIndex="0"
                                        className="css-1dbjc4n r-1awozwy r-1llaxt6  r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-g1pmzj r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr r-1f720gc"
                                        style={{ backgroundColor: "rgb(68, 219, 94)", transitionDuration: "0s", top: "100px" }}
                                        onClick={() => handleBonus()}
                                    >
                                        <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Open</div>
                                    </div>
                                }
                            </div>

                            <div className="css-1dbjc4n r-102gzdx r-1d2f490 r-1udh08x r-u8s1d r-13qz1uu" style={{ bottom: "26px" }}>
                                <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-102gzdx r-11yh6sk r-buy8e9 r-19z077z r-1sncvnh">
                                    <div className="css-1dbjc4n">

                                        <div className={`css-1dbjc4n r-1awozwy r-18u37iz r-102gzdx r-1777fci ${status ? "lineUp" : " "}`}>
                                            <img src={state1.avtar && state1.avtar} style={{ width: "34px", height: "34px", borderRadius: "18px", objectFit: "cover" }} />
                                            <div dir="auto" className="css-901oao r-jwli3a r-adyw6z" >{state1.mobile_no ? state1.mobile_no.replace(/(\d{1})(.*)(\d{3})/, '***$3') : "***375"} Open a treasure chest and gets <span className="css-901oao css-16my406" style={{ color: "rgb(0, 194, 130)" }}>{state1.currency ? state1.currency : "₹"}{state1.win_amount ? state1.win_amount : "5000"}</span> </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


// redux connect
const mapStateToProps = (state) => ({

    res: state.checkIn,
    res1: state.checkInPost,
    res2: state.bonusCheck

});

export default connect(mapStateToProps)(Checkin);