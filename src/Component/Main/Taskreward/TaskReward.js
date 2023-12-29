import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TaskRewardDetails, TaskStatusChangeDetails } from '../../../redux/action/FetchData';
import arrowLeft from "../../../images/arrowLeft.png"
const TaskReward = ({ dispatch, res, res1 }) => {
    const login_data = JSON.parse(sessionStorage.getItem('login'))

    const navigate = useNavigate()
    useEffect(() => {
        dispatch(TaskRewardDetails())

    }, [dispatch])
    const handleStatus = (id, status, order) => {
        const data = { id: id, status: status, order: order, userId: login_data.userId }
        if (order == "2" && status == "1") {
            navigate("/RechargeType/2", { state: { id: id } })

        }
        else {
            dispatch(TaskStatusChangeDetails(data))

        }
    }

    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-cb25cm r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-uxrrfj r-1777fci r-p1pxzi r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-uxrrfj r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", width: "16px" }} onClick={() => navigate("/tabIndex/0")}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${arrowLeft})` }}></div>
                                    <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" />
                                </div>
                            </div>
                            <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(0, 0, 0)", fontSize: "26px", textAlign: "center" }}>Task</div>
                        </div>
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{ height: "890px" }}>
                            <div className="css-1dbjc4n">
                                {res.data.data && res.data.data.map((data) => {
                                    return (
                                        <>
                                            <div className="css-1dbjc4n r-14lw9ot r-pichy5 r-5kkj8d r-1yflyrw r-1idfib4" style={{ margin: "10px" }}>
                                                <div className="css-1dbjc4n r-18u37iz r-1wtj0ep">
                                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-8br3cv r-417010" style={{ height: "54px", width: "11%" }}>
                                                        <div
                                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                            style={{ backgroundImage: `url(${data.image})` }}
                                                        ></div>
                                                        <img alt="" draggable="false" src={data.image} className="css-9pa8cd" />
                                                    </div>
                                                    <div className="css-1dbjc4n r-13awgt0 r-ltgprq">
                                                        <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-b88u0q">{data.task}</div>
                                                        <div dir="auto" className="css-901oao r-7zxnss r-1i10wst">{data.description}</div>
                                                    </div>
                                                    <div dir="auto" className="css-901oao r-14a6gy1 r-uho16t r-b88u0q r-q4m81j">+₹{data.points}</div>
                                                </div>
                                                <div className="css-1dbjc4n r-1wzrnnt" style={{ position: "relative" }}>
                                                    <div className="css-1dbjc4n r-18jiqbt r-kdyh1x r-1or9b2r r-bnwqim r-13qz1uu"><div className="css-1dbjc4n r-1ov7twd r-kdyh1x r-1or9b2r r-1d2f490 r-u8s1d r-ipm5af" style={{ width: "0%" }}></div></div>
                                                    <div className="css-1dbjc4n r-18u37iz r-1wtj0ep r-knv0ih r-bnwqim">
                                                        <div dir="auto" className="css-901oao r-7zxnss r-1i10wst">0%</div>
                                                        
                                                        <input type="range" min="1" max="100" value={data.range} style={{ width: "100%" }} readOnly={true}/>
                                                        <div dir="auto" className="css-901oao r-7zxnss r-1i10wst">100%</div>

                                                    </div>
                                                    {data.range != "0"&& data.range != "100" &&
                                                        <div dir="auto" className="css-901oao r-ctfjnt r-u8s1d r-ipm5af" style={{ position: "absolute", top: "83%", left: `${data.range}%` }}>{data.range}%</div>
                                                    }
                                                </div>
                                                {data.status == "0" ?
                                                    <div
                                                        data-focusable="true"
                                                        tabIndex="0"
                                                        className="css-1dbjc4n r-1awozwy r-14lw9ot r-nsiyw1 r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu"
                                                        style={{ borderColor: "rgb(254, 155, 31)", borderWidth: "2px", marginTop: "22px", transitionDuration: "0s" }}
                                                    >
                                                        <div dir="auto" className="css-901oao r-evnaw r-b88u0q" style={{ color: "rgb(254, 155, 31)" }} onClick={() => {
                                                            handleStatus(data._id, data.status, data.order)
                                                        }}>Start to {data.type}</div>
                                                    </div>
                                                    : data.status == "1" ?
                                                        <div
                                                            data-focusable="true"
                                                            tabIndex="0"
                                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-nsiyw1 r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu"
                                                            style={{ borderColor: "rgb(254, 155, 31)", borderWidth: "2px", marginTop: "22px", transitionDuration: "0s" }}
                                                        >
                                                            <div dir="auto" className="css-901oao r-evnaw r-b88u0q" style={{ color: "rgb(254, 155, 31)" }} onClick={() => {
                                                                handleStatus(data._id, data.status, data.order)
                                                            }}>Go to {data.type}</div>
                                                        </div>
                                                        :
                                                        <div
                                                            data-focusable="true"
                                                            tabIndex="0"
                                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-nsiyw1 r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu"
                                                            style={{ borderColor: "rgb(254, 155, 31)", borderWidth: "2px", marginTop: "22px", transitionDuration: "0s" }}
                                                        >
                                                            <div dir="auto" className="css-901oao r-evnaw r-b88u0q" style={{ color: "rgb(254, 155, 31)" }}>Received</div>
                                                        </div>
                                                }
                                            </div>
                                        </>
                                    )
                                })}

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
    res: state.taskReward,
    res1: state.taskStatus
});

export default connect(mapStateToProps)(TaskReward);