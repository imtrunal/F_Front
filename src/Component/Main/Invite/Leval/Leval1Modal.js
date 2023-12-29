import React,{useState} from 'react'

const Leval1Modal = ({show}) => {
    const [status, setStatus] = useState(false)

    const [que1, setQue1] = useState({
        ans1: false,
        ans2: false,
        ans3: false

    })
    const [que2, setQue2] = useState({
        ans1: false,
        ans2: false,
        ans3: false

    })
    const handleQue1 = (val1, val2) => {
        if (val1 == "que1") {
            setQue1({
                ...que1,
                [val2]: !que1[val2]
            })
        }
        else {
            setQue2({
                ...que2,
                [val2]: !que2[val2]
            })
        }
    }
    const handleClick = () => {
        if (que1["ans3"] == true && que2["ans3"] == true) {
           show("3.00","bronze",1)
        }
        else {
            setStatus(true)
        }
    }
  return (
    <div className="css-1dbjc4n r-1awozwy r-2tavb8 r-1p0dtai r-1ub9p5i r-1d2f490 r-1xcajam r-zchlnj r-ipm5af r-dvx3qi" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: "99" }}>
    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
        <div dir="auto" className="css-901oao"></div>
    </div>
    <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "648px", top: "150px", width: "402px" }}>
        <div className="css-1dbjc4n r-1pi2tsx r-ikwi4x r-oejqat r-bnwqim" style={{ padding: "28px" }}>
            <div className="text-center"><h4> <b>Congratulation</b></h4></div>
            <div className="text-center pt-5"><span className="fs-5 ">Answer the following questions you can receive rewards!</span></div>
            <div className=" pt-5"><span className="fs-5 "><b>1. Invite ! person to register ,how many rewards can i get immediately?</b></span></div>
            <div className="row">
                <div className="col-4" onClick={() => handleQue1("que1", "ans1")}>
                    <div className="box" style={{ border: que1["ans1"] && "2px solid orange" }}>No reward</div>
                </div>
                <div className="col-4" onClick={() => handleQue1("que1", "ans2")}>
                    <div className="box" style={{ border: que1["ans2"] && "2px solid orange" }}>₹0.1</div>
                </div>
                <div className="col-4" onClick={() => handleQue1("que1", "ans3")}>
                    <div className="box" style={{ border: que1["ans3"] && "2px solid orange" }}>₹1</div>
                </div>
            </div>

            <div className=" pt-5"><span className="fs-5 "><b>2.How much can i claim for the ₹1 invitation registartion reward? </b></span></div>
            <div className="row">
                <div className="col-4" onClick={() => handleQue1("que2", "ans1")}>
                    <div className="box" style={{ border: que2["ans1"] && "2px solid orange" }}>&#60;₹100</div>
                </div>
                <div className="col-4" onClick={() => handleQue1("que2", "ans2")}>
                    <div className="box" style={{ border: que2["ans2"] && "2px solid orange" }}>&#60;₹10000</div>
                </div>
                <div className="col-4" onClick={() => handleQue1("que2", "ans3")}>
                    <div className="box" style={{ border: que2["ans3"] && "2px solid orange" }}>No upper limit</div>
                </div>
            </div>
            {status && <div dir="auto" className="css-901oao r-2agvir" style={{ color: "rgb(242, 123, 34)", fontSize: "20px", marginBottom: "14px", opacity: "1", textAlign: "center" }}>The answer is wrong, please select again</div>}

            <div
                data-focusable="true"
                tabIndex="0"
                className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-1b6hpt1 r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                style={{ backgroundColor: "rgb(242, 123, 34)", transitionDuration: " 0s" }}
                onClick={handleClick}
            >
                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Submit</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Leval1Modal