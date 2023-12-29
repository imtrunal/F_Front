import  React,{ useEffect, useState, useCallback } from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { firebase, auth } from "./Firebase"
import { connect } from "react-redux";
// import logo from "../../images/login.png";
import { RegisterParity } from '../../redux/action/FetchData'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Footer from './AuthFooter';
import registerLogo from "../../images/registerLogo.png";
import passwordIcon from "../../images/passwordIcon.png";
import showpwd from "../../images/showPwd.png";
import hidepwd from "../../images/hidePwd.png";
// import Swal from "@sweetalert/with-react";
import swal from "sweetalert";
import $ from 'jquery';


const Register1 = ({ dispatch, res }) => {
    const [hide, setHide] = useState(true);
    const [hide1, setHide1] = useState(true);
    const [status, setStatus] = useState(false)
    const [state1, setState1] = useState(false)
    const navigate = useNavigate()
    const handelaclike = () => {
        setHide(!hide);
    };

    const handelaclike1 = () => {
        setHide1(!hide1);
    };
    const [timer, setTimer] = useState(60);
    // const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);



    useEffect(() => {
        if(state1 == true){

            if (timer > 0) {
                setTimeout(() => setTimer(timer - 1), 1000);
            } else {
                swal({
                    text: "Resend the verification Code", timer: 1000
                })
                setState1(false)
    
            }
        }
    }, [timer,state1]);

    // const resetTimer = function () {
    //     if (!timer) {
    //         setTimer(60);
    //     }
    // };
    useEffect(() => {
        // window.$(document).ready(function () {
        // window.$(".swal-button").remove();
        // window.$(".swal-button").hide();
        $(document).ready(function () {
            $(".swal-button-container").hide();
        });

        // });
    }, []);

    const successAlert = () => {
        swal("verification code hsa been send");
    };

    const params = useParams()
    const [state, setState] = useState({
        mobile_no: "", password: "", id: params.id ? params.id : ""
    })
    const [status1, setStatus1] = useState(false)
    const [code, setCode] = useState("")
    const [confiremObj, setConfirmObj] = useState()
    const handleChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state, [name]: value
        })

    }
    useEffect(() => {
        if (state.mobile_no.length >= 10 && state.password >= 3) {
            setStatus1(true)
        }
    }, [state])
    const setCaptcha = (number) => {
        const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
        recaptchaVerifier.render()
        return signInWithPhoneNumber(auth, "+91" + state.mobile_no, recaptchaVerifier)
    }
    const setCaptcha1 = async () => {
        if (!state.mobile_no.length) {
            swal({ text: "Please Enter Mobile No!!", timer: 1000 })

        }
        const data = await setCaptcha(state.mobile_no)
        if (data) {
            swal({
                text: "verification code send successfully!!", timer: 1000
            })
            setState1(true)
           

        }
        setConfirmObj(data)
    }
    const handleCode = (e) => {
        const value = e.target.value
        setCode(value)
    }
    const verifyOtp = async () => {
        try {
            const data = await confiremObj.confirm(code)
            if (data) {
                dispatch(RegisterParity(state))
            }
        }
        catch (e) {
            swal({ text: "please check your verification code!!", timer: 1000 })
        }

    }
    const api_res = res
    useEffect(() => {
        if (api_res.loading == false) {
            swal({ text: api_res.data.message, timer: 1000 })
        }
    }, [api_res])
    const handlePassword = () => {
        setStatus(!status)
    }
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-97e31f r-bv2aro r-hxflta r-10xqauy">
                        <div className="css-1dbjc4n r-cb25cm r-16y7rff r-1sbahrg">
                            <div className="css-1dbjc4n r-18u37iz r-1777fci" style={{ marginTop: "64px" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "128px", width: "294px" }}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${registerLogo})`}}
                                    ></div>
                                    <img alt="" draggable="false" src={registerLogo} className="css-9pa8cd" />
                                </div>
                            </div>
                            <div className="css-1dbjc4n r-1awozwy r-1777fci r-11c0sde r-bnwqim r-13qz1uu">
                                <input
                                    placeholder="Input Mobile Phone Number"
                                    maxLength="11"
                                    autoCapitalize="sentences"
                                    autoComplete="on"
                                    autoCorrect="on"
                                    dir="auto"
                                    spellCheck="true"
                                    inputMode="numeric"
                                    data-focusable="true"
                                    value={state.mobile_no}
                                    name="mobile_no"
                                    onChange={handleChange}
                                    className="css-11aywtz r-14lw9ot r-evnaw r-1k9zyfm r-1g8d9hc r-1ced2js r-1yzf0co r-13qz1uu"

                                />
                                <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q r-f9274a r-u8s1d">+91</div>
                            </div>
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-11c0sde r-13qz1uu">
                                <div className="css-1dbjc4n r-13awgt0">
                                    <input
                                        placeholder="Input Verification Code"

                                        autoCapitalize="sentences"
                                        autoComplete="on"
                                        autoCorrect="on"
                                        dir="auto"
                                        spellCheck="true"
                                        inputMode="numeric"
                                        data-focusable="true"
                                        className="css-11aywtz r-14lw9ot r-evnaw r-1k9zyfm r-1g8d9hc r-1yzf0co"
                                        value={code}
                                        onChange={handleCode}
                                        name="code"
                                    />
                                </div>

                                <div data-focusable="true" tabIndex="0" onClick={setCaptcha1} className={`css-1dbjc4n r-1awozwy ${state1 ? "r-1wopz39" : "r-1ov7twd"}  r-1dzdj1l r-1loqt21 r-13awgt0 r-1k9zyfm r-1777fci r-ltgprq r-1otgn73 r-1i6wzkk r-lrvibr`} style={{ transitionDuration: "0s" }}>
                                    <div dir="auto" className="css-901oao r-jwli3a" style={{ fontSize: "20px" }}>{state1 ? timer+"s" : "Get Verification code"}</div>
                                </div>
                            </div>
                            <div className="css-1dbjc4n r-1awozwy r-1777fci r-11c0sde r-bnwqim r-13qz1uu">
                                <input
                                    placeholder="Password (≥6 characters)"
                                    autoCapitalize="sentences"
                                    autoComplete="on"
                                    autoCorrect="on"
                                    dir="auto"
                                    spellCheck="true"
                                    type={status ? "text" : "password"}
                                    data-focusable="true"
                                    className="css-11aywtz r-14lw9ot r-evnaw r-1k9zyfm r-1g8d9hc r-1ced2js r-1yzf0co r-13qz1uu"
                                    value={state.password}
                                    onChange={handleChange}
                                    name="password"
                                />
                                <div className="css-1dbjc4n r-5zpi7z r-1mlwlqe r-evnaw r-b88u0q r-f9274a r-1udh08x r-u8s1d r-417010" style={{ height: "28px", width: "28px" }}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${passwordIcon})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={passwordIcon} className="css-9pa8cd" />
                                </div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr" style={{ height: "28px", right: "14px", transitionDuration: "0.25s", width: "28px" }}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010" onClick={handlePassword}>
                                        <div
                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                            style={{ backgroundImage: !status ? `url(${showpwd})` : `url(${hidepwd})` }}
                                        ></div>
                                        <img alt="" draggable="false" src={!status ? showpwd : hidepwd} className="css-9pa8cd" />
                                    </div>
                                </div>
                            </div>
                            <div id="recaptcha-container"></div>
                            <div
                                data-focusable="true"
                                tabIndex="0"
                                className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                style={{ backgroundColor: status1 ? "rgb(0, 147, 255)" : "rgb(165, 165, 165)", marginTop: "38px", transitionDuration: "0s" }}
                                onClick={verifyOtp}
                            >
                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Register</div>
                            </div>
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-11c0sde">
                                <div dir="auto" className="css-901oao r-evnaw" style={{ color: "rgb(151, 151, 151)" }}>Registered account?</div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}><div dir="auto" className="css-901oao r-1jrmi80 r-evnaw" onClick={() => navigate("/login")}>Login</div></div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>









            {/* <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-97e31f r-bv2aro r-hxflta r-10xqauy">
                    <div className="css-1dbjc4n r-cb25cm r-1ub9p5i r-1sbahrg">
                        <input
                            placeholder="Input phone number"
                            autoCapitalize="sentences"
                            autoComplete="on"
                            autoCorrect="on"
                            dir="auto"
                            spellCheck="true"
                            inputMode="numeric"
                            name="mobile_no"
                            data-focusable="true"
                            className="css-11aywtz r-14lw9ot r-evnaw r-sga3zk r-1g8d9hc r-1ced2js r-1yzf0co r-13qz1uu"
                            value={state.mobile_no}
                            onChange={handleChange}
                        />
                        <input
                            placeholder="Input Verification Code"
                            autoCapitalize="sentences"
                            autoComplete="on"
                            autoCorrect="on"
                            dir="auto"
                            spellCheck="true"
                            inputMode="numeric"
                            name="code"
                            data-focusable="true"
                            className="css-11aywtz r-14lw9ot r-evnaw r-sga3zk r-1g8d9hc r-1ced2js r-1yzf0co r-13qz1uu "
                            style={{ marginTop: "10px" }}
                            value={code}
                            onChange={handleCode}
                        />
                        <input
                            placeholder="Input password"
                            autoCapitalize="sentences"
                            autoComplete="on"
                            autoCorrect="on"
                            dir="auto"
                            spellCheck="true"
                            inputMode="numeric"
                            name="password"
                            data-focusable="true"
                            className="css-11aywtz r-14lw9ot r-evnaw r-sga3zk r-1g8d9hc r-1ced2js r-1yzf0co r-13qz1uu"
                            style={{ marginTop: "10px" }}

                            value={state.password}
                            onChange={handleChange}
                        />
                        <button className='mt-5' onClick={setCaptcha1}>get verification code</button>

                        <div id="recaptcha-container"></div>
                        <button style={{ marginTop: "10px" }} onClick={verifyOtp}>Register</button>
                        <NavLink to="/login" className="text-align-center"><span>Login</span></NavLink>
                    </div>
                </div>
            </div> */}

        </>
    )
}

// redux connect
const mapStateToProps = (state) => ({
    res: state.register,
});

export default connect(mapStateToProps)(Register1);