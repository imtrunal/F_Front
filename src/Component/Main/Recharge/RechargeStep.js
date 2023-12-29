import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import arrowLeft from "../../../images/arrowLeft.png"
const RechargeStep = () => {
    const query = useParams()
    const navigate = useNavigate()
    const location =useLocation()
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
                            {query.id == 2 && <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(0, 0, 0)", fontSize: "26px", textAlign: "center" }}>Learn to Recharge</div>}
                        </div>
                        {query.id ==2 &&
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-1sbahrg">
                            <div data-focusable="true" tabIndex="0"  onClick={()=>navigate("/LearnCharge/1",{state:{id:location.state && location.state.id}})} className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu" style={{transitionDuration: "0s"}}>
                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" >Answer the questions</div>
                            </div>
                        </div>
}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RechargeStep