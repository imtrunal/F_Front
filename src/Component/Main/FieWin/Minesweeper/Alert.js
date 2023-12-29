import React, { useState } from 'react'
import boomWinImgNew from "../../../../images/boomWinImgNew.png"
import boomLoseImgNew from "../../../../images/boomLoseImgNew.png"
import boomBgImgNew from "../../../../images/boomBgImgNew.png"
import frozenBoomNew1 from "../../../../images/frozenBoomNew1.png"

const Alert = ({ socket, status, okStatus, bonus, point, count }) => {
    const [state, setState] = useState([{}])
    const handleOk = () => {
        okStatus(true)
    }
    socket.on("Minesweeper_own_data", (data) => {
        setState(data)
    })
    return (
        <div className="css-1dbjc4n r-1awozwy r-1p0dtai r-lzq93c r-1d2f490 r-1xcajam r-zchlnj r-ipm5af" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: "99" }}>
            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1p0dtai r-1loqt21 r-13awgt0 r-1777fci r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                <div dir="auto" className="css-901oao"></div>
            </div>
            <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-u8s1d" style={{ height: "574px", top: "202px", width: "402px" }}>
                <div className="css-1dbjc4n r-a2tzq0 r-bnwqim" style={{ padding: "28px" }}>
                    <div className="css-1dbjc4n">
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-1wyyakw" style={{ height: "550px", left: "-68px", top: "-214px", width: "502px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: status == "win" && `url(${boomBgImgNew})` }}
                            ></div>
                            <img alt="" draggable="false" src={status == "win" && boomBgImgNew} className="css-9pa8cd" />
                        </div>
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-u8s1d r-417010" style={{ height: "360px", left: "-48px", top: "-248px", width: "438px" }}>
                            <div
                                className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                style={{ backgroundImage: status == "win" ? `url(${boomWinImgNew})` : `url(${boomLoseImgNew})` }}
                            ></div>
                            <img alt="" draggable="false" src={status == "win" ? boomWinImgNew : boomLoseImgNew} className="css-9pa8cd" />
                        </div>
                    </div>
                    <div dir="auto" className="css-901oao r-5zpi7z r-b88u0q r-q4m81j" style={{ fontSize: "38px", marginTop: "38px", zIndex: "2" }}><span className="css-901oao css-16my406 r-evnaw">+₹</span>{bonus}</div>
                    <div className="css-1dbjc4n r-1awozwy">
                        <div className="css-1dbjc4n r-1jie2fr r-rs99b7" style={{ borderRadius: "1px", height: "268px", marginTop: "14px", padding: "8px", width: "268px" }}>
                            <div className="css-1dbjc4n r-1pi2tsx r-a2tzq0 r-13qz1uu">
                                {state && state.map((data) => {
                                    if (data.type == "2") {
                                        return (
                                            <>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A1") ? "rgb(16, 213, 109)" : data.mineNumber != "A1" && "rgb(240, 240, 240)", backgroundImage: (data.mineNumber == "A1" || data.targetMine =="A1") && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "130px", padding: "1px", width: "130px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A2") ? "rgb(16, 213, 109)" : data.mineNumber != "A2" && "rgb(240, 240, 240)", backgroundImage: (data.mineNumber == "A2" || data.targetMine =="A2") && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "130px", padding: "1px", width: "130px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B1") ? "rgb(16, 213, 109)" : data.mineNumber != "B1" && "rgb(240, 240, 240)", backgroundImage: (data.mineNumber == "B1" || data.targetMine =="B1") && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "130px", padding: "1px", width: "130px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B2") ? "rgb(16, 213, 109)" : data.mineNumber != "B2" && "rgb(240, 240, 240)", backgroundImage: (data.mineNumber == "B2" || data.targetMine =="B2") && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "130px", padding: "1px", width: "130px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                    else if (data.type == "4") {
                                        return (
                                            <>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A1") ? "rgb(16, 213, 109)" : data.mineNumber != "A1" && "rgb(240, 240, 240)", backgroundImage: (data.mineNumber == "A1" || data.targetMine == "A1") && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A2") ? "rgb(16, 213, 109)" : data.mineNumber != "A2" && "rgb(240, 240, 240)", backgroundImage: (data.mineNumber == "A2" || data.targetMine == "A2") && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A3") ? "rgb(16, 213, 109)" : data.mineNumber != "A3" && "rgb(240, 240, 240)", backgroundImage: (data.mineNumber == "A3" || data.targetMine == "A3") && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A4") ? "rgb(16, 213, 109)" : data.mineNumber != "A4" && "rgb(240, 240, 240)", backgroundImage: (data.mineNumber == "A4" || data.targetMine == "A4") && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B1") ? "rgb(16, 213, 109)" : data.mineNumber != "B1" && "rgb(240, 240, 240)", backgroundImage: (data.mineNumber == "B1"  || data.targetMine == "B1")&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B2") ? "rgb(16, 213, 109)" : data.mineNumber != "B2" && "rgb(240, 240, 240)", backgroundImage: (data.mineNumber == "B2"  || data.targetMine == "B2" )&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B3") ? "rgb(16, 213, 109)" : data.mineNumber != "B3" && "rgb(240, 240, 240)", backgroundImage: (data.mineNumber == "B3"   || data.targetMine == "B3")&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B4") ? "rgb(16, 213, 109)" : data.mineNumber != "B4" && "rgb(240, 240, 240)", backgroundImage:( data.mineNumber == "B4"   || data.targetMine == "B4")&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C1") ? "rgb(16, 213, 109)" : data.mineNumber != "C1" && "rgb(240, 240, 240)", backgroundImage:( data.mineNumber == "C1" || data.targetMine == "C1" )&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C2") ? "rgb(16, 213, 109)" : data.mineNumber != "C2" && "rgb(240, 240, 240)", backgroundImage: (data.mineNumber == "C2"  || data.targetMine == "C2")&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C3") ? "rgb(16, 213, 109)" : data.mineNumber != "C3" && "rgb(240, 240, 240)", backgroundImage:( data.mineNumber == "C3" || data.targetMine == "C3" ) && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C4") ? "rgb(16, 213, 109)" : data.mineNumber != "C4" && "rgb(240, 240, 240)", backgroundImage:( data.mineNumber == "C4" || data.targetMine == "C4") && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D1") ? "rgb(16, 213, 109)" : data.mineNumber != "D1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D1" || data.targetMine == "D1"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D2") ? "rgb(16, 213, 109)" : data.mineNumber != "D2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D2" || data.targetMine == "D2" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D3") ? "rgb(16, 213, 109)" : data.mineNumber != "D3" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D3" || data.targetMine == "D3" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D4") ? "rgb(16, 213, 109)" : data.mineNumber != "D4" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D4"  || data.targetMine == "D4"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "60px", padding: "1px", width: "60px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                    else if (data.type == "8") {
                                        return (
                                            <>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("A1") ? "rgb(16, 213, 109)" : data.mineNumber != "A1"&& "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "A1" || data.targetMine == "A1"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("A2") ? "rgb(16, 213, 109)" : data.mineNumber != "A2"&& "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "A2" || data.targetMine == "A2"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("A3") ? "rgb(16, 213, 109)" : data.mineNumber != "A3"&& "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "A3" || data.targetMine == "A3"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("A4") ? "rgb(16, 213, 109)" : data.mineNumber != "A4"&& "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "A4" || data.targetMine == "A4"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("A5") ? "rgb(16, 213, 109)" : data.mineNumber != "A5"&& "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "A5" || data.targetMine == "A5"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("A6") ? "rgb(16, 213, 109)" : data.mineNumber != "A6"&& "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "A6" || data.targetMine == "A6"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("A7") ? "rgb(16, 213, 109)" : data.mineNumber != "A7"&& "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "A7" || data.targetMine == "A7"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("A8") ? "rgb(16, 213, 109)" : data.mineNumber != "A8"&& "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "A8" || data.targetMine == "A8"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("B1") ? "rgb(16, 213, 109)" : data.mineNumber != "B1"&& "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "B1" || data.targetMine == "B1"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("B2") ? "rgb(16, 213, 109)" : data.mineNumber != "B2"&& "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "B2" || data.targetMine == "B2"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("B3") ? "rgb(16, 213, 109)" : data.mineNumber != "B3" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "B3" || data.targetMine == "B3"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("B4") ? "rgb(16, 213, 109)" : data.mineNumber != "B4" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "B4" || data.targetMine == "B4" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("B5") ? "rgb(16, 213, 109)" : data.mineNumber != "B5" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "B5"  || data.targetMine == "B5"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("B6") ? "rgb(16, 213, 109)" : data.mineNumber != "B6" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "B6" || data.targetMine == "B6" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("B7") ? "rgb(16, 213, 109)" : data.mineNumber != "B7" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "B7" || data.targetMine == "B7" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("B8") ? "rgb(16, 213, 109)" : data.mineNumber != "B8" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "B8"  || data.targetMine == "B8"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0 r-417010">
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("C1") ? "rgb(16, 213, 109)" : data.mineNumber != "C1" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "C1" || data.targetMine == "C1" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("C2") ? "rgb(16, 213, 109)" : data.mineNumber != "C2" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "C2"  || data.targetMine == "C2"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("C3") ? "rgb(16, 213, 109)" : data.mineNumber != "C3" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "C3" || data.targetMine == "C3" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("C4") ? "rgb(16, 213, 109)" : data.mineNumber != "C4" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "C4"  || data.targetMine == "C4"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("C5") ? "rgb(16, 213, 109)" : data.mineNumber != "C5" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "C5"|| data.targetMine == "C5" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("C6") ? "rgb(16, 213, 109)" : data.mineNumber != "C6" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "C6" || data.targetMine == "C6"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("C7") ? "rgb(16, 213, 109)" : data.mineNumber != "C7" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "C7" || data.targetMine == "C7"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("C8") ? "rgb(16, 213, 109)" : data.mineNumber != "C8" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "C8" || data.targetMine == "C8"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0 r-1wyyakw">
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("D1") ? "rgb(16, 213, 109)" : data.mineNumber != "D1" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "D1" || data.targetMine == "D1"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("D2") ? "rgb(16, 213, 109)" : data.mineNumber != "D2" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "D2"|| data.targetMine == "D2" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("D3") ? "rgb(16, 213, 109)" : data.mineNumber != "D3" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "D3" || data.targetMine == "D3"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("D4") ? "rgb(16, 213, 109)" : data.mineNumber != "D4" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "D4" || data.targetMine == "D4"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("D5") ? "rgb(16, 213, 109)" : data.mineNumber != "D5" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "D5"|| data.targetMine == "D5" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("D6") ? "rgb(16, 213, 109)" : data.mineNumber != "D6" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "D6"|| data.targetMine == "D6" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("D7") ? "rgb(16, 213, 109)" : data.mineNumber != "D7" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "D7" || data.targetMine == "D7"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("D8") ? "rgb(16, 213, 109)" : data.mineNumber != "D8" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "D8"|| data.targetMine == "D8" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("E1") ? "rgb(16, 213, 109)" : data.mineNumber != "E1" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "E1" || data.targetMine == "E1"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("E2") ? "rgb(16, 213, 109)" : data.mineNumber != "E2" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "E2" || data.targetMine == "E2"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("E3") ? "rgb(16, 213, 109)" : data.mineNumber != "E3" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "E3" || data.targetMine == "E3"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("E4") ? "rgb(16, 213, 109)" : data.mineNumber != "E4" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "E4" || data.targetMine == "E4"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("E5") ? "rgb(16, 213, 109)" : data.mineNumber != "E5" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "E5" || data.targetMine == "E5"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("E6") ? "rgb(16, 213, 109)" : data.mineNumber != "E6" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "E6"|| data.targetMine == "E6" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("E7") ? "rgb(16, 213, 109)" : data.mineNumber != "E7" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "E7" || data.targetMine == "E7"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("E8") ? "rgb(16, 213, 109)" : data.mineNumber != "E8" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "E8"|| data.targetMine == "E8" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("F1") ? "rgb(16, 213, 109)" : data.mineNumber != "F1" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "F1" || data.targetMine == "F1"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("F2") ? "rgb(16, 213, 109)" : data.mineNumber != "F2" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "F2"|| data.targetMine == "F2" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("F3") ? "rgb(16, 213, 109)" : data.mineNumber != "F3" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "F3" || data.targetMine == "F3"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("F4") ? "rgb(16, 213, 109)" : data.mineNumber != "F4" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "F4"|| data.targetMine == "F4" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("F5") ? "rgb(16, 213, 109)" : data.mineNumber != "F5" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "F5"|| data.targetMine == "F5" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("F6") ? "rgb(16, 213, 109)" : data.mineNumber != "F6" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "F6" || data.targetMine == "F6"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("F7") ? "rgb(16, 213, 109)" : data.mineNumber != "F7" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "F7"|| data.targetMine == "F7" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("F8") ? "rgb(16, 213, 109)" : data.mineNumber != "F8" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "F8" || data.targetMine == "F8"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("G1") ? "rgb(16, 213, 109)" : data.mineNumber != "G1" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "G1"|| data.targetMine == "G1" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("G2") ? "rgb(16, 213, 109)" : data.mineNumber != "G2" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "G2" || data.targetMine == "G2"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("G3") ? "rgb(16, 213, 109)" : data.mineNumber != "G3" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "G3" || data.targetMine == "G3"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("G4") ? "rgb(16, 213, 109)" : data.mineNumber != "G4" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "G4" || data.targetMine == "G4"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("G5") ? "rgb(16, 213, 109)" : data.mineNumber != "G5" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "G5" || data.targetMine == "G5"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("G6") ? "rgb(16, 213, 109)" : data.mineNumber != "G6" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "G6"|| data.targetMine == "G6" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("G7") ? "rgb(16, 213, 109)" : data.mineNumber != "G7" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "G7"|| data.targetMine == "G7" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("G8") ? "rgb(16, 213, 109)" : data.mineNumber != "G8" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "G8" || data.targetMine == "G8"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("H1") ? "rgb(16, 213, 109)" : data.mineNumber != "H1" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "H1"|| data.targetMine == "H1" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("H2") ? "rgb(16, 213, 109)" : data.mineNumber != "H2" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "H2"|| data.targetMine == "H2" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("H3") ? "rgb(16, 213, 109)" : data.mineNumber != "H3" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "H3" || data.targetMine == "H3"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("H4") ? "rgb(16, 213, 109)" : data.mineNumber != "H4" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "H4" || data.targetMine == "H4"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("H5") ? "rgb(16, 213, 109)" : data.mineNumber != "H5" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "H5" || data.targetMine == "H5"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("H6") ? "rgb(16, 213, 109)" : data.mineNumber != "H6" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "H6" || data.targetMine == "H6"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("H7") ? "rgb(16, 213, 109)" : data.mineNumber != "H7" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "H7"|| data.targetMine == "H7" && `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor: data.histList.includes("H8") ? "rgb(16, 213, 109)" : data.mineNumber != "H8" && "rgb(240, 240, 240)", backgroundImage:data.mineNumber == "H8" || data.targetMine == "H8"&& `url(${frozenBoomNew1})`, backgroundSize:"contain",borderColor: "rgba(0, 0, 0, 0.1)", height: "28px",padding: "1px", width: "28px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>

                                            </>
                                        )
                                    }
                                })}

                            </div>
                        </div>

                        {/* 
                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor:  data.mineNumber.includes(0,0) && "rgb(240, 240, 240)", backgroundImage: data.mineNumber.includes(0,0) && `url(${frozenBoomNew1})`,borderColor:"rgba(0, 0, 0, 0.1)", height: "130px", padding:"1px", width: "130px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor:  data.mineNumber.includes(0,1) && "rgb(240, 240, 240)", backgroundImage: data.mineNumber.includes(0,1) && `url(${frozenBoomNew1})`,borderColor:"rgba(0, 0, 0, 0.1)", height: "130px", padding:"1px", width: "130px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim"  style={{ backgroundColor:  data.mineNumber.includes(1,0) && "rgb(240, 240, 240)", backgroundImage: data.mineNumber.includes(1,0) && `url(${frozenBoomNew1})`,borderColor:"rgba(0, 0, 0, 0.1)", height: "130px", padding:"1px", width: "130px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor:  data.mineNumber.includes(1,1) && "rgb(240, 240, 240)", backgroundImage: data.mineNumber.includes(1,1) && `url(${frozenBoomNew1})`,borderColor:"rgba(0, 0, 0, 0.1)", height: "130px", padding:"1px", width: "130px" }}>
                                                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu" ></div>
                                                    </div>
                                                </div> */}







                    </div >
                    <div className="css-1dbjc4n r-18u37iz r-1wtj0ep" style={{ marginTop: "14px" }}>
                        <div dir="auto" className="css-901oao r-5zpi7z" style={{ fontSize: "20px" }}>Order Point: ₹{point}</div>
                        <div dir="auto" className="css-901oao r-5zpi7z" style={{ fontSize: "20px" }}>Pass: {count}</div>
                    </div>
                    <div
                        data-focusable="true"
                        tabIndex="0"
                        className="css-1dbjc4n r-1awozwy r-2mrr8d r-1dzdj1l r-1loqt21 r-18u37iz r-uxrrfj r-1777fci r-1udh08x r-1otgn73 r-1i6wzkk r-lrvibr"
                        style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 5px", marginTop: "20px", transitionDuration: "0s" }}
                    >
                        <div dir="auto" className="css-901oao r-jwli3a r-evnaw r-b88u0q" onClick={handleOk}>OK</div>
                    </div>
                </div >
            </div >
        </div >

    )
}

export default Alert