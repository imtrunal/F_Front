import  React,{ useState, useEffect } from 'react'
import Countdown from 'react-countdown';
import { connect } from 'react-redux'
import { RechargeStatusParity } from '../../../redux/action/FetchData'
import clock from "../../../images/clock.gif"
const ContDown = ({ onhandle, dispatch, res }) => {
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            const trancationId = localStorage.getItem("id")

            const data = { transactionId: trancationId}
            dispatch(RechargeStatusParity(data))
            
            // Render a completed state
            //   return <Completionist />;
        } else {
            // Render a countdown
            return <span>{seconds}</span>;
        }
    };
    return (
        <div>
            <div className="css-1dbjc4n r-1awozwy r-1777fci" style={{ borderRadius: "38px", height: "74px", width: "74px" }}>
                <div className="css-1dbjc4n r-1p0dtai r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-1wyyakw" style={{ height: "74px", width: "74px" }}>
                    <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${clock})` }}>
                    </div>
                    <img alt="" draggable="false" src={clock} className="css-9pa8cd" /></div>
                <div dir="auto" className="css-901oao r-jwli3a r-b88u0q" style={{ fontSize: "34px" }}>
                    <Countdown
                        date={Date.now() + 30000}
                        renderer={renderer}
                    /></div></div>

        </div>
    );
};


// redux connect
const mapStateToProps = (state) => ({


    res1: state.RechargeStatus,

});

export default connect(mapStateToProps)(ContDown);