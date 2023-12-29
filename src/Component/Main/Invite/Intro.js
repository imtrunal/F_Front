import React, { useEffect } from 'react'
import regTop from "../../../images/regTop.png"
import regMiddle2 from "../../../images/regMiddle2.png"
import regGuideBtn from "../../../images/regGuideBtn.png"
import { useNavigate, useParams } from 'react-router-dom'

const Intro= ({ dispatch, res, res1 }) => {
    const params =useParams() 
    const navigate = useNavigate()
    return (
        <>
           <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
    <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
        <div className="css-1dbjc4n">
            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{height: "376px"}}>
                <div
                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                    style={{backgroundImage:` url(${regTop})`}}
                ></div>
                <img alt="" draggable="false" src={regTop} className="css-9pa8cd" />
            </div>
            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{height: "644px"}}>
                <div
                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                    style={{backgroundImage: `url(${regMiddle2})`}}
                ></div>
                <img alt="" draggable="false" src={regMiddle2} className="css-9pa8cd" />
            </div>
            <div className="css-1dbjc4n r-13qz1uu" style={{alignItems: "center", backgroundColor: "rgb(31, 24, 143)", height: "114px", justifyContent: "center"}}>
                <div className="css-1dbjc4n r-1d2f490 r-13qz1uu" style={{alignItems: "center", bottom: "24px", position: "fixed"}}>
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{transitionDuration: "0s"}}>
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" onClick={()=>navigate(`/L/${params.id}`)} style={{borderRadius: "10px", height: "72px", width: "462px"}}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{backgroundImage: `url(${regGuideBtn})`}}
                            ></div>
                            <img alt="" draggable="false" src={regGuideBtn} className="css-9pa8cd" />
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




export default Intro