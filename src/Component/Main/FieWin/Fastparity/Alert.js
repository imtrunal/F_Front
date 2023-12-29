import React from 'react'
import winImg from "../../../../images/winImg.png"
import LoseImg from "../../../../images/LoseImg.png"

const Alert = ({ props, handle }) => {
    return (
        <>
            {props &&
                <div className="css-1dbjc4n r-1awozwy r-2tavb8 r-1p0dtai r-1ub9p5i r-1d2f490 r-1xcajam r-zchlnj r-ipm5af r-dvx3qi" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: "99" }}>
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                        <div dir="auto" className="css-901oao"></div>
                    </div>
                    <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "648px", top: "150px", width: "402px" }}>
                        <div className="css-1dbjc4n r-1pi2tsx r-ikwi4x r-oejqat r-bnwqim" style={{ padding: "28px" }}>

                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-1wyyakw" style={{ height: "550px", left: props.status == "Win" ? "-72px" : "-30px", top: "-310px", width: props.status == "Win" ? "451px" : "405px" }}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: props.status == "Win" ? `url(${winImg})` : `url(${LoseImg})` }}>
                                    </div><img alt="" draggable="false"
                                        src={props.status == "Win" ? winImg : LoseImg} className="css-9pa8cd" />
                                </div>

                            </div>
                            {/* <div className="css-1dbjc4n r-1awozwy">
                            <div className="css-1dbjc4n r-1awozwy r-1ov7twd r-4mkfoz r-12b20jn r-1777fci r-1udh08x r-bnwqim r-sx7h5">
                                <div dir="auto" className="css-901oao  r-b88u0q" style={{ fontSize: "78px" }}>3</div>
                            </div>
                        </div> */}
                            <div className="css-1dbjc4n r-1awozwy" style={{ paddingTop: "80px" }}>

                                {(props && props.color.includes("G") && props.color.includes("V") && props.color.includes("R")) ?

                                    <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                        <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                            <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                            <div className="css-1dbjc4n red r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" style={{ top: "18px", width: "45px", height: "45px" }}></div>

                                            <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{props.number}</div></div>
                                    </div>
                                    :
                                    (props.color.includes("V")) ?

                                        (props.color.includes("G")) ?

                                            <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                    <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" style={{ top: "18px", width: "45px", height: "45px" }}></div>

                                                    <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{props.number}</div></div>
                                            </div>
                                            :
                                            (props.color.includes("R")) ?

                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                    <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                        <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" style={{ top: "18px", width: "45px", height: "45px" }}></div>
                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{props.number}</div></div>
                                                </div>
                                                :

                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                    <div className="css-1dbjc4n r-1awozwy  r-y47klf violet r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{props.number}</div></div>
                                                </div>
                                        :
                                        (props.color.includes("R")) ?
                                            (props.color.includes("V")) ?

                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                    <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                        <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" style={{ top: "18px", width: "45px", height: "45px" }}></div>
                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{props.number}</div></div>
                                                </div>
                                                :
                                                (props.color.includes("G"))
                                                    ?
                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                        <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                            <div className="css-1dbjc4n  r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw red" style={{ top: "18px", width: "45px", height: "45px" }}></div>
                                                            <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{props.number}</div></div>
                                                    </div>
                                                    :

                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                        <div className="css-1dbjc4n r-1awozwy  r-y47klf red r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{props.number}</div></div>
                                                    </div>

                                            :
                                            (props.color.includes("G")) ?
                                                (props.color.includes("V"))
                                                    ?
                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                        <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                            <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" style={{ top: "18px", width: "45px", height: "45px" }}></div>
                                                            <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{props.number}</div></div>
                                                    </div>
                                                    :
                                                    (props.color.includes("R"))
                                                        ?
                                                        <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                            <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                <div className="css-1dbjc4n red r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" style={{ top: "18px", width: "45px", height: "45px" }}></div>
                                                                <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{props.number}</div></div>
                                                        </div>
                                                        :
                                                        <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                            <div className="css-1dbjc4n r-1awozwy  r-y47klf green r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0 " style={{ top: "18px", width: "45px", height: "45px" }}><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{props.number}</div></div>
                                                        </div>
                                                : <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                    <div className="css-1dbjc4n r-1awozwy  r-y47klf  r-131i89u r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0" style={{ top: "18px", width: "45px", height: "45px" }}><div dir="auto" className="css-901oao r-jwli3a r-1i10wst" style={{ color: "black" }}>{props.number}</div></div>
                                                </div>
                                }
                            </div>
                            <div style={{ paddingTop: "106px" }}>
                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-156q2ks">
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">Period</div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{props.data.period}</div>
                                </div>
                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-156q2ks">
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">Price</div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">₹{props.total}</div>
                                </div>
                                <div className="css-1dbjc4n r-1nt8t1s r-ji1w04 r-kdyh1x r-rs99b7 r-1h1bdhe r-1slz7xr">
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-156q2ks">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">Select</div>
                                        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{props.data.select_number == "G" ? "GREEN" : props.data.select_number == "R" ? "RED" : props.data.select_number == "V" ? "VIOLET" : props.data.select_number}</div>
                                    </div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-156q2ks">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">Point</div>
                                        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{props.data.point}</div>
                                    </div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-156q2ks">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">Amount</div>
                                        <div dir="auto" className="css-901oao r-ctfjnt r-uho16t r-b88u0q">{props.status == "Win" ? "+" : "-"}₹{(props.data.point - ((props.data.point) * 0.20 / 10)) * (props.data.select_number == "G" ? 2 : props.data.select_number == "R" ? 2 : props.data.select_number == "V" ? 4.5 : 9) - (props.data.point - ((props.data.point) * 0.20 / 10))}</div>
                                    </div>
                                </div>
                                <div data-focusable="true" tabIndex="0"
                                    className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-knv0ih r-1udh08x r-smlesm r-1otgn73 r-1i6wzkk r-lrvibr"
                                    style={{ transitionDuration: "0s" }}>
                                    <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={() => handle(false)}>OK</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Alert