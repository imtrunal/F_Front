import React, {useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { DeleteAccountDetails, UserAccountDetails } from '../../../redux/action/FetchData'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import arrowLeft from "../../../images/arrowLeft.png"
import checked from "../../../images/checked.png"
import rubishIcon from "../../../images/rubishIcon.png"


const BankCard = ({ dispatch, res, res1 }) => {
    const params = useParams()
    const [modal, setModal] = useState(false)
    const [state, setState] = useState("")

    useEffect(() => {
        dispatch(UserAccountDetails())
    }, [dispatch])
    const navigate = useNavigate()
    const handleDelete = (id) => {
        const data = { id: id }
        dispatch(DeleteAccountDetails(data))
    }
    const handleSelect = (mode, name, number, ifsc) => {
        navigate(`/withdraw/${params.id}`, { state: { mode: mode, name, number, ifsc } })
    }
    const handleModal = (data) => {
        setModal(true)
        setState(data)
    }
    return (
        <>
            <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                <div className="css-1dbjc4n r-13awgt0 r-12vffkv">
                    <div className="css-1dbjc4n r-14lw9ot r-1pi2tsx r-97e31f r-bv2aro r-hxflta r-10xqauy r-bnwqim r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-uxrrfj r-1777fci r-p1pxzi r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)" }}>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-uxrrfj r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                                <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", width: "16px" }} onClick={() => navigate(`/withdraw/${params.id}`)}>
                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${arrowLeft})` }}></div>
                                    <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" />
                                </div>
                            </div>
                            <div dir="auto" className="css-901oao r-b88u0q" style={{ color: "rgb(0, 0, 0)", fontSize: "26px", textAlign: "center" }}>Payment Methods</div>
                        </div>
                        {res.data.data && res.data.data.map((data) => {
                            return (
                                <>
                                    {/* <div style={{ backgroundColor: "aliceblue", padding: "55px", margin: "10px", position: "relative" }} onClick={()=>handleSelect(data.mode,data.name,data.mode ==1 ?data.account_number:data.upi_address,data.ifsc)}>
                                            <div style={{ backgroundColor: "blue", width: "fit-content", padding: "10px 20px ", color: "white", left: "5px", position: "absolute", top: "0px" }}>{data.mode == 0?"Upi":"Bank"}</div>
                                            <div style={{ textAlign: "center" }}>
                                                <p>{data.name}</p>
                                                <p>{data.mode == 1 ? data.account_number :data.upi_address}</p>
                                            </div>
                                            <DeleteOutlineIcon style={{ float: "right" }} onClick={()=>handleDelete(data._id)}/>
                                        </div> */}
                                    <div className="css-1dbjc4n" style={{ paddingRight: "20px", paddingLeft: "20px" }} onClick={()=>handleSelect(data.mode,data.name,data.mode ==1 ?data.account_number:data.upi_address,data.ifsc_code)}>
                                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1nt8t1s r-ji1w04 r-1dzdj1l r-eg6o18 r-rs99b7 r-deolkf r-1loqt21 r-11c0sde r-1udh08x r-whuqzp r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-417010" style={{ height: "42px", width: "42px" }}>
                                                <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${checked})` }}></div><img alt="" draggable="false" src={checked} className="css-9pa8cd" /></div>
                                            <div dir="auto" className="css-901oao r-2mrr8d r-1dpl46z r-notknq r-jwli3a r-evnaw r-195d4m8 r-1d2f490 r-tqlgve r-u8s1d r-q4m81j r-1evm3xx r-iv112m">Bank</div>
                                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-h0d30l r-u8s1d r-1evm3xx r-1otgn73 r-1i6wzkk r-lrvibr r-1iww7jx" style={{ right: "58px", transitionDuration: "0s" }}>
                                                <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010" onClick={() => handleModal(data._id)}>
                                                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${rubishIcon})` }}></div><img alt="" draggable="false" src={rubishIcon} className="css-9pa8cd" /></div>
                                            </div>
                                            <div className="css-1dbjc4n r-1v1z2uz r-13qz1uu">
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1444osr">
                                                    <div dir="auto" className="css-901oao r-1az3528 r-evnaw">Name</div>
                                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{data.name}</div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1444osr">
                                                    <div dir="auto" className="css-901oao r-1az3528 r-evnaw">IFSC</div>
                                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{data.ifsc_code}</div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1444osr">
                                                    <div dir="auto" className="css-901oao r-1az3528 r-evnaw">Account Number</div>
                                                    <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{data.mode == 1 ? data.account_number : data.upi_address}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-bnwqim r-1sncvnh" style={{ height: "828px" }}>
                            <div className="css-1dbjc4n" onClick={() => navigate(`/AddBankCard/${params.id}`)}>
                                <div className="css-1dbjc4n r-d9fdf6"></div>
                                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-uvuy5l r-1777fci r-1fdju74 r-1no09lo r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                    <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" style={{ margin: "20px" }}>+ New Bank Account</div>
                                </div>
                                <div className="css-1dbjc4n r-cb25cm r-1k25im9" style={{ marginTop: "26px" }}></div>
                            </div>
                        </div>
                    </div>



                    {modal &&
                        <div className="css-1dbjc4n r-1awozwy r-2tavb8 r-1p0dtai r-16y7rff r-1d2f490 r-1xcajam r-zchlnj r-ipm5af" style={{ zIndex: "99" }} >
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                <div dir="auto" className="css-901oao"></div>
                            </div>
                            <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "254px", top: "399.5px", width: "402px" }}>
                                <div className="css-1dbjc4n r-1awozwy r-1wtj0ep" style={{ padding: "32px" }}>
                                    <div dir="auto" className="css-901oao r-5zpi7z r-1x35g6">Do you want to remove Bank Account information?</div>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-1v1z2uz">
                                        <div data-focusable="true" tabIndex="0" onClick={() => setModal(false)} className="css-1dbjc4n r-1awozwy r-1dzdj1l r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ backgroundColor: "rgb(214, 214, 214)", boxShadow: "none", transitionDuration: "0s", width: "134px" }}>
                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">No</div>
                                        </div>
                                        <div data-focusable="true" tabIndex="0" onClick={() => handleDelete(state)} className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-ltgprq r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s", width: "188px" }}>
                                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Yes,I`m sure</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        </>
    )
}

// redux connect
const mapStateToProps = (state) => ({
    res: state.userAcc,
    res1: state.delteAccount
});

export default connect(mapStateToProps)(BankCard);




