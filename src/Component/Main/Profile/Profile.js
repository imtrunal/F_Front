import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Theme from '../../../common/Theme'
import { connect } from 'react-redux'
import { MyProfileDetails } from '../../../redux/action/FetchData'
import arrowRight from "../../../images/arrowRight.png"
import orderIconNew from "../../../images/orderIconNew.png"
import detailIconNew from "../../../images/detailIconNew.png"
import introductionIconNew from "../../../images/introductionIconNew.png"
import mailIconNew from "../../../images/mailIconNew.png"
import shareIconNew from "../../../images/shareIconNew.png"
import followGift from "../../../images/followGift.png"
import appDownloadNew from "../../../images/appDownloadNew.png"

const Profile = ({ dispatch, res }) => {
  const navigate = useNavigate()

useEffect(()=>{
dispatch(MyProfileDetails())
},[dispatch])
  const handleSignOut = () => {
    sessionStorage.removeItem("login_status")
    sessionStorage.removeItem("login")

    navigate("/login")
  }
  return (
    <Theme status="3" className="ItemCenter">
      <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-1iihdsi r-lrx3fh r-qklmqi r-18u37iz r-uxrrfj r-1777fci r-1g40b8q ItemCenter " ><div dir="auto" className="css-901oao r-zz5t5d r-b88u0q" style={{ color: "rgb(0, 0, 0)" }}>My</div></div>
      <div className="ItemCenter css-1dbjc4n r-1awozwy r-1iihdsi r-18u37iz r-12b20jn r-1wtj0ep  r-lrx3fh r-qklmqis r-uxrrfj r-1777fci r-1udh08x  r-1g40b8q" style={{height:"auto"}}>
        <div className="css-1dbjc4n r-cb25cm r-1pi2tsx r-1dqxon3 r-bnwqim r-13qz1uu">
          <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-18u37iz r-1euja1d r-1idfib4 r-1peese0">
            <div className="css-1dbjc4n r-1awozwy r-dta0w2 r-18u37iz r-1777fci">
              <img src={res.data.data && res.data.data[0].avtar} style={{ width: "68px", height: "68px", borderRadius: "34px", objectFit: "cover" }} />
            </div>
            <div className="css-1dbjc4n r-kgf08f r-ltgprq">
              <div className="css-1dbjc4n r-1awozwy r-18u37iz"><div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q r-vrmyzg">ID:{res.data.data && res.data.data[0].userId}</div></div>
              <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-knv0ih">Phone:{res.data.data && res.data.data[0].mobile_no}</div>
              <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-knv0ih">NickName:{res.data.data && res.data.data[0].nickName}</div>
            </div>
            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-lgvlli r-18u37iz r-1ugchlj r-17s6mgv r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: " 0s" }} onClick={() => navigate("/MyInfo", { state: res.data &&res.data.data[0] })}>
              <div dir="auto" className="css-901oao r-1i10wst" style={{ color: "rgb(168, 168, 168)", marginRight: "14px" }}>Modify</div>
              <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "18px", width: "10px" }}>
                <div
                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                  style={{ backgroundImage: `url(${arrowRight})` }}
                ></div>
                <img alt="" draggable="false" src={arrowRight} className="css-9pa8cd" />
              </div>
            </div>
          </div>
          <div data-focusable="true" tabIndex="0" onClick={() => navigate("/OrderRecord")} className="css-1dbjc4n r-1awozwy r-14lw9ot r-10bl8iw r-qklmqi r-1loqt21 r-18u37iz r-1ph75f1 r-1wtj0ep r-1idfib4 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: " 0s" }}>
            <div className="css-1dbjc4n r-1awozwy r-18u37iz">
              <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-199wky7 r-417010" style={{ height: "30px" }}>
                <div
                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                  style={{ backgroundImage: `url(${orderIconNew})` }}
                ></div>
                <img alt="" draggable="false" src={orderIconNew} className="css-9pa8cd" />
              </div>
              <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-ltgprq">Order Record</div>
            </div>
            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "18px", width: "10px" }}>
              <div
                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                style={{ backgroundImage: `url(${arrowRight})` }}
              ></div>
              <img alt="" draggable="false" src={arrowRight} className="css-9pa8cd" />
            </div>
          </div>
          <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-10bl8iw r-qklmqi r-1loqt21 r-18u37iz r-1ph75f1 r-1wtj0ep r-1idfib4 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: " 0s" }}>
            <div className="css-1dbjc4n r-1awozwy r-18u37iz" onClick={() => navigate("/Financial")}>
              <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-199wky7 r-417010" style={{ height: "30px" }}>
                <div
                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                  style={{ backgroundImage: `url(${detailIconNew})` }}
                ></div>
                <img alt="" draggable="false" src={detailIconNew} className="css-9pa8cd" />
              </div>
              <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-ltgprq">Financial Details</div>
            </div>
            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "18px", width: "10px" }}>
              <div
                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                style={{ backgroundImage: `url(${arrowRight})` }}
              ></div>
              <img alt="" draggable="false" src={arrowRight} className="css-9pa8cd" />
            </div>
          </div>
          <div className="css-1dbjc4n" style={{ height: "22px" }}></div>
          <div data-focusable="true" tabIndex="0" onClick={() => navigate("/aboutus")} className="css-1dbjc4n r-1awozwy r-14lw9ot r-10bl8iw r-qklmqi r-1loqt21 r-18u37iz r-1ph75f1 r-1wtj0ep r-1idfib4 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: " 0s" }}>
            <div className="css-1dbjc4n r-1awozwy r-18u37iz" >
              <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-199wky7 r-417010" style={{ height: "30px" }}>
                <div
                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                  style={{ backgroundImage: `url(${introductionIconNew})` }}
                ></div>
                <img alt="" draggable="false" src={introductionIconNew} className="css-9pa8cd" />
              </div>
              <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-ltgprq">About us</div>
            </div>
            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "18px", width: "10px" }}>
              <div
                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                style={{ backgroundImage: `url(${arrowRight})` }}
              ></div>
              <img alt="" draggable="false" src={arrowRight} className="css-9pa8cd" />
            </div>
          </div>
          <div data-focusable="true" tabIndex="0" onClick={()=>window.location.href="https://www.google.com/"} className="css-1dbjc4n r-1awozwy r-14lw9ot r-10bl8iw r-qklmqi r-1loqt21 r-18u37iz r-1ph75f1 r-1wtj0ep r-1idfib4 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: " 0s" }}>
            <div className="css-1dbjc4n r-1awozwy r-18u37iz">
              <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-199wky7 r-417010" style={{ height: "30px" }} >
                <div
                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                  style={{ backgroundImage: `url(${mailIconNew})` }}
                ></div>
                <img alt="" draggable="false" src={mailIconNew} className="css-9pa8cd" />
              </div>
              <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-ltgprq">Support</div>
            </div>
            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "18px", width: "10px" }}>
              <div
                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                style={{ backgroundImage: `url(${arrowRight})` }}
              ></div>
              <img alt="" draggable="false" src={arrowRight} className="css-9pa8cd" />
            </div>
          </div>
          <div data-focusable="true" tabIndex="0"  onClick={()=>window.location.href="https://www.telegram.org/"} className="css-1dbjc4n r-1awozwy r-14lw9ot r-10bl8iw r-qklmqi r-1loqt21 r-18u37iz r-1ph75f1 r-1wtj0ep r-1idfib4 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: " 0s" }}>
            <div className="css-1dbjc4n r-1awozwy r-18u37iz">
              <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-199wky7 r-417010" style={{ height: "30px" }}>
                <div
                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                  style={{ backgroundImage: `url(${shareIconNew})` }}
                ></div>
                <img alt="" draggable="false" src={shareIconNew} className="css-9pa8cd" />
              </div>
              <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-ltgprq">Follow us</div>
            </div>
            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-yee3n4 r-417010" style={{ height: "42px", right: "48px" }}>
              <div
                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                style={{ backgroundImage: `url(${followGift})` }}
              ></div>
              <img alt="" draggable="false" src={followGift} className="css-9pa8cd" />
            </div>
            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "18px", width: "10px" }}>
              <div
                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                style={{ backgroundImage: `url(${arrowRight})` }}
              ></div>
              <img alt="" draggable="false" src={arrowRight} className="css-9pa8cd" />
            </div>
          </div>
          <div className="css-1dbjc4n" style={{ height: "22px" }}></div>
          <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-10bl8iw r-qklmqi r-1loqt21 r-18u37iz r-1ph75f1 r-1wtj0ep r-1idfib4 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: " 0s" }}>
            <div className="css-1dbjc4n r-1awozwy r-18u37iz">
              <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-199wky7 r-417010" style={{ height: "30px" }}>
                <div
                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                  style={{ backgroundImage: `url(${appDownloadNew})` }}
                ></div>
                <img alt="" draggable="false" src={appDownloadNew} className="css-9pa8cd" />
              </div>
              <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-ltgprq">Download App</div>
            </div>
          </div>
          <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-1k9zyfm r-1777fci r-1wzrnnt r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" style={{ transitionDuration: " 0s" }} onClick={handleSignOut}>
            <div dir="auto" className="css-901oao r-rs3z27 r-evnaw" style={{ marginBottom: "54px", marginTop: "28px" }}>Sign Out</div>
          </div>
        </div>
      </div>


    </Theme>
  )
}

// redux connect
const mapStateToProps = (state) => ({
  res: state.myProfile,
});

export default connect(mapStateToProps)(Profile);