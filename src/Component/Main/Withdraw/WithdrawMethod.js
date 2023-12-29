import React from 'react'
import { connect } from 'react-redux'
import { WithdrawAccountDataCancelDetails } from '../../../redux/action/FetchData'
const WithdrawMethod = ({ res_data, dispatch, res }) => {
    const handleClick = (id) => {
        dispatch(WithdrawAccountDataCancelDetails(id))
    }
    return (
        <>
            {res_data.data.map((data) => {
                return (
                    <>
                        <div style={{ backgroundColor: "aliceblue", margin: "10px" }}>
                            <div style={{ display: "grid", gap: "15px", gridTemplateColumns: "40% 40% 20%", borderBottom: "1px solid gray", padding: "10px" }}>
                                <div >
                                    <p>Point</p>
                                    <p>{data.point}</p>
                                </div>
                                <div>
                                    <p>time</p>
                                    <p>{data.date}</p>
                                </div>
 <div></div>
                                <div>
                                    <p>state</p>
                                    <p style={{ color: "green" }}>{data.status == 0 ? "pending" : data.status = "2" ? "cancelled" : "completed"}</p>
                                </div>
                            </div>
                            <div style={{ display: "grid", gap: "5px", gridTemplateColumns: "auto auto ", padding: "10px" }}>
                                <div>
                                    <span>Actually arrived:{(data.point - data.fee)}</span><br />
                                    <span>{data.name}</span><br />
                                    <span>{data.account}</span><br />
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    <span>fee:{data.fee}</span>
                                </div>
                            </div>
                            <p style={{ textAlign: "center", cursor: "pointer" }} onClick={() => handleClick(data._id)}>{data.status == 0 ? "cancel withdraw" : ""}</p>
                        </div>
                    </>
                )
            })}
        </>
    )
}
// redux connect
const mapStateToProps = (state) => ({
    res: state.cancelWithdraw,

});

export default connect(mapStateToProps)(WithdrawMethod);