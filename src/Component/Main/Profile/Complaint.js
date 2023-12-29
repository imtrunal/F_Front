import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import arrowLeft from  "../../../images/arrowLeft.png"
const Complaints = () => {
    const [state,setState]=useState("")
    const navigate=useNavigate()
    const handleChange=(e)=>{
 setState(e.target.value)
    }
    const handleClick=()=>{
        if(state){

            swal({text:"Successfully","timer":2000})
        }
    }
  return (
    <>
    
    <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
    <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
        <div className="css-1dbjc4n r-cb25cm r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
            <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-uvuy5l r-1777fci r-1ifxtd0 r-bnwqim r-13qz1uu" onClick={()=>navigate(-1)} style={{borderBottomColor: "rgb(241, 241, 241)"}}>
                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1bo11z6 r-1loqt21 r-uvuy5l r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{transitionDuration: "0s"}}>
                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{height: "30px", width: "16px"}}>
                        <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{backgroundImage: `url${arrowLeft})`}}></div>
                        <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd"/></div>
                </div>
                <div dir="auto" className="css-901oao r-b88u0q" style={{color: "rgb(0, 0, 0)", fontSize: "26px", textAlign: "center"}}>Complaint</div>
            </div>
            <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{height: "909px"}}>
                <div className="css-1dbjc4n">
                    <div className="css-1dbjc4n r-cb25cm r-1sbahrg">
                        <div dir="auto" className="css-901oao">Please enter the reason for the complaint：</div>
                        <div className="css-1dbjc4n"><textarea autoCapitalize="sentences" onChange={handleChange} value={state} autoComplete="on" autoCorrect="on" dir="auto" rows="1" spellCheck="true" data-focusable="true" className="css-11aywtz r-14lw9ot r-z2wwpe r-1vn3j9u r-1444osr r-whuqzp r-9cokr0"></textarea></div>
                        <div
                        onClick={handleClick}
                            data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-tumt6t r-1777fci r-1444osr r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{transitionDuration: "0s"}}>
                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Confirm</div>
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

export default Complaints