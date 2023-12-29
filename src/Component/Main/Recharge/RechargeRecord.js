import React, { useEffect, useState } from 'react'
import Scrollbars from 'react-custom-scrollbars';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FastRecords from './FastRecords';
import { connect } from 'react-redux';
import { RechargeUserTransactionParity } from '../../../redux/action/FetchData';
import { useNavigate } from 'react-router-dom';
import arrowLeft from "../../../images/arrowLeft.png"
import WhatshappRecord from './WhatshappRecord';
const RechargeRecord = ({ dispatch, res }) => {
    const navigate = useNavigate()
    const login_data = JSON.parse(sessionStorage.getItem('login'))
    const [state, setState] = useState(true)
    useEffect(() => {
        dispatch(RechargeUserTransactionParity(login_data.userId))
    }, [dispatch])
    const handleClick = () => {
        setState(true)
    }
    const handleClick1 = () => {
        setState(false)
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
                            <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(0, 0, 0)", fontSize: "26px", textAlign: "center" }}>Recharge Records</div>
                        </div>

                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{ height: "1078px" }}>
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-18u37iz r-1wtj0ep" style={{ marginBottom: "18px", paddingTop: "14px" }}>
                                    <div
                                        data-focusable="true"
                                        tabIndex="0"
                                        className="css-1dbjc4n r-1awozwy r-14lw9ot r-j9b53g r-1i97xy8 r-12mgwdw r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1f720gc"
                                        style={{ transitionDuration: "0s", zIndex: "2" }}
                                        onClick={handleClick}
                                    >
                                        <div dir="auto" className="css-901oao r-b88u0q" style={{ color:state ? "rgb(0, 0, 0)":"rgb(151,151,151)", fontSize: "24px" }}>Fast Records</div>
                                        {state &&<div className="css-1dbjc4n r-2mrr8d r-1jkafct r-1p0dtai r-epq5cr r-u8s1d r-13qz1uu"></div>}
                                    </div>
                                    <div
                                        data-focusable="true"
                                        tabIndex="0"
                                        className="css-1dbjc4n r-1awozwy r-14lw9ot r-j9b53g r-1i97xy8 r-12mgwdw r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1f720gc"
                                        onClick={handleClick1}
                                        style={{ transitionDuration: "0s", zIndex: "1" }}
                                    >
                                        <div dir="auto" className="css-901oao r-b88u0q" style={{color:!state ? "rgb(0, 0, 0)":"rgb(151,151,151)", fontSize: "24px" }}>WhatsApp Records</div>
                                        {!state &&<div className="css-1dbjc4n r-2mrr8d r-1jkafct r-1p0dtai r-epq5cr r-u8s1d r-13qz1uu"></div>}
                                  
                                    </div>
                                </div>
                                {state ?
                                    <FastRecords res_data={res.data.data} />

                                    : <WhatshappRecord/>}
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

    res: state.userTransaction
});

export default connect(mapStateToProps)(RechargeRecord);