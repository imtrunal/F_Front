import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { IncomeGetDetails } from '../../../redux/action/FetchData'
import arrowLeft from  "../../../images/arrowLeft.png"

const MoreTodayIncome = ({ dispatch, res }) => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(IncomeGetDetails())
    }, [dispatch])

    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-cb25cm r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-uxrrfj r-1777fci r-1ifxtd0 r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-uxrrfj r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", width: "16px" }} onClick={() => navigate(-1)}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${arrowLeft})` }}></div>
                                    <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" /></div>
                            </div>
                            <div dir="auto" className="css-901oao r-yy2aun r-b88u0q r-q4m81j" style={{ color: "rgb(0, 0, 0)" }}>Daily Record</div>
                        </div>
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{ height: "874px" }}>
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-18u37iz r-1wtj0ep r-oido4f r-y8nl5v r-n3sdqm r-95jzfe">
                                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z">Date</div>
                                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ textAlign: "right" }}>Income</div>
                                </div>
                                <div className="css-1dbjc4n r-150rngu r-14lw9ot r-eqz5dr r-16y2uox r-1wbh5a2 r-s6xo6g r-11yh6sk r-1rnoaur r-18l7dai r-y8nl5v r-n3sdqm r-1sncvnh">
                                    <div className="css-1dbjc4n">
                                        {res.data.data ?
                                            res.data.data.map((data) => {
                                                return (

                                                    <div className="css-1dbjc4n">
                                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1d7gupr">
                                                            <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z">{new Date(Number(data.date)).getFullYear() + "/" + (new Date(Number(data.date)).getMonth() + 1) + "/" + ('0' + new Date(Number(data.date)).getDate()).slice(-2)}</div>
                                                            <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z" style={{ textAlign: "right" }}>₹{data.amount}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            :
                                            <div style={{ textAlign: "center", paddingTop: "20px" }}>No Records</div>
                                        }
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
    res: state.incomeGet,
});

export default connect(mapStateToProps)(MoreTodayIncome);