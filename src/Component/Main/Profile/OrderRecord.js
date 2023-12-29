import  React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MineSweeper from './MineSweeper';
import Parity from './Parity';
import arrowLeft from "../../../images/arrowLeft.png"
import CrashOrder from './CrashOrder';
const OrderRecord = () => {
    const navigate = useNavigate()
    const [tab1, setTab1] = useState({
        everyone: true,
        my: false,
        crash:false

    })
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-14lw9ot r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
                    <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-uxrrfj r-1777fci r-p1pxzi r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)" }}>
                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-uxrrfj r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", width: "16px" }} onClick={() => navigate(-1)}>
                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${arrowLeft})` }}></div><img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" /></div>
                        </div>
                        <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(0, 0, 0)", fontSize: "26px", textAlign: "center" }}>Order</div>
                    </div>
                    <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{ height: "890px" }}>
                        <div className="css-1dbjc4n">
                            <div className="css-1dbjc4n r-cb25cm r-13qz1uu" style={{ height: "14px" }}></div>
                            <div className="css-1dbjc4n r-18u37iz">
                                <div data-focusable="true" tabIndex="0" onClick={() => {
                                    setTab1({
                                        everyone: true,
                                        my: false,
                                        crash:false
                                        
                                    })
                                }}
                                    className="css-1dbjc4n r-1awozwy r-14lw9ot r-1i97xy8 r-1yulp78 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-8joaof" style={{ transitionDuration: "0s", zIndex: "5" }}>
                                    <div dir="auto" className={`css-901oao  ${!tab1.everyone && "r-1az3528"}`} style={{ color:tab1.everyone && "rgb(0, 0, 0)", fontSize: "18px" }}>FastParity</div>
                                    {tab1.everyone &&<div className="css-1dbjc4n r-2mrr8d r-1jkafct r-1p0dtai r-epq5cr r-u8s1d r-13qz1uu"></div>}
                                </div>
                                <div data-focusable="true" tabIndex="0"
                                    onClick={() => {
                                        setTab1({
                                            everyone: false,
                                            my: true,
                                            crash:false
                                        })
                                    }} className="css-1dbjc4n r-1awozwy r-14lw9ot r-1i97xy8 r-1yulp78 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-8joaof" style={{ transitionDuration: "0s", zIndex: "4" }}>
                                    <div dir="auto" className={`css-901oao  ${!tab1.my && "r-1az3528"}`} style={{color:tab1.my && "rgb(0, 0, 0)", fontSize: "18px" }}>MineSweeper</div>
                                    {tab1.my &&<div className="css-1dbjc4n r-2mrr8d r-1jkafct r-1p0dtai r-epq5cr r-u8s1d r-13qz1uu"></div>}

                                </div>
                                <div data-focusable="true" tabIndex="0"
                                    onClick={() => {
                                        setTab1({
                                            everyone: false,
                                            my: false,crash:true
                                        })
                                    }} className="css-1dbjc4n r-1awozwy r-14lw9ot r-1i97xy8 r-1yulp78 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-8joaof" style={{ transitionDuration: "0s", zIndex: "4" }}>
                                    <div dir="auto" className={`css-901oao  ${!tab1.crash && "r-1az3528"}`} style={{color:tab1.crash && "rgb(0, 0, 0)", fontSize: "18px" }}>Crash</div>
                                    {tab1.crash &&<div className="css-1dbjc4n r-2mrr8d r-1jkafct r-1p0dtai r-epq5cr r-u8s1d r-13qz1uu"></div>}

                                </div>
                            </div>
                            {tab1.everyone && <Parity />}
                            {tab1.my && <MineSweeper />}
                            {tab1.crash && <CrashOrder />}


                            {/* <div >
                                <div >
                                    <Tabs>
                                        <TabList>
                                            <Tab>   <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-1i97xy8 r-1yulp78 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-8joaof" style={{ transitionDuration: "0s", zIndex: "5" }}>
                                                <div dir="auto" className="css-901oao r-1i10wst" style={{ color: "rgb(0, 0, 0)" }}>FastParity</div>
                                                <div className="css-1dbjc4n r-2mrr8d r-1jkafct r-1p0dtai r-epq5cr r-u8s1d r-13qz1uu"></div>
                                            </div></Tab>
                                            <Tab> <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-1i97xy8 r-1yulp78 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-8joaof" style={{ transitionDuration: "0s", zIndex: "4" }}>
                                                <div dir="auto" className="css-901oao r-1i10wst" style={{ color: "rgb(151, 151, 151)" }}>MineSweeper</div>
                                            </div></Tab>
                                        </TabList>

                                        <TabPanel>
                                            <Parity />
                                        </TabPanel>
                                        <TabPanel>
                                            <MineSweeper />
                                        </TabPanel>
                                    </Tabs>

                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderRecord