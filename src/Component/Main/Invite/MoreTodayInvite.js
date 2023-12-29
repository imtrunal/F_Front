import React, { useEffect } from 'react'
import MoreTodayIncome from './MoreTodayIncome';
import { connect } from 'react-redux';
import { InvitePeopleDetails } from '../../../redux/action/FetchData';
import arrowLeft from "../../../images/arrowLeft.png"
import incomeDetailIcon from "../../../images/incomeDetailIcon.png"

const MoreTodayInvite = ({dispatch,res}) => {
    useEffect(()=>{
  dispatch(InvitePeopleDetails())
    },[dispatch])

  return (
    <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
    <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
        <div className="css-1dbjc4n r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu" style={{backgroundColor: "rgb(245, 245, 245)"}}>
            <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-1sn7ly2 r-1777fci r-1cad53l r-bnwqim r-13qz1uu" style={{borderBottomColor: "rgb(241, 241, 241)"}}>
                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-1sn7ly2 r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{transitionDuration: "0s"}}>
                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{height: "26px", width: "16px"}}>
                        <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{backgroundImage: `url(${arrowLeft})`}}></div><img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd"/></div>
                </div>
                <div dir="auto" className="css-901oao r-1x35g6 r-b88u0q" style={{color: "rgb(0, 0, 0)", textAlign: "center"}}>Invite Record</div>
            </div>
            <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{height: "819px"}}>
                <div className="css-1dbjc4n">
                    <div className="css-1dbjc4n r-14lw9ot r-nydnoy r-1idfib4">
                        <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                            <div dir="auto" className="css-901oao r-5zpi7z" style={{fontSize: "20px"}}>The total number of invites is </div>
                            <div dir="auto" className="css-901oao" style={{color: "rgb(250, 60, 9)", fontSize: "20px"}}>{res.data && res.data && res.data.data && res.data.data.length &&  res.data.data.length && res.data.data[0].totalcount}</div>
                        </div>
                        <div className="css-1dbjc4n r-ji1w04 r-kdyh1x r-fnigne r-rs99b7 r-l71dzp">
                            <div className="css-1dbjc4n r-1awozwy r-1nt8t1s r-18u37iz r-1sn7ly2">
                                <div className="css-1dbjc4n r-1awozwy r-19vdmky r-13l2t4g r-13awgt0 r-1pi2tsx r-1777fci"></div>
                                <div className="css-1dbjc4n r-1awozwy r-19vdmky r-13l2t4g r-13awgt0 r-1pi2tsx r-1777fci">
                                    <div dir="auto" className="css-901oao">Level 1</div>
                                </div>
                                <div className="css-1dbjc4n r-1awozwy r-19vdmky r-13l2t4g r-13awgt0 r-1pi2tsx r-1777fci">
                                    <div dir="auto" className="css-901oao">Level 2</div>
                                </div>
                                <div className="css-1dbjc4n r-1awozwy r-19vdmky r-13l2t4g r-13awgt0 r-1pi2tsx r-1777fci">
                                    <div dir="auto" className="css-901oao">Level 3</div>
                                </div>
                            </div>
                            <div className="css-1dbjc4n r-1awozwy r-1w0wa34 r-5kkj8d r-18u37iz r-1ugchlj">
                                <div className="css-1dbjc4n r-1awozwy r-19vdmky r-13l2t4g r-13awgt0 r-1pi2tsx r-1777fci">
                                    <div dir="auto" className="css-901oao">Number</div>
                                </div>
                                <div className="css-1dbjc4n r-1awozwy r-19vdmky r-13l2t4g r-13awgt0 r-1pi2tsx r-1777fci">
                                    <div dir="auto" className="css-901oao">{res.data && res.data.data && res.data.data.length &&  res.data.data[0].leval1}</div>
                                </div>
                                <div className="css-1dbjc4n r-1awozwy r-19vdmky r-13l2t4g r-13awgt0 r-1pi2tsx r-1777fci">
                                    <div dir="auto" className="css-901oao">{res.data && res.data.data && res.data.data.length && res.data.data[0].leval2}</div>
                                </div>
                                <div className="css-1dbjc4n r-1awozwy r-19vdmky r-13l2t4g r-13awgt0 r-1pi2tsx r-1777fci">
                                    <div dir="auto" className="css-901oao">{res.data && res.data.data && res.data.data.length && res.data.data[0].leval3}</div>
                                </div>
                            </div>
                        </div>
                        <div dir="auto" className="css-901oao r-1az3528 r-knv0ih">*Statistics will be updated everyday.</div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-18u37iz r-1wtj0ep">
                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-j9b53g r-1i97xy8 r-177kwc2 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-b8tw3c" style={{transitionDuration: "0s", zIndex: "2"}}>
                            <div dir="auto" className="css-901oao" style={{color: "rgb(0, 0, 0)", fontSize: "20px"}}>Register(<span className="css-901oao css-16my406" style={{color: "rgb(247, 110, 5)"}}>2</span>)</div>
                            <div className="css-1dbjc4n r-2mrr8d r-1jkafct r-1p0dtai r-epq5cr r-u8s1d r-13qz1uu"></div>
                        </div>
                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-j9b53g r-1i97xy8 r-177kwc2 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-b8tw3c" style={{transitionDuration: "0s", zIndex: "2"}}>
                            <div dir="auto" className="css-901oao r-1az3528" style={{fontSize: "20px"}}>Run away(<span className="css-901oao css-16my406" style={{color: "rgb(247, 110, 5)"}}>0</span>)</div>
                        </div>
                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-j9b53g r-1i97xy8 r-177kwc2 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-b8tw3c" style={{transitionDuration: "0s", zIndex: "2"}}>
                            <div dir="auto" className="css-901oao r-1az3528" style={{fontSize: "20px"}}>Awakened(<span className="css-901oao css-16my406" style={{color: "rgb(247, 110, 5)"}}>0</span>)
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-xoduu5 r-1otgn73 r-1i6wzkk r-lrvibr" style={{transitionDuration: "0s"}}>
                                    <div className="css-1dbjc4n r-xoduu5 r-1mlwlqe r-1udh08x r-417010" style={{height:" 26px", transform: "translateY(4px)", width: "26px"}}>
                                        <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-xoduu5 r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{backgroundImage: `url(${incomeDetailIcon}`}}></div><img alt="" draggable="false" src={incomeDetailIcon} className="css-9pa8cd"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-18u37iz r-l71dzp r-y8nl5v r-n3sdqm r-5t7p9m">
                        <div dir="auto" className="css-901oao r-1az3528 r-1b43r93" style={{flex: "4 1 0%"}}>Registration</div>
                        <div dir="auto" className="css-901oao r-1az3528 r-13awgt0 r-1b43r93" style={{textAlign: "center"}}>Level</div>
                        <div dir="auto" className="css-901oao r-1az3528 r-1b43r93" style={{flex: "3 1 0%", textAlign: "center"}}>User</div>
                        <div dir="auto" className="css-901oao r-1az3528 r-1b43r93" style={{flex: "3 1 0%", textAlign: "right"}}>Type</div>
                    </div>
                    <div className="css-1dbjc4n r-150rngu r-14lw9ot r-eqz5dr r-16y2uox r-1wbh5a2 r-1i5vufi r-11yh6sk r-1rnoaur r-1shbetn r-y8nl5v r-n3sdqm r-1sncvnh">
                       {res.data && res.data.data && res.data.data.length &&  res.data.data.map((data)=>{
                        return(
                        <div className="css-1dbjc4n">   
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1x0uki6">
                                    <div dir="auto" className="css-901oao r-5zpi7z r-1b43r93" style={{flex: "4 1 0%"}}>{new Date(data.date).getMonth() + 1 + "/" + ('0' + new Date(data.date).getDate()).slice(-2) + "  " + ('0' + new Date(data.date).getHours()).slice(-2) + ':' + ('0' + new Date(data.date).getMinutes()).slice(-2)}</div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-13awgt0 r-1b43r93" style={{textAlign: "center"}}>{data.leval}</div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-1b43r93" style={{flex: "3 1 0%", textAlign: "center"}}>{data.user}</div>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-1b43r93" style={{flex: "3 1 0%", textAlign: "right"}}>{data.Type==1&&"Register"}</div>
                                </div>
                            </div>
                        </div>
                        )
                       })}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}


// redux connect
const mapStateToProps = (state) => ({
    res: state.invitepeople,

});

export default connect(mapStateToProps)(MoreTodayInvite);