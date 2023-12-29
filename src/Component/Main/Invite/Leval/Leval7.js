import React from 'react'
import agImg3 from "../../../../images/agImg3.png"
import agImg2 from "../../../../images/agImg2.png"
import agImg1 from "../../../../images/agImg1.png"
import swal from "sweetalert";

const Leval7 = ({ status, setFinal }) => {
    const handleSwal = () => {
        swal({
            text: "Please complete task first",
            timer: 1400,
        });
    }

    const handleClick = () => {
        setFinal(true)
    }
   
    return (
        <>
            <div className="css-1dbjc4n r-14lw9ot r-kdyh1x r-1s2bzr4 r-1ehh1yr r-12v598i">
                <div dir="auto" className="css-901oao r-1i88nnc r-yy2aun r-b88u0q">Reward conditions:</div>
                <div dir="auto" className="css-901oao r-1i88nnc r-evnaw r-l71dzp" style={{ marginBottom: "2px" }}>Invite 10000 effective user to receive it.</div>
                <div dir="auto" className="css-901oao r-1i88nnc r-yy2aun r-b88u0q">Upgrade skills:</div>
                <div dir="auto" className="css-901oao r-1i88nnc r-evnaw r-l71dzp"> 1.Expand the scope of sending promotional content ,including adding more Facebook groups ,Whatshapp groups ,Instargram,Youtube comments,Telegram groups.</div>
                <div dir="auto" className="css-901oao r-1i88nnc r-evnaw r-tw8zf3 r-l71dzp"> 2.Increase the frequency of sending content .</div>
                
                
                {status == "0" ?
                    <>
                        <div
                            data-focusable="true"
                            tabIndex="0"
                            className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-1b6hpt1 r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ backgroundColor: "rgb(242, 123, 34)", transitionDuration: " 0s", padding: "4%", margin: "4%" }}
                            onClick={handleSwal}
                        >
                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Receive award</div>
                        </div>
                    </> :
                    status == "1" ?
                        <>
                            <div
                                data-focusable="true"
                                tabIndex="0"
                                className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-1k9zyfm r-1777fci r-1b6hpt1 r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                                style={{ backgroundColor: "rgb(242, 123, 34)", transitionDuration: " 0s", padding: "4%", margin: "4%" }}
                                onClick={handleClick}
                            >
                                <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q">Receive award</div>
                            </div>
                        </> :
                        <>
                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-14lw9ot r-1dzdj1l r-rs99b7 r-ux0bpq r-1loqt21 r-18u37iz r-tumt6t r-1777fci r-1b6hpt1 r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr" style={{ borderColor: "rgb(242, 123, 34)", transitionDuration: "0s", padding: "4%", margin: "4%" }}>
                                <div dir="auto" className="css-901oao r-evnaw r-b88u0q" style={{ color: "rgb(242, 123, 34)" }}>Received</div></div>
                        </>
                }

            </div>

        </>
    )
}

export default Leval7