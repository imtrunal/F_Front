import  React, {useState, useEffect } from 'react'
import Theme from '../../../common/Theme'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Choose_pre from "../../../images/Choose_pre.png"
import grayCheckIcon from "../../../images/grayCheckIcon.png"
import customerService1 from "../../../images/customerService1.png"
import rechargeUploadImg from "../../../images/rechargeUploadImg.png"
import backWhite from "../../../images/backWhite.png"
import help from "../../../images/help.png"
import checkWhiteBlue from "../../../images/checkWhiteBlue.png"
import darkGaryClose from "../../../images/darkGaryClose.png"

import Swal from "sweetalert2";

import grayCloseIcon from "../../../images/grayCloseIcon.png"

import examplePhoto from "../../../images/examplePhoto.JPEG"
import { connect } from 'react-redux'
import { RechargeScreenShotParity, RechargeSDetails, RechargeStatusParity, RechargeTransactionParity } from '../../../redux/action/FetchData'
import ContDown from './ContDown'
import { createWorker } from "tesseract.js";
import Modal from "react-bootstrap/Modal";
import { Scrollbars } from "react-custom-scrollbars";
import SuccessAlert from './SuccessAlert'
import swal from 'sweetalert'

const Transcation = ({ dispatch, res, res1, res2, res3 }) => {
    const [ocr, setOcr] = useState("");
    const [status, setStatus] = useState(false)
    const [status1, setStatus1] = useState(false)
    const [modalStatus, setModalStatus] = useState(false)
    const [show2, setShow2] = useState(false)

    const [imageData, setImageData] = useState(null);
    const location = useLocation()
    const [transactionStatus, setTransactionStatus] = useState(0)
    const [state, setState] = useState({
        file: "",
        transactionId: location.state.transactionId
    })
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const trancationId = localStorage.getItem("id")

    const navigate = useNavigate()
    const worker = createWorker({
        logger: (m) => {
        },
    });
    const convertImageToText = async () => {
        if (!imageData) return;
        await worker.load();
        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        const {
            data: { text },
        } = await worker.recognize(imageData);
        setOcr(text);
    };
    useEffect(() => {
        convertImageToText();
    }, [imageData]);

    //UPLOAD IMAGE
    const handleImage = () => {
        setStatus(true)
    }
    const handleChange = (e) => {
        const { name, } = e.target
        const file = e.target.files[0]
        setStatus1(true)
        setState({
            ...state, [name]: e.target.files[0]
        })
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            const imageDataUri = reader.result;
            setImageData(imageDataUri);
        };
        reader.readAsDataURL(file)
    }
    useEffect(() => {
        if (status1 == true) {
            let formData = new FormData()
            formData.append("file", state.file)
            formData.append("transactionId", state.transactionId)
            formData.append("imageData", ocr)
            setStatus(false)
            dispatch(RechargeScreenShotParity(formData))
        }
    }, [status1])
    const res_data = res.data
    const url_img = sessionStorage.getItem("url")
    const goBack = () => {
        if (transactionStatus == 0) {
            setShow(true)
        }
        else if (location.state.value == true) {
            navigate(-2)
        }
        else {
            navigate(-1)
        }
    }
    useEffect(() => {
        dispatch(RechargeTransactionParity(trancationId))
    }, [dispatch])
    const handleComplete = () => {
        const login_data = JSON.parse(sessionStorage.getItem('login'))
        const data = { userId: login_data.userId, amount: location.state.state }
        dispatch(RechargeSDetails(data))
    }
    useEffect(() => {
        res2.data.data && setTransactionStatus(res2.data.data[0].status)
        if (res2.data.data && res2.data.data[0].status == 1) {
            handleComplete()
        }
    }, [res2])
    const cancelTransaction = () => {
        setShow2(false)
        setTransactionStatus(2)
        sessionStorage.setItem("FW_HAS_SHOW_UPDATE_WINDOW", 1)
        const data = { transactionId: trancationId, status: 2 }
        dispatch(RechargeStatusParity(data))
    }
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(`${location.state.qrcode}`).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = `${location.state.qrcode}`
                alink.click();
            })
        })
    }


    useEffect(() => {
        if (res3.data.status == true) {
            setModalStatus(true)
        }
    }, [res3])

    const handleOkStatus = () => {
        setModalStatus(false)

    }
    const handleCopy = (value) => {
        navigator.clipboard.writeText(value)
        swal({ "text": "Copy Successfully", "timer": 2000 })

    }
    const handlePending = () => {
        if (res2.data.data && res2.data.data[0].Compaint == "1") {

            Swal.fire({
                title: '<div dir="auto" className="css-901oao r-5zpi7z r-b88u0q" style="font-size: 24px;">What does <span className="css-901oao css-16my406" style="color: rgb(0, 198, 124);">"Pending"</span> mean?</div>',
                html:
                    '<div dir="auto" className="css-901oao r-5zpi7z r-evnaw" style="line-height: 38px;">"Pending" means that FieWin is processing your complain request. Normally, it will be completed  24 hour. Please wait a moment.</div>',
                showCancelButton: false,

                confirmButtonText: '<div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" style="box-shadow: rgba(0, 147, 255, 0.4) 0px 0px 5px;display:inline; transition-duration: 0s;"><div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">I got it</div></div>',
                confirmButtonColor: "rgb(0, 147, 255)"
            })
        }
        else {
            Swal.fire({
                title: '<div dir="auto" className="css-901oao r-5zpi7z r-b88u0q" style="font-size: 24px;">What does <span className="css-901oao css-16my406" style="color: rgb(255, 22, 0);">"Invalid"</span> mean?</div>',
                html:
                    '<div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-xnfwke">"Invalid" means that the information you submitted is invalid. If you are not satisfied, please fill in again and submit again.</div>',
                showCancelButton: false,

                confirmButtonText: '<div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" style="box-shadow: rgba(0, 147, 255, 0.4) 0px 0px 5px;display:inline; transition-duration: 0s;"><div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">I got it</div></div>',
                confirmButtonColor: "rgb(0, 147, 255)"
            })
        }
    }
    const handleCancel=()=>{
   setShow(false)
   setShow2(true)
    }
    const handleModal=()=>{
        setShow2(false)
        setShow(true)
    }
    return (
        <>
            {modalStatus && <SuccessAlert okStatus={handleOkStatus} point={location.state.state} />}
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-14lw9ot r-1ub9p5i r-cqs64b r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-13qz1uu" style={{ backgroundColor: "rgb(255, 255, 255)", position: "relative" }}>
                            <div className="css-1dbjc4n r-1awozwy r-1sn7ly2 r-1777fci r-13qz1uu r-uvuy5l" style={{ backgroundColor: "rgb(0, 147, 255)", marginBottom: "0px", position: "relative" }}>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-1sn7ly2 r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "26px", width: "16px" }} onClick={goBack}>
                                        <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${backWhite})` }} >
                                        </div>
                                        <img alt="" draggable="false" src={backWhite} className="css-9pa8cd" />
                                    </div>
                                </div>
                                <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "24px", fontWeight: "700", textAlign: "center" }}>Recharge</div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr" onClick={() => navigate("/help")} style={{ flexDirection: "row", right: "14px", transitionDuration: "0s" }}>
                                    <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "20px" }}> Help</div>
                                </div>
                            </div>
                            <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-1sncvnh" style={{ height: "833px", position: "relative" }}>
                                <div className="css-1dbjc4n">
                                    <div className="css-1dbjc4n r-1udh08x" style={{ height: "833px", position: "relative" }}>
                                        {transactionStatus == "1" ?
                                            <div className="css-1dbjc4n r-1awozwy r-1777fci r-13qz1uu" style={{ backgroundColor: "rgb(255, 153, 51)", height: "52px" }}>
                                                <div dir="auto" className="css-901oao r-jwli3a r-b88u0q" style={{ fontSize: "28px" }}>Successfully</div>
                                            </div>
                                            : transactionStatus == "2" ?
                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-13qz1uu" style={{ backgroundColor: "rgb(255, 153, 51)", height: "52px" }}>
                                                    <div dir="auto" className="css-901oao r-jwli3a r-b88u0q" style={{ fontSize: "28px" }}>Canceled</div>
                                                </div> :
                                                transactionStatus == "3" ?
                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci r-13qz1uu" style={{ backgroundColor: "rgb(255, 153, 51)", height: "52px" }}>
                                                        <div dir="auto" className="css-901oao r-jwli3a r-b88u0q" style={{ fontSize: "28px" }}>failed</div>
                                                    </div> : transactionStatus == "4" ?
                                                        <div className="css-1dbjc4n r-1awozwy r-1777fci r-13qz1uu" style={{ backgroundColor: "rgb(255, 153, 51)", height: "52px" }}>
                                                            <div dir="auto" className="css-901oao r-jwli3a r-b88u0q" style={{ fontSize: "28px" }}>Time Out </div>
                                                        </div> : ""
                                        }
                                        <div className="css-1dbjc4n" style={{ backgroundColor: "rgb(0, 147, 255)", height: "134px", padding: "28px 22px" }}>
                                            <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "20px" }}>Transcation ID :{trancationId}</div>


                                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep" style={{ marginTop: "8px" }}>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                                    <div dir="auto" className="css-901oao r-jwli3a r-b88u0q" style={{ fontSize: "46px" }}><span className="css-901oao css-16my406" style={{ fontSize: "28px" }}>₹ </span>{location.state.state}</div>
                                                    <div data-focusable="true" tabIndex="0" onClick={() => handleCopy(location.state.state)} className="css-1dbjc4n r-1awozwy r-z2wwpe r-1loqt21 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ borderColor: "rgb(255, 255, 255)", borderWidth: "1px", height: "30px", marginLeft: "12px", transform: "translateY(4px)", transitionDuration: "0s", width: "68px" }}>
                                                        <div dir="auto" className="css-901oao r-jwli3a r-1i10wst">copy</div>
                                                    </div>
                                                </div>
                                                {transactionStatus == 0 &&
                                                    <div className="css-1dbjc4n r-1awozwy" style={{ paddingRight: "14px" }}>
                                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-bnwqim">
                                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "70px", width: "70px" }}>
                                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${location.state.qrcode})` }}></div><img alt="" draggable="false" src={location.state.qrcode} className="css-9pa8cd" /></div>
                                                            <div data-focusable="true" tabIndex="0" onClick={onButtonClick} className="css-1dbjc4n r-1awozwy r-z2wwpe r-1loqt21 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr"
                                                                style={{ borderColor: "rgb(255, 255, 255)", borderWidth: "1px", height: "30px", marginLeft: "22px", transitionDuration: "0.25s", width: "68px" }}>
                                                                <div dir="auto" className="css-901oao r-jwli3a r-1i10wst">save</div>
                                                            </div>
                                                        </div>
                                                        <div dir="auto" className="css-901oao r-1p0dtai r-jwli3a r-1b43r93 r-u8s1d r-zchlnj r-q4m81j">← long press</div>
                                                    </div>
                                                }

                                            </div>
                                        </div>
                                        <Scrollbars>
                                            <div className="css-1dbjc4n" style={{ padding: "22px" }}>
                                                <div className="css-1dbjc4n" style={{ flexDirection: "row", height: "342px", marginTop: "30px" }}>
                                                    <div className="css-1dbjc4n r-1awozwy r-13awgt0">
                                                        {transactionStatus == "2" || transactionStatus == "3" ?
                                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "50px", width: "50px" }}>
                                                                <div
                                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                    style={{ backgroundImage: `url(${grayCheckIcon})` }}
                                                                ></div>
                                                                <img alt="" draggable="false" src={grayCheckIcon} className="css-9pa8cd" />
                                                            </div>
                                                            : <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "50px", width: "50px" }}>
                                                                <div
                                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                    style={{ backgroundImage: `url(${Choose_pre})` }}
                                                                ></div>
                                                                <img alt="" draggable="false" src={Choose_pre} className="css-9pa8cd" />
                                                            </div>

                                                        }
                                                        {res_data && res_data.file && transactionStatus != "2" && transactionStatus != "3" && transactionStatus != "4" ?
                                                            <div className="css-1dbjc4n r-1pi2tsx" style={{ backgroundColor: "rgb(0, 194, 130)", width: "8px" }}></div>
                                                            :
                                                            <div className="css-1dbjc4n r-1pi2tsx" style={{ backgroundColor: "rgb(214, 214, 214)", width: "8px" }}></div>
                                                        }
                                                    </div>

                                                    <div className="css-1dbjc4n" style={{ flex: "9 1 0%", paddingLeft: "14px" }}>

                                                        {transactionStatus == "2" && transactionStatus == "3" && transactionStatus == "4" ?
                                                            <>
                                                                <div className="css-1dbjc4n" style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: "22px" }}>
                                                                    <div dir="auto" className="css-901oao css-cens5h" style={{ color: "rgb(56, 59, 69)", fontSize: "26px", fontWeight: "700" }}>Paying</div>
                                                                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ height: " 36px", transitionDuration: "0.25s" }}>
                                                                        <div dir="auto" className="css-901oao" style={{ color: "rgb(102, 102, 102)", fontWeight: " 500", textDecorationLine: "underline" }}>Example</div>
                                                                    </div>
                                                                </div>
                                                                <div className="css-1dbjc4n" style={{ height: "196px", position: "relative", width: "146px" }}>
                                                                    <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010" style={{ transform: "scale(0.983667)" }} >
                                                                        <div
                                                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                            style={{ backgroundImage: `url(${url_img})` }}
                                                                        ></div>

                                                                        <img alt="" draggable="false" src={url_img} className="css-9pa8cd" />

                                                                    </div>
                                                                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ height: "196px", transitionDuration: "0s", width: "146px", zIndex: "12" }}>
                                                                        <div dir="auto" className="css-901oao"></div>
                                                                    </div>
                                                                </div>
                                                            </>
                                                            :
                                                            <>
                                                                <div className="css-1dbjc4n" style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: "22px" }}>
                                                                    <div dir="auto" className="css-901oao css-cens5h" style={{ color: "rgb(56, 59, 69)", fontSize: "26px", fontWeight: "700" }}>If you have paid, please upload a screenshot</div>
                                                                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ height: " 36px", transitionDuration: "0.25s" }}>
                                                                        <div dir="auto" className="css-901oao" style={{ color: "rgb(102, 102, 102)", fontWeight: " 500", textDecorationLine: "underline" }}>Example</div>
                                                                    </div>
                                                                </div>
                                                                {url_img ?
                                                                    <>
                                                                        <div className="css-1dbjc4n" style={{ height: "196px", position: "relative", width: "146px" }}>
                                                                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010" style={{ transform: "scale(0.983667)" }} >
                                                                                <div
                                                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                                    style={{ backgroundImage: `url(${url_img})` }}
                                                                                ></div>
                                                                                <img alt="" draggable="false" src={url_img} className="css-9pa8cd" />
                                                                            </div>
                                                                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ height: "196px", transitionDuration: "0s", width: "146px", zIndex: "12" }}>
                                                                                <div dir="auto" className="css-901oao"></div>
                                                                            </div>
                                                                            {transactionStatus == 0 && <>
                                                                                <div style={{ left: "213px", top: "83px", position: "absolute" }}>
                                                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci r-u8s1d" style={{ borderColor: "rgb(0, 147, 255)", borderRadius: "22px", borderWidth: "1px", height: "42px", width: "134px" }}>
                                                                                        <div dir="auto" className="css-901oao" style={{ color: "rgb(0, 147, 255)" }}>Change</div>
                                                                                    </div>
                                                                                    <input type="file" accept="image/*" style={{ width: "100%", height: "100%", opacity: "0", zIndex: "99" }} name="file" onChange={handleChange} />
                                                                                </div>
                                                                            </>
                                                                            }
                                                                        </div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <div className="css-1dbjc4n" style={{ height: "196px", position: "relative", width: "146px" }} onClick={handleImage}>
                                                                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010" style={{ transform: "scale(0.983667)" }} >
                                                                                <div
                                                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                                    style={{ backgroundImage: `url(${rechargeUploadImg})` }}
                                                                                ></div>
                                                                                <img alt="" draggable="false" src={rechargeUploadImg} className="css-9pa8cd" />
                                                                            </div>
                                                                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ height: "196px", transitionDuration: "0s", width: "146px", zIndex: "12" }}>
                                                                                <div dir="auto" className="css-901oao"></div>
                                                                            </div>
                                                                        </div>

                                                                    </>}

                                                            </>}
                                                    </div>
                                                </div>


                                               



                                                {status &&

                                                    <div className="css-1dbjc4n r-13qz1uu" style={{ marginTop: "22px", position: "relative" }}>
                                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" style={{ transitionDuration: "0s" }}>
                                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Upload Now</div>
                                                        </div>
                                                        <input type="file" accept="image/*" style={{ width: "100%", height: "100%", position: "absolute", left: "0px", top: "0px", opacity: "0", zIndex: "99" }} name="file" onChange={handleChange} />
                                                    </div>

                                                }
                                                <div className="css-1dbjc4n" style={{ flexDirection: "row", height: "242px" }}>
                                                    <div className="css-1dbjc4n r-1awozwy r-13awgt0">
                                                        {transactionStatus == "1" ?
                                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "50px", width: "50px" }}>

                                                                <div
                                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                    style={{ backgroundImage: `url(${Choose_pre})` }}
                                                                ></div>
                                                                <img alt="" draggable="false" src={Choose_pre} className="css-9pa8cd" />
                                                            </div> :


                                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "50px", width: "50px" }}>

                                                                <div
                                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                    style={{ backgroundImage: `url(${grayCheckIcon})` }}
                                                                ></div>
                                                                <img alt="" draggable="false" src={grayCheckIcon} className="css-9pa8cd" />
                                                            </div>
                                                        }
                                                        {transactionStatus == "3" ?
                                                            <div className="css-1dbjc4n r-1pi2tsx" style={{ backgroundColor: "rgb(250, 60, 9)", width: "8px" }}></div>
                                                            : transactionStatus == "1" ?
                                                                <div className="css-1dbjc4n r-1pi2tsx" style={{ backgroundColor: "rgb(0, 194, 130)", width: "8px" }}></div> :
                                                                <div className="css-1dbjc4n r-1pi2tsx" style={{ backgroundColor: "rgb(214, 214, 214)", width: "8px" }}></div>

                                                        }
                                                    </div>
                                                    <div className="css-1dbjc4n" style={{ flex: "9 1 0%", paddingLeft: "14px" }}>
                                                        <div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "22px", fontWeight: "700", lineHeight: "50px" }}>FieWin recharge agents processing</div>
                                                        <div
                                                            data-focusable="true"
                                                            tabIndex="0"
                                                            className="css-1dbjc4n r-1awozwy r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"
                                                            style={{ flexDirection: "row", marginTop: "16px", transitionDuration: "0s" }}
                                                        >
                                                            {res_data && res_data.file && transactionStatus == "0" ?

                                                                <ContDown />
                                                                : <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "78px", marginRight: "14px", width: "74px" }}>
                                                                    <div
                                                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                        style={{ backgroundImage: `url(${customerService1})` }}

                                                                    ></div>
                                                                    <img alt="" draggable="false" src={customerService1} className="css-9pa8cd" />
                                                                </div>
                                                            }
                                                            <div dir="auto" className="css-901oao" style={{ color: "rgb(157, 160, 165)", fontSize: "20px", textDecorationLine: "underline" }}>Speed up confirmation via WhatsApp</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="css-1dbjc4n" style={{ flexDirection: "row", height: "188px" }}>
                                                    {transactionStatus == "2" ?
                                                        <>
                                                            <div className="css-1dbjc4n r-1awozwy r-13awgt0">
                                                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "50px", width: "50px" }}>
                                                                    <div
                                                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                        style={{ backgroundImage: `url(${grayCloseIcon})` }}
                                                                    ></div>
                                                                    <img alt="" draggable="false" src={grayCloseIcon} className="css-9pa8cd" />
                                                                </div>
                                                            </div>
                                                            <div className="css-1dbjc4n" style={{ flex: "9 1 0%", paddingLeft: "14px" }}><div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "26px", fontWeight: "700", lineHeight: "50px" }}>Canceled</div></div>
                                                        </>
                                                        : transactionStatus == "3" ?
                                                            <>
                                                                <div className="css-1dbjc4n r-1awozwy r-13awgt0">
                                                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "50px", width: "50px" }}>
                                                                        <div
                                                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                            style={{ backgroundImage: `url(${grayCloseIcon})` }}
                                                                        ></div>
                                                                        <img alt="" draggable="false" src={grayCloseIcon} className="css-9pa8cd" />
                                                                    </div>
                                                                </div>
                                                                <div className="css-1dbjc4n" style={{ flex: "9 1 0%", paddingLeft: "14px" }}><div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "26px", fontWeight: "700", lineHeight: "50px" }}>Failed</div></div>
                                                            </>
                                                            :
                                                            transactionStatus == "4" ?
                                                                <>
                                                                    <div className="css-1dbjc4n r-1awozwy r-13awgt0">
                                                                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "50px", width: "50px" }}>
                                                                            <div
                                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                                style={{ backgroundImage: `url(${grayCloseIcon})` }}
                                                                            ></div>
                                                                            <img alt="" draggable="false" src={grayCloseIcon} className="css-9pa8cd" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="css-1dbjc4n" style={{ flex: "9 1 0%", paddingLeft: "14px" }}><div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "26px", fontWeight: "700", lineHeight: "50px" }}>Time Out </div></div>
                                                                </> :
                                                                transactionStatus == "1" ?
                                                                    <>
                                                                        <div className="css-1dbjc4n r-1awozwy r-13awgt0">
                                                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "50px", width: "50px" }}>
                                                                                <div
                                                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                                    style={{ backgroundImage: `url(${Choose_pre})` }}
                                                                                ></div>
                                                                                <img alt="" draggable="false" src={Choose_pre} className="css-9pa8cd" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="css-1dbjc4n" style={{ flex: "9 1 0%", paddingLeft: "14px" }}><div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "26px", fontWeight: "700", lineHeight: "50px" }} >Complete</div></div>

                                                                    </> :
                                                                    <>
                                                                        <div className="css-1dbjc4n r-1awozwy r-13awgt0">
                                                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "50px", width: "50px" }}>
                                                                                <div
                                                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                                    style={{ backgroundImage: `url(${grayCheckIcon})` }}
                                                                                ></div>
                                                                                <img alt="" draggable="false" src={grayCheckIcon} className="css-9pa8cd" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="css-1dbjc4n" style={{ flex: "9 1 0%", paddingLeft: "14px" }}><div dir="auto" className="css-901oao" style={{ color: "rgb(56, 59, 69)", fontSize: "26px", fontWeight: "700", lineHeight: "50px" }} >Complete</div></div>
                                                                    </>}
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy" style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: "14px" }}>
                                                    {transactionStatus == "0"
                                                        ?
                                                        <div
                                                            data-focusable="true"
                                                            tabIndex="0"
                                                            className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                                            style={{ backgroundColor: "rgb(241, 241, 241)", transitionDuration: "0s", width: "202px" }}
                                                        >
                                                            <div dir="auto" className="css-901oao" style={{ color: "rgb(157, 160, 165)", fontSize: "20px", fontWeight: "400" }} onClick={() => setShow(true)}>Cancel</div>
                                                        </div>
                                                        : ""}
                                                    {transactionStatus == "1" ?
                                                        ""
                                                        :
                                                        <div
                                                            data-focusable="true"
                                                            tabIndex="0"
                                                            className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                                            style={{ backgroundColor: "rgb(241, 241, 241)", transitionDuration: "0s", width: "202px" }}
                                                        >
                                                            <NavLink to="/Complaint" state={{ p_method: location.state.p_method, account: location.state.account, transactionId: trancationId }} style={{textDecoration:"none"}}><div dir="auto" className="css-901oao" style={{ color: "rgb(157, 160, 165)", fontSize: "20px", fontWeight: "400" }}>Complaint</div></NavLink>
                                                        </div>}
                                                </div>
                                                {res2.data.data && res2.data.data[0].Compaint == "1" ?
                                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci" style={{ marginBottom: "42px", marginTop: "14px" }}>
                                                        <div dir="auto" className="css-901oao" style={{ color: "rgb(151, 151, 151)", textAlign: "center" }}>Complaint handling progress:<span className="css-901oao css-16my406" style={{ color: "rgb(0, 198, 124)" }}>Pending</span></div><div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginLeft: "8px", transitionDuration: "0s" }}><div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "22px", width: "22px" }}><div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${help})` }}></div>
                                                            <img alt="" draggable="false" src={help} className="css-9pa8cd" onClick={handlePending} /></div></div>
                                                    </div>
                                                    : res2.data.data && res2.data.data[0].Compaint == "2" ?
                                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci" style={{ marginBottom: "42px", marginTop: "14px" }}>
                                                            <div dir="auto" className="css-901oao" style={{ color: "rgb(151, 151, 151)", textAlign: "center" }}>Complaint handling progress:<span className="css-901oao css-16my406" style={{ color: "rgb(255, 22, 0)" }}>Invalid</span></div><div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginLeft: "8px", transitionDuration: "0s" }}><div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "22px", width: "22px" }}><div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${help})` }}></div>
                                                                <img alt="" draggable="false" src={help} className="css-9pa8cd" onClick={handlePending} /></div></div>
                                                        </div> : ""}


                                            </div>
                                        </Scrollbars>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {show &&
                    <div className="css-1dbjc4n r-1awozwy r-1p0dtai r-1ujhktn r-1d2f490 r-1xcajam r-zchlnj r-ipm5af" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: "99" }}>
                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                            <div dir="auto" className="css-901oao"></div>
                        </div>
                        <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "466px", top: "259.5px", width: "402px" }}>
                            <div className="css-1dbjc4n r-1awozwy r-1pi2tsx" style={{ justifyContent: "space-around", padding: "34px" }}>
                                
                                <div dir="auto" className="css-901oao r-5zpi7z r-b88u0q" style={{ fontSize: "60px" }}>₹{location.state.state}</div>
                                <div dir="auto" className="css-901oao r-5zpi7z r-q4m81j" style={{ fontSize: "26px" }}>You have an unfinished transaction, do you want to continue?</div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-tumt6t r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu"
                                    style={{ marginTop: "22px", transitionDuration: "0s" }} onClick={()=>setShow(false)}>
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
                                    style={{  transitionDuration: "0s" }} onClick={cancelTransaction}>
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
        </>
    )
}

// redux connect
const mapStateToProps = (state) => ({

    res: state.RechargeSs,
    res1: state.RechargeStatus,
    res2: state.transaction,
    res3: state.rechargesuccess
});

export default connect(mapStateToProps)(Transcation);