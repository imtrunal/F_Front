import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { ParityOrderDetails } from '../../../redux/action/FetchData'
const Parity = ({ dispatch, res }) => {
    const navigate=useNavigate()
    useEffect(() => {
        dispatch(ParityOrderDetails())
    }, [dispatch])
    return (
        <>
            {res.data.data ? res.data.data.slice(0).reverse().map((data) => {
                return (
                    <>
                        <div className="css-1dbjc4n" style={{ margin: "20px" }}>
                            <div className="css-1dbjc4n r-14lw9ot r-z2wwpe r-12mgwdw r-1f4owp r-rdhp45 r-l71dzp">
                                <div className="css-1dbjc4n r-uia4a0 r-18u37iz r-1wtj0ep r-l71dzp r-thmkab">
                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">Period {data.period}</div>
                                    <div dir="auto" className="css-901oao r-adyw6z" style={{ color: "rgb(151, 151, 151)" }}>{new Date(Number(data.date)).getMonth() + 1 + "/" + ('0' + new Date(Number(data.date)).getDate()).slice(-2) + "  " + ('0' + new Date(Number(data.date)).getHours()).slice(-2) + ':' + ('0' + new Date(Number(data.date)).getMinutes()).slice(-2) + ':' + ('0' + new Date(Number(data.date)).getSeconds()).slice(-2)}</div>
                                </div>
                                <div className="css-1dbjc4n r-l71dzp">
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1cad53l r-thmkab" style={{ justifyContent: "space-between" }}>
                                        <div dir="auto" className="css-901oao r-dta0w2 r-adyw6z" style={{ color: "rgb(151, 151, 151)" }}>Select</div>
                                        <div dir="auto" className="css-901oao r-lgvlli r-adyw6z" style={{ color: "rgb(151, 151, 151)", textAlign: "right" }}>Point</div>
                                        <div dir="auto" className="css-901oao r-dta0w2 r-adyw6z" style={{ color: "rgb(151, 151, 151)", textAlign: "center" }}>Result</div>
                                        <div dir="auto" className="css-901oao r-kgf08f r-adyw6z" style={{ color: "rgb(151, 151, 151)", textAlign: "right" }}>Amount</div>
                                    </div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1cad53l r-thmkab" style={{ justifyContent: "space-between" }}>
                                        {(data.select == "G" || data.select == "R" || data.select == "V") ?
                                            <>
                                                {data.select == "R" ?
                                                    <div className="css-1dbjc4n r-dta0w2"><div className="css-1dbjc4n r-1awozwy red r-kdyh1x r-5e03tv r-1ugchlj r-18u37iz r-1r8g8re r-1777fci r-1xjpbru">
                                                        <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "16px" }}>RED</div>
                                                    </div>
                                                    </div>
                                                    : data.select == "G" ?
                                                        <div className="css-1dbjc4n r-dta0w2"><div className="css-1dbjc4n r-1awozwy green r-kdyh1x r-5e03tv r-1ugchlj r-18u37iz r-1r8g8re r-1777fci r-1xjpbru">
                                                            <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "16px" }}>GREEN</div>
                                                        </div>
                                                        </div>
                                                        : <div className="css-1dbjc4n r-dta0w2"><div className="css-1dbjc4n r-1awozwy violet r-kdyh1x r-5e03tv r-1ugchlj r-18u37iz r-1r8g8re r-1777fci r-1xjpbru">
                                                            <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "16px" }}>VIOLET</div>
                                                        </div>
                                                        </div>
                                                }
                                            </> :
                                            <>
                                                <div className="css-1dbjc4n r-dta0w2">
                                                    <div className="css-1dbjc4n r-1awozwy r-iz8rmo r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                        <div dir="auto" className="css-901oao" style={{ color: "rgb(255, 255, 255)", fontSize: "16px" }}>{data.select}</div>
                                                    </div>
                                                </div>

                                            </>}
                                        <div dir="auto" className="css-901oao r-5zpi7z r-lgvlli r-evnaw" style={{ textAlign: "right" }}>{data.currency}{data.point}</div>
                                        {/* <div className="css-1dbjc4n r-1awozwy r-dta0w2">
                                            <div className="css-1dbjc4n r-1awozwy r-1ov7twd r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                <div dir="auto" className="css-901oao r-adyw6z r-b88u0q" style={{ color: "rgb(255, 255, 255)" }}>{data.win_number.number[0]}</div>
                                            </div>
                                        </div> */}


                                        {data.win_number.color &&
                                            ((data.win_number && data.win_number.color.includes("G") && data.win_number.color.includes("V") && data.win_number.color.includes("R")) ?

                                                <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                    <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                        <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                                        <div className="css-1dbjc4n red r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" style={{ top: "18px" }}></div>

                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                                </div>
                                                :
                                                (data.win_number && data.win_number.color.includes("V")) ?

                                                    (data.win_number && data.win_number.color.includes("G")) ?

                                                        <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                            <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>

                                                                <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                                        </div>
                                                        :
                                                        (data.win_number && data.win_number.color.includes("R")) ?

                                                            <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                    <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                                                    <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                                            </div>
                                                            :

                                                            <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                <div className="css-1dbjc4n r-1awozwy  r-y47klf violet r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{data.win_number && data.win_number.number[0]}</div></div>
                                                            </div>
                                                    :
                                                    (data.win_number && data.win_number.color.includes("R")) ?
                                                        (data.win_number && data.win_number.color.includes("V")) ?

                                                            <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                    <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                                                    <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                                            </div>
                                                            :
                                                            (data.win_number && data.win_number.color.includes("G"))
                                                                ?
                                                                <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                    <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                        <div className="css-1dbjc4n  r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw red"></div>
                                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                                                </div>
                                                                :
                                                                <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">
                                                                    <div className="css-1dbjc4n r-1awozwy  r-y47klf red r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{data.win_number && data.win_number.number[0]}</div></div>
                                                                </div>

                                                        :
                                                        (data.win_number && data.win_number.color.includes("G")) ?
                                                            (data.win_number && data.win_number.color.includes("V"))
                                                                ?
                                                                <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                    <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                        <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                                                </div>
                                                                :
                                                                (data.win_number && data.win_number.color.includes("R"))
                                                                    ?
                                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                        <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                            <div className="css-1dbjc4n red r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                                                            <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data.win_number && data.win_number.number[0]}</div></div>
                                                                    </div>
                                                                    :
                                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                        <div className="css-1dbjc4n r-1awozwy  r-y47klf green r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{data.win_number && data.win_number.number[0]}</div></div>
                                                                    </div>
                                                            : <div className="css-1dbjc4n r-1awozwy r-1777fci  r-9l47p7">

                                                                <div className="css-1dbjc4n r-1awozwy  r-y47klf  r-131i89u r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0"><div dir="auto" className="css-901oao r-jwli3a r-1i10wst" style={{ color: "black" }}>{data.win_number && data.win_number.number[0]}</div></div>
                                                            </div>
                                            )}
                                        {data.win_number.color && <div dir="auto" className="css-901oao r-kgf08f r-evnaw r-b88u0q" style={{ color: data.status == "loss" ? "rgb(250, 60, 9)" : "rgb(0, 194, 130)", textAlign: "right" }}>{data.status == "loss" ? "-" : "+"}{data.currency}{data.amount}</div>}
                                    </div>
                                </div>
                                <div className="css-1dbjc4n r-1awozwy r-12gph82 r-5kkj8d r-18u37iz r-1wtj0ep r-5t7p9m">
                                    <div className="css-1dbjc4n" style={{ marginLeft: "18px" }}>
                                        <div dir="auto" className="css-901oao r-adyw6z" style={{ color: "rgb(151, 151, 151)" }}>Delivery: {data.currency}{data.amount}</div>
                                        <div dir="auto" className="css-901oao r-adyw6z r-l71dzp" style={{ color: "rgb(151, 151, 151)" }}>Fee: {data.currency}{(Number(data.point) - Number(data.amount)).toFixed(2)}</div>
                                    </div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci" style={{ marginRight: "18px" }}>
                                        {/* <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1wlyorm r-y47klf r-rs99b7 r-1loqt21 r-18u37iz r-1a8msfu r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-wf0mho" style={{ transitionDuration: "0s" }}>
                                            <div dir="auto" className="css-901oao r-1jrmi80 r-1b43r93">To Verify</div>
                                        </div> */}
                                        <div className="css-1dbjc4n" style={{ width: "18px" }}></div>
                                        <div data-focusable="true" onClick={()=>navigate("/complaints")} tabIndex="0" className="css-1dbjc4n r-1awozwy r-1wlyorm r-y47klf r-rs99b7 r-1loqt21 r-18u37iz r-1a8msfu r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-wf0mho" style={{ transitionDuration: "0s" }}>
                                            <div dir="auto" className="css-901oao r-1jrmi80 r-1b43r93">Complaint</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )

            })
                :
                <div dir="auto" className="css-901oao r-evnaw" style={{ color: "rgb(151, 151, 151)", marginTop: "44px", textAlign: "center" }}>No records</div>}
        </>
    )
}

// redux connect
const mapStateToProps = (state) => ({


    res: state.ParityData,

});

export default connect(mapStateToProps)(Parity);