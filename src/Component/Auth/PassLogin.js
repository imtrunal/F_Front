import { useEffect, useState } from 'react'
import * as React from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { firebase, auth } from "./Firebase"
import { connect } from "react-redux";
import { LoginParity } from '../../redux/action/FetchData'
import { NavLink } from 'react-router-dom';
import password from "../../images/passwordIcon.png";

const PassLogin = ({ dispatch, res, socket }) => {
    const [state, setState] = useState({
        mobile_no: "", password: "", value: "passwordLogin"
    })
    const [status1, setStatus1] = useState(false)
    useEffect(() => {
        if (state.mobile_no.length >= 10 && state.password >= 3) {
            setStatus1(true)
        }
    }, [state])
    const handleChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state, [name]: value
        })
    }
    const handleSubmit = () => {

        dispatch(LoginParity(state))
    }
    const api_res = res

    useEffect(() => {
        if (api_res.data.status == true) {
            // alert(api_res.data.message)
            socket.emit("loginid", api_res.data.userId)
        }

    }, [api_res])
    return (
        <>

            <div className="css-1dbjc4n r-1awozwy r-1777fci r-11c0sde r-bnwqim r-13qz1uu">
                <input
                    placeholder="Input Mobile Phone Number"
                    maxLength="11"
                    autoCapitalize="sentences"
                    autoComplete="on"
                    autoCorrect="on" dir="auto"
                    spellCheck="true"
                    inputMode="numeric"
                    data-focusable="true"
                    className="css-11aywtz r-14lw9ot r-evnaw r-1k9zyfm r-1g8d9hc r-1ced2js r-1yzf0co r-13qz1uu"
                    name="mobile_no"
                    value={state.mobile_no}
                    onChange={handleChange} />
                <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q r-f9274a r-u8s1d">+91
                </div>
            </div>

            <div className="css-1dbjc4n r-1awozwy r-1777fci r-11c0sde r-bnwqim r-13qz1uu">
                <input placeholder="Password (≥6 characters)" autoCapitalize="sentences" autoComplete="on" autoCorrect="on" dir="auto" spellCheck="true" type="password" data-focusable="true" className="css-11aywtz r-14lw9ot r-evnaw r-1k9zyfm r-1g8d9hc r-1ced2js r-1yzf0co r-13qz1uu"
                    name="password"
                    value={state.password}
                    onChange={handleChange} />
                <div className="css-1dbjc4n r-5zpi7z r-1mlwlqe r-evnaw r-b88u0q r-f9274a r-1udh08x r-u8s1d r-417010" style={{ height: "28px", width: "28px" }}>
                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${password})` }}></div>
                    <img alt="" draggable="false" src={password} className="css-9pa8cd" /></div>
            </div>
            <div data-focusable="true" tabIndex="0" onClick={handleSubmit} className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginTop: "38px", transitionDuration: "0s", backgroundColor: status1 ? "rgb(0, 147, 255)" : "rgb(165, 165, 165)" }}>
                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Login</div>
            </div>

            {/* 
            <div className="row">
                <div className="col-md-12">
                    <div className="ponenumber">
                        <input
                            type="text"
                            id="fname"
                            placeholder="Input Mobile Phone Number"
                            maxLength="11"
                            className="inputfild"
                            name="mobile_no"
                            value={state.mobile_no}
                            onChange={handleChange}
                        />
                        <div className="inpunumber">+91</div>
                    </div>
                </div>
            </div> */}

            {/* <div className="row">
                <div className="col-md-12">
                    <div className="ponenumber">
                        <input
                            type="text"
                            id="fname"
                            name="password"
                            placeholder="Input Mobile Phone Number"
                            maxLength="11"
                            className="inputfild"

                            value={state.password}
                            onChange={handleChange}
                        ></input>
                        <div className="inpunumber">
                            <img src={password} alt="" style={{ width: "25px" }} />
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}

// redux connect
const mapStateToProps = (state) => ({
    res: state.login,
});

export default connect(mapStateToProps)(PassLogin);