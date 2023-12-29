import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import chargeAs1 from "../../../images/chargeAs1.png"
import chargeAs2 from "../../../images/chargeAs2.png"
import chargeAs3 from "../../../images/chargeAs3.png"
import arrowLeft from "../../../images/arrowLeft.png"

import chargeAs4 from "../../../images/chargeAs4.png"
import { TaskRewardDetails, TaskStatusChangeDetails } from '../../../redux/action/FetchData';
import { connect } from "react-redux"
const LearnCharge = ({ dispatch, res1 }) => {
    const location = useLocation()
    const [state, setState] = useState({

        "ans1": false,
        "ans2": false,
        "ans3": false

    })
    const [state1, setState1] = useState({
        "ans1": false,
        "ans2": false,
        "ans3": false,
        "ans4": false
    })
    const [state2, setState2] = useState({
        "ans1": false,
        "ans2": false,
        "ans3": false,
        "ans4": false
    })
    const [status, setStatus] = useState(false)
    const query = useParams()
    const navigate = useNavigate()
    const handleAnswer = (key, value) => {
        if (key == "que1") {
            setState({
                ...state,
                [value]: !state[value]
            })
        }
        else if (key == "que2") {
            setState1({
                ...state1,
                [value]: !state1[value]
            })
        } else if (key == "que3") {
            setState2({
                ...state2,
                [value]: !state2[value]
            })
        }
    }
    const handleCheck = (value) => {
        if (value == "que1") {
            if (state.ans1 == true && state.ans3 == true) {
                navigate("/LearnCharge/2",{state:{id:location.state && location.state.id}})
            }
            else {
                setStatus(true)
            }
        }
        else if (value == "que2") {
            if (state1.ans1 == true && state1.ans2 == true && state1.ans3 == true && state1.ans4 == true) {
                navigate("/LearnCharge/3" ,{state:{id:location.state && location.state.id}})
            }
            else {
                setStatus(true)
            }
        }
        else if (value == "que3") {
            const login_data = JSON.parse(sessionStorage.getItem('login'))
            if (state2.ans3 == true && state2.ans4 == true) {
                const data = { id: location.state && location.state.id, status: "1", order: "2", userId: login_data.userId }
                dispatch(TaskStatusChangeDetails(data))

            }
            else {
                setStatus(true)
            }
        }
    }
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-14lw9ot r-1ub9p5i r-cqs64b r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-uxrrfj r-1777fci r-p1pxzi r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-uxrrfj r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", width: "16px" }} onClick={() => navigate(-1)}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${arrowLeft})` }}></div>
                                    <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" />
                                </div>
                            </div>
                            <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(0, 0, 0)", fontSize: "26px", textAlign: "center" }}>Learn to Recharge</div>
                        </div>
                        {query.id == 1 &&
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-cb25cm" style={{ height: "16px" }}></div>
                                <div className="css-1dbjc4n r-1sbahrg r-i03k3n">
                                    <div dir="auto" className="css-901oao r-5zpi7z r-yy2aun r-2agvir">Which of the following descriptions is correct?</div>
                                    <div data-focusable="true" tabIndex="0" onClick={() => handleAnswer("que1", "ans1")} className={`css-1dbjc4n r-1awozwy r-6qh97a r-z2wwpe r-1loqt21 r-1wd366l r-1777fci r-1d7gupr r-1udh08x r-779j7e r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr ${state['ans1'] && "r-1f4pqlr"} `} style={{ transitionDuration: "0s" }}>
                                        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-q4m81j">Every recharge needs to create a new transaction order</div>
                                    </div>
                                    <div data-focusable="true" tabIndex="0" onClick={() => handleAnswer("que1", "ans2")} className={`css-1dbjc4n r-1awozwy r-6qh97a r-z2wwpe r-1loqt21 r-1wd366l r-1777fci r-1d7gupr r-1udh08x r-779j7e r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr ${state['ans2'] && "r-1f4pqlr"} `} style={{ transitionDuration: "0s" }}>
                                        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-q4m81j">Canceled orders cannot continue to pay</div>
                                    </div>
                                    <div data-focusable="true" tabIndex="0" onClick={() => handleAnswer("que1", "ans3")} className={`css-1dbjc4n r-1awozwy r-6qh97a r-z2wwpe r-1loqt21 r-1wd366l r-1777fci r-1d7gupr r-1udh08x r-779j7e r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr ${state['ans3'] && "r-1f4pqlr"} `} style={{ transitionDuration: "0s" }}>
                                        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-q4m81j">You can transfer directly to the last account</div>
                                    </div>
                                </div>
                                <div dir="auto" className="css-901oao r-adyw6z r-2agvir r-q4m81j" style={{ color: "rgb(242, 123, 34)", marginBottom: "14px", opacity: "0" }}>The answer is wrong, please select again</div>
                                {status && <div dir="auto" className="css-901oao r-2agvir" style={{ color: "rgb(242, 123, 34)", fontSize: "20px", marginBottom: "14px", opacity: "1", textAlign: "center" }}>The answer is wrong, please select again</div>}
                                <div
                                    data-focusable="true"
                                    tabIndex="0"
                                    className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                    style={{ marginBottom: '28px', marginRight: "28px", marginLeft: "28px", transitionDuration: "0s" }}
                                >
                                    <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={() => handleCheck("que1")}>Next</div>
                                </div>
                            </div>
                        }
                        {query.id == 2 &&
                            <>
                                <div className="css-1dbjc4n">
                                    <div className="css-1dbjc4n r-cb25cm" style={{ height: "16px" }}></div>
                                    <div className="css-1dbjc4n r-1sbahrg r-i03k3n">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-yy2aun r-2agvir">What are the steps involved in a complete recharge?</div>
                                        <div data-focusable="true" tabIndex="0" onClick={() => handleAnswer("que2", "ans1")} className={`css-1dbjc4n r-1awozwy r-6qh97a r-z2wwpe r-1loqt21 r-1wd366l r-1777fci r-1d7gupr r-1udh08x r-779j7e r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr ${state1['ans1'] && "r-1f4pqlr"} `} style={{ transitionDuration: "0s" }}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-q4m81j">Click the "Recharge" button</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" onClick={() => handleAnswer("que2", "ans2")} className={`css-1dbjc4n r-1awozwy r-6qh97a r-z2wwpe r-1loqt21 r-1wd366l r-1777fci r-1d7gupr r-1udh08x r-779j7e r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr ${state1['ans2'] && "r-1f4pqlr"} `} style={{ transitionDuration: "0s" }}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-q4m81j">Select the payment method and click to open the APP</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" onClick={() => handleAnswer("que2", "ans3")} className={`css-1dbjc4n r-1awozwy r-6qh97a r-z2wwpe r-1loqt21 r-1wd366l r-1777fci r-1d7gupr r-1udh08x r-779j7e r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr ${state1['ans3'] && "r-1f4pqlr"} `} style={{ transitionDuration: "0s" }}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-q4m81j">Paste account number and pay</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" onClick={() => handleAnswer("que2", "ans4")} className={`css-1dbjc4n r-1awozwy r-6qh97a r-z2wwpe r-1loqt21 r-1wd366l r-1777fci r-1d7gupr r-1udh08x r-779j7e r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr ${state1['ans4'] && "r-1f4pqlr"} `} style={{ transitionDuration: "0s" }}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-q4m81j">Screenshot of the detail page and upload on FieWin</div>
                                        </div>
                                    </div>
                                    <div dir="auto" className="css-901oao r-adyw6z r-2agvir r-q4m81j" style={{ color: "rgb(242, 123, 34)", marginBottom: "14px", opacity: "0" }}>The answer is wrong, please select again</div>
                                    {status && <div dir="auto" className="css-901oao r-2agvir" style={{ color: "rgb(242, 123, 34)", fontSize: "20px", marginBottom: "14px", opacity: "1", textAlign: "center" }}>The answer is wrong, please select again</div>}
                                    <div
                                        data-focusable="true"
                                        tabIndex="0"
                                        className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                        style={{ marginBottom: '28px', marginRight: "28px", marginLeft: "28px", transitionDuration: "0s" }}
                                    >
                                        <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={() => handleCheck("que2")}>Next</div>
                                    </div>
                                </div>

                            </>}
                        {query.id == 3 &&
                            <>
                                <div className="css-1dbjc4n">
                                    <div className="css-1dbjc4n r-cb25cm" style={{ height: "16px" }}></div>
                                    <div className="css-1dbjc4n r-1sbahrg r-i03k3n">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-yy2aun r-2agvir">Which picture is the correct screenshot?</div>
                                        <div className="css-1dbjc4n r-18u37iz r-1w6e6rj r-1wtj0ep">
                                            <div data-focusable="true" tabIndex="0" className={`css-1dbjc4n r-z2wwpe r-1loqt21 r-1d7gupr r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr ${state2['ans1'] && "r-1f4pqlr"}`} style={{ height: "404px", transitionDuration: "0s", width: "210px" }}>
                                                <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010" onClick={() => handleAnswer("que3", "ans1")}>
                                                    <div
                                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                        style={{ backgroundImage: `url(${chargeAs1})` }}
                                                    ></div>
                                                    <img alt="" draggable="false" src={chargeAs1} className="css-9pa8cd" />
                                                </div>
                                            </div>
                                            <div data-focusable="true" tabIndex="0" className={`css-1dbjc4n r-z2wwpe r-1loqt21 r-1d7gupr r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr ${state2['ans2'] && "r-1f4pqlr"}`} style={{ height: "404px", transitionDuration: "0s", width: "210px" }}>
                                                <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010" onClick={() => handleAnswer("que3", "ans2")}>
                                                    <div
                                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                        style={{ backgroundImage: `url(${chargeAs2})` }}

                                                    ></div>
                                                    <img alt="" draggable="false" src={chargeAs2} className="css-9pa8cd" />
                                                </div>
                                            </div>
                                            <div data-focusable="true" tabIndex="0" className={`css-1dbjc4n r-z2wwpe r-1loqt21 r-1d7gupr r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr ${state2['ans3'] && "r-1f4pqlr"}`} style={{ height: "404px", transitionDuration: "0s", width: "210px" }}>

                                                <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010" onClick={() => handleAnswer("que3", "ans3")}>
                                                    <div
                                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                        style={{ backgroundImage: `url(${chargeAs3})` }}

                                                    ></div>
                                                    <img alt="" draggable="false" src={chargeAs3} className="css-9pa8cd" />
                                                </div>
                                            </div>
                                            <div data-focusable="true" tabIndex="0" className={`css-1dbjc4n r-z2wwpe r-1loqt21 r-1d7gupr r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr ${state2['ans4'] && "r-1f4pqlr"}`} onClick={() => handleAnswer("que3", "ans4")} style={{ height: "404px", transitionDuration: "0s", width: "210px" }}>

                                                <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010" >
                                                    <div
                                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                        style={{ backgroundImage: `url(${chargeAs4})` }}
                                                    ></div>
                                                    <img alt="" draggable="false" src={chargeAs4} className="css-9pa8cd" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div dir="auto" className="css-901oao r-adyw6z r-2agvir r-q4m81j" style={{ color: "rgb(242, 123, 34)", marginBottom: "14px", opacity: "0" }}>The answer is wrong, please select again</div>
                                    {status && <div dir="auto" className="css-901oao r-2agvir" style={{ color: "rgb(242, 123, 34)", fontSize: "20px", marginBottom: "14px", opacity: "1", textAlign: "center" }}>The answer is wrong, please select again</div>}
                                    <div
                                        data-focusable="true"
                                        tabIndex="0"
                                        className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                        style={{ marginBottom: '28px', marginRight: "28px", marginLeft: "28px", transitionDuration: "0s" }}
                                    >
                                        <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={() => handleCheck("que3")}>Next</div>
                                    </div>
                                </div>

                            </>}
                    </div>

                </div>
            </div>
        </>
    )
}

// redux connect
const mapStateToProps = (state) => ({

    res1: state.taskStatus
});

export default connect(mapStateToProps)(LearnCharge);