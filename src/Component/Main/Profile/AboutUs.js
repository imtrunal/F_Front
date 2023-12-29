import React from 'react'
import { useNavigate } from 'react-router-dom'
import backWhite from "../../../images/backWhite.png"

const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <section className="">
      <div className="container1">
        <div className="hhfhf">
          <div data-focusable="true" tabIndex="0" onClick={() => navigate(-1)} className="css-1dbjc4n r-1awozwy r-1loqt21 r-sga3zk r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-18tzken r-mhe3cw" style={{ transitionDuration: "0s", zIndex: "1" }}>
            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "32px", width: "16px", marginLeft: "26px" }}>
              <div
                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                style={{ backgroundImage: `url(${backWhite})` }}
              ></div>
              <img alt="" draggable="false" src={backWhite} className="css-9pa8cd" />
            </div>
          </div>
        </div>
        <div className="hottest"></div>
        <div>
          <div className="trustwrothy"></div>
        </div>
        <div>
          <div className="topservice"></div>
        </div>
        <div>
          <div className="makemoney"></div>
        </div>
        <div>
          <div className="agency"></div>
        </div>
        <div>
          <div className="global"></div>
        </div>

        <div>
          <div className="financialmen">
            {/* <button> */}
            <div className="contact">
              Contact us if you have any questions
            </div>
            <div className="support"> support@fiewin.in </div>
            {/* </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs