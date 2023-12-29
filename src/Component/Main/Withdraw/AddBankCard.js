import  React,{ useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { AddAccountDetails } from '../../../redux/action/FetchData'
import arrowLeft from "../../../images/arrowLeft.png"
import swal from 'sweetalert'
const AddBankCard = ({ dispatch, res }) => {
    const navigate = useNavigate()
    const login_data = JSON.parse(sessionStorage.getItem('login'))
    const [state, setState] = useState({
        name: "",
        ifsc_code: "",
        account_number: "", userId: login_data.userId, upi_address: "", mode: 1
    })
  const params =useParams()
    const handleChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }


    const handleClick = (e) => {
        dispatch(AddAccountDetails(state))
    }
    useEffect(() => {
        if (res.loading == false) {
            if(res.data.status == true){

                swal({"text":"Save Successfully","timer":"2000"})
                setTimeout(()=>{
                   navigate(`/BankCard/${params.id}`)
                },[3000])
            }
            else{
                swal({"text":res.data.message,"timer":"2000"})

            }
        }
    }, [res])
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-14lw9ot r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-uxrrfj r-1777fci r-p1pxzi r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-uxrrfj r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", width: "16px" }} onClick={() => navigate(-1)}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${arrowLeft})` }}></div>
                                    <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" />
                                </div>
                            </div>
                            <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(0, 0, 0)", fontSize: "26px", textAlign: "center" }}>My Bank Account</div>
                        </div>
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{ height: "828px" }}>
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-11u4nky r-18u37iz r-1x0uki6 r-i03k3n r-bnwqim">
                                    <div dir="auto" className="css-901oao r-1az3528 r-ubezar r-f9274a r-u8s1d">Actual name</div>
                                    <input placeholder="Please input name" maxLength="999" name="name" value={state.name} onChange={handleChange} autoCapitalize="sentences" autoComplete="on" autoCorrect="on" dir="auto" spellCheck="true" type="text" data-focusable="true" className="css-11aywtz r-14lw9ot r-5zpi7z r-adyw6z r-eu3ka r-nwxazl r-18f9sac r-79n91t r-1ff274t r-13qz1uu"
                                    /></div>
                                <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-11u4nky r-18u37iz r-1x0uki6 r-i03k3n r-bnwqim">
                                    <div dir="auto" className="css-901oao r-1az3528 r-ubezar r-f9274a r-u8s1d">IFSC code</div>
                                    <input placeholder="Please input IFSC" maxLength="999" name="ifsc_code" value={state.ifsc_code} onChange={handleChange} autoCapitalize="sentences" autoComplete="on" autoCorrect="on" dir="auto" spellCheck="true" type="text" data-focusable="true" className="css-11aywtz r-14lw9ot r-5zpi7z r-adyw6z r-eu3ka r-nwxazl r-18f9sac r-79n91t r-1ff274t r-13qz1uu"
                                    /></div>
                                <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-11u4nky r-18u37iz r-1x0uki6 r-i03k3n r-bnwqim">
                                    <div dir="auto" className="css-901oao r-1az3528 r-ubezar r-f9274a r-u8s1d">Account Number</div>
                                    <input placeholder="Please input account number" maxLength="999" name="account_number" value={state.account_number} onChange={handleChange} autoCapitalize="sentences" autoComplete="on" autoCorrect="on" dir="auto" spellCheck="true" type="text" data-focusable="true" className="css-11aywtz r-14lw9ot r-5zpi7z r-adyw6z r-eu3ka r-nwxazl r-18f9sac r-79n91t r-1ff274t r-13qz1uu"
                                    /></div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uvuy5l r-1777fci r-1x0uki6 r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" onClick={handleClick} style={{ marginRight: "28px", marginLeft: "28px", transitionDuration: "0s" }}>
                                    <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Add</div>
                                </div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uvuy5l r-1777fci r-1x0uki6 r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" onClick={() => navigate(-1)} style={{ borderColor: "rgb(168, 168, 168)", borderWidth: "1px", marginRight: "28px", marginLeft: "28px", transitionDuration: "0s" }}>
                                    <div dir="auto" className="css-901oao r-evnaw r-b88u0q" style={{ color: "rgb(102, 102, 102)" }} >Cancel</div>
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

    res: state.addAccount
});

export default connect(mapStateToProps)(AddBankCard);