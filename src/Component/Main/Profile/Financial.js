import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FinancialDetails } from '../../../redux/action/FetchData';
import arrowLeft from "../../../images/arrowLeft.png"


const Financial = ({ dispatch, res }) => {
    useEffect(() => {
        dispatch(FinancialDetails())
    },[dispatch])
    const navigate=useNavigate()
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-cb25cm r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-102gzdx r-1777fci r-p1pxzi r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-102gzdx r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "26px", width: "16px" }} onClick={()=>navigate(-1)}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${arrowLeft})` }}></div><img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" /></div>
                            </div>
                            <div dir="auto" className="css-901oao r-1x35g6 r-b88u0q" style={{ color: "rgb(0, 0, 0)", textAlign: "center" }}>Dairy Record</div>
                        </div>
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{ height: "809px" }}>
                            {res.data.data && res.data.data.map((data) => {
                                return (
                                    <>
                                        <div className="css-1dbjc4n">
                                            <div className="css-1dbjc4n r-150rngu r-14lw9ot r-eqz5dr r-16y2uox r-1wbh5a2 r-bv8mlv r-11yh6sk r-1rnoaur r-14vbv99 r-y8nl5v r-n3sdqm r-1sncvnh">
                                                <div className="css-1dbjc4n">
                                                    <div className="css-1dbjc4n">
                                                        <div className="css-1dbjc4n r-1awozwy r-10bl8iw r-qklmqi r-18u37iz r-1wtj0ep r-1idfib4">
                                                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                                                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-8br3cv r-417010" style={{ height: "80px", marginRight: "18px",width:"80px" }}>
                                                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${data.image})` }}></div><img alt="" draggable="false" src={data.image} className="css-9pa8cd" /></div>
                                                                <div className="css-1dbjc4n">
                                                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw r-1dsi186">{data.comment}</div>
                                                                    <div dir="auto" className="css-901oao r-7zxnss r-1i10wst">{new Date(Number(data.date)).getMonth()+1 + "/" +('0' + new Date(Number(data.date)).getDate()).slice(-2) + "  " + ('0' + new Date(Number(data.date)).getHours()).slice(-2) + ':' + ('0' + new Date(Number(data.date)).getMinutes()).slice(-2) }   </div>
                                                                </div>
                                                            </div>
                                                            <div dir="auto" className="css-901oao r-5zpi7z r-1x35g6 r-b88u0q f-16" style={{fontSize:"20px"}}>{data.tradeType == "1" ? "+" :"-"}₹{Number(data.points).toFixed(2)}</div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


// redux connect
const mapStateToProps = (state) => ({
    res: state.financial,
});

export default connect(mapStateToProps)(Financial);