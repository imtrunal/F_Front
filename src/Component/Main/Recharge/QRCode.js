import  React, {useState, useEffect } from 'react'
import chooseTypeM2B from "../../../images/chooseTypeM2B.png"
import chooseTypeM1B from "../../../images/chooseTypeM1B.png"
import chooseTypeM3B from "../../../images/chooseTypeM3B.png"
import chooseTypeM4B from "../../../images/chooseTypeM4B.png"
import questionIconGrey from "../../../images/questionIconGrey.png"
import error from "../../../images/error.png"

import { useLocation, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { RechargeAmountParity, RechargeTransferredParity } from '../../../redux/action/FetchData'
import Modal from "react-bootstrap/Modal";

const QRCode = ({ value, res_data, transactionId, dispatch, res, res1 }) => {
  const navigate = useNavigate()
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  const [method, setMethod] = useState("")
  const [account, setAccount] = useState("")
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  useEffect(() => {
    dispatch(RechargeAmountParity())
  }, [dispatch])
  const res_api_data = res1.data
  const handlePay = (value1) => {
    const data = localStorage.getItem("id")
    const status_show = sessionStorage.getItem("FW_HAS_SHOW_UPDATE_WINDOW")
    setMethod(value1)
    if (data == transactionId) {
      if (status_show == 1) {
        setShow(true)
      }
      else {
        navigate("/transcation", { state: { state: Number(value), transactionId: transactionId, p_method: value1, account: account,qrcode:res_api_data.data[0].qrcode } })
      }
    }
    else {
      localStorage.setItem("id", transactionId)
      const post_data = { status: "pending", transactionId: transactionId,Payee_account:account, paymentMethod: value1, amount: Number(value), userId: login_data.userId }
      dispatch(RechargeTransferredParity(post_data))
    }
    // if(value1 =="gpay"){
    //     window.location.href="https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user"
    // }
    // else if(value1="paytm"){
    //     window.location.href="https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user"
    // }
    // else if(value1="phonepe"){
    //     window.location.href="https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user"

    // }  else{
    //     window.location.href="https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user"

    // }
  }
  const api_res = res.data

  const handleContinue = () => {
    navigate("/transcation", { state: { state: Number(value), value: true, transactionId: transactionId, p_method: method, account: account,qrcode:res_api_data && res_api_data.data[0].qrcode  } })
  }
    // Function will execute on click of button
    const onButtonClick = () => {
      // using Java Script method to get PDF file
      fetch(`${res_api_data.data[0].qrcode}`).then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = `${res_api_data.data[0].qrcode}`
              alink.click();
          })
      })
  }
  return (
    <>
      <div className="css-1dbjc4n" style={{ padding: "22px" }}>
        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
          <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z" style={{ fontWeight: "600" }}>Save the QR code picture to the album</div>
          <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "22px", width: "22px" }} onClick={()=>navigate("/help")}>
              <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${questionIconGrey})` }}></div><img alt="" draggable="false" src={questionIconGrey} className="css-9pa8cd" /></div>
          </div>
        </div>
        <div className="css-1dbjc4n r-1awozwy r-18u37iz" style={{ marginTop: "22px" }}>
          <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "202px", width: "202px" }}>
            <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${res_api_data.data &&res_api_data.data[0].qrcode}` }}></div><img alt="" draggable="false" src={res_api_data.data && res_api_data.data[0].qrcode} className="css-9pa8cd" /></div>
          <div className="css-1dbjc4n r-1awozwy">
            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-rs99b7 r-1loqt21 r-1ugchlj r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" style={{ borderColor: "rgb(0, 147, 255)", borderRadius: "22px", transitionDuration: "0s", width: "158px" }}>
              <div dir="auto" className="css-901oao r-1jrmi80 r-adyw6z" onClick={onButtonClick}>Save Picture</div>
            </div>
            <div dir="auto" className="css-901oao r-y8nl5v" style={{ color: "rgb(151, 151, 151)", fontSize: "16px", marginTop: "14px", textAlign: "center", width: "268px" }}>*Please long press the picture when the button cannot be clicked</div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose} animation={false}>

          <Modal.Body>
            <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "286px", top: "331px", width: "402px" }}>
              <div className="css-1dbjc4n r-1awozwy r-1777fci r-s9qnr1">
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci">
                  <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010">
                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${error})` }}></div>
                    <img alt="" draggable="false" src={error} className="css-9pa8cd" /></div>
                  <div dir="auto" className="css-901oao" style={{ fontSize: "24px", marginLeft: "14px" }}>You have unfinished transactions</div>
                </div>
                {/* <h1>{location.state.state}</h1> */}
                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginTop: "46px", transitionDuration: "0s", width: "326px" }}>
                  <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={handleContinue} >Continue Processing</div>
                </div>
                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-sga3zk r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginTop: "46px", transitionDuration: "0s", width: "326px" }}>
                  <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={() => navigate(-1)}>Cancel it</div>
                </div>
              </div>
            </div>
          </Modal.Body>


        </Modal>
        <div className="css-1dbjc4n r-18u37iz r-1wtj0ep r-1no09lo">
          <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z" style={{ fontWeight: "600", paddingRight: "28px" }}>Use the following app to scan the code to pay</div>
          <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "22px", width: "22px" }} onClick={()=>navigate("/help")}>
              <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${questionIconGrey})` }}></div><img alt="" draggable="false" src={questionIconGrey} className="css-9pa8cd" /></div>
          </div>
        </div>
        <div className="css-1dbjc4n r-18u37iz r-1wtj0ep" style={{ marginTop: "22px" }}>
          <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-z2wwpe r-rs99b7 r-1loqt21 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" onClick={() => handlePay("phonepe")} style={{ backgroundColor: "rgb(244, 244, 244)", borderColor: "rgb(204, 204, 204)", height: "102px", transitionDuration: "0s", width: "102px" }}>
            <div className="css-1dbjc4n r-1mlwlqe r-98c09q r-1udh08x r-417010" style={{ width: "68px" }}>
              <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${chooseTypeM4B})` }}></div>
              <img alt="" draggable="false" src={chooseTypeM4B} className="css-9pa8cd" /></div>
          </div>
          <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-z2wwpe r-rs99b7 r-1loqt21 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" onClick={() => handlePay("paytm")} style={{ backgroundColor: "rgb(244, 244, 244)", borderColor: "rgb(204, 204, 204)", height: "102px", transitionDuration: "0s", width: "102px" }}>
            <div className="css-1dbjc4n r-1mlwlqe r-98c09q r-1udh08x r-417010" style={{ width: "68px" }}>
              <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${chooseTypeM3B})` }}></div><img alt="" draggable="false" src={chooseTypeM3B} className="css-9pa8cd" /></div>
          </div>
          <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-z2wwpe r-rs99b7 r-1loqt21 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" onClick={() => handlePay("amazon")} style={{ backgroundColor: "rgb(244, 244, 244)", borderColor: "rgb(204, 204, 204)", height: "102px", transitionDuration: "0s", width: "102px" }}>
            <div className="css-1dbjc4n r-1mlwlqe r-98c09q r-1udh08x r-417010" style={{ width: "68px" }}>
              <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${chooseTypeM1B})` }}></div><img alt="" draggable="false" src={chooseTypeM1B} className="css-9pa8cd" /></div>
          </div>
          <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-z2wwpe r-rs99b7 r-1loqt21 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr" onClick={() => handlePay("gpay")} style={{ backgroundColor: "rgb(244, 244, 244)", borderColor: "rgb(204, 204, 204)", height: "102px", transitionDuration: "0s", width: "102px" }}>
            <div className="css-1dbjc4n r-1mlwlqe r-98c09q r-1udh08x r-417010" style={{ width: "68px" }}>
              <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${chooseTypeM2B})` }}></div><img alt="" draggable="false" src={chooseTypeM2B} className="css-9pa8cd" /></div>
          </div>
        </div>
        <div dir="auto" className="css-901oao r-5zpi7z r-adyw6z r-1no09lo" >Tips</div>
    <div dir="auto" className="css-901oao r-adyw6z r-17rnw9f" style={{color: "rgb(151, 151, 151)", marginTop: "22px"}}>Please use the QR code payment function of the APP to complete the payment of ₹100.</div>
    <div dir="auto" className="css-901oao r-adyw6z r-17rnw9f" style={{color: "rgb(151, 151, 151)", marginTop: "22px"}}>The transaction funds are guaranteed by the FieWin platform throughout the process, which is very safe.</div>
      </div>
    </>
  )
}
// redux connect
const mapStateToProps = (state) => ({
  res1: state.recharge,

  res: state.rechargeTrans
});

export default connect(mapStateToProps)(QRCode);