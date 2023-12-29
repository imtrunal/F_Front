import { NavLink, useNavigate } from "react-router-dom";
import  React, {useEffect, useState } from "react";
import Avatar02 from "../../../images/Avatar02.png";
import rankTop2 from "../../../images/rankTop2.png";
import top2 from "../../../images/top2.png";
import Avatar01 from "../../../images/Avatar01.png";
import rankTop1 from "../../../images/rankTop1.png";
import top1new from "../../../images/top1new.png";
import Avatar03 from "../../../images/Avatar03.png";
import rankTop3 from "../../../images/rankTop3.png";
import backWhite from "../../../images/backWhite.png";
import ranking_tg from "../../../images/ranking_tg.png";
import rankingBg from "../../../images/rankingBg.png";
import top2Shadow from "../../../images/top2Shadow.png";
import Avatar04 from "../../../images/Avatar04.png";
import top3Shadow from "../../../images/top3Shadow.png";
import top1Shadow from "../../../images/top1Shadow.png";



import top3 from "../../../images/top3.png";
import swal from "sweetalert";
import Countdown from 'react-countdown';
import moment from 'react-moment';
import { connect } from "react-redux";
import { RankingDataDetails } from "../../../redux/action/FetchData";

const Ranking = ({ dispatch, res }) => {
  const navigate=useNavigate()
  const [time, setTime] = useState()
  const copybutton1 = () => {
    swal({
      text: "Copy successfully!",
      timer: 1400,
    });
  };
  useEffect(() => {
    dispatch(RankingDataDetails())
  }, [dispatch])

  setInterval(() => {

    var seconds = Math.floor((res.data.data && Number(res.data.data[0].rewardTime) - Date.parse(new Date())) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    setTime(hours + ":" + minutes + ":" + seconds)

  }, 1000)



  return (
    <>
      <div class="css-1dbjc4n r-13awgt0 r-12vffkv">
        <div class="css-1dbjc4n r-13awgt0 r-12vffkv">
          <div class="css-1dbjc4n r-cb25cm r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
            <div class="css-1dbjc4n r-1awozwy r-2mrr8d r-uvuy5l r-1777fci r-p1pxzi r-bnwqim r-13qz1uu">
              <div data-focusable="true" tabindex="0" onClick={()=>navigate(-1)} class="css-1dbjc4n r-1awozwy r-1bo11z6 r-1loqt21 r-uvuy5l r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{transitionDuration: "0s"}}>
                <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{height: "30px", width: "16px"}}>
                  <div
                    class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                    style={{backgroundImage: `url(${backWhite})`}}
                  ></div>
                  <img alt="" draggable="false" src={backWhite} class="css-9pa8cd" />
                </div>
              </div>
              <div dir="auto" class="css-901oao r-jwli3a r-yy2aun r-b88u0q r-q4m81j">Ranking Rewards</div>
              <div data-focusable="true" tabindex="0" class="css-1dbjc4n r-1loqt21 r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr" style={{right: "14px", transitionDuration: "0s"}}>
                <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{height: "28px", width: "28px"}}>
                  <div
                    class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                    style={{backgroundImage: `url(${ranking_tg})`}}
                  ></div>
                  <img alt="" draggable="false" src={ranking_tg} class="css-9pa8cd" />
                </div>
              </div>
            </div>
            <div class="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{height: "925px"}}>
              <div class="css-1dbjc4n">
                <div class="css-1dbjc4n r-1t9qy8z r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1wyyakw">
                  <div class="css-1dbjc4n r-1p0dtai r-1mlwlqe r-1t9qy8z r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-1wyyakw">
                    <div
                      class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                      style={{backgroundImage: `url(${rankingBg})`}}
                    ></div>
                    <img alt="" draggable="false" src={rankingBg} class="css-9pa8cd" />
                  </div>
                </div>
                <div class="css-1dbjc4n r-1awozwy r-1777fci r-158wumu r-1s6pnzw">
                  <div dir="auto" class="css-901oao r-jwli3a r-uho16t r-b88u0q">TOP20 Rewards</div>
                  <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1r5su4o">
                    <div class="css-1dbjc4n r-1awozwy r-1nt8t1s r-1gk6r4p r-wgabs5 r-z2wwpe r-18u37iz r-ur6pnr r-1777fci r-1d4mawv r-199wky7">
                      <div dir="auto" class="css-901oao r-5zpi7z r-zz5t5d r-b88u0q r-15zivkp r-4amgru">0</div>
                    </div>
                    <div class="css-1dbjc4n r-1awozwy r-1nt8t1s r-1gk6r4p r-wgabs5 r-z2wwpe r-18u37iz r-ur6pnr r-1777fci r-199wky7"><div dir="auto" class="css-901oao r-5zpi7z r-zz5t5d r-b88u0q r-15zivkp r-4amgru">6</div></div>
                    <div dir="auto" class="css-901oao r-5zpi7z r-zz5t5d r-b88u0q r-15zivkp r-4amgru">:</div>
                    <div class="css-1dbjc4n r-1awozwy r-1nt8t1s r-1gk6r4p r-wgabs5 r-z2wwpe r-18u37iz r-ur6pnr r-1777fci r-1d4mawv r-199wky7">
                      <div dir="auto" class="css-901oao r-5zpi7z r-zz5t5d r-b88u0q r-15zivkp r-4amgru">3</div>
                    </div>
                    <div class="css-1dbjc4n r-1awozwy r-1nt8t1s r-1gk6r4p r-wgabs5 r-z2wwpe r-18u37iz r-ur6pnr r-1777fci r-199wky7"><div dir="auto" class="css-901oao r-5zpi7z r-zz5t5d r-b88u0q r-15zivkp r-4amgru">4</div></div>
                    <div dir="auto" class="css-901oao r-5zpi7z r-zz5t5d r-b88u0q r-15zivkp r-4amgru">:</div>
                    <div class="css-1dbjc4n r-1awozwy r-1nt8t1s r-1gk6r4p r-wgabs5 r-z2wwpe r-18u37iz r-ur6pnr r-1777fci r-1d4mawv r-199wky7">
                      <div dir="auto" class="css-901oao r-5zpi7z r-zz5t5d r-b88u0q r-15zivkp r-4amgru">1</div>
                    </div>
                    <div class="css-1dbjc4n r-1awozwy r-1nt8t1s r-1gk6r4p r-wgabs5 r-z2wwpe r-18u37iz r-ur6pnr r-1777fci r-199wky7"><div dir="auto" class="css-901oao r-5zpi7z r-zz5t5d r-b88u0q r-15zivkp r-4amgru">0</div></div>
                  </div>
                  <div dir="auto" class="css-901oao r-jwli3a r-adyw6z">Rewards will be given at 21:30 everyday</div>
                </div>
                <div class="css-1dbjc4n r-obd0qt r-18u37iz r-1777fci r-1ifxtd0 r-1issz8o">
                  <div class="css-1dbjc4n r-1awozwy r-14lw9ot r-z2wwpe r-17s6mgv" style={{height: "194px", marginLeft: "0px", paddingBottom: "18px", width: "150px"}}>
                    <div class="css-1dbjc4n r-1awozwy r-1777fci r-bnwqim">
                      <div class="css-1dbjc4n r-1mlwlqe r-102gzdx r-1udh08x r-417010" style={{marginBottom: "-12px", width: "62px"}}>
                        <div
                          class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                          style={{backgroundImage:`url(${rankTop2})`}}
                        ></div>
                        <img alt="" draggable="false" src={rankTop2} class="css-9pa8cd" />
                      </div>
                      <img
                        src="https://res.cloudinary.com/fiewin1/image/upload/w_400,h_400,c_fill/c_fill,w_100,h_100/v1649075708/qxvxy42z8jpms8nxfw5o.png"
                        style={{width: "62px", height: "62px", borderRadius: "32px", marginBottom: "8px", objectFit: "cover"}}
                      />
                      <div class="css-1dbjc4n r-1p0dtai r-1mlwlqe r-1k25im9 r-1udh08x r-u8s1d r-19tjxh9 r-417010">
                        <div
                          class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                          style={{backgroundImage: `url(${top2})`}}
                        ></div>
                        <img alt="" draggable="false" src={top2} class="css-9pa8cd" />
                      </div>
                      <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-1wyyakw" style={{bottom: "55%", height: "12px", width: "86%"}}>
                        <div
                          class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                          style={{backgroundImage: `url(${top2Shadow})`}}
                        ></div>
                        <img alt="" draggable="false" src={top2Shadow} class="css-9pa8cd" />
                      </div>
                    </div>
                    <div dir="auto" class="css-901oao r-rs3z27 r-adyw6z">ID:705164</div>
                    <div dir="auto" class="css-901oao r-5zpi7z r-evnaw">₹14131.00</div>
                    <div dir="auto" class="css-901oao r-t45a0e r-b88u0q" style={{fontSize: "30px"}}>+₹7011</div>
                  </div>
                  <div class="css-1dbjc4n r-1awozwy r-14lw9ot r-z2wwpe r-17s6mgv" style={{height: "212px", marginLeft: "10px", paddingBottom: "18px", width: "150px"}}>
                    <div class="css-1dbjc4n r-1awozwy r-1777fci r-bnwqim">
                      <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{height: "68px", marginBottom: "-16px", width: "78px"}}>
                        <div
                          class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                          style={{backgroundImage: `url(${rankTop1})`}}
                        ></div>
                        <img alt="" draggable="false" src={rankTop1} class="css-9pa8cd" />
                      </div>
                      <img
                        src="https://res.cloudinary.com/fiewin/image/upload/w_200,h_200,c_fill/c_fill,w_100,h_100/v1624187004/giwweu9yczgdhvug3mtp.jpg"
                        style={{width: "74px", height: "74px", borderRadius: "38px", marginBottom: "8px", objectFit: "cover"}}
                      />
                      <div class="css-1dbjc4n r-1p0dtai r-1mlwlqe r-1k25im9 r-1udh08x r-u8s1d r-19tjxh9 r-417010">
                        <div
                          class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                          style={{backgroundImage: `url(${top1new})`}}
                        ></div>
                        <img alt="" draggable="false" src={top1new} class="css-9pa8cd" />
                      </div>
                      <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-1wyyakw" style={{bottom: "52%", height: "10px", width: "90%"}}>
                        <div
                          class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                          style={{backgroundImage: `url(${top1Shadow})`}}
                        ></div>
                        <img alt="" draggable="false" src={top1Shadow} class="css-9pa8cd" />
                      </div>
                    </div>
                    <div dir="auto" class="css-901oao r-rs3z27 r-adyw6z">ID:48883</div>
                    <div dir="auto" class="css-901oao r-5zpi7z r-evnaw">₹17040.48</div>
                    <div dir="auto" class="css-901oao r-t45a0e r-b88u0q" style={{fontSize: "30px"}}>+₹10011</div>
                  </div>
                  <div class="css-1dbjc4n r-1awozwy r-14lw9ot r-z2wwpe r-17s6mgv" style={{height: "194px", marginLeft: "10px", paddingBottom: "18px", width: "150px"}}>
                    <div class="css-1dbjc4n r-1awozwy r-1777fci r-bnwqim">
                      <div class="css-1dbjc4n r-1mlwlqe r-102gzdx r-1udh08x r-417010" style={{marginBottom: "-12px", width: "62px"}}>
                        <div
                          class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                          style={{backgroundImage: `url(${rankTop3})`}}
                        ></div>
                        <img alt="" draggable="false" src={rankTop3} class="css-9pa8cd" />
                      </div>
                      <img src={Avatar03} style={{width: "62px", height: "62px", borderRadius: "32px", marginBottom: "8px", objectFit: "cover"}} />
                      <div class="css-1dbjc4n r-1p0dtai r-1mlwlqe r-1k25im9 r-1udh08x r-u8s1d r-19tjxh9 r-417010">
                        <div
                          class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                          style={{backgroundImage: `url(${top3})`}}
                        ></div>
                        <img alt="" draggable="false" src={top3} class="css-9pa8cd" />
                      </div>
                      <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-1wyyakw" style={{bottom: "55%", height: "12px", width: "86%"}}>
                        <div
                          class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                          style={{backgroundImage: `url(${top3Shadow})`}}
                        ></div>
                        <img alt="" draggable="false" src={top3Shadow} class="css-9pa8cd" />
                      </div>
                    </div>
                    <div dir="auto" class="css-901oao r-rs3z27 r-adyw6z">ID:6358104</div>
                    <div dir="auto" class="css-901oao r-5zpi7z r-evnaw">₹13582.44</div>
                    <div dir="auto" class="css-901oao r-t45a0e r-b88u0q" style={{fontSize: "30px"}}>+₹5011</div>
                  </div>
                </div>
                <div class="css-1dbjc4n">
                  <div class="css-1dbjc4n r-1awozwy r-14lw9ot r-18u37iz r-1ybr9sj r-1wzrnnt r-1ehh1yr">
                    <div class="css-1dbjc4n r-13awgt0">
                      <div class="css-1dbjc4n r-1awozwy r-z2wwpe r-1k25im9 r-1777fci r-19tjxh9" style={{backgroundColor: "rgb(255, 209, 71)"}}><div dir="auto" class="css-901oao r-jwli3a r-1i10wst">4</div></div>
                    </div>
                    <div class="css-1dbjc4n r-1awozwy r-dta0w2"><img src={Avatar04} style={{width: "46px", height: "46px", borderRadius: "22px", objectFit: "cover"}} /></div>
                    <div class="css-1dbjc4n" style={{alignItems: "flex-start", flex: "6 1 0%"}}>
                      <div dir="auto" class="css-901oao r-rs3z27 r-adyw6z r-q4m81j">ID:10256008</div>
                      <div dir="auto" class="css-901oao r-5zpi7z r-evnaw">Income:₹12639.2</div>
                    </div>
                    <div dir="auto" class="css-901oao r-t45a0e r-lgvlli r-yy2aun r-b88u0q r-1ff274t">+₹4011</div>
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
  res: state.Ranking,

});

export default connect(mapStateToProps)(Ranking);