import React from 'react'
import tabHome from ".././images/tab-home.png"
import tabHomes from ".././images/tab-home-s.png"
import tabMine from ".././images/tab-mine.png"
import tabMines from ".././images/tab-mine-s.png"
import tabRecharge from ".././images/tab-recharge.png"
import tabRecharges from ".././images/tab-recharge-s.png"
import tabShare from ".././images/tab-share.png"
import tabShares from ".././images/tab-share-s.png"
import { NavLink } from 'react-router-dom'

const Footer = (props) => {

    return (
        <>
            <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-2puf4e r-5kkj8d r-1p0dtai r-18u37iz r-wy61xf r-1wtj0ep r-1wyvozj r-1udh08x r-1xcajam r-70iriu r-lrx3fh r-wc24c3">
                <NavLink to="/tabIndex/0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-13awgt0 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0.25s", textDecoration: "none" }}>
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-13awgt0 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0.25s" }}>
                        {props.status && props.status == "0"
                            ?
                            <>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "32px", width: "42px" }}>

                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${tabHomes})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={`${tabHomes}`} className="css-9pa8cd" />
                                </div>
                                <div dir="auto" className="css-901oao r-1jrmi80" >FieWin</div>

                            </>
                            :
                            <>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "32px", width: "42px" }}>

                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${tabHome})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={`${tabHome}`} className="css-9pa8cd" />
                                </div>
                                <div dir="auto" className="css-901oao r-rs3z27" >FieWin</div>

                            </>
                        }
                    </div>
                </NavLink>
                <NavLink to="/tabIndex/1" className="css-1dbjc4n r-1awozwy r-1loqt21 r-13awgt0 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0.25s", textDecoration: "none" }}>
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-13awgt0 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0.25s" }}>
                        {props.status && props.status == "1" ?
                            <>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "32px", width: "42px" }}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${tabShares})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={`${tabShares}`} className="css-9pa8cd" />
                                </div>
                                <div dir="auto" className="css-901oao r-1jrmi80">Invite</div>

                            </> :
                            <>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "32px", width: "42px" }}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${tabShare})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={`${tabShare}`} className="css-9pa8cd" />
                                </div>
                                <div dir="auto" className="css-901oao r-rs3z27">Invite</div>
                            </>}


                    </div>
                </NavLink>
                <NavLink to="/tabIndex/2" className="css-1dbjc4n r-1awozwy r-1loqt21 r-13awgt0 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0.25s", textDecoration: "none" }}>

                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-13awgt0 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0.25s" }}>
                        {props.status && props.status == "2" ?
                            <>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "32px", width: "42px" }}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${tabRecharges})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={`${tabRecharges}`} className="css-9pa8cd" />
                                </div>
                                <div dir="auto" className="css-901oao r-1jrmi80">Recharge</div>

                            </>
                            : <>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "32px", width: "42px" }}>

                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${tabRecharge})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={`${tabRecharge}`} className="css-9pa8cd" />
                                </div>
                                <div dir="auto" className="css-901oao r-rs3z27">Recharge</div>
                            </>}

                    </div>
                </NavLink>
                <NavLink to="/tabIndex/3" className="css-1dbjc4n r-1awozwy r-1loqt21 r-13awgt0 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0.25s", textDecoration: "none" }}>

                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-13awgt0 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0.25s" }}>
                        {props.status && props.status == "3" ?
                            <>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "32px", width: "42px" }}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${tabMines})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={`${tabMines}`} className="css-9pa8cd" />
                                </div>
                                <div dir="auto" className="css-901oao r-1jrmi80">My</div>

                            </>
                            : <>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "32px", width: "42px" }}>

                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${tabMine})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={`${tabMine}`} className="css-9pa8cd" />
                                </div>
                                <div dir="auto" className="css-901oao r-rs3z27">My</div>
                            </>}
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default Footer