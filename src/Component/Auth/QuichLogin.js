import { useEffect, useState } from 'react'
import * as React from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { firebase, auth } from "./Firebase"
import { connect } from "react-redux";
import { LoginParity, RegisterParity } from '../../redux/action/FetchData'
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";

const QuichLogin = ({ dispatch, res }) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    mobile_no: "", value: "quickLogin"
  })
  const [code, setCode] = useState("")
  const [confiremObj, setConfirmObj] = useState()
  const [status1, setStatus1] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setState({
      ...state, [name]: value
    })
  }
  useEffect(() => {
    if (state.mobile_no.length >= 10) {
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
      swal({ text: "verification code send successfully!!", timer: 1000 })
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
        // swal({text:"login Successfully",timer:1000})
        // dispatch(RegisterParity(state))
        dispatch(LoginParity(state))
      }
      else {

      }
    }
    catch (e) {
      swal({ text: "please check your verification code!!", timer: 1000 })
    }
  }
  return (
    <>
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
          className="css-11aywtz r-14lw9ot r-evnaw r-1k9zyfm r-1g8d9hc r-1ced2js r-1yzf0co r-13qz1uu"
          name="mobile_no"
          value={state.mobile_no}
          onChange={handleChange}
        />
        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q r-f9274a r-u8s1d">+91</div>
      </div>
      <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-11c0sde r-13qz1uu">
        <div className="css-1dbjc4n r-13awgt0">
          <input
            placeholder="Input Verification Code"
            maxLength="4"
            autoCapitalize="sentences"
            autoComplete="on"
            autoCorrect="on"
            dir="auto"
            spellCheck="true"
            inputMode="numeric"
            value={code}
            onChange={handleCode}
            data-focusable="true"
            className="css-11aywtz r-14lw9ot r-evnaw r-1k9zyfm r-1g8d9hc r-1yzf0co"
            name="code"
          />
        </div>
        <div data-focusable="true" tabIndex="0" onClick={setCaptcha1} className="css-1dbjc4n r-1awozwy r-1ov7twd r-1dzdj1l r-1loqt21 r-13awgt0 r-1k9zyfm r-1777fci r-ltgprq r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
          <div dir="auto" className="css-901oao r-jwli3a" style={{ fontSize: "20px" }}>Get Verification code</div>
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
            ></input>
            <div className="inpunumber">+91</div>
          </div>
        </div>
      </div>
      <div className="row pace1">
        <div className="col-lg-6">
          <input
            type="text"
            id="fname"
            name="code"
            placeholder="Input Verification"
            className="verifi"
            value={code}
            onChange={handleCode}
          ></input>
        </div>
        <div className="col-lg-6">
          <button className="butHem" onClick={setCaptcha1}>Get Verification code</button>
        </div>
      </div>


      <div id="recaptcha-container"></div>
      <button className="butstw" onClick={verifyOtp}>Login</button> */}

    </>
  )
}


// redux connect
const mapStateToProps = (state) => ({
  res: state.login,
});

export default connect(mapStateToProps)(QuichLogin);