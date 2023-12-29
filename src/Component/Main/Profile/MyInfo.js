import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import arrowLeft from "../../../images/arrowLeft.png"
import arrowRight from "../../../images/arrowRight.png"

const MyInfo = () => {
    const navigate=useNavigate()
    const  location=useLocation()
  return (
    <>
    <div className="css-1dbjc4n r-cb25cm r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
    <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-102gzdx r-1777fci r-bnwqim r-13qz1uu" style={{borderBottomColor: "rgb(241, 241, 241)", marginBottom: "14px"}}>
        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-102gzdx r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{transitionDuration: "0s"}}>
            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{height: "26px", width: "16px"}} onClick={()=>navigate(-1)}>
                <div
                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                    style={{backgroundImage: `url(${arrowLeft})`}}
                ></div>
                <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" />
            </div>
        </div>
        <div dir="auto" className="css-901oao r-b88u0q" style={{color: "rgb(0, 0, 0)", fontSize: "24px", textAlign: "center"}}>Modify Personal Information</div>
    </div>
    <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{height: "795px"}}>
        <div className="css-1dbjc4n">
            <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-10bl8iw r-qklmqi r-18u37iz r-1wtj0ep r-1idfib4">
                <div className="css-1dbjc4n r-1awozwy r-1m7mu0x r-18u37iz r-1k9zyfm r-1777fci r-1udh08x r-1ey2ra3">
                    <img src={location.state.avtar} style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-18u37iz r-eu3ka r-1otgn73 r-1i6wzkk r-lrvibr" style={{transitionDuration: "0s"}} onClick={()=>navigate("/EditMyInfo/1",{state:{state:location.state.avtar,value:location.state.userId}})}>
                    <div dir="auto" className="css-901oao r-7zxnss r-1i10wst">Change Avatar</div>
                    <div className="css-1dbjc4n r-1mlwlqe r-ltgprq r-1udh08x r-417010" style={{height: "16px", width: "10px"}}>
                        <div
                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                            style={{backgroundImage: `url(${arrowRight})`}}
                        ></div>
                        <img alt="" draggable="false" src={arrowRight} className="css-9pa8cd" />
                    </div>
                </div>
            </div>
            <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-10bl8iw r-qklmqi r-18u37iz r-1wtj0ep r-1idfib4">
                <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{location.state.nickName}</div>
                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-18u37iz r-eu3ka r-1otgn73 r-1i6wzkk r-lrvibr" style={{transitionDuration: "0s"}} onClick={()=>navigate("/EditMyInfo/2",{state:{state:location.state.nickName,value:location.state.userId}})}>
                    <div dir="auto" className="css-901oao r-7zxnss r-1i10wst">Change NickName</div>
                    <div className="css-1dbjc4n r-1mlwlqe r-ltgprq r-1udh08x r-417010" style={{height: "16px", width: "10px"}}>
                        <div
                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                            style={{backgroundImage: `url(${arrowRight})`}}
                        ></div>
                        <img alt="" draggable="false" src={arrowRight} className="css-9pa8cd" />
                    </div>
                </div>
            </div>
            <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-10bl8iw r-qklmqi r-18u37iz r-1wtj0ep r-1idfib4">
                <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{location.state.mobile_no}</div>
                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-18u37iz r-eu3ka r-1otgn73 r-1i6wzkk r-lrvibr" style={{transitionDuration: "0s"}} onClick={()=>navigate("/EditMyInfo/3",{state:{state:location.state.mobile_no,value:location.state.userId}})}>
                    <div dir="auto" className="css-901oao r-7zxnss r-1i10wst">Change Password</div>
                    <div className="css-1dbjc4n r-1mlwlqe r-ltgprq r-1udh08x r-417010" style={{height: "16px", width: "10px"}}>
                        <div
                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                            style={{backgroundImage: `url(${arrowRight})`}}
                        ></div>
                        <img alt="" draggable="false" src={arrowRight} className="css-9pa8cd" />
                    </div>
                </div>
            </div>
            <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-10bl8iw r-qklmqi r-18u37iz r-1wtj0ep r-1idfib4">
                <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">Inviter ID:{location.state.inviterId}</div>
                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-18u37iz r-eu3ka r-1otgn73 r-1i6wzkk r-lrvibr" style={{transitionDuration: "0s"}} onClick={()=>navigate("/EditMyInfo/4",{state:{state:location.state.inviterId,value:location.state.userId}})}>
                    <div dir="auto" className="css-901oao r-7zxnss r-1i10wst">add</div>
                    <div className="css-1dbjc4n r-1mlwlqe r-ltgprq r-1udh08x r-417010" style={{height: "16px", width: "10px"}}>
                        <div
                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                            style={{backgroundImage: `url(${arrowRight})`}}
                        ></div>
                        <img alt="" draggable="false" src={arrowRight} className="css-9pa8cd" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default MyInfo

