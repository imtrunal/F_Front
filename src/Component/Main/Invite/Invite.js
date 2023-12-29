import React, { useEffect, useState } from 'react'
import Theme from '../../../common/Theme'
import { connect } from 'react-redux'
import { IncomeDetails, InviteDetails } from '../../../redux/action/FetchData'
import Register1 from '../../Auth/Register1'
import indexTaskV1 from "../../../images/indexTaskV1.png"
import proxyBg from "../../../images/proxyBg.png"
import PrivilegeNew1 from "../../../images/PrivilegeNew1.png"
import rankingIconNew1 from "../../../images/rankingIconNew1.png"
import linkNew1 from "../../../images/linkNew1.png"
import agentPlanEnter from "../../../images/agentPlanEnter.png"
import goRight from "../../../images/goRight.png"





import { useNavigate } from 'react-router-dom'
const Invite = ({ dispatch, res, res1 }) => {
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(InviteDetails())
        dispatch(IncomeDetails(11))
    }, [])  

    return (
        <>
            <Theme status="1" className="center">
                {/* <div className="css-1dbjc4n r-1awozwy r-kemksi r-1iihdsi r-ndvcnb r-18u37iz r-uxrrfj r-1777fci r-1g40b8q "><div dir="auto" className="css-901oao r-jwli3a r-zz5t5d r-b88u0q">Invite</div></div> */}
                <div className="css-1dbjc4n  r-1awozwy r-kemksi r-1iihdsi r-ndvcnb r-18u37iz r-uxrrfj r-1777fci r-1g40b8q  css-1dbjc4n r-1awozwy r-1iihdsi r-18u37iz r-12b20jn  r-lrx3fh r-qklmqis r-uxrrfj r-1777fci r-1udh08x  r-1g40b8q" style={{ width: "490px", marginLeft: "5px" }}><div dir="auto" className="css-901oao r-jwli3a r-zz5t5d r-b88u0q">Invite</div></div>
                <div className=" css-1dbjc4n r-1awozwy r-1iihdsi r-18u37iz r-12b20jn r-1wtj0ep  r-lrx3fh r-qklmqis r-uxrrfj r-1777fci r-1udh08x  r-1g40b8q " style={{ height: "auto", padding: "5px", marginTop: "-1px" }}>
                    <div className="css-1dbjc4n      r-14lw9ot r-1pi2tsx r-tw8zf3 r-1rnoaur r-1vzzlr8 r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-13qz1uu" style={{ height: "312px", marginBottom: "50px", marginTop: "-48px", paddingTop: "74px" }}>
                            <div className="css-1dbjc4n r-1p0dtai r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ height: "312px" }}>
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${proxyBg})` }}
                                ></div>
                                <img alt="" draggable="false" src={proxyBg} className="css-9pa8cd" />
                            </div>
                            <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-z2wwpe r-1f4vaqg r-18u37iz r-1pmudt1 r-1wtj0ep r-1r4ytlq r-thmkab">
                                <div className="css-1dbjc4n">
                                    <div dir="auto" className="css-901oao r-1az3528 r-ubezar">Agent amount</div>
                                    <div className="css-1dbjc4n r-obd0qt r-18u37iz">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-zz5t5d r-b88u0q">₹ </div>
                                        <div dir="auto" className="css-901oao r-5zpi7z r-b88u0q " style={{ fontSize: "38px" }}>{res.data.data &&res.data.data[0].amount ?  Number(res.data.data[0].amount).toFixed(3) :0}</div>
                                    </div>
                                </div>
                                <div data-focusable="true" tabIndex="0" onClick={() => navigate("/withdraw/2")} className="css-1dbjc4n r-1awozwy r-1l506o1 r-1llaxt6 r-1l5va9f r-1loqt21 r-18u37iz r-1sn7ly2 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1vzx1hx" style={{ transitionDuration: "0s" }}>
                                    <div dir="auto" className="css-901oao r-jwli3a r-b88u0q">Withdraw</div>
                                </div>
                            </div>
                            <div className="css-1dbjc4n r-18u37iz r-1wtj0ep r-1fz3rvf r-1b6hpt1">
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-kdyh1x r-1loqt21 r-12b20jn r-1otgn73 r-1i6wzkk r-lrvibr r-1sqjfdd" style={{ transitionDuration: "0s" }} onClick={() => navigate("/Privilege")}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010">
                                        <div
                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                            style={{ backgroundImage: `url(${PrivilegeNew1})` }}
                                        ></div>
                                        <img alt="" draggable="false" src={PrivilegeNew1} className="css-9pa8cd" />
                                    </div>
                                </div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-kdyh1x r-1loqt21 r-12b20jn r-1otgn73 r-1i6wzkk r-lrvibr r-1sqjfdd" onClick={() => navigate("/TaskType")} style={{ transitionDuration: "0s" }}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010">
                                        <div
                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                            style={{ backgroundImage: `url(${rankingIconNew1})` }}
                                        ></div>
                                        <img alt="" draggable="false" src={rankingIconNew1} className="css-9pa8cd" />
                                    </div>
                                </div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-kdyh1x r-1loqt21 r-12b20jn r-1otgn73 r-1i6wzkk r-lrvibr r-1sqjfdd" onClick={() => navigate("/MyLink")} style={{ transitionDuration: "0s" }}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010">
                                        <div
                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                            style={{ backgroundImage: `url(${linkNew1})` }}
                                        ></div>
                                        <img alt="" draggable="false" src={linkNew1} className="css-9pa8cd" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="css-1dbjc4n r-14lw9ot r-1slz7xr">
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ paddingRight: "8px", paddingLeft: "8px", transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-13qz1uu r-417010" style={{ height: "106px" }} onClick={() => navigate("/AgentPlan")}>
                                    <div
                                        className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{ backgroundImage: `url(${agentPlanEnter})` }}
                                    ></div>
                                    <img alt="" draggable="false" src={agentPlanEnter} className="css-9pa8cd" />
                                </div>
                            </div>
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1v1z2uz r-u0v7sb">
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                    <div dir="auto" className="css-901oao r-1az3528 r-ubezar">Invited today</div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-uho16t r-b88u0q r-c8eef1 r-yy2aun">{res.data.data && res.data.data[0].TodayInvite}</div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-ubezar">Total {res.data.data && res.data.data[0].Invitecount}</div>
                                        <div className="css-1dbjc4n r-1mlwlqe r-18yzcnr r-1udh08x r-417010" style={{ marginLeft: "8px", width: "22px" }} onClick={() => navigate("/InviteRecord")}>
                                            <div
                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                style={{ backgroundImage: `url(${goRight})` }}
                                            ></div>
                                            <img alt="" draggable="false" src={goRight} className="css-9pa8cd" />
                                        </div>
                                    </div>
                                </div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                    <div dir="auto" className="css-901oao r-1az3528 r-ubezar">Today`s income</div>
                                    <div className="css-1dbjc4n r-obd0qt r-18u37iz r-c8eef1">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-yy2aun r-b88u0q">₹</div>
                                        <div dir="auto" className="css-901oao r-5zpi7z r-uho16t r-b88u0q r-yy2aun">{res.data.data && (res.data.data[0].TodayIncome).toFixed(2)}</div>
                                    </div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                        <div dir="auto" className="css-901oao r-5zpi7z r-ubezar">Total ₹{res.data.data && Number(res.data.data[0].IncomeCount).toFixed(2)}</div>
                                        <div className="css-1dbjc4n r-1mlwlqe r-18yzcnr r-1udh08x r-417010" style={{ marginLeft: "8px", width: "22px" }} onClick={() => navigate("/DairyRecord")}>
                                            <div
                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                style={{ backgroundImage: `url(${goRight})` }}
                                            ></div>
                                            <img alt="" draggable="false" src={goRight} className="css-9pa8cd" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="css-1dbjc4n r-cb25cm r-13qz1uu" style={{ height: "14px" }}></div>
                        <div className="css-1dbjc4n r-14lw9ot r-1ifxtd0 r-tvv088">
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-d9fdf6">
                                <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">Income details</div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" onClick={() => navigate("/IncomeDetail")} style={{ transitionDuration: "0s" }}><div dir="auto" className="css-901oao r-1az3528 r-1i10wst">more &gt;</div></div>
                            </div>
                            {res1.data.data ? res1.data.data.map((data) => {
                                return (
                                    <>
                                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-rp7rv6 r-qklmqi r-18u37iz r-1wtj0ep r-1idfib4 r-bnwqim">
                                            <div className="css-1dbjc4n r-1mlwlqe r-1sn7ly2 r-1udh08x r-8br3cv r-417010">
                                                <div
                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                    style={{ backgroundImage: `url(${data.image})` }}
                                                ></div>
                                                <img alt="" draggable="false" src={data.image} className="css-9pa8cd" />
                                            </div>
                                            <div className="css-1dbjc4n r-1xbt88q r-1uvorsx r-u8s1d" style={{ marginLeft: "23%" }}>
                                                <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{data.comment}</div>
                                                <div dir="auto" className="css-901oao r-3zb0rz r-1i10wst r-1wzrnnt">{new Date(data.createdAt).getMonth() + 1 + "/" + ('0' + new Date(data.createdAt).getDate()).slice(-2) + "  " + ('0' + new Date(data.createdAt).getHours()).slice(-2) + ':' + ('0' + new Date(data.createdAt).getMinutes()).slice(-2)} from {data.participantUserId}</div>
                                            </div>
                                            <div className="css-1dbjc4n r-obd0qt"><div dir="auto" className="css-901oao r-5zpi7z r-yy2aun">{data.type == "7" ? "-" : "+"}₹{data.points}</div></div>
                                        </div>
                                    </>
                                )
                            })
                                : <>

                                    <div className="css-1dbjc4n r-1awozwy" style={{ marginTop: "11px" }}>
                                        <div dir="auto" className="css-901oao r-1az3528 r-evnaw">No Income</div>
                                        <div data-focusable="true" tabIndex="0" onClick={() => navigate("/MyLink")} className="css-1dbjc4n r-1awozwy r-2o9o9i r-1udnf30 r-1loqt21 r-1mwlp6a r-1777fci r-8d26hk r-1wzrnnt r-1otgn73 r-1i6wzkk r-lrvibr r-yee3n4" style={{ transitionDuration: "0s" }}>
                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw">Invite Now</div>
                                        </div>
                                    </div>
                                </>}

                        </div>
                    </div>
                </div>


            </Theme>
        </>
    )
}

// redux connect
const mapStateToProps = (state) => ({
    res: state.invite,
    res1: state.income
});

export default connect(mapStateToProps)(Invite);