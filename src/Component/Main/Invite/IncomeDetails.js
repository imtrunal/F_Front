import  React, {useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import arrowLeft from "../../../images/arrowLeft.png"
import { connect } from 'react-redux'
import { IncomeDetails } from '../../../redux/action/FetchData'
const IncomeDetail = ({ dispatch, res }) => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        all: true,
        withdraw: false,
        order: false,
        ranking: false,
        invite: false,
        effective: false,
        other: false
    })
    const handleChange = (e) => {
        const { value } = e.target
        if (value == "all") {
            dispatch(IncomeDetails("11"))
            setState({
                all: true,
                withdraw: false,
                order: false,
                ranking: false,
                invite: false,
                effective: false,
                other: false
            })
        }
        else if (value == "withdraw") {
            dispatch(IncomeDetails("7"))

            setState({
                all: false,
                withdraw: true,
                order: false,
                ranking: false,
                invite: false,
                effective: false,
                other: false
            })
        }
        else if (value == "order") {
            dispatch(IncomeDetails("50"))

            setState({
                all: false,
                withdraw: false,
                order: true,
                ranking: false,
                invite: false,
                effective: false,
                other: false
            })
        }
        else if (value == "ranking") {
            dispatch(IncomeDetails("53"))

            setState({
                all: false,
                withdraw: false,
                order: false,
                ranking: true,
                invite: false,
                effective: false,
                other: false
            })
        }
        else if (value == "invite") {
            dispatch(IncomeDetails("55"))

            setState({
                all: false,
                withdraw: false,
                order: false,
                ranking: false,
                invite: true,
                effective: false,
                other: false
            })
        }
        else if (value == "effective") {
            dispatch(IncomeDetails("54"))

            setState({
                all: false,
                withdraw: false,
                order: false,
                ranking: false,
                invite: false,
                effective: true,
                other: false
            })
        }
        else {
            dispatch(IncomeDetails("56"))

            setState({

                all: false,
                withdraw: false,
                order: false,
                ranking: false,
                invite: false,
                effective: false,
                other: true
            })
        }
    }


    return (
        <section>
            <div className="container1">
                <div className="row">
                    <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-qklmqi r-102gzdx r-1777fci r-p1pxzi r-bnwqim r-13qz1uu" style={{ borderBottomColor: "rgb(241, 241, 241)" }}>
                        <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1moh23t r-1loqt21 r-102gzdx r-1777fci r-1d2f490 r-u8s1d r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr r-8br3cv" style={{ transitionDuration: "0s" }}>
                            <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "26px", width: "16px" }} onClick={() => navigate(-1)}>
                                <div
                                    className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{ backgroundImage: `url(${arrowLeft})` }}
                                ></div>
                                <img alt="" draggable="false" src={arrowLeft} className="css-9pa8cd" />
                            </div>
                        </div>
                        <div dir="auto" className="css-901oao r-1x35g6 r-b88u0q r-q4m81j" style={{ color: "rgb(0, 0, 0)" }}>IncomeDetails</div>
                    </div>
                </div>
                <div className="volvo">
                    <div className="audi">
                        <select name="cars" id="cars" className="allincome" onChange={handleChange}>
                            <option value="all" className="abces"  >
                                All income types
                            </option>
                            <option value="withdraw" >Withdraw(0)</option>
                            <option value="order" >Order commission(0)</option>
                            <option value="ranking">Ranking rewards(0)</option>
                            <option value="invite" >Invite cash bake(0)</option>
                            <option value="effective" >Effective user reward(0)</option>
                            <option value="other" >Other reward(0)</option>
                        </select>
                        {/* {state.all && <div>sd</div>}
                        {state.withdraw && <div>withdraw</div>}
                        {state.order && <div>order</div>}
                        {state.ranking && <div>ranking</div>}
                        {state.invite && <div>invite</div>}
                        {state.effective && <div>effective</div>}
                        {state.other && <div>other</div>} */}
                        {res.data.data && res.data.data.map((data) => {
                            return (
                                <>
                                    <div className="css-1dbjc4n r-1awozwy r-14lw9ot r-rp7rv6 r-qklmqi r-18u37iz r-1wtj0ep r-1idfib4 r-bnwqim">
                                        <div className="css-1dbjc4n r-1mlwlqe r-1sn7ly2 r-1udh08x r-8br3cv r-417010">
                                            <div
                                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                                style={{ backgroundImage: `url(${data.image})` }}
                                            ></div>
                                            <img alt="" draggable="false" src={data.image} className="css-9pa8cd" />
                                        </div>
                                        <div className="css-1dbjc4n r-1xbt88q r-1uvorsx r-u8s1d" style={{ marginLeft: "23%" }}>
                                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">{data.comment}</div>
                                            <div dir="auto" className="css-901oao r-3zb0rz r-1i10wst r-1wzrnnt">{new Date(data.createdAt).getMonth() + 1 + "/" + ('0' + new Date(data.createdAt).getDate()).slice(-2) + "  " + ('0' + new Date(data.createdAt).getHours()).slice(-2) + ':' + ('0' + new Date(data.createdAt).getMinutes()).slice(-2)} from {data.participantUserId}</div>
                                        </div>
                                        <div className="css-1dbjc4n r-obd0qt"><div dir="auto" className="css-901oao r-5zpi7z r-yy2aun">{data.type == "7" ? "-" : "+"}₹{data.points}</div></div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}


// redux connect
const mapStateToProps = (state) => ({
    res: state.income,

});

export default connect(mapStateToProps)(IncomeDetail);