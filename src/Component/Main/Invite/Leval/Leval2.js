import React from 'react'
import agImg3 from "../../../../images/agImg3.png"
import agImg2 from "../../../../images/agImg2.png"
import agImg1 from "../../../../images/agImg1.png"
import swal from "sweetalert";

const Leval2 = ({ status, setFinal }) => {
    const handleSwal = () => {
        swal({
            text: "Please complete task first",
            timer: 1400,
        });
    }

    const handleClick = () => {
        setFinal(true)
    }
    const messgeprint = (value) => {
        navigator.clipboard.writeText(value)

        swal({
            text: "Copy successfully",
            timer: 1400,
        });
    };
    return (
        <>
            <div className="css-1dbjc4n r-14lw9ot r-kdyh1x r-1s2bzr4 r-1ehh1yr r-12v598i">
                <div dir="auto" className="css-901oao r-1i88nnc r-yy2aun r-b88u0q">Reward conditions:</div>
                <div dir="auto" className="css-901oao r-1i88nnc r-evnaw r-l71dzp" style={{ marginBottom: "2px" }}>Invite 1 effective user to receive it.</div>
                <div dir="auto" className="css-901oao r-1i88nnc r-evnaw r-tw8zf3" style={{ marginTop: "2px" }}><span className="css-901oao css-16my406" style={{ color: "rgb(250, 60, 9)" }}>*</span>Recharges 100 or more, it is a effective user.</div>
                <div dir="auto" className="css-901oao r-1i88nnc r-yy2aun r-b88u0q">Upgrade skills:</div>
                <div dir="auto" className="css-901oao r-1i88nnc r-evnaw r-tw8zf3 r-l71dzp">Introduce the gameplay of FieWin, and introduce the method of recharging FieWin.</div>
                <div className="css-1dbjc4n">
                    <div dir="auto" className="css-901oao r-1i88nnc r-yy2aun r-b88u0q">Minesweeper introduction</div>
                    <div className="css-1dbjc4n r-18u37iz r-1wtj0ep r-tw8zf3 r-l71dzp r-13qz1uu">
                        <div className="css-1dbjc4n r-6qh97a r-ry2h4h r-kdyh1x r-rs99b7 r-1slz7xr r-ibj2aa" style={{ width: "80%" }}>
                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">Exciting and fun minesweeping game, as long as you avoid the mines, you will get benefits. You decide how much you get.</div>
                        </div>
                        <div
                            data-focusable="true"
                            tabIndex="0"
                            className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-tumt6t r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ backgroundColor: "rgb(242, 123, 34)", transitionDuration: "0s", width: "68px", height: "50%" }}
                            onClick={() => messgeprint("Exciting and fun minesweeping game, as long as you avoid the mines, you will get benefits. You decide how much you get.")}

                        >
                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" style={{ margin: "30%" }}>copy</div>
                        </div>
                    </div>
                </div>
                <div className="css-1dbjc4n">
                    <div dir="auto" className="css-901oao r-1i88nnc r-yy2aun r-b88u0q">Parity introduction</div>
                    <div className="css-1dbjc4n r-18u37iz r-1wtj0ep r-tw8zf3 r-l71dzp r-13qz1uu">
                        <div className="css-1dbjc4n r-6qh97a r-ry2h4h r-kdyh1x r-rs99b7 r-1slz7xr r-ibj2aa" style={{ width: "80%" }}>
                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">Popular and classic parity. Through the open color, continuity and probability, it is easy to analyze each color and get high rewards.</div>
                        </div>
                        <div
                            data-focusable="true"
                            tabIndex="0"
                            className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-tumt6t r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ backgroundColor: "rgb(242, 123, 34)", transitionDuration: "0s", width: "68px", height: "50%" }}
                            onClick={() => messgeprint("Popular and classic parity. Through the open color, continuity and probability, it is easy to analyze each color and get high rewards.s")}

                        >
                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" style={{ margin: "30%" }} >copy</div>
                        </div>
                    </div>
                </div>
                <div className="css-1dbjc4n">
                    <div dir="auto" className="css-901oao r-1i88nnc r-yy2aun r-b88u0q">Dice introduction</div>
                    <div className="css-1dbjc4n r-18u37iz r-1wtj0ep r-tw8zf3 r-l71dzp r-13qz1uu">
                        <div className="css-1dbjc4n r-6qh97a r-ry2h4h r-kdyh1x r-rs99b7 r-1slz7xr r-ibj2aa" style={{ width: "80%" }}>
                            <div dir="auto" className="css-901oao r-5zpi7z r-evnaw">
                                Dice with a huge odds combination. You can choose between high probability and high odds. If you choose high probability, you can easily win more than 10 times in a row.
                            </div>
                        </div>
                        <div
                            data-focusable="true"
                            tabIndex="0"
                            className="css-1dbjc4n r-1awozwy r-1dzdj1l r-ux0bpq r-1loqt21 r-18u37iz r-tumt6t r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ backgroundColor: "rgb(242, 123, 34)", transitionDuration: "0s", width: "68px", height: "50%" }}
                            onClick={() => messgeprint("Dice with a huge odds combination. You can choose between high probability and high odds. If you choose high probability, you can easily win more than 10 times in a row.")}
                        >
                            <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" style={{ margin: "30%" }}>copy</div>
                        </div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-18u37iz r-1wtj0ep">
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "254px", width: "130px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: `url(${agImg1})` }}
                            ></div>
                            <img alt="" draggable="false" src={agImg1} className="css-9pa8cd" />
                        </div>
                    </div>
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "254px", width: "130px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: `url(${agImg2}` }}
                            ></div>
                            <img alt="" draggable="false" src={agImg2} className="css-9pa8cd" />
                        </div>
                    </div>
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "254px", width: "130px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: `url(${agImg3}` }}
                            ></div>
                            <img alt="" draggable="false" src={agImg3} className="css-9pa8cd" />
                        </div>
                    </div>
                </div>
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

export default Leval2