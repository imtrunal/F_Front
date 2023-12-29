import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { InviteLinkDetails } from '../../../redux/action/FetchData'
import shareImg5 from "../../../images/shareImg5.png"
import shareImg6 from "../../../images/shareImg6.png"
import shareImg7 from "../../../images/shareImg7.png"
import shareImg8 from "../../../images/shareImg8.png"
import shareImg1 from "../../../images/shareImg1.png"
import shareImg2 from "../../../images/shareImg2.png"
import shareImg3 from "../../../images/shareImg3.png"
import shareImg4 from "../../../images/shareImg4.png"
import arrowLeft from "../../../images/arrowLeft.png"
import shareLinkBtn from "../../../images/shareLinkBtn.png"
import shareLinkBg from "../../../images/shareLinkBg.png"

const MyLink = ({ dispatch, res }) => {
    const navigate=useNavigate()
    useEffect(() => {
        dispatch(InviteLinkDetails())
    }, [dispatch])
    const onButtonClick = (val) => {
        // using Java Script method to get PDF file
        fetch(`${val}`).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = `${val}`
                alink.click();
            })
        })
    }
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-cb25cm r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-102gzdx r-1777fci r-p1pxzi r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-102gzdx r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "26px", width: "16px" }} onClick={()=>navigate(-1)}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${arrowLeft})`}}
                                    ></div>
                                    <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" />
                                </div>
                            </div>
                            <div dir="auto" className="css-901oao r-1x35g6 r-b88u0q r-q4m81j" style={{ color: "rgb(0, 0, 0)" }}>Invite Link</div>
                        </div>
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" >
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-1awozwy r-1m8ko68 r-a2tzq0 r-1idfib4 r-13qz1uu r-1101ati">
                                    <div className="css-1dbjc4n r-1p0dtai r-1mlwlqe r-1m8ko68 r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw">
                                        <div
                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-x3cy2q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                            style={{ backgroundImage: `url(${shareLinkBg})`}}
                                        ></div>
                                        <img alt="" draggable="false" src={shareLinkBg} className="css-9pa8cd" />
                                    </div>
                                    <div className="css-1dbjc4n r-13qz1uu">
                                        <div dir="auto" className="css-901oao r-evnaw r-1cad53l r-q4m81j" style={{ color: "rgb(254, 216, 33)" }}>*The invitee will get ₹10 reward</div>
                                        <div dir="auto" className="css-901oao r-jwli3a r-1x35g6 r-q4m81j r-13qz1uu">My invite link</div>
                                        <div className="css-1dbjc4n r-uia4a0 r-g383jz r-sdzq82 r-z2wwpe r-rs99b7 r-1777fci r-1s2bzr4 r-13qz1uu">
                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q r-q4m81j r-13qz1uu">{window.location.origin}/L/{res.data.data && res.data.data[0].invite_link}</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1s2bzr4 r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" style={{ transitionDuration: "0s" }} onClick={() => { navigator.clipboard.writeText(`${window.location.origin}/L/${res.data.data && res.data.data[0].invite_link}`) }}>
                                            <div className="css-1dbjc4n r-1mlwlqe r-uxrrfj r-1udh08x r-13qz1uu r-417010" style={{ borderRadius: "8px" }}>
                                                <div
                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                    style={{ backgroundImage: `url(${shareLinkBtn})` }}
                                                ></div>
                                                <img alt="" draggable="false" src={shareLinkBtn} className="css-9pa8cd" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="css-1dbjc4n r-13qz1uu">
                                        <div dir="auto" className="css-901oao r-jwli3a r-1x35g6 r-q4m81j">Lucky Rupees link</div>
                                        <div className="css-1dbjc4n r-uia4a0 r-g383jz r-sdzq82 r-z2wwpe r-rs99b7 r-1777fci r-156q2ks r-13qz1uu">
                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q r-q4m81j r-13qz1uu" style={{ lineHeight: "38px" }}>{window.location.origin}/LR/{res.data.data && res.data.data[0].invite_link}</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" style={{ margintop: "24px", transitionDuration: "0s" }} onClick={() => { navigator.clipboard.writeText(`${window.location.origin}/LR/${res.data.data && res.data.data[0].invite_link}`) }}>
                                            <div className="css-1dbjc4n r-1mlwlqe r-uxrrfj r-1udh08x r-13qz1uu r-417010" style={{ borderRadius: "8px" }}>
                                                <div
                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                    style={{ backgroundImage: `url(${shareLinkBtn})` }}
                                                ></div>
                                                <img alt="" draggable="false" src={shareLinkBtn} className="css-9pa8cd" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="css-1dbjc4n r-13qz1uu">
                                        <div dir="auto" className="css-901oao r-jwli3a r-1x35g6 r-q4m81j">FieWin introduction invitation</div>
                                        <div className="css-1dbjc4n r-uia4a0 r-g383jz r-sdzq82 r-z2wwpe r-rs99b7 r-1777fci r-156q2ks r-13qz1uu">
                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q r-q4m81j r-13qz1uu" style={{ lineHeight: "38px" }}>{window.location.origin}/RG/{res.data.data && res.data.data[0].invite_link}</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" style={{ margintop: "24px", transitionDuration: "0s" }} onClick={() => { navigator.clipboard.writeText(`${window.location.origin}/RG/${res.data.data && res.data.data[0].invite_link}`) }}>
                                            <div className="css-1dbjc4n r-1mlwlqe r-uxrrfj r-1udh08x r-13qz1uu r-417010" style={{ borderRadius: "8px" }}>
                                                <div
                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                    style={{ backgroundImage: `url(${shareLinkBtn})` }}

                                                ></div>
                                                <img alt="" draggable="false" src={shareLinkBtn} className="css-9pa8cd" />
                                            </div>
                                        </div>
                                    </div> 
                                  
                                </div>
                                <div className="css-1dbjc4n r-14lw9ot r-s9qnr1">
                                    <div dir="auto" className="css-901oao r-5zpi7z r-1x35g6 r-b88u0q r-q4m81j r-13qz1uu">Share Picture</div>
                                    <div className="css-1dbjc4n r-18u37iz r-1w6e6rj r-a2tzq0">
                                        <div className="css-1dbjc4n r-1awozwy r-1wtj0ep r-7e3msg">
                                            <div className="css-1dbjc4n r-1dzdj1l r-1mlwlqe r-1wzrnnt r-1udh08x r-tr7qqk r-417010" style={{height: "392px"}}>
                                                <div
                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                    style={{backgroundImage: `url(${shareImg5})` }}                                               ></div>
                                                <img alt="" draggable="false" src={shareImg5} className="css-9pa8cd" />
                                            </div>
                                            <div
                                                data-focusable="true"
                                                tabIndex="0"
                                                className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                                style={{backgroundColor: "rgb(157, 160, 165)", marginTop: "38px", transitionDuration: "0s", width: "194px"}}
                                           onClick={()=>onButtonClick(shareImg5)}
                                         >
                                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Save Picture</div>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-1wtj0ep r-7e3msg">
                                            <div className="css-1dbjc4n r-1dzdj1l r-1mlwlqe r-1wzrnnt r-1udh08x r-tr7qqk r-417010" style={{height: "392px"}}>
                                                <div
                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                    style={{backgroundImage: `url(${shareImg6})`  }}                                              ></div>
                                                <img alt="" draggable="false" src={shareImg6} className="css-9pa8cd" />
                                            </div>
                                            <div
                                                data-focusable="true"
                                                tabIndex="0"
                                                className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                                style={{backgroundColor: "rgb(157, 160, 165)", marginTop: "38px", transitionDuration: "0s", width: "194px"}}
                                                onClick={()=>onButtonClick(shareImg6)}
>
                                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Save Picture</div>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-1wtj0ep r-7e3msg">
                                            <div className="css-1dbjc4n r-1dzdj1l r-1mlwlqe r-1wzrnnt r-1udh08x r-tr7qqk r-417010" style={{height: "392px"}}>
                                                <div
                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                    style={{backgroundImage: `url(${shareImg7})`  }}                                              ></div>
                                                <img alt="" draggable="false" src={shareImg7} className="css-9pa8cd" />
                                            </div>
                                            <div
                                                data-focusable="true"
                                                tabIndex="0"
                                                className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                                style={{backgroundColor: "rgb(157, 160, 165)", marginTop: "38px", transitionDuration: "0s", width: "194px"}}
                                                onClick={()=>onButtonClick(shareImg7)}
                                           >
                                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Save Picture</div>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-1wtj0ep r-7e3msg">
                                            <div className="css-1dbjc4n r-1dzdj1l r-1mlwlqe r-1wzrnnt r-1udh08x r-tr7qqk r-417010" style={{height: "392px"}}>
                                                <div
                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                    style={{backgroundImage: `url(${shareImg8})` }}                                              
                                                     ></div>
                                                <img alt="" draggable="false" src={shareImg8} className="css-9pa8cd" />
                                            </div>
                                            <div
                                                data-focusable="true"
                                                tabIndex="0"
                                                className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                                style={{backgroundColor: "rgb(157, 160, 165)", marginTop: "38px", transitionDuration: "0s", width:" 194px"}}
                                                onClick={()=>onButtonClick(shareImg8)}
                                           >
                                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Save Picture</div>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-1wtj0ep r-7e3msg">
                                            <div className="css-1dbjc4n r-1dzdj1l r-1mlwlqe r-1wzrnnt r-1udh08x r-tr7qqk r-417010" style={{height: "392px"}}>
                                                <div
                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                    style={{backgroundImage: `url(${shareImg1})`}}
                                                ></div>
                                                <img alt="" draggable="false" src={shareImg1} className="css-9pa8cd" />
                                            </div>
                                            <div
                                                data-focusable="true"
                                                tabIndex="0"
                                                className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                                style={{backgroundColor: "rgb(157, 160, 165)", marginTop: "38px", transitionDuration: "0s", width: "194px"}}
                                                onClick={()=>onButtonClick(shareImg1)}
                                            >
                                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Save Picture</div>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-1wtj0ep r-7e3msg">
                                            <div className="css-1dbjc4n r-1dzdj1l r-1mlwlqe r-1wzrnnt r-1udh08x r-tr7qqk r-417010" style={{height: "392px"}}>
                                                <div
                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                    style={{backgroundImage: `url(${shareImg2})`}}
                                                ></div>
                                                <img alt="" draggable="false" src={shareImg2} className="css-9pa8cd" />
                                            </div>
                                            <div
                                                data-focusable="true"
                                                tabIndex="0"
                                                className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                                style={{backgroundColor: "rgb(157, 160, 165)", marginTop: "38px", transitionDuration: "0s", width: "194px"}}
                                                onClick={()=>onButtonClick(shareImg2)}
                                           
                                           >
                                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Save Picture</div>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-1wtj0ep r-7e3msg">
                                            <div className="css-1dbjc4n r-1dzdj1l r-1mlwlqe r-1wzrnnt r-1udh08x r-tr7qqk r-417010" style={{height: "450px"}}>
                                                <div
                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                    style={{backgroundImage: `url(${shareImg3})`}}
                                                ></div>
                                                <img alt="" draggable="false" src={shareImg3} className="css-9pa8cd" />
                                            </div>
                                            <div
                                                data-focusable="true"
                                                tabIndex="0"
                                                className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                                style={{backgroundColor: "rgb(157, 160, 165)", marginTop: "38px", transitionDuration: "0s", width: "194px"}}
                                                onClick={()=>onButtonClick(shareImg3)}
                                           
                                           >
                                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Save Picture</div>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-1wtj0ep r-7e3msg">
                                            <div className="css-1dbjc4n r-1dzdj1l r-1mlwlqe r-1wzrnnt r-1udh08x r-tr7qqk r-417010" style={{height: "392px"}}>
                                                <div
                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                    style={{backgroundImage: `url(${shareImg4})`}}
                                                ></div>
                                                <img alt="" draggable="false" src={shareImg4} className="css-9pa8cd" />
                                            </div>
                                            <div
                                                data-focusable="true"
                                                tabIndex="0"
                                                className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                                style={{backgroundColor: "rgb(157, 160, 165)", marginTop: "38px", transitionDuration: "0s", width: "194px"}}
                                                onClick={()=>onButtonClick(shareImg4)}

>
                                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Save Picture</div>
                                            </div>
                                        </div>
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

// redux connect
const mapStateToProps = (state) => ({
    res: state.invitelink,
});

export default connect(mapStateToProps)(MyLink);