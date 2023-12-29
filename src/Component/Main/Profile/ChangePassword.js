import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import arrowLeft from "../../../images/arrowLeft.png"
import passwordIcon from "../../../images/passwordIcon.png"
import showPwd from "../../../images/showPwd.png"

const ChangePassword = (props) => {
    const [state, setState] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setState(e.target.value)
        const state1 = { value: e.target.value, type: "password", name: "password" }
        props.onChange(state1)
    }
    const handleSubmit = () => {
        props.onSubmit(true)
    }
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-cb25cm r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-102gzdx r-1777fci r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)", marginBottom: "14px" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-102gzdx r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }} onClick={() => navigate(-1)}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "26px", width: "16px" }}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${arrowLeft})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" />
                                </div>
                            </div>
                            <div dir="auto" className="css-901oao r-1x35g6 r-b88u0q" style={{ color: "rgb(0, 0, 0)", textAlign: "center" }}>Change Password</div>
                        </div>
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-1sncvnh" style={{ height: "874px", position: "relative" }}>
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-1pi2tsx">
                                    <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(204, 204, 204)", fontSize: "34px", marginTop: "72px", textAlign: "center" }}><span className="css-901oao css-16my406" style={{ color: "rgb(0, 0, 0)", marginRight: "8px" }}>+91</span>8460821006</div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci" style={{ marginBottom: "22px", marginTop: "30px", paddingRight: "28px", paddingLeft: "28px", position: "relative" }}><input placeholder="Password (≥6 characters)" autoCapitalize="sentences" autoComplete="on" autoCorrect="on" dir="auto" spellCheck="true" type="password" data-focusable="true" className="css-11aywtz r-14lw9ot r-1dzdj1l r-evnaw r-sga3zk r-13qz1uu"
                                        value={state} onChange={handleChange} style={{ padding: "16px 26px 16px 70px" }} />
                                        <div className="css-1dbjc4n r-5zpi7z r-1mlwlqe r-evnaw r-b88u0q r-1udh08x r-u8s1d r-417010" style={{ height: "28px", left: "48px", width: "28px" }}>
                                            <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${passwordIcon})` }}></div><img alt="" draggable="false" src={passwordIcon} className="css-9pa8cd" /></div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr"
                                            style={{ height: "28px", right: "42px", transitionDuration: "0s", width: "28px" }}>
                                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010">
                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${showPwd})` }}></div><img alt="" draggable="false" src={showPwd} className="css-9pa8cd" /></div>
                                        </div>
                                    </div>
                                    <div data-focusable="true" onClick={handleSubmit} tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ margin: "28px", transitionDuration: "0s" }}>
                                        <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Change Password</div>
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

export default ChangePassword