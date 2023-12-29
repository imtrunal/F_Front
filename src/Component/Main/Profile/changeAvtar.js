import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import arrowLeft from "../../../images/arrowLeft.png"
const ChangeAvtar = (props) => {
    const navigate = useNavigate()
    const handleChange = (e) => {
        const state = { value: e.target.files[0], type: "avtar",name:"file" }
        props.onChange(state)
    }

const handleSubmit=(e)=>{
   props.onSubmit(true)
}
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-cb25cm r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-102gzdx r-1777fci r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)", marginBottom: "14px" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-102gzdx r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }} onClick={() => navigate(-1)}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "26px", width: "16px" }}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${arrowLeft})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" />
                                </div>
                            </div>
                            <div dir="auto" className="css-901oao r-1x35g6 r-b88u0q" style={{ color: "rgb(0, 0, 0)", textAlign: "center" }}>Change Avatar</div>
                        </div>
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{ height: "795px" }}>
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-1pi2tsx">
                                    <div className="css-1dbjc4n r-1awozwy r-ieixw r-dcqb1h r-1777fci r-1udh08x r-13qz1uu">
                                        <img src={props.state} style={{ width: "134px", height: "134px", objectFit: "cover" }} />
                                        <input type="file" accept="image/*" style={{ width: "100%", height: "100%", position: "absolute", left: "0px", top: "0px", opacity: "0" }} onChange={handleChange} />
                                    </div>
                                    <div
                                        data-focusable="true"
                                        tabIndex="0"
                                        className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                        style={{ margin: "28px", transitionDuration: "0s" }}
                                    >
                                        <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={handleSubmit}>Update Avatar</div>
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

export default ChangeAvtar