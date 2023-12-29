import  React, {useState, useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import rechargeUploadImg from "../../../images/rechargeUploadImg.png"
import { connect } from 'react-redux';
import swal from "sweetalert"
import Swal from "sweetalert2";
import arrowLeft from "../../../images/arrowLeft.png"
import { ComplaintDataDetails } from '../../../redux/action/FetchData';
const Complaint = ({ res, dispatch }) => {
    const current = new Date();
    const navigate = useNavigate()
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const time = `${current.getHours()}:${current.getMinutes()}`;
    const location = useLocation()
    const login_data = JSON.parse(sessionStorage.getItem('login'))

    useEffect(() => {
        if (location.state.p_method == "gpay") {
            setState({...state, p_method: 1 })
        }
        else if (location.state.p_method == "paytm") {
            setState({...state, p_method: 2 })
        } else if (location.state.p_method == "phonepe") {
            setState({...state, p_method: 3 })
        } else {
            setState({...state, p_method: 7 })
        }
    }, [])
    const [state, setState] = useState({
        reason: "",
        p_method: "",
        payee_account: location.state.account,
        time: date,
        payment_account: "",
        u_transaction_id: "",
        transaction_id: location.state.transactionId,
        file: "", userId: login_data.user_id
    })
    const [users, setUser] = useState("")
    const [file, setFile] = useState("")
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name == "file") {
            setUser(e.target.files[0])
            setState({
                ...state,
                file: e.target.files[0]
            })

            var reader = new FileReader();

            reader.onload = function (e) {
                setFile(e.target.result)
            }

            reader.readAsDataURL(e.target.files[0]);
        }
        setState({
            ...state, [name]: value
        })
    }
    const handleClick = () => {
        if (!state.reason || !state.p_method || !state.payment_account || !state.u_transaction_id || !state.file) {


            swal({ text: "Please input reason for complaint", icon: "info", timer: 2000 })
        }


        else {
            Swal.fire({
                html:
                    "Submitted Successfully ,we will  process it as soon  as possible",
                showCancelButton: false,

                confirmButtonText: "Ok",
                confirmButtonColor: "rgb(0, 147, 255)"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    let formData = new FormData()
                    formData.append("reason", state.reason)
                    formData.append("p_method", state.p_method)
                    formData.append("payee_account", state.payee_account)
                    formData.append("time", state.time)
                    formData.append("payment_account", state.payment_account)
                    formData.append("u_transaction_id", state.u_transaction_id)
                    formData.append("file", users)
                    formData.append("transaction_id", state.transaction_id)
                    formData.append("userId", state.userId)
                    dispatch(ComplaintDataDetails(formData))
                    
                }
            });
        }
        
    }
useEffect(()=>{
  if(res.data.status == true){
    navigate(-1 ,{state:{pending:"1"}})
  }
},[res])
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-14lw9ot r-1ub9p5i r-cqs64b r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu " style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                            <div className="css-1dbjc4n r-1awozwy r-1sn7ly2 r-1777fci r-bnwqim r-13qz1uu r-sga3zk" style={{ backgroundColor: "rgb(255, 255, 255)", borderBottomColor: "rgb(241, 241, 241)", borderBottomWidth: "1px", marginBottom: "0px" }}>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-1sn7ly2 r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                                    <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "26px", width: "16px" }} onClick={() => navigate(-1)}>
                                        <div
                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                            style={{ backgroundImage: `url(${arrowLeft})` }}
                                        ></div>
                                        <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" />
                                    </div>
                                </div>
                                <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(0, 0, 0)", fontSize: "24px", textAlign: "center" }}>Complaint</div>
                            </div>
                            <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{ height: "833px" }}>
                                <div className="css-1dbjc4n">
                                    <div className="css-1dbjc4n" style={{ padding: "28px" }}>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1nxhmzv">
                                            <div dir="auto" className="css-901oao r-5zpi7z r-1i10wst r-17rnw9f r-1slx73v">Reason for complaint</div>
                                            <input
                                                placeholder="Enter"
                                                autoCapitalize="sentences"
                                                autoComplete="on"
                                                autoCorrect="on"
                                                dir="auto"
                                                spellCheck="true"
                                                type="text"
                                                data-focusable="true"
                                                name="reason"
                                                className="css-11aywtz r-n2h5ot r-ry2h4h r-kdyh1x r-rs99b7 r-102gzdx r-kgusq2 r-779j7e r-bnwqim r-1f720gc"
                                                value={state.reason}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1nxhmzv">
                                            <div dir="auto" className="css-901oao r-5zpi7z r-1i10wst r-17rnw9f r-1slx73v">Payment method</div>
                                            <div className="css-1dbjc4n r-n2h5ot r-ry2h4h r-kdyh1x r-rs99b7 r-102gzdx r-kgusq2 r-779j7e r-bnwqim r-1f720gc">
                                                <select style={{ position: "absolute", left: "0px", top: "0px", height: "100%", width: "100%", borderColor: "transparent" }} name="p_method"
                                                    onClick={handleChange}>
                                                    <option value="3">PhonePe</option>
                                                    <option value="2">Paytm</option>
                                                    <option value="7">AmazonPay</option>
                                                    <option value="1">GooglePay</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1nxhmzv">
                                            <div dir="auto" className="css-901oao r-5zpi7z r-1i10wst r-17rnw9f r-1slx73v">Payee account</div>
                                            <input
                                                placeholder="Enter the account"
                                                autoCapitalize="sentences"
                                                autoComplete="on"
                                                autoCorrect="on"
                                                dir="auto"
                                                spellCheck="true"
                                                type="text"
                                                data-focusable="true"
                                                className="css-11aywtz r-n2h5ot r-ry2h4h r-kdyh1x r-rs99b7 r-102gzdx r-kgusq2 r-779j7e r-bnwqim r-1f720gc"
                                                value={state.payee_account}
                                                name='payee_account'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1nxhmzv">
                                            <div dir="auto" className="css-901oao r-5zpi7z r-1i10wst r-17rnw9f r-1slx73v">Transfer time</div>
                                            <div className="css-1dbjc4n r-n2h5ot r-ry2h4h r-kdyh1x r-rs99b7 r-102gzdx r-1777fci r-kgusq2 r-779j7e r-bnwqim r-1f720gc">
                                                <div className="css-1dbjc4n r-bnwqim">
                                                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}><div dir="auto" className="css-901oao">{date} {time}</div></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1nxhmzv">
                                            <div dir="auto" className="css-901oao r-5zpi7z r-1i10wst r-17rnw9f r-1slx73v">Payment account</div>
                                            <input
                                                placeholder="Input the number"
                                                autoCapitalize="sentences"
                                                autoComplete="on"
                                                autoCorrect="on"
                                                dir="auto"
                                                spellCheck="true"
                                                type="text"
                                                data-focusable="true"
                                                className="css-11aywtz r-n2h5ot r-ry2h4h r-kdyh1x r-rs99b7 r-102gzdx r-kgusq2 r-779j7e r-bnwqim r-1f720gc"
                                                value={state.payment_account}
                                                onChange={handleChange}
                                                name="payment_account"
                                            />
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1nxhmzv">
                                            <div dir="auto" className="css-901oao r-5zpi7z r-1i10wst r-17rnw9f r-1slx73v">UPI Transaction ID</div>
                                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr r-1f720gc" style={{ transitionDuration: "0s" }}>
                                                <input
                                                    placeholder="Input the number"
                                                    autoCapitalize="sentences"
                                                    autoComplete="on"
                                                    autoCorrect="on"
                                                    dir="auto"
                                                    spellCheck="true"
                                                    type="text"
                                                    aria-disabled="true"
                                                    disabled=""
                                                    tabIndex="-1"
                                                    className="css-11aywtz r-n2h5ot r-ry2h4h r-kdyh1x r-rs99b7 r-102gzdx r-kgusq2 r-779j7e r-bnwqim r-13qz1uu"
                                                    value={state.u_transaction_id}
                                                    name="u_transaction_id"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-18u37iz r-1wtj0ep r-1nxhmzv" style={{ alignItems: "flex-start" }}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-1i10wst r-17rnw9f r-1slx73v">Screenshot</div>
                                            <div className="css-1dbjc4n r-13awgt0">
                                                {state.file ?

                                                    <>
                                                        <div className="css-1dbjc4n r-bnwqim" style={{ height: "184px", width: "146px" }}>
                                                            <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010">
                                                                <div
                                                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                    style={{ backgroundImage: `url(${file})` }}
                                                                ></div>
                                                                <img alt="" draggable="false" src={file} className="css-9pa8cd" />
                                                            </div>
                                                        </div>
                                                    </> :

                                                    <div className="css-1dbjc4n r-bnwqim" style={{ height: "184px", width: "146px" }}>
                                                        <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010">
                                                            <div
                                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                                style={{ backgroundImage: `url(${rechargeUploadImg})` }}
                                                            ></div>
                                                            <img alt="" draggable="false" src={rechargeUploadImg} className="css-9pa8cd" />
                                                        </div>
                                                        <input type="file" accept="image/*" style={{ width: "100%", height: "100%", position: "absolute", left: "0px", top: "0px", opacity: " 0" }} name="file" onChange={handleChange} />
                                                    </div>

                                                }
                                            </div>
                                        </div>
                                        <div
                                            data-focusable="true"
                                            tabIndex="0"
                                            className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uvuy5l r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                            style={{ marginTop: "16px", transitionDuration: "0s" }}
                                            onClick={handleClick}
                                        >
                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" >Confirm</div>
                                        </div>
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


    res: state.complaint,

});

export default connect(mapStateToProps)(Complaint);