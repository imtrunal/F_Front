import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import redPacketNewUser from "../../../images/redPacketNewUser.png"
import HomeIcon from "../../../images/HomeIcon.png"
import defaultAvatar from "../../../images/defaultAvatar.png"
import Avatar01 from "../../../images/Avatar01.png"
import Logo_dw from "../../../images/Logo_dw.png"


import { InvitePeopleMobileDetails, LuckyrupeesDetails } from '../../../redux/action/FetchData';
const Luckyrupees = ({ dispatch, res, res1 }) => {
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(InvitePeopleMobileDetails(params && params.id))
    }, [dispatch])
    const handleClick = () => {
        dispatch(LuckyrupeesDetails({ number: res.data.data }))
    }
    useEffect(() => {
        if (res1.data.data && res1.data.status == false) {
            alert(res1.data.data)
        }
    }, [res1])
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-13awgt0 r-bv2aro r-hxflta r-10xqauy r-bnwqim" style={{ backgroundColor: "rgb(245, 245, 245)", paddingBottom: "80px" }}>
                        <div className="css-1dbjc4n r-1awozwy r-bnwqim r-13qz1uu" style={{ height: "506.667px" }}>
                            <div className="css-1dbjc4n r-1p0dtai r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ height: "506.667px" }}>
                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${redPacketNewUser})` }}></div><img alt="" draggable="false" src={redPacketNewUser} className="css-9pa8cd" /></div>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-1777fci r-f9274a r-u8s1d r-18kv9lu r-1otgn73 r-1i6wzkk r-lrvibr"
                                style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", width: "28px" }} onClick={() => navigate("/tabIndex/0")}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${HomeIcon})` }}></div><img alt="" draggable="false" src={HomeIcon} className="css-9pa8cd" /></div>
                            </div>
                        </div>
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-z2wwpe r-rdhp45 r-1h6pj29 r-rabhyy">
                            <div dir="auto" className="css-901oao r-1mwulpc r-a1yn9n r-duycvs r-1x35g6 r-b88u0q r-1sn7ly2 r-6moc30 r-y4ewvh r-1ehh1yr r-q4m81j r-yxfr84">New user's Lucky Rupees</div>
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-1no09lo"><img src={defaultAvatar} style={{ width: "52px", height: "52px", borderRadius: "26px", objectFit: "cover" }} />
                                <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z r-ltgprq">{res.data.data}</div>
                            </div>
                            <div data-focusable="true" tabIndex="0" onClick={handleClick} className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uvuy5l r-1777fci r-1no09lo r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s", width: "428px", backgroundColor: "rgb(0, 194, 130)" }}>
                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Get it now</div>
                            </div>
                            <div className="css-1dbjc4n" style={{ width: "428px" }}>
                                <div className="css-1dbjc4n r-1no09lo r-bnwqim"><input autoCapitalize="sentences" autoComplete="on" autoCorrect="on" dir="auto" spellCheck="true" type="text" data-focusable="true" className="css-11aywtz r-6qh97a r-ry2h4h r-kdyh1x r-rs99b7 r-5zpi7z r-adyw6z r-10xqg3i r-35ea9k r-eobysj r-8jof45"
                                    value={window.location.href} />
                                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-1pi2tsx r-1777fci r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr"
                                        style={{ backgroundColor: "rgb(0, 194, 130)", transitionDuration: "0s", width: "78px" }} onClick={() => { navigator.clipboard.writeText(window.location.href) }}>
                                        <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">copy</div>
                                    </div>
                                </div>
                                <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z r-q4m81j" style={{ marginTop: "20px" }}>Share the link to get commission from the invitee</div>
                            </div>
                        </div>
                        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q r-q4m81j" style={{ marginBottom: "34px", marginTop: "60px" }}>Received ₹59210370 / Total ₹60000000</div>
                        <div className="css-1dbjc4n r-1udh08x r-bnwqim r-13qz1uu" style={{ height: "266px" }}>
                            <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-buy8e9 r-19z077z r-1sncvnh" style={{ height: "266px" }}>
                                <div className="css-1dbjc4n">
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1sn7ly2 r-35ea9k"><img src={Avatar01} style={{ width: "34px", height: "34px", borderRadius: "18px", objectFit: "cover" }} />
                                        <div dir="auto" className="css-901oao r-adyw6z" style={{ color: "rgb(151, 151, 151)" }}>
                                            *****990 receive Lucky Rupees ₹10 <span className="css-901oao css-16my406" style={{ color: "rgb(204, 204, 204)" }}>10/05 12:12</span></div>
                                    </div>

                                </div>
                            </div>
                            <div className="css-1dbjc4n r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu"></div>
                        </div>
                        <div className="css-1dbjc4n r-1awozwy r-zz8wa8 r-1777fci r-u8s1d r-13qz1uu">
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "40px", width: "162px" }}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${Logo_dw})` }}></div><img alt="" draggable="false" src={Logo_dw} className="css-9pa8cd" /></div>
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
    res: state.invitemobile,
    res1: state.luckyrupess

});

export default connect(mapStateToProps)(Luckyrupees);