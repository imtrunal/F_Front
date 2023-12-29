import React,{ useEffect, useState } from 'react'
import Choose from "../../../images/Choose.png"
import Choose_pre from "../../../images/Choose_pre.png"
import { connect } from 'react-redux'
import { RechargeAmountParity, RechargeTransferredParity } from '../../../redux/action/FetchData'
import { useNavigate } from 'react-router-dom'
import Modal from "react-bootstrap/Modal";
import chooseType1 from "../../../images/chooseType1.png"
import chooseType2 from "../../../images/chooseType2.png"
import chooseType3 from "../../../images/chooseType3.png"
import chooseType7 from "../../../images/chooseType7.png"
import copied from "../../../images/copied.png"
import selectType1 from "../../../images/selectType1.png"
import selectType2 from "../../../images/selectType2.png"
import selectType3 from "../../../images/selectType3.png"
import selectType7 from "../../../images/selectType7.png"



const UPIPay = ({ value, res_data, transactionId, dispatch, res ,setShow ,setMethod1,setAccount1}) => {
    const navigate = useNavigate()
    const login_data = JSON.parse(sessionStorage.getItem('login'))
    // HANDLE PAYMENT METHOD 
    const [state, setState] = useState({
        gpay: false,
        paytm: false,
        phonepay: false,
        amazon: false
    })
    const [method, setMethod] = useState("")
    const [account, setAccount] = useState("")

    const [status, setStatus] = useState({
        value1: false,
        mode: ""
    })
  
    const [PaymentStatus, SetPaymentStatus] = useState(false)
    const handlePaymet = (value) => {
        res_data.data.map((data) => {
            if (data.paymentMethod == value) {
                setAccount(data.account)
                setAccount1(data.account)

            }
        })
        setState({
            ...state,
            [value]: !state[value]
        })
        setStatus({
            value1: !status.value1,
            mode: value
        })

    }


    const handlePay = (value1) => {
        const data = localStorage.getItem("id")
        const status_show = sessionStorage.getItem("FW_HAS_SHOW_UPDATE_WINDOW")
        setMethod(value1)
        setMethod1(value1)
        if (data == transactionId) {
            // if (status_show == true) {
            
            // }
            // else {
            //     navigate("/transcation", { state: { state: Number(value), transactionId: transactionId, p_method: value1, account: account } })
            // }
            status_show == 1 ? setShow(true) :
                navigate("/transcation", { state: { state: Number(value), transactionId: transactionId, p_method: value1, account: account, qrcode: res_data.data[0].qrcode } })

        }

        else {

            localStorage.setItem("id", transactionId)
            const post_data = { status: 0, transactionId: transactionId, Payee_account: res_data.data[0].account, paymentMethod: value1, amount: Number(value), userId: login_data.userId }
            dispatch(RechargeTransferredParity(post_data))

            if (value1 == "gpay") {
                window.location.href = "https://gpay.app.goo.gl/kHXsJi"
            }
            else if (value1 = "paytm") {
                window.location.href = "https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user"

            }
            else if (value1 = "phonepe") {
                window.location.href = "https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user"

            } else {
                window.location.href = "https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user"

            }
        }
    }
    const api_res = res.data

    const handleContinue = () => {
        navigate("/transcation", { state: { state: Number(value), value: true, transactionId: transactionId, p_method: method, account: account, qrcode: res_data.data[0].qrcode } })
    }
    return (
        <>
            {status.value1 &&
                <div className="css-1dbjc4n r-1awozwy r-1p0dtai r-1d2f490 r-1udh08x r-u8s1d r-zchlnj" style={{ backgroundColor: "rgb(241, 245, 255)", borderColor: "rgb(0, 147, 255)", borderWidth: "2px", boxShadow: "rgba(0, 0, 0, 0.25) 0px -10px 15px", height: "248px", justifyContent: "space-around", padding: "28px", zIndex: "1" }}>
                    <div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "14px" }}>Pay to: <span className="css-901oao css-16my406" style={{ color: "rgb(0, 0, 0)" }}>{account}</span></div>
                    <div className="css-1dbjc4n r-1awozwy" style={{ flexDirection: "row", marginTop: "14px" }}>
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "22px", width: "28px" }}>
                            <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundimage: `url(${copied})` }}></div><img alt="" draggable="false" src={copied} className="css-9pa8cd" /></div>
                        <div dir="auto" className="css-901oao" style={{ color: "rgb(0, 194, 130)", fontSize: "14px", marginLeft: "8px", cursor: "pointer" }} onClick={() => { navigator.clipboard.writeText(account) }}>Copied</div>
                    </div>
                    <div className="css-1dbjc4n r-13qz1uu" style={{ backgroundColor: "rgb(0, 147, 255)", borderRadius: "10px", height: "70px", marginTop: "22px", transform: "scale(0.96528)" }}>
                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-1pi2tsx r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" onClick={() => handlePay(status.mode)} style={{ flexDirection: "row", transitionDuration: "0s" }}>
                            <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "16px" }}>Open </div>
                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "46px", width: " 82px" }}>
                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: status.mode == "gpay" ? `url(${chooseType1})` : status.mode == "paytm" ? `url(${chooseType2})` : status.mode == "phonepe" ? `url(${chooseType3})` : `url(${chooseType7})` }}></div>
                                <img alt="" draggable="false" src={status.mode == "gpay" ? chooseType1 : status.mode == "paytm" ? chooseType2 : status.mode == "phonepe" ? chooseType3 : chooseType7} className="css-9pa8cd" /></div>
                            <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "16px" }} > App to pay <span className="css-901oao css-16my406" style={{ color: "rgb(255, 242, 110)", fontSize: "16px" }}>₹{value}</span> </div>
                        </div>
                    </div>
                </div>
            }

            {/* <Modal show={show} onHide={handleClose} animation={false}>

                <Modal.Body>
                    <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "286px", top: "331px", width: "402px" }}>
                        <div className="css-1dbjc4n r-1awozwy r-1777fci r-s9qnr1">
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci">
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010">
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: "url(&quot;https://res.cloudinary.com/fiewin/image/upload/images/error.png&quot;)" }}></div>
                                    <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/error.png" className="css-9pa8cd" /></div>
                                <div dir="auto" className="css-901oao" style={{ fontSize: "24px", marginLeft: "14px" }}>You have unfinished transactions</div>
                            </div>
                            <h1>{location.state.state}</h1>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginTop: "46px", transitionDuration: "0s", width: "326px" }}>
                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={handleContinue} >Continue Processing</div>
                            </div>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginTop: "46px", transitionDuration: "0s", width: "326px" }}>
                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={() => navigate(-1)}>Cancel it</div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>


            </Modal> */}

  
         

            <div className="css-1dbjc4n" style={{ padding: "22px" }}>
                <div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "20px", fontWeight: "700" }}>Select Payment Method</div>
                <div className="css-1dbjc4n r-1udh08x" style={{ borderColor: "rgb(204, 204, 204)", borderRadius: "6px", borderWidth: "1px", marginTop: "22px" }}>
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ backgroundColor: "rgb(255, 255, 255)", borderColor: `${!state.gpay ? "rgb(204, 204, 204)" : "rgb(0, 147, 255)"}`, borderWidth: !state.gpay ? "0px" : "2px", flexDirection: "row", height: "86px", justifyContent: "space-between", paddingRight: "20px", paddingLeft: "20px", position: "relative", transitionDuration: "0s" }}>
                        <div className="css-1dbjc4n r-1awozwy" style={{ flexDirection: "row" }}>
                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "42px", width: "150px" }}>
                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${selectType1})` }}></div><img alt="" draggable="false" src={selectType1} className="css-9pa8cd" /></div>
                            <div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "20px", marginLeft: "8px" }}></div>
                        </div>
                        {!state.gpay ?

                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-417010" style={{ height: "34px", right: "20px", width: "34px" }} onClick={() => handlePaymet("gpay")}>
                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${Choose})` }}>
                                </div>
                                <img alt="" draggable="false" src={Choose} className="css-9pa8cd" />
                            </div>
                            :
                            <>
                                <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "42px", width: "150px" }}>

                                    </div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z" style={{ marginLeft: "8px" }}>{account}</div>
                                </div>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-417010" style={{ height: "34px", right: "20px", width: "34px" }} onClick={() => handlePaymet("gpay")}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${Choose_pre})` }}></div>
                                    <img alt="" draggable="false" src={Choose_pre} className="css-9pa8cd" />
                                </div>
                            </>
                        }
                    </div>

                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ backgroundColor: "rgb(255, 255, 255)", borderColor: `${!state.paytm ? "rgb(204, 204, 204)" : "rgb(0, 147, 255)"}`, borderWidth: !state.paytm ? "0px" : "2px", flexDirection: "row", height: "86px", justifyContent: "space-between", paddingRight: "20px", paddingLeft: "20px", position: "relative", transitionDuration: "0s" }}>
                        <div className="css-1dbjc4n r-1awozwy" style={{ flexDirection: "row" }}>
                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "42px", width: "150px" }}>
                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${selectType2})` }}></div><img alt="" draggable="false" src={selectType1} className="css-9pa8cd" /></div>
                            <div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "20px", marginLeft: "8px" }}></div>
                        </div>
                        {!state.paytm ?

                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-417010" style={{ height: "34px", right: "20px", width: "34px" }} onClick={() => handlePaymet("paytm")}>
                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${Choose})` }}>
                                </div>
                                <img alt="" draggable="false" src={Choose} className="css-9pa8cd" />
                            </div>
                            :
                            <>
                                <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "42px", width: "150px" }}>

                                    </div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z" style={{ marginLeft: "8px" }}>{account}</div>
                                </div>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-417010" style={{ height: "34px", right: "20px", width: "34px" }} onClick={() => handlePaymet("paytm")}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${Choose_pre})` }}></div>
                                    <img alt="" draggable="false" src={Choose_pre} className="css-9pa8cd" />
                                </div>
                            </>
                        }
                    </div>
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ backgroundColor: "rgb(255, 255, 255)", borderColor: `${!state.phonepay ? "rgb(204, 204, 204)" : "rgb(0, 147, 255)"}`, borderWidth: !state.phonepay ? "0px" : "2px", flexDirection: "row", height: "86px", justifyContent: "space-between", paddingRight: "20px", paddingLeft: "20px", position: "relative", transitionDuration: "0s" }}>
                        <div className="css-1dbjc4n r-1awozwy" style={{ flexDirection: "row" }}>
                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "42px", width: "150px" }}>
                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${selectType3})` }}></div><img alt="" draggable="false" src={selectType1} className="css-9pa8cd" /></div>
                            <div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "20px", marginLeft: "8px" }}></div>
                        </div>
                        {!state.phonepay ?

                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-417010" style={{ height: "34px", right: "20px", width: "34px" }} onClick={() => handlePaymet("phonepe")}>
                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${Choose})` }}>
                                </div>
                                <img alt="" draggable="false" src={Choose} className="css-9pa8cd" />
                            </div>
                            :
                            <>
                                <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "42px", width: "150px" }}>

                                    </div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z" style={{ marginLeft: "8px" }}>{account}</div>
                                </div>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-417010" style={{ height: "34px", right: "20px", width: "34px" }} onClick={() => handlePaymet("phonepe")}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${Choose_pre})` }}></div>
                                    <img alt="" draggable="false" src={Choose_pre} className="css-9pa8cd" />
                                </div>
                            </>
                        }
                    </div>
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ backgroundColor: "rgb(255, 255, 255)", borderColor: `${!state.amazon ? "rgb(204, 204, 204)" : "rgb(0, 147, 255)"}`, borderWidth: !state.amazon ? "0px" : "2px", flexDirection: "row", height: "86px", justifyContent: "space-between", paddingRight: "20px", paddingLeft: "20px", position: "relative", transitionDuration: "0s" }}>
                        <div className="css-1dbjc4n r-1awozwy" style={{ flexDirection: "row" }}>
                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "42px", width: "150px" }}>
                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${selectType7})` }}></div><img alt="" draggable="false" src={selectType1} className="css-9pa8cd" /></div>
                            <div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "20px", marginLeft: "8px" }}></div>
                        </div>
                        {!state.amazon ?

                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-417010" style={{ height: "34px", right: "20px", width: "34px" }} onClick={() => handlePaymet("amazonPay")}>
                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${Choose})` }}>
                                </div>
                                <img alt="" draggable="false" src={Choose} className="css-9pa8cd" />
                            </div>
                            :
                            <>
                                <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "42px", width: "150px" }}>

                                    </div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z" style={{ marginLeft: "8px" }}>{account}</div>
                                </div>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-417010" style={{ height: "34px", right: "20px", width: "34px" }} onClick={() => handlePaymet("amazon")}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${Choose_pre})` }}></div>
                                    <img alt="" draggable="false" src={Choose_pre} className="css-9pa8cd" />
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "20px", marginTop: "28px" }}>Tips</div>
                <div dir="auto" className="css-901oao" style={{ color: "rgb(151, 151, 151)", fontSize: "20px", lineHeight: "30px", marginTop: "22px" }}>Welcome to use the quick recharge mode, please use APP to complete the payment of ₹100.</div>
                <div dir="auto" className="css-901oao" style={{ color: "rgb(151, 151, 151)", fontSize: "20px", lineHeight: "30px", marginTop: "22px" }}>The transaction funds are guaranteed by the FieWin platform throughout the process, which is very safe.</div>
                <div dir="auto" className="css-901oao" style={{ color: "rgb(151, 151, 151)", fontSize: "20px", marginTop: "22px" }}>Please do not include any words in remarks.</div>
            </div>
        </>
    )
}

// redux connect
const mapStateToProps = (state) => ({

    res: state.rechargeTrans
});

export default connect(mapStateToProps)(UPIPay);