import React, { useEffect, useState } from 'react'
import frozenBoomNew1 from "../../../../images/frozenBoomNew1.png"
import boomStart from "../../../../images/boomStart.png"
const Two = ({ onChange, start, socket, nextBouns, handleCount, status1, id, stop, bonus, loss }) => {
    const login_data = JSON.parse(sessionStorage.getItem('login'))

    const [state, setState] = useState([])
    const [status, setStatus] = useState([])
    const [bomb, setBomb] = useState([])
    const [count, setCount] = useState(0)
    const [mine, setMine] = useState()
    socket.on("next", (data) => {
        nextBouns(data)

    })
    const handleStart = () => {
        onChange("2")

    }
    useEffect(() => {
        stop &&
            socket.emit("minesweeper_result", { userId: login_data.userId, id: id, status: 1, select: count, win_point: bonus, endDate: Date.parse(new Date()), mineNumber: "", histList: status,targetMine:mine })
        stop && handleCount(count)
    }, [stop])
    useEffect(() => {
        status1 && setStatus([])
        status1 && setBomb([])

    }, [status1])
    const handleClick = (i, index, value, x1) => {

        if (value == 0) {
            setCount(count + 1)
            status.push(index)
        }
        else {
            bomb.push(index)
            socket.emit("minesweeper_result", { userId: login_data.userId, id: id, status: 2, select: count, win_point: 0.00, endDate: Date.parse(new Date()), mineNumber: x1, histList: status ,targetMine:mine})
            handleCount(count)
            loss(true)
        }
        socket.emit("nextNumber", i)
    }
    socket.on("board", (data) => {
   
        data.map((user) => {
            user.map((data1) => {

                if (data1.value == "X") {
                    setMine(data1.p)
                }
            })

        })
        setState(data)
    })
    return (
        <>  
            <div className="css-1dbjc4n r-1pi2tsx r-a2tzq01 r-13qz1uu">
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq01" style={{ zIndex: "-2" }}>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim r-2345" onClick={() => !status.includes("A1") && handleClick(0, "A1", state[0][0].value, "A1")} style={{ backgroundColor: status.includes("A1") ? "rgb(16, 213, 109)" : !bomb.includes(0) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(0) && `url(${frozenBoomNew1})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: "214px", transform: "scale(1)", width: "214px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim r-2345" onClick={() => !status.includes("A2") && handleClick(1, "A2", state[0][1].value, "A2")} style={{ backgroundColor: status.includes("A2") ? "rgb(16, 213, 109)" : !bomb.includes(1) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(1) && `url(${frozenBoomNew1})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: "214px", transform: "scale(1)", width: "214px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq01" style={{ zIndex: "-3" }}>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim r-2345" onClick={() => !status.includes("B1") && handleClick(2, "B1", state[1][0].value, "B1")} style={{ backgroundColor: status.includes("B1") ? "rgb(16, 213, 109)" : !bomb.includes(2) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(2) && `url(${frozenBoomNew1})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: "214px", transform: "scale(1)", width: "214px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim r-2345" onClick={() => !status.includes("B2") && handleClick(3, "B2", state[1][1].value, "B2")} style={{ backgroundColor: status.includes("B2") ? "rgb(16, 213, 109)" : !bomb.includes(3) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(3) && `url(${frozenBoomNew1})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", height: "214px", transform: "scale(1)", width: "214px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                </div>
            </div>
            {start &&
                <div className="css-1dbjc4n r-1awozwy r-13w96dm r-c540o3 r-18u37iz r-1777fci r-f9274a r-u8s1d r-18xqfo6 r-18kv9lu">
                    <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }} onClick={handleStart}>
                        <div className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ borderRadius: "74px", height: "146px", width: "146px" }}>
                            <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${boomStart})` }}></div><img alt="" draggable="false" src={boomStart} className="css-9pa8cd" /></div>
                    </div>
                </div>
            }
        </>
    )
}

export default Two