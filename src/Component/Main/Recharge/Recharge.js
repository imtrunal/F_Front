import React from 'react'
import { useEffect, useState } from 'react'

import Theme from '../../../common/Theme'
import { connect } from 'react-redux'
import { WalletAmountParity, } from '../../../redux/action/FetchData'
import { useNavigate, NavLink } from 'react-router-dom'
import securityIcon from "../../../images/securityIcon.png"
import fastIcon from "../../../images/fastIcon.png"
import arrowLeft from "../../../images/arrowLeft.png"


const Recharge = ({ socket, dispatch, res }) => {
    const login_data = JSON.parse(sessionStorage.getItem('login'))
    const navigate = useNavigate()
    //HANDLE OF DUMMY DATA
    sessionStorage.removeItem("url")
    const [state1, setState1] = useState([{
        avtar: "", mobile_no: "9875623145", recharge_amount: "5000"
    }])
    const [status1, setStatus1] = useState({
        val1: false,
        val2: false,
        val3: false,
        val4: false,
        val5: false,
        val6: false
    })
    const [status, setStatus] = useState(false)

    // HANDLE RECHARGE AMOUNT 
    const [state, setState] = useState({
        recharge_amount: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        if (value == "35") {
            setStatus1({
                val1: true,
                val2: false,
                val3: false,
                val4: false,
                val5: false,
                val6: false
            })
        }
        else if (value == "300") {
            setStatus1({
                val1: false,
                val2: true,
                val3: false,
                val4: false,
                val5: false,
                val6: false
            })
        }
        else if (value == "1100") {
            setStatus1({
                val1: false,
                val2: false,
                val3: true,
                val4: false,
                val5: false,
                val6: false
            })
        }
        else if (value == "4000") {
            setStatus1({
                val1: false,
                val2: false,
                val3: false,
                val4: true,
                val5: false,
                val6: false
            })
        }
        else if (value == "10000") {
            setStatus1({
                val1: false,
                val2: false,
                val3: false,
                val4: false,
                val5: true,
                val6: false
            })
        }
        else if (value == "45000") {
            setStatus1({
                val1: false,
                val2: false,
                val3: false,
                val4: false,
                val5: false,
                val6: true
            })
        }
        else {
            setStatus1({
                val1: false,
                val2: false,
                val3: false,
                val4: false,
                val5: false,
                val6: false
            })
        }
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        if (state.recharge_amount > 10) {
            var response = await fetch(`http://161.97.146.42:7000/api/commodity/trade/buy_r`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',

                    "x-access-token": login_data.token
                },
                body: JSON.stringify(state)
            });
            var res_data = await response.json();
            if (res_data) {
                navigate("/ChooseType", { state: { state: state.recharge_amount, transactionId: res_data.data.transactionID } })
            }
        }
        else {

            alert("Sorry, the amount exceeds the limit")
        }

    }
    //HANDLE OF DUMMY DATA
    socket.on("Recharge_success_Dummy_data", (data) => {
        setInterval(() => {
            let rand = Math.floor(Math.random() * data.length)
            setState1(data[rand])
        }, 2000)
    })
    useEffect(() => {
        setStatus(true)
    }, [state1])

    // GET THE WALLET AMOUNT 
    useEffect(() => {
        dispatch(WalletAmountParity())
        sessionStorage.removeItem("FW_HAS_SHOW_UPDATE_WINDOW")
    }, [dispatch])
    const api_res = res.data


    return (
        // <Theme status="2">
        <div>
            <div className="css-1dbjc4n r-1awozwy r-lrx3fh r-14lw9ot r-1iihdsi r-qklmqi r-18u37iz r-uxrrfj r-1777fci r-1g40b8q " >
                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-18u37iz r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr" style={{ left: "22px", transitionDuration: "0s" }}>
                    <NavLink to="/tabIndex/0"><img alt="" draggable="false" src={arrowLeft} className="arrowL" /></NavLink>
                    <div dir="auto" className="css-901oao r-1az3528 r-1i10wst" onClick={() => navigate("/RechargeList")}>Records</div>
                </div>
                <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(0, 0, 0)", fontSize: "28px" }}>Recharge</div>
                <div data-focusable="true" tabIndex="0" onClick={() => navigate("/help")} className="css-1dbjc4n r-1loqt21 r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr" style={{ right: "22px", transitionDuration: "0s" }}>
                    <div dir="auto" className="css-901oao" style={{ color: "rgb(168, 168, 168)" }}>Help</div>
                </div>
            </div>
            <div className="css-1dbjc4n r-lrx3fh" style={{ height: "901px" }}>
                <div className="css-1dbjc4n">
                    <div className="css-1dbjc4n r-14lw9ot r-tvv088" style={{ padding: "24px 30px" }}>
                        <div className="css-1dbjc4n r-1awozwy r-1777fci">
                            <div dir="auto" className="css-901oao r-1az3528 r-evnaw" >Balance</div>
                            <div dir="auto" className="css-901oao r-5zpi7z r-uho16t r-b88u0q" style={{ fontSize: "30px" }}>₹{api_res.data ? api_res.data[0].amount : 0.00}</div>
                        </div>
                        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q r-17rnw9f r-1v1z2uz">Amount</div>
                        <div className="css-1dbjc4n r-1ifxtd0 r-bnwqim">
                            <div className="css-1dbjc4n r-bnwqim">
                                <input
                                    placeholder="28～50000"
                                    maxLength="5"
                                    autoCapitalize="sentences"
                                    autoComplete="on"
                                    autoCorrect="on"
                                    dir="auto"
                                    spellCheck="true"
                                    inputMode="numeric"
                                    data-focusable="true"
                                    name="recharge_amount"
                                    className="css-11aywtz r-qklmqi r-d1eh0p r-13qz1uu"
                                    value={state.recharge_amount}
                                    onChange={handleChange}
                                    style={{ borderBottomColor: "rgb(221, 221, 221)", color: "rgb(0, 0, 0)", fontSize: "50px", height: "86px", paddingLeft: "44px", paddingRight: "54px" }}
                                />
                                <div dir="auto" className="css-901oao r-5zpi7z r-u8s1d" style={{ fontSize: "38px", left: "8px", top: "16px" }}>₹</div>
                            </div>
                            <div className="css-1dbjc4n r-18u37iz" style={{ flexWrap: "wrap", justifyContent: "space-around", marginTop: "22px" }}>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-kdyh1x r-1loqt21 r-1ugchlj r-1777fci r-1peese0 r-1otgn73 r-1i6wzkk r-lrvibr r-u28ne4" style={{ transitionDuration: "0s", backgroundColor: status1.val1 ? "rgb(255, 232, 191)" : "rgb(241,243,255)" }}>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">₹35</div>
                                </div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-kdyh1x r-1loqt21 r-1ugchlj r-1777fci r-1peese0 r-1otgn73 r-1i6wzkk r-lrvibr r-u28ne4" style={{ transitionDuration: "0s", backgroundColor: status1.val2 ? "rgb(255, 232, 191)" : "rgb(241,243,255)" }}>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">₹300</div>
                                </div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-kdyh1x r-1loqt21 r-1ugchlj r-1777fci r-1peese0 r-1otgn73 r-1i6wzkk r-lrvibr r-u28ne4" style={{ transitionDuration: "0s", backgroundColor: status1.val3 ? "rgb(255, 232, 191)" : "rgb(241,243,255)" }}>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">₹1100</div>
                                </div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-kdyh1x r-1loqt21 r-1ugchlj r-1777fci r-1peese0 r-1otgn73 r-1i6wzkk r-lrvibr r-u28ne4" style={{ transitionDuration: "0s", backgroundColor: status1.val4 ? "rgb(255, 232, 191)" : "rgb(241,243,255)" }}>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">₹4,000</div>
                                </div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-kdyh1x r-1loqt21 r-1ugchlj r-1777fci r-1peese0 r-1otgn73 r-1i6wzkk r-lrvibr r-u28ne4" style={{ transitionDuration: "0s", backgroundColor: status1.val5 ? "rgb(255, 232, 191)" : "rgb(241,243,255)" }}>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">₹10,000</div>
                                </div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-kdyh1x r-1loqt21 r-1ugchlj r-1777fci r-1peese0 r-1otgn73 r-1i6wzkk r-lrvibr r-u28ne4" style={{ transitionDuration: "0s", backgroundColor: status1.val6 ? "rgb(255, 232, 191)" : "rgb(241,243,255)" }}>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">₹45,000</div>
                                </div>
                            </div>
                        </div>
                        <div
                            data-focusable="true"
                            tabIndex="0"
                            className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ boxShadow: "rgb(0, 147, 255) 0px 0px 5px", marginRight: "16px", marginLeft: "16px", transitionDuration: "0s" }}
                        >
                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={handleSubmit}>Recharge</div>
                        </div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-1wzrnnt">
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "30px", width: "106px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: `url(${securityIcon})` }}
                            ></div>
                            <img alt="" draggable="false" src={securityIcon} className="css-9pa8cd" />
                        </div>
                        <div className="css-1dbjc4n r-1mlwlqe r-ltgprq r-1udh08x r-417010" style={{ height: "30px", width: "106px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: `url(${fastIcon})` }}
                            ></div>
                            <img alt="" draggable="false" src={fastIcon} className="css-9pa8cd" />
                        </div>
                    </div>
                    <div className="css-1dbjc4n r-uxrrfj r-1udh08x r-bnwqim r-13qz1uu" style={{ marginTop: "86px" }}>
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-uxrrfj r-11yh6sk r-buy8e9 r-19z077z r-1sncvnh">
                            <div className="css-1dbjc4n">

                                <div className={`css-1dbjc4n r-1awozwy r-18u37iz r-uxrrfj r-1aminmm r-lrx3fh ${status ? "lineUp" : " "}`}>
                                    <img src={state1.avtar} style={{ width: "34px", height: "34px", borderRadius: "18px", objectFit: "cover" }} />
                                    <div dir="auto" className="css-901oao r-5zpi7z r-ltgprq" style={{ fontSize: "20px", color: "rgb(168,168,168)" }}>{state1.mobile_no ? state1.mobile_no.replace(/(\d{1})(.*)(\d{3})/, '***$3') : "***375"} Successfully recharge <span className="css-901oao css-16my406" style={{ color: "rgb(0, 194, 130)" }}>{state1.currency ? state1.currency : "₹"}{state1.recharge_amount ? state1.recharge_amount : "5000"}</span> </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )

}
// redux connect
const mapStateToProps = (state) => ({
    res: state.walletAmount,

});

export default connect(mapStateToProps)(Recharge);