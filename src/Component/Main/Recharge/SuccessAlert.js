import React from 'react'

const SuccessAlert = ({okStatus,point}) => {
    const handleOk = () => {
        okStatus(true)
    }
    return (
        <div className="css-1dbjc4n r-1awozwy r-1p0dtai r-lzq93c r-1d2f490 r-1xcajam r-zchlnj r-ipm5af" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: "99" }}>
            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                <div dir="auto" className="css-901oao"></div>
            </div>
            <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ top: "202px", width: "402px" }}>
                <div className="css-1dbjc4n r-a2tzq0 r-bnwqim" style={{ padding: "28px" }}>
                    <div className="css-1dbjc4n">
                        {/* <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-1wyyakw" style={{ height: "550px", left: "-68px", top: "-214px", width: "502px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: status == "win" && `url(${boomBgImgNew})` }}
                            ></div>
                            <img alt="" draggable="false" src={status == "win" && boomBgImgNew} className="css-9pa8cd" />
                        </div> */}

                    </div>
                    <div className="css-1dbjc4n r-1awozwy">

                      Your  {point} recharge has Arrived<br/>
                      <b>Good Luck!</b>

                    </div >

                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                        style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 5px", marginTop: "20px", transitionDuration: "0s" }}
                    >
                        <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={handleOk}>OK</div>
                    </div>
                </div >
            </div >
        </div >

    )
}

export default SuccessAlert