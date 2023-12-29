import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import arrowLeft from  "../../../../images/arrowLeft.png"
import { MoreParityDetails } from '../../../../redux/action/FetchData'
const MoreParity = ({ dispatch, res }) => {
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(MoreParityDetails())
    }, [dispatch])
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-cb25cm r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-sga3zk r-1777fci r-1ifxtd0 r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)" }}>
                            <div data-focusable="true" tabIndex="0" onClick={() => navigate(-1)} className="css-1dbjc4n r-1awozwy r-1bo11z6 r-1loqt21 r-sga3zk r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "32px", width: "16px" }}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${arrowLeft})` }}></div>
                                    <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" /></div>
                            </div>
                            <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(0, 0, 0)", fontSize: "26px", textAlign: "center" }}>FastParity Record</div>
                        </div>
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{ height: "973px" }}>
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-14lw9ot r-13awgt0 r-gp5rm0">
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-sga3zk r-qi0n3 r-c9eks5">
                                        <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "3 1 0%" }}>Period</div>
                                        <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "3 1 0%", textAlign: "right" }}>Price</div>
                                        <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "2 1 0%", textAlign: "center" }}>Result</div>
                                        <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "3 1 0%", textAlign: "right" }}>OpenTime</div>
                                    </div>
                                    <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-1ifxtd0 r-11yh6sk r-1rnoaur r-1sncvnh" style={{ height: "957px" }}>
                                        <div className="css-1dbjc4n">
                                            <div className="css-1dbjc4n">
                                                {res.data.data && res.data.data.slice(0).reverse().map((data) => {
                                                    return (
                                                        <>
                                                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-sga3zk r-qi0n3 r-c9eks5">
                                                                <div dir="auto" className="css-901oao r-5zpi7z r-evnaw" style={{ flex: "3 1 0%" }}>{data.period}</div>
                                                                <div dir="auto" className="css-901oao r-5zpi7z r-evnaw" style={{ flex: "3 1 0%", textAlign: "right" }}>{data.currency}{data.price ? data.price : "0.00"}</div>
                                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci" style={{ flex: "2 1 0%" }}>
                                                                    {/* <div className="css-1dbjc4n r-1awozwy r-1o2fd9h r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                            <div dir="auto" className="css-901oao r-jwli3a r-1i10wst">8</div>
                                                        </div> */}
                                                                    {(data.winNumber.color.includes("G") && data.winNumber.color.includes("V") && data.winNumber.color.includes("R")) ?

                                                                        <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                                            <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                                <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                                                                <div className="css-1dbjc4n red r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" ></div>

                                                                                <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.winNumber.number}</div></div>
                                                                        </div>
                                                                        :
                                                                        (data.winNumber.color.includes("V")) ?

                                                                            (data.winNumber.color.includes("G")) ?

                                                                                <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                                                    <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                                        <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" ></div>

                                                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.winNumber.number}</div></div>
                                                                                </div>
                                                                                :
                                                                                (data.winNumber.color.includes("R")) ?

                                                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                                                        <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                                            <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" ></div>
                                                                                            <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.winNumber.number}</div></div>
                                                                                    </div>
                                                                                    :

                                                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                                                        <div className="css-1dbjc4n r-1awozwy  r-y47klf violet r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{data.winNumber.number}</div></div>
                                                                                    </div>
                                                                            :
                                                                            (data.winNumber.color.includes("R")) ?
                                                                                (data.winNumber.color.includes("V")) ?

                                                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                                                        <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                                            <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" ></div>
                                                                                            <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.winNumber.number}</div></div>
                                                                                    </div>
                                                                                    :
                                                                                    (data.winNumber.color.includes("G"))
                                                                                        ?
                                                                                        <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                                                            <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                                                <div className="css-1dbjc4n  r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw red" ></div>
                                                                                                <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.winNumber.number}</div></div>
                                                                                        </div>
                                                                                        :

                                                                                        <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                                                            <div className="css-1dbjc4n r-1awozwy  r-y47klf red r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{data.winNumber.number}</div></div>
                                                                                        </div>

                                                                                :
                                                                                (data.winNumber.color.includes("G")) ?
                                                                                    (data.winNumber.color.includes("V"))
                                                                                        ?
                                                                                        <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                                                            <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                                                <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" ></div>
                                                                                                <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.winNumber.number}</div></div>
                                                                                        </div>
                                                                                        :
                                                                                        (data.winNumber.color.includes("R"))
                                                                                            ?
                                                                                            <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                                                                <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                                                    <div className="css-1dbjc4n red r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" ></div>
                                                                                                    <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.winNumber.number}</div></div>
                                                                                            </div>
                                                                                            :
                                                                                            <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                                                                <div className="css-1dbjc4n r-1awozwy  r-y47klf green r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0 " ><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{data.winNumber.number}</div></div>
                                                                                            </div>
                                                                                    : <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">

                                                                                        <div className="css-1dbjc4n r-1awozwy  r-y47klf  r-131i89u r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0" ><div dir="auto" className="css-901oao r-jwli3a r-1i10wst" style={{ color: "black" }}>{data.winNumber.number}</div></div>
                                                                                    </div>
                                                                    }
                                                                </div>
                                                                <div dir="auto" className="css-901oao r-5zpi7z r-evnaw" style={{ flex: "3 1 0%", textAlign: "right" }}>{new Date(Number(data.date)).getMonth() + 1 + "/" + ('0' + new Date(Number(data.date)).getDate()).slice(-2) + "  " + ('0' + new Date(Number(data.date)).getHours()).slice(-2) + ':' + ('0' + new Date(Number(data.date)).getMinutes()).slice(-2)}</div>
                                                            </div>
                                                        </>
                                                    )
                                                })}
                                            </div>

                                        </div>
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


// redux connect
const mapStateToProps = (state) => ({
    res: state.more,

});

export default connect(mapStateToProps)(MoreParity);