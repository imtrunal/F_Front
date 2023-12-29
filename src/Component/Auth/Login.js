import { useEffect, useState } from 'react'
import * as React from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { firebase, auth } from "./Firebase"
import { connect } from "react-redux";
import { RegisterParity } from '../../redux/action/FetchData'
import { NavLink, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import QuichLogin from './QuichLogin';
import PassLogin from './PassLogin';
import logo from "../../images/login.png";
import Footer from "./AuthFooter";
const Login = ({ socket, dispatch, res }) => {
  const navigate = useNavigate()
  const [state,setState]=useState(true)
  const handleClick=()=>{
        setState(true)
  }
  const handleClick1=()=>{
    setState(false)
}
  return (
    <>
      {/* <section>
        <div className="container  text-center">
          <div className="text-center">
            <div className="">
              <div className="logo">
                <img src={logo} alt="" className="jekaso" />
              </div>
            </div>

            <div className="row pace">
              <Tabs>
                <TabList>
                  <Tab>
                    <button className="butOrrn" >
                      Quick Login
                    </button>
                  </Tab>
                  <Tab>
                    <button className="butOrrn1" >
                      Password Login
                    </button>
                  </Tab>
                </TabList>
                <TabPanel>
                  <QuichLogin />
                </TabPanel>
                <TabPanel>
                  <PassLogin socket={socket} />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </section> */}

      <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
        <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
          <div className="css-1dbjc4n r-97e31f r-bv2aro r-hxflta r-10xqauy">
            <div className="css-1dbjc4n r-cb25cm r-16y7rff r-1sbahrg">
              <div className="css-1dbjc4n r-18u37iz r-1777fci">
                <div className="css-1dbjc4n r-1mlwlqe r-yen7m r-1udh08x r-417010" style={{ width: "242px" }}>
                  <div
                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                    style={{ backgroundImage: `url(${logo} )`}}
                  ></div>
                  <img alt="" draggable="false" src={logo} className="css-9pa8cd" />
                </div>
              </div>
              <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0e1" style={{ marginTop: "72px" }}>
                <div data-focusable="true" tabIndex="0" onClick={handleClick} className="css-1dbjc4n r-1loqt21 r-18u37iz r-1777fci r-smlesm r-1yzf0co r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0.25s" }}>
                  <div dir="auto" className="css-901oao r-b88u0q" style={{ color:!state ? "rgb(151,151,151)": "rgb(0, 0, 0)", fontSize: "24px" }}>Quick Login</div>
                {state &&  <div className="css-1dbjc4n r-2mrr8d r-z2wwpe r-1p0dtai r-3da1kt r-u8s1d r-131xog0"></div>}
                </div>
                <div data-focusable="true" tabIndex="0" onClick={handleClick1} className="css-1dbjc4n r-1loqt21 r-18u37iz r-1777fci r-smlesm r-1yzf0co r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0.25s" }}>
                  <div dir="auto" className="css-901oao r-b88u0q" style={{ color: !state ? "rgb(0, 0, 0)": "rgb(151, 151, 151)", fontSize: "24px" }}>Password Login</div>
                {!state &&  <div className="css-1dbjc4n r-2mrr8d r-z2wwpe r-1p0dtai r-3da1kt r-u8s1d r-131xog0"></div>}

                </div>
              </div>
              {state ?<QuichLogin />:<PassLogin/>}
              <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-11c0sde">
                <div dir="auto" className="css-901oao r-evnaw" style={{ color: "rgb(151, 151, 151)" }}>Don't have a account?</div>
                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}><div dir="auto" className="css-901oao r-1jrmi80 r-evnaw" onClick={() => navigate("/register")}>Register</div></div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>


    </>




  )
}

export default Login