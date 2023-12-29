import { data } from 'jquery'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { useNavigate } from 'react-router-dom'
import help from "../../../images/help.png"
import icon02 from "../../../images/icon02.png"

const FastRecords = (props) => {
    const navigate = useNavigate()
    const handleNavigate = (amount, transactionId, paymentMethod, Payee_account) => {
        navigate("/transcation", { state: { state: amount, transactionId: transactionId, p_method: paymentMethod, account: Payee_account } })

    }
    const handlePending = () => {

    }
    return (
        <>




            <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-v1ni73 r-11yh6sk r-1rnoaur r-1shbetn r-1aminmm r-18f9sac r-1sncvnh r-1lrpoqb" style={{ backgroundColor: "rgb(245, 245, 245)" }}>
                <div className="css-1dbjc4n">
                    <div className="css-1dbjc4n">
                        {props.res_data ? props.res_data.map((data) => {
                            return (
                                <>
                                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-14lw9ot r-rpao8l r-kdyh1x r-rs99b7 r-1loqt21 r-1cad53l r-1slz7xr r-bnwqim r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s", marginTop: "20px" }} onClick={() => handleNavigate(data.amount, data.transactionId, data.paymentMethod, data.Payee_account)}>
                                        {data.status == "1" ?
                                            <div dir="auto" className="css-901oao r-18rr6lj r-1vc3o35 r-xem82l r-jwli3a r-evnaw r-b88u0q r-1iud8zs r-1d2f490 r-tqlgve r-qi0n3 r-1w3nwou r-u8s1d r-1evm3xx" style={{ backgroundColor: "rgb(68, 219, 94)" }}>Completed</div>
                                            : data.status == "2" ?
                                                <div dir="auto" className="css-901oao r-18rr6lj r-1vc3o35 r-xem82l r-jwli3a r-evnaw r-b88u0q r-1iud8zs r-1d2f490 r-tqlgve r-qi0n3 r-1w3nwou r-u8s1d r-1evm3xx" style={{ backgroundColor: "rgb(157, 160, 165)" }}>Canceled</div>
                                                : data.status == "3" ?
                                                    <div dir="auto" className="css-901oao r-18rr6lj r-1vc3o35 r-xem82l r-jwli3a r-evnaw r-b88u0q r-1iud8zs r-1d2f490 r-tqlgve r-qi0n3 r-1w3nwou r-u8s1d r-1evm3xx" style={{ backgroundColor: "rgb(157, 160, 165)" }}>Failed</div>
                                                    : data.status == "4" ?
                                                        <div dir="auto" className="css-901oao r-18rr6lj r-1vc3o35 r-xem82l r-jwli3a r-evnaw r-b88u0q r-1iud8zs r-1d2f490 r-tqlgve r-qi0n3 r-1w3nwou r-u8s1d r-1evm3xx" style={{ backgroundColor: "rgb(157, 160, 165)" }}>Time Out</div>
                                                        : ""
                                        }
                                        <div className="css-1dbjc4n r-18u37iz r-1wtj0ep">
                                            <div dir="auto" className="css-901oao r-5zpi7z r-3i2nvb r-b88u0q" style={{ marginTop: "54px" }}>{data.amount}<span className="css-901oao css-16my406" style={{ fontSize: "16px" }}>point</span></div>
                                            <div className="css-1dbjc4n r-obd0qt">
                                                <div dir="auto" className="css-901oao r-rs3z27" style={{ fontSize: "20px" }}>{data.updatedAt}</div>
                                                <div className="css-1dbjc4n r-1awozwy r-1nt8t1s r-ji1w04 r-16uyjmq r-rs99b7 r-ur6pnr r-1777fci r-6gpygo r-1444osr r-1pn2ns4 r-1kesqaa">
                                                    <div className="css-1dbjc4n r-1mlwlqe r-1pi2tsx r-1udh08x r-13qz1uu r-417010">
                                                        <div
                                                            className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                            style={{ backgroundImage: `url(${icon02})` }}
                                                        ></div>
                                                        <img alt="" draggable="false" src={icon02} className="css-9pa8cd" />
                                                    </div>
                                                </div>
                                                <div dir="auto" className="css-901oao r-rs3z27 r-adyw6z">{data.Payee_account}</div>
                                                {data.Compaint == "1" ?
                                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci" style={{ marginBottom: "42px", marginTop: "14px" }}>
                                                        <div dir="auto" className="css-901oao" style={{ color: "rgb(151, 151, 151)", textAlign: "center" }}>Complaint handling progress:<span className="css-901oao css-16my406" style={{ color: "rgb(0, 198, 124)" }}>Pending</span></div><div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginLeft: "8px", transitionDuration: "0s" }}><div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "22px", width: "22px" }}><div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" 
                                                        style={{ backgroundImage: `url(${help}`}}>

                                                        </div>
                                                            <img alt="" draggable="false" src={help} className="css-9pa8cd" 
                                                            onClick={handlePending} /></div></div>
                                                    </div>
                                                    : data.Compaint == "2" ?
                                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci" style={{ marginBottom: "42px", marginTop: "14px" }}>
                                                            <div dir="auto" className="css-901oao" style={{ color: "rgb(151, 151, 151)", textAlign: "center" }}>Complaint handling progress:<span className="css-901oao css-16my406" style={{ color: "rgb(255, 22, 0)" }}>Invalid</span></div><div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ marginLeft: "8px", transitionDuration: "0s" }}><div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "22px", width: "22px" }}><div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                             style={{ backgroundImage: `url(${help}`}}>

                                                             </div>
                                                                <img alt="" draggable="false" src={help} className="css-9pa8cd"
                                                                 onClick={handlePending} /></div></div>
                                                        </div> : ""}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )})
                            :
                            <>
                            <div dir="auto" className="css-901oao r-14lw9ot r-1dzdj1l" style={{lineHeight: "138px", marginRight: "28px", marginLeft: "28px", textAlign: "center"}}>No Order</div>
                            </>
                        }
                    </div>

                </div>
            </div>

        </>
    )
}

export default FastRecords