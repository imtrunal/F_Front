import React, { useState,useEffect } from 'react'
import agentFb from "../../../../images/agentFb.png";
import agentIns from "../../../../images/agentIns.png";
import agentTm from "../../../../images/agentTm.png";
import agentTwitter from "../../../../images/agentTwitter.png";
import agentApp from "../../../../images/agentApp.png";
import swal from "sweetalert";
import { connect } from "react-redux"
import Swal from "sweetalert2"
import { InviteLinkDetails } from '../../../../redux/action/FetchData';
const Leval1 = ({ status,setFinal,dispatch,res }) => {
    useEffect(() => {
        dispatch(InviteLinkDetails())
    }, [dispatch])
    const handleSwal = () => {
        swal({
            text: "Please complete task first",
            timer: 1400,
        });
    }

    const handleClick = () => {
        setFinal(true)
        
        
    }
    const messgeprint = (value) => {
        navigator.clipboard.writeText( res.data.data && window.location.origin+"/" + value +"/" +  res.data.data[0].invite_link)
        swal({
            text: "Copy successfully",
            timer: 1400,
        });
    };

    return (
        <>
    
            <div className="css-1dbjc4n r-14lw9ot r-kdyh1x r-1s2bzr4 r-1ehh1yr r-12v598i">
                <div dir="auto" className="css-901oao r-1i88nnc r-yy2aun r-b88u0q">Reward conditions:</div>
                <div dir="auto" className="css-901oao r-1i88nnc r-evnaw r-tw8zf3 r-l71dzp">Invite 1 person to register to receive and withdraw cash.</div>
                <div dir="auto" className="css-901oao r-1i88nnc r-yy2aun r-b88u0q">Upgrade skills:</div>
                <div dir="auto" className="css-901oao r-1i88nnc r-evnaw r-tw8zf3 r-l71dzp">you share the link and someone registers through the link, that person can become my subordinate and I can get ₹1 immediately.</div>
                <div className="css-1dbjc4n">
                    <div dir="auto" className="css-901oao r-1i88nnc r-yy2aun r-b88u0q">Lucky Rupee promotional content and links</div>
                    <div className="css-1dbjc4n r-18u37iz r-1wtj0ep r-tw8zf3 r-l71dzp r-13qz1uu" >
                        <div className="css-1dbjc4n r-6qh97a r-ry2h4h r-kdyh1x r-rs99b7 r-1slz7xr r-ibj2aa" style={{width:"80%"}}>
                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">Register to receive ₹10.Multiple ways to make money.</div>
                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{window.location.origin}/LR/{res.data.data && res.data.data[0].invite_link}</div>
                        </div>
                        <div
                            data-focusable="true"
                            tabIndex="0"
                            className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ backgroundColor: "rgb(242, 123, 34)", transitionDuration: "0s", width: "68px",height:"50%" }}
                            onClick={()=>{messgeprint("LR")}}

                        >
                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" style={{margin:"30%"}}>copy</div>
                        </div>
                    </div>
                </div>
                <div className="css-1dbjc4n">
                    <div dir="auto" className="css-901oao r-1i88nnc r-yy2aun r-b88u0q">Platform introduction promotion content and links</div>
                    <div className="css-1dbjc4n r-18u37iz r-1wtj0ep r-tw8zf3 r-l71dzp r-13qz1uu" >
                        <div className="css-1dbjc4n r-6qh97a r-ry2h4h r-kdyh1x r-rs99b7 r-1slz7xr r-ibj2aa" style={{width:"80%"}}>
                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">Daily Check in rewards ₹10~₹1000. Task rewards ₹1135. HOT GAME - Party. Up to 90% winning rate - Dice. Register to receive ₹10.</div>
                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{window.location.origin}/RG/{res.data.data && res.data.data[0].invite_link}</div>
                        </div>
                        <div
                            data-focusable="true"
                            tabIndex="0"
                            className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ backgroundColor: "rgb(242, 123, 34)", transitionDuration: "0s", width: "68px",height:"50%" }}
                            onClick={()=>{messgeprint("RG")}}
                        >
                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" style={{margin:"30%"}}>copy</div>
                        </div>
                    </div>
                </div>
                <div dir="auto" className="css-901oao r-1i88nnc r-yy2aun r-b88u0q">You can share them in:</div>
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1444osr">
                    <div className="css-1dbjc4n" style={{ height: "52px", marginRight: "14px", width: "52px" }}>
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "52px", width: "52px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: `url(${agentFb})` }}
                            ></div>
                            <img alt="" draggable="false" src={agentFb} className="css-9pa8cd" />
                        </div>
                    </div>
                    <div className="css-1dbjc4n" style={{ height: "52px", marginRight: "14px", width: "52px" }}>
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "52px", width: "52px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: `url(${agentApp})` }}
                            ></div>
                            <img alt="" draggable="false" src={agentApp} className="css-9pa8cd" />
                        </div>
                    </div>
                    <div className="css-1dbjc4n" style={{ height: "52px", marginRight: "14px", width: "52px" }}>
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "52px", width: "52px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: `url(${agentTwitter})` }}
                            ></div>
                            <img alt="" draggable="false" src={agentTwitter} className="css-9pa8cd" />
                        </div>
                    </div>
                    <div className="css-1dbjc4n" style={{ height: "52px", marginRight: "14px", width: "52px" }}>
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "52px", width: "52px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: `url(${agentIns})` }}
                            ></div>
                            <img alt="" draggable="false" src={agentIns} className="css-9pa8cd" />
                        </div>
                    </div>
                    <div className="css-1dbjc4n" style={{ height: "52px", marginRight: "14px", width: "52px" }}>
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "52px", width: "52px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgrounIimage: `url(${agentTm})` }}
                            ></div>
                            <img alt="" draggable="false" src={agentTm} className="css-9pa8cd" />
                        </div>
                    </div>
                </div>
                {status == "0" ?
                    <>
                        <div
                            data-focusable="true"
                            tabIndex="0"
                            className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-1b6hpt1 r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ backgroundColor: "rgb(242, 123, 34)", transitionDuration: " 0s" ,padding:"4%",margin:"4%"}}
                            onClick={handleSwal}
                        >
                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Receive award</div>
                        </div>
                    </> :
                    status == "1" ?
                        <>
                            <div
                                data-focusable="true"
                                tabIndex="0"
                                className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-1b6hpt1 r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                style={{ backgroundColor: "rgb(242, 123, 34)", transitionDuration: " 0s" ,padding:"4%",margin:"4%"}}
                                onClick={handleClick}
                            >
                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Receive award</div>
                            </div>
                        </> :
                        <>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-1dzdj1l r-rs99b7 r-ux0bpq r-1loqt21 r-18u37iz r-tumt6t r-1777fci r-1b6hpt1 r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ borderColor: "rgb(242, 123, 34)", transitionDuration: "0s",padding:"4%",margin:"4%" }}>
                                <div dir="auto" className="css-901oao r-evnaw r-b88u0q" style={{ color: "rgb(242, 123, 34)" }}>Received</div></div>
                        </>
                }


            </div>
        </>
    )
}

// redux connect
const mapStateToProps = (state) => ({
    res: state.invitelink,
});

export default connect(mapStateToProps)(Leval1);