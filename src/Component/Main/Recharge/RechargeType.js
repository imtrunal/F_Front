import React, { useState, useEffect } from 'react'
import Theme from '../../../common/Theme'
import { useNavigate, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { RechargeAmountParity } from '../../../redux/action/FetchData'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UPIPay from './UPIPay';
import QRCode from './QRCode';
import chooseType1 from "../../../images/chooseType1.png"
import chooseType2 from "../../../images/chooseType2.png"
import chooseType3 from "../../../images/chooseType3.png"
import chooseType7 from "../../../images/chooseType7.png"
import backWhite from "../../../images/backWhite.png"
import qrCodeBlue from "../../../images/qrCodeBlue.png"
import checkWhiteBlue from "../../../images/checkWhiteBlue.png"
import darkGaryClose from "../../../images/darkGaryClose.png"
import Modal from "react-bootstrap/Modal";
import swal from 'sweetalert'

const RechargeType = ({ dispatch, res }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [method, setMethod] = useState("")
    const [account, setAccount] = useState("")
    const [status, setStatus] = useState(true)
    useEffect(() => {
        dispatch(RechargeAmountParity())
    }, [dispatch])
    const res_data = res.data
    // HANDLE PAYMENT METHOD 
    const handleBack = () => {
        navigate(-1)
    }
    const handleTab = () => {
        setStatus(true)
    }
    const handleTab1 = () => {
        setStatus(false)
    }
    const handleModal = () => {
        setShow1(true)
        setShow2(false)
    }
    const handleMethod = (value) => {
        setMethod(value)
    }
    const handleAccount = (value) => {
        setAccount(value)
    }
    const handleContinue = () => {
        navigate("/transcation", { state: { state: Number(location.state.state), value: true, transactionId: location.state.transactionId, p_method: method, account: account, qrcode: res_data.data[0].qrcode } })
    }
    const handleCancel = () => {
        setShow1(false)
        setShow2(true)
    }
    const handleCancel1 = () => {
        setShow1(false)
        setShow2(false)

        swal({ "text": "Cancel Transaction Successfully", timer: 2000 })
    }
    return (
        <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-14lw9ot r-1ub9p5i r-cqs64b r-bnwqim r-13qz1uu ">


                    <div className="css-1dbjc4n r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-13qz1uu " style={{ backgroundColor: "rgb(255, 255, 255)", position: "relative" }}>
                        <div className="css-1dbjc4n r-1awozwy r-1sn7ly2 r-1777fci r-13qz1uu r-1k9zyfm" style={{ backgroundColor: "rgb(0, 147, 255)", marginBottom: "0px", position: "relative" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-1sn7ly2 r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "26px", width: "16px" }} onClick={handleBack}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${backWhite})` }}>
                                    </div>
                                    <img alt="" draggable="false" src={backWhite} className="css-9pa8cd" />
                                </div>
                            </div>
                         <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "24px", fontWeight: "700", textAlign: "center" }}>Recharge</div>
                             <div data-focusable="true" onClick={() => navigate("/help")} tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr" style={{ flexDirection: "row", right: "14px", transitionDuration: "0s" }}>
                                <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "20px" }}> Help</div>
                            </div>
                        </div>
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-1sncvnh" style={{ height: "833px", position: "relative" }}>
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-1udh08x" style={{ height: "833px", position: "relative" }}>
                                    <div className="css-1dbjc4n" style={{ backgroundColor: "rgb(0, 147, 255)", height: "134px", padding: "28px 22px" }}>
                                        <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "20px" }}>Recharge Amount</div>
                                        <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "48px", fontWeight: "700" }}><span className="css-901oao css-16my406" style={{ fontSize: "32px", fontWeight: "400" }}>₹ </span>{location.state.state}</div>
                                    </div>
                                    <div className="css-1dbjc4n" style={{ height: "699px", overflow: "scroll" }}>
                                        <div className="css-1dbjc4n r-1awozwy r-1udh08x" style={{ borderColor: "rgb(0, 147, 255)", borderRadius: "4px", borderWidth: "1px", flexDirection: "row", height: "44px", justifyContent: "space-between", margin: "22px" }}>
                                            <div data-focusable="true" onClick={handleTab} tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-13awgt0 r-1pi2tsx r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ backgroundColor: !status ? "rgb(255, 255, 255)" : "rgb(0, 147, 255)", transitionDuration: "0s" }}>
                                                <div dir="auto" className="css-901oao" style={{ color: status ? "rgb(255, 255, 255)" : "rgb(0, 147, 255)", fontSize: "22px", fontWeight: "600" }}>UPI PAY</div>
                                            </div>
                                            <div data-focusable="true" onClick={handleTab1} tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-13awgt0 r-1pi2tsx r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ backgroundColor: status ? "rgb(255, 255, 255)" : "rgb(0, 147, 255)", flexDirection: "row", transitionDuration: "0s" }}>
                                                <div className="css-1dbjc4n r-1mlwlqe  r-1udh08x r-417010" style={{ height: "20px", width: "20px" }}>
                                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${qrCodeBlue})` }}></div>
                                                    <img alt="" draggable="false" src={qrCodeBlue} className="css-9pa8cd" /></div>
                                                <div dir="auto" className="css-901oao" style={{ color: !status ? "rgb(255, 255, 255)" : "rgb(0, 147, 255)", fontSize: "22px", fontWeight: "400", marginLeft: "8px" }}>QR code</div>
                                            </div>
                                        </div>

                                        {status ? <UPIPay value={location.state.state} res_data={res_data} transactionId={location.state.transactionId} setShow={handleModal} setMethod1={handleMethod} setAccount1={handleAccount} /> : <QRCode value={location.state.state} res_data={res_data} transactionId={location.state.transactionId} />}


                                        {/* <Tabs>
                                            <TabList>
                                                <Tab>
                                                    <div className="css-1dbjc4n r-1awozwy r-1udh08x" style={{ borderColor: " rgb(0, 147, 255)", borderRadius: "4px", borderWidth: " 1px", flexDirection: "row", height: "44px", justifyContent: " space-between", margin: "22px" }}>
                                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-13awgt0 r-1pi2tsx r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ backgroundColor: "rgb(0, 147, 255)", transitionDuration: "0s" }}>
                                                            <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "20px", fontWeight: "600" }}>UPI PAY</div>
                                                        </div>

                                                    </div>
                                                </Tab>
                                                <Tab>
                                                    <div className="css-1dbjc4n r-1awozwy r-1udh08x" style={{ borderColor: " rgb(0, 147, 255)", borderRadius: "4px", borderWidth: " 1px", flexDirection: "row", height: "44px", justifyContent: " space-between", margin: "22px" }}>

                                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-13awgt0 r-1pi2tsx r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ backgroundColor: "rgb(255, 255, 255)", flexDirection: "row", transitionDuration: "0s" }}>
                                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "20px", width: "20px" }}>
                                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: " url(https://res.cloudinary.com/fiewin/image/upload/images/qrCodeBlue.png)" }}>
                                                                </div>
                                                                <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/qrCodeBlue.png" className="css-9pa8cd" />
                                                            </div>
                                                            <div dir="auto" className="css-901oao" style={{ color: "rgb(0, 147, 255)", fontSize: "20px", fontweight: "400", marginLeft: "8px" }}>QR code</div>
                                                        </div>
                                                    </div></Tab>
                                            </TabList>

                                            <TabPanel>
                                                <UPIPay value={location.state.state} res_data={res_data} transactionId={location.state.transactionId} />
                                            </TabPanel>
                                            <TabPanel>
                                                <QRCode value={location.state.state} res_data={res_data} transactionId={location.state.transactionId} />
                                            </TabPanel>
                                        </Tabs> */}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {show1 &&
                    <div className="css-1dbjc4n r-1awozwy r-1p0dtai r-1ujhktn r-1d2f490 r-1xcajam r-zchlnj r-ipm5af" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: "99" }}>
                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                            <div dir="auto" className="css-901oao"></div>
                        </div>
                        <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "466px", top: "259.5px", width: "402px" }}>
                            <div className="css-1dbjc4n r-1awozwy r-1pi2tsx" style={{ justifyContent: "space-around", padding: "34px" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "30px", width: "108px" }}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: status.mode == "gpay" ? `url(${chooseType1})` : status.mode == "paytm" ? `url(${chooseType2})` : status.mode == "phonepe" ? `url(${chooseType3})` : `url(${chooseType7})` }}></div>
                                    <img alt="" draggable="false" src={status.mode == "gpay" ? chooseType1 : status.mode == "paytm" ? chooseType2 : status.mode == "phonepe" ? chooseType3 : chooseType7} className="css-9pa8cd" /></div>
                                <div dir="auto" className="css-901oao r-5zpi7z r-b88u0q" style={{ fontSize: "60px" }}>₹{location.state.state}</div>
                                <div dir="auto" className="css-901oao r-5zpi7z r-q4m81j" style={{ fontSize: "26px" }}>You have an unfinished transaction, do you want to continue?</div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-tumt6t r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu"
                                    style={{ marginTop: "22px", transitionDuration: "0s" }} onClick={handleContinue}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", marginRight: "14px", width: "28px" }} >
                                        <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${checkWhiteBlue})` }}></div><img alt="" draggable="false" src={checkWhiteBlue} className="css-9pa8cd" /></div>
                                    <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Yes,go on</div>
                                </div>
                                <div data-focusable="true" tabIndex="0" onClick={handleCancel} className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-tumt6t r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" style={{ backgroundColor: "rgb(241, 241, 241)", borderColor: "rgb(168, 168, 168)", borderWidth: "1px", marginTop: "22px", transitionDuration: "0s" }}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", marginRight: "14px", width: "28px" }} >
                                        <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${darkGaryClose})` }}></div><img alt="" draggable="false" src={darkGaryClose} className="css-9pa8cd" /></div>
                                    <div dir="auto" className="css-901oao r-evnaw r-b88u0q" style={{ color: "rgb(102, 102, 102)" }}>No,cancel it</div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {show2 &&

                    <div className="css-1dbjc4n r-1awozwy r-1p0dtai r-1ujhktn r-1d2f490 r-1xcajam r-zchlnj r-ipm5af" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: "99" }}>
                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                            <div dir="auto" className="css-901oao"></div>
                        </div>
                        <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "466px", top: "259.5px", width: "402px" }}>
                            <div className="css-1dbjc4n r-1awozwy r-1pi2tsx" style={{ justifyContent: "space-around", padding: "34px" }}>

                                <div dir="auto" className="css-901oao r-5zpi7z r-q4m81j" style={{ fontSize: "26px" }}>This transaction will be cancelled, if you want to recharge, please reselect the amount again.</div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-tumt6t r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu"
                                    style={{ transitionDuration: "0s" }} onClick={handleCancel1}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", marginRight: "14px", width: "28px" }} >
                                        <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${checkWhiteBlue})` }}></div><img alt="" draggable="false" src={checkWhiteBlue} className="css-9pa8cd" /></div>
                                    <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Cancel Transcation now</div>
                                </div>
                                <div data-focusable="true" tabIndex="0" onClick={handleModal} className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-tumt6t r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" style={{ backgroundColor: "rgb(241, 241, 241)", borderColor: "rgb(168, 168, 168)", borderWidth: "1px", transitionDuration: "0s" }}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", marginRight: "14px", width: "28px" }} >
                                        <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${darkGaryClose})` }}></div><img alt="" draggable="false" src={darkGaryClose} className="css-9pa8cd" /></div>
                                    <div dir="auto" className="css-901oao r-evnaw r-b88u0q" style={{ color: "rgb(102, 102, 102)" }}>Let me think</div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

// redux connect
const mapStateToProps = (state) => ({

    res: state.recharge
});

export default connect(mapStateToProps)(RechargeType);