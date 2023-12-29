import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import SomeChart from './SomeChart';
import Axios from "axios";
import io from 'socket.io-client';
import CrashGame from './CrashGame';
import CrashAmount from './CrashAmount';
import question from "../../../../images/question.png"
import crashGuide6 from "../../../../images/crashGuide6.png"
import crashGuide1N from "../../../../images/crashGuide1N.png"
import crashGuide2N from "../../../../images/crashGuide2N.png"
import crashGuide3N from "../../../../images/crashGuide3N.png"
import crashGuide4N from "../../../../images/crashGuide4N.png"
import crashGuide5N from "../../../../images/crashGuide5N.png"

const Crash = ({ socket }) => {
  var navigate = useNavigate()
  const [series, setSeries] = useState(null)
  const [startStatus, setStartStatus] = useState(false)
  const [multiper, setmultiper] = useState("")
  const [CrashData, setCrashData] = useState([{}])
  const [alertbox, setAlertBox] = useState(false)

  const [tab1, setTab1] = useState({
    everyone: true,
    my: false,
  })
  const [user, setUser] = useState([{}])
  const login_data = JSON.parse(sessionStorage.getItem('login'))

  const count = (data) => {
    setSeries(data)
  }
  const status = (data) => {
    setStartStatus(data)
  }
// console.log(multiper,"shg");
  const multip = (data) => {
    setmultiper(data)
  }
  useEffect(() => {
    const getData = async () => {
      fetch("/all_Crash", {
        withCredentials: true
      }).then(res =>
        res.json()).then((res) => {
          setCrashData(res.data)


        })

    }
    getData()
  }, [])

  useEffect(() => {
    const a = async () => {

      var response = await fetch(`http://161.97.146.42:7000/api/crash/user/order/${login_data.userId}`, {
        method: "POST",
        headers: {
          "x-access-token": login_data.token,

          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ length: 10 })
      });
      var res_data = await response.json();
      // console.log(res_data);
      // res_data.data.map((u)=>{
      //     console.log(u.crash_result[0]);
      // })
      setUser(res_data.data)
    }
    a()
  }, [])
  const [sData, setSdata] = useState([])
  socket.on("add_member", (data) => {
    console.log("add_member", data.round_number, series - 1);
    // if (data.round_number == series - 1) {
    setSdata([
      data,
      ...sData
    ])
    // }

  })
  socket.on("add_member1", (data) => {

    if (data.length) {

      setSdata(
        data,

      )
    }
    else {
      setSdata([])


    }

  })
  socket.on("win", (data) => {

    if (data[0].round_number == series - 1) {
      setSdata(
        data
      )
    }
  })
  socket.on("last_record", (data) => {
    if (!CrashData.some(obj => obj.round_number == data.round_number)) {
      CrashData.push(data); // add new object to the array
    }


  })
  var [s1,setS1]=useState(false)
const userStop=(data)=>{
  setS1(data)
}
  return (
    <>
      <div className='css-1dbjc4n r-13awgt0 r-12vffkv'>
        <div class="css-1dbjc4n r-1awozwy r-14lw9ot r-1iihdsi r-qklmqi r-uvuy5l r-1777fci r-1ehh1yr r-bnwqim">

          <div data-focusable="true" tabindex="0" class="css-1dbjc4n r-1awozwy r-1loqt21 r-18u37iz r-uvuy5l r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-cfp7ip" style={{ left: "14px", transitionDuration: "0s" }}>
            <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "26px", width: "16px" }} onClick={() => navigate(-1)}>
              <div
                class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                style={{ backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/arrowLeft.png')" }}
              ></div>
              <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/arrowLeft.png" class="css-9pa8cd" />
            </div>
          </div>
          <div dir="auto" class="css-901oao r-b88u0q r-q4m81j" style={{ color: "rgb(0, 0, 0)", fontSize: "24px" }}>Crash</div>
          <div data-focusable="true" tabIndex="0" onClick={() => setAlertBox(true)} className="css-1dbjc4n r-1awozwy r-1loqt21 r-18u37iz r-uvuy5l r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-cfp7ip" style={{ right: "14px", transitionDuration: "0s" }}>
            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "20px", marginRight: "6px", width: "20px" }}>
              <div
                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                style={{ backgroundImage: `url(${question})` }}
              ></div>
              <img alt="" draggable="false" src={question} className="css-9pa8cd" />
            </div>
            <div dir="auto" className="css-901oao" style={{ color: "rgb(168, 168, 168)", fontSize: "18px" }}>Rule</div>
          </div>
        </div>


        <CrashGame count={count} status={status} multip={multip} CrashData={CrashData} s1={s1} so={socket}/>


        <CrashAmount socket={socket} series={series} status={startStatus} multiper={multiper} userStop={userStop}/>


        <div className="css-1dbjc4n r-14lw9ot r-1nxhmzv">
          <div className="css-1dbjc4n r-1awozwy  r-14lw9ot r-18u37iz r-1wtj0ep">
            <div
              data-focusable="true"
              tabIndex="0"
              className="css-1dbjc4n r-1awozwy r-14lw9ot r-j9b53g r-1i97xy8 r-177kwc2 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1f720gc"
              style={{ transitionDuration: "0s", zIndex: "2" }}
              onClick={() => {
                setTab1({
                  everyone: true,
                  my: false
                })
              }}
            >
              <div dir="auto" className="css-901oao r-1az3528" style={{ color: tab1.everyone && "rgb(0, 0, 0)", fontSize: "24px" }}>Everyone's Order</div>
              {tab1.everyone && <div className="css-1dbjc4n r-2mrr8d r-1jkafct r-1p0dtai r-epq5cr r-u8s1d r-13qz1uu"></div>}
            </div>
            <div
              data-focusable="true"
              tabIndex="0"
              className="css-1dbjc4n r-1awozwy r-14lw9ot r-j9b53g r-1i97xy8 r-177kwc2 r-1loqt21 r-18u37iz r-yivrw8 r-1777fci r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr r-1f720gc"
              style={{ transitionDuration: "0s", zIndex: "1" }}
              onClick={() => {
                setTab1({
                  everyone: false,
                  my: true
                })
              }}
            >
              <div dir="auto" className="css-901oao r-1az3528" style={{ color: tab1.my && "rgb(0, 0, 0)", fontSize: "24px" }}>My Order</div>
              {tab1.my && <div className="css-1dbjc4n r-2mrr8d r-1jkafct r-1p0dtai r-epq5cr r-u8s1d r-13qz1uu"></div>}

            </div>
          </div>
          {tab1.everyone &&
            <div className={`css-1dbjc4n`}>
              <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1s2bzr4 r-1ehh1yr">
                <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "4 1 0%", boxflex: "4" }}>ID</div>
                <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "4 1 0%", paddingRight: "6px", textAlign: "right", boxFlex: "4" }}>Stop</div>
                <div dir="auto" className="css-901oao r-1az3528 r-adyw6z r-q4m81j" style={{ flex: " 2 1 0%", boxFlex: "2" }}>Points</div>
                <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "3 1 0%", textAlign: "right", boxFlex: "3" }}>Amount</div>
              </div>
              <div className="css-1dbjc4n" style={{ height: "1664px" }}>
                <div className="css-1dbjc4n r-l71dzp r-1udh08x r-bnwqim r-13qz1uu" style={{ height: "1664px" }}>
                  <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-1pi2tsx r-11yh6sk r-buy8e9 r-19z077z r-1sncvnh">
                    <div className="css-1dbjc4n">

                      {

                        sData && sData.map((data, index) => {
                          return (
                            <>


                              <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1d7gupr r-1ehh1yr">
                                <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst">{data.user}</div>
                                <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst r-q4m81j">{data.stop}</div>
                                <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst r-q4m81j">{data.point}</div>
                                <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst" style={{ textAlign: "right" }}>{data.amount}</div>
                              </div>



                            </>
                          )
                        })
                      }

                    </div>
                  </div>
                  <div className="css-1dbjc4n r-1awozwy r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu r-d1gdsc" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}></div>
                </div>
              </div>
            </div>
          }

          {tab1.my &&
            <>

              {user.length ? <>

                {user.map((u) => {
                  return (

                    <div class="css-1dbjc4n">
                      <div class="css-1dbjc4n r-1jie2fr r-1dzdj1l r-rs99b7 r-1ggwxxu r-eun1hy r-1wtj0ep r-rdhp45 r-l71dzp r-whuqzp">
                        <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                          <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst">Periods: <span class="css-901oao css-16my406 r-5zpi7z">{u.round_number}</span></div>
                          <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst">Time: <span class="css-901oao css-16my406 r-5zpi7z">{new Date(u.createdAt).getMonth() + 1 + "/" + ('0' + new Date(u.createdAt).getDate()).slice(-2) + "  " + ('0' + new Date(u.createdAt).getHours()).slice(-2) + ':' + ('0' + new Date(u.createdAt).getMinutes()).slice(-2)}</span></div>
                        </div>
                        <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                          <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst">Stop: {u.target != "0" ? <span class="css-901oao css-16my406" style={{ color: "rgb(0, 189, 237)" }}>{u.target}</span> : <span class="css-901oao css-16my406">failed</span>}</div>
                          <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst">Points: <span class="css-901oao css-16my406 r-5zpi7z">{u.amount}</span></div>
                        </div>
                        {/* {console.log(u.length && u.crash_result.length && u.crash_result[0]) } */}
                        <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                          <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst">Result: <span class="css-901oao css-16my406">{u.Crash}x</span></div>
                          <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst">Amount: <span class="css-901oao css-16my406" style={{ color: `${u.win_amount > 0 ? "rgb(0, 194, 130)" : "rgb(151, 151, 151)"}` }}>{u.win_amount}</span></div>
                        </div>
                      </div>
                    </div>
                  )
                })}

              </> :

                <div dir="auto" className="css-901oao r-evnaw" style={{ color: "rgb(151, 151, 151)", marginTop: "44px", textAlign: "center" }}>No records</div>
              }

            </>
          }

        </div>
      </div>





      {alertbox &&

        <div className="css-1dbjc4n r-1awozwy r-1p0dtai r-1d2f490 r-zchlnj r-ipm5af" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "985px", overflow: "scroll", position: "fixed", zIndex: "99" }}>

          <div className="css-1dbjc4n r-14lw9ot r-u8s1d" style={{ borderRadius: "10px", height: "837.25px", top: "147.75px", width: "500px" }}>
            <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-1pi2tsx r-11yh6sk r-1rnoaur r-1sncvnh r-13qz1uu" style={{ marginBottom: "178px" }}>
              <div className="css-1dbjc4n">
                <div className="css-1dbjc4n r-1awozwy r-1pi2tsx" >


                  < div class="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d r-lrx3fh" style={{ height: "805.8px", top: "142.2px" }} >
                    <div class="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-1pi2tsx r-11yh6sk r-1rnoaur r-1sncvnh r-13qz1uu" style={{ marginBottom: "144px", padding: "34px" }}>
                      <div class="css-1dbjc4n">
                        <div class="css-1dbjc4n r-1awozwy">
                          <div class="css-1dbjc4n r-1awozwy r-1777fci" style={{ backgroundColor: "rgb(252, 148, 13)", borderRadius: "24px", boxShadow: "rgba(252, 148, 13, 0.42) 0px 0px 6px", height: "46px", width: "178px" }}>
                            <div dir="auto" class="css-901oao r-jwli3a r-evnaw r-b88u0q">Crash Rule</div>                    </div>
                        </div>
                        <div dir="auto" class="css-901oao r-5zpi7z r-1x35g6 r-b88u0q r-146t82q r-1no09lo">How to play ?</div>
                        <div dir="auto" class="css-901oao r-5zpi7z r-adyw6z r-ueyrd6" style={{ marginTop: "0px" }}>
                          First, choose how much you want to place order. Click "START" to place your order and watch the multiplier rise from 1.00x upwards! You can click "STOP" at any time in order to multiply your point with the current
                          multiplier. But be careful: The game can end at any time, and if you haven't stop by then, you get nothing!
                        </div>
                        <div dir="auto" class="css-901oao r-5zpi7z r-adyw6z r-ueyrd6 r-1d7gupr">If the game has started, the order you placed will be the next game.</div>
                        <div class="css-1dbjc4n r-18u37iz r-1wtj0ep r-1d7gupr">
                          <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "306px", width: "202px" }}>
                            <div
                              class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                              style={{ backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashGuide1N.png')" }}
                            ></div>
                            <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashGuide1N.png" class="css-9pa8cd" />
                          </div>
                          <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "306px", width: "202px" }}>
                            <div
                              class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                              style={{
                                backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashGuide2N.png')"
                              }} ></div>
                            <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashGuide2N.png" class="css-9pa8cd" />
                          </div>
                        </div>
                        <div dir="auto" class="css-901oao r-5zpi7z r-1x35g6 r-b88u0q r-146t82q r-1no09lo">How is the amount calculated ?</div>
                        <div dir="auto" class="css-901oao r-5zpi7z r-adyw6z r-ueyrd6 r-1d7gupr">If the amount of your order is 100, the escape multiple is 5.0x, after deducting 3 rupees service fee, your contract amount is 97 rupees:</div>
                        <div dir="auto" class="css-901oao r-1jrmi80 r-evnaw" style={{ lineHeight: "42px" }}>5.0X: You will get (97 * 5) 485 rupees</div>
                        <div dir="auto" class="css-901oao r-5zpi7z r-1x35g6 r-b88u0q r-146t82q r-1no09lo">How high can the multiplier go ?</div>
                        <div dir="auto" class="css-901oao r-5zpi7z r-adyw6z r-ueyrd6 r-1d7gupr">Up to 500 times</div>
                        <div class="css-1dbjc4n r-18u37iz r-1777fci r-13qz1uu">
                          <div class="css-1dbjc4n r-1mlwlqe r-1d7gupr r-1udh08x r-417010" style={{ height: "268px", marginBottom: "28px", width: "202px" }}>
                            <div
                              class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                              style={{
                                backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashGuide3N.png')"
                              }}
                            ></div>
                            <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashGuide3N.png" class="css-9pa8cd" />
                          </div>
                        </div>
                        <div dir="auto" class="css-901oao r-5zpi7z r-1x35g6 r-b88u0q r-146t82q r-1no09lo">What is auto stop ?</div>
                        <div dir="auto" class="css-901oao r-5zpi7z r-adyw6z r-ueyrd6 r-1d7gupr">If you choose to auto stop, when the multiple reaches the selected multiple, it will auto stop and get rewards.</div>
                        <div class="css-1dbjc4n r-18u37iz r-1wtj0ep r-1d7gupr">
                          <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "338px", width: "303px" }}>
                            <div
                              class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                              style={{
                                backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashGuide4N.png')"
                              }}
                            ></div>
                            <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashGuide4N.png" class="css-9pa8cd" />
                          </div>
                          <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "386px", width: "202px" }}>
                            <div
                              class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                              style={{
                                backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashGuide5N.png')"
                              }}
                            ></div>
                            <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashGuide5N.png" class="css-9pa8cd" />
                          </div>
                        </div>
                        <div dir="auto" class="css-901oao r-5zpi7z r-1x35g6 r-b88u0q r-146t82q r-1no09lo">Why are the multipliers in different colors ?</div>
                        <div class="css-1dbjc4n r-1mlwlqe r-1d7gupr r-1udh08x r-417010" style={{ height: "308px", width: "328px" }}>
                          <div
                            class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                            style={{ backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashGuide6.png')" }}
                          ></div>
                          <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashGuide6.png" class="css-9pa8cd" />
                        </div>
                      </div>
                    </div >

                  </div>








                </div>
              </div>
            </div>
            <div data-focusable="true" onClick={() => setAlertBox(false)} tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-1loqt21 r-18u37iz r-tumt6t r-1777fci r-1udh08x r-u8s1d r-1otgn73 r-1i6wzkk r-lrvibr" style={{ bottom: "82px", boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 5px", left: "10%", transitionDuration: "0s", width: "80%" }}>
              <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">I GOT IT</div>
            </div>
          </div>
        </div>

      }
    </>
  )
}

export default Crash