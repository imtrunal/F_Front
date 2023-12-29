import React, { useState, useEffect } from 'react'
import frozenBoomNew1 from "../../../../images/frozenBoomNew1.png"
import arrowLeft from "../../../../images/arrowLeft.png"
import boomStart from "../../../../images/boomStart.png"


const Eight = ({ onChange, start, socket, id, handleCount, nextBouns, status1, loss, stop, bonus }) => {

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
        onChange("8")

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
    const handleClick = (i,index, value, x1) => {
        if (value == 0) {
            setCount(count + 1)
            status.push(index)
        }
        else {
            bomb.push(index)
            socket.emit("minesweeper_result", { userId: login_data.userId, id: id, status: 2, select: count, win_point: 0.00, endDate: Date.parse(new Date()), mineNumber: x1, histList: status,targetMine:mine })
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
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq01" style={{ zIndex: "2" }}>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("A1") && handleClick(0,"A1", state[0][0].value,"A1")} style={{ backgroundColor: status.includes("A1") ? "rgb(16, 213, 109)" : !bomb.includes(0) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(0) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("A2") && handleClick(1,"A2", state[0][1].value,"A2")} style={{ backgroundColor: status.includes("A2") ? "rgb(16, 213, 109)" : !bomb.includes(1) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(1) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("A3") && handleClick(2,"A3", state[0][2].value,"A3")} style={{ backgroundColor: status.includes("A3") ? "rgb(16, 213, 109)" : !bomb.includes(2) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(2) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("A4") && handleClick(3,"A4", state[0][3].value,"A4")} style={{ backgroundColor: status.includes("A4") ? "rgb(16, 213, 109)" : !bomb.includes(3) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(3) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("A5") && handleClick(4,"A5", state[0][4].value,"A5")} style={{ backgroundColor: status.includes("A5") ? "rgb(16, 213, 109)" : !bomb.includes(4) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(4) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("A6") && handleClick(5,"A6", state[0][5].value,"A6")} style={{ backgroundColor: status.includes("A6") ? "rgb(16, 213, 109)" : !bomb.includes(5) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(5) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("A7") && handleClick(6,"A7", state[0][6].value,"A7")} style={{ backgroundColor: status.includes("A7") ? "rgb(16, 213, 109)" : !bomb.includes(6) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(6) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("A8") && handleClick(7,"A8", state[0][7].value,"A8")} style={{ backgroundColor: status.includes("A8") ? "rgb(16, 213, 109)" : !bomb.includes(7) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(7) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq01" style={{ zIndex: "1" }}>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("B1") && handleClick(8,"B1", state[1][0].value,"B1")} style={{ backgroundColor: status.includes("B1") ? "rgb(16, 213, 109)" : !bomb.includes(8) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(8) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("B2") && handleClick(9,"B2", state[1][1].value,"B2")} style={{ backgroundColor: status.includes("B2") ? "rgb(16, 213, 109)" : !bomb.includes(9) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(9) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("B3") && handleClick(10,"B3", state[1][2].value,"B3")} style={{ backgroundColor: status.includes("B3") ? "rgb(16, 213, 109)" : !bomb.includes(10) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(10) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("B4") && handleClick(11,"B4", state[1][3].value,"B4")} style={{ backgroundColor: status.includes("B4") ? "rgb(16, 213, 109)" : !bomb.includes(11) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(11) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("B5") && handleClick(12,"B5", state[1][4].value,"B5")} style={{ backgroundColor: status.includes("B5") ? "rgb(16, 213, 109)" : !bomb.includes(12) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(12) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("B6") && handleClick(13,"B6", state[1][5].value,"B6")} style={{ backgroundColor: status.includes("B6") ? "rgb(16, 213, 109)" : !bomb.includes(13) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(13) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("B7") && handleClick(14,"B7", state[1][6].value,"B7")} style={{ backgroundColor: status.includes("B7") ? "rgb(16, 213, 109)" : !bomb.includes(14) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(14) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("B8") && handleClick(15,"B8", state[1][7].value,"B8")} style={{ backgroundColor: status.includes("B8") ? "rgb(16, 213, 109)" : !bomb.includes(15) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(15) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq01 r-417010">
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("C1") && handleClick(16,"C1", state[2][0].value,"C1")} style={{ backgroundColor: status.includes("C1") ? "rgb(16, 213, 109)" : !bomb.includes(16) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(16) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("C2") && handleClick(17,"C2", state[2][1].value,"C2")} style={{ backgroundColor: status.includes("C2") ? "rgb(16, 213, 109)" : !bomb.includes(17) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(17) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("C3") && handleClick(18,"C3", state[2][2].value,"C3")} style={{ backgroundColor: status.includes("C3") ? "rgb(16, 213, 109)" : !bomb.includes(18) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(18) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("C4") && handleClick(19,"C4", state[2][3].value,"C4")} style={{ backgroundColor: status.includes("C4") ? "rgb(16, 213, 109)" : !bomb.includes(19) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(19) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("C5") && handleClick(20,"C5", state[2][4].value,"C5")} style={{ backgroundColor: status.includes("C5") ? "rgb(16, 213, 109)" : !bomb.includes(20) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(20) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("C6") && handleClick(21,"C6", state[2][5].value,"C6")} style={{ backgroundColor: status.includes("C6") ? "rgb(16, 213, 109)" : !bomb.includes(21) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(21) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("C7") && handleClick(22,"C7", state[2][6].value,"C7")} style={{ backgroundColor: status.includes("C7") ? "rgb(16, 213, 109)" : !bomb.includes(22) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(22) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("C8") && handleClick(23,"C8", state[2][7].value,"C8")} style={{ backgroundColor: status.includes("C8") ? "rgb(16, 213, 109)" : !bomb.includes(23) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(23) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq01 r-1wyyakw">
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("D1") && handleClick(24,"D1", state[3][0].value,"D1")} style={{ backgroundColor: status.includes("D1") ? "rgb(16, 213, 109)" : !bomb.includes(24) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(24) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("D2") && handleClick(25,"D2", state[3][1].value,"D2")} style={{ backgroundColor: status.includes("D2") ? "rgb(16, 213, 109)" : !bomb.includes(25) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(25) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("D3") && handleClick(26,"D3", state[3][2].value,"D3")} style={{ backgroundColor: status.includes("D3") ? "rgb(16, 213, 109)" : !bomb.includes(26) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(26) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("D4") && handleClick(27,"D4", state[3][3].value,"D4")} style={{ backgroundColor: status.includes("D4") ? "rgb(16, 213, 109)" : !bomb.includes(27) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(27) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("D5") && handleClick(28,"D5", state[3][4].value,"D5")} style={{ backgroundColor: status.includes("D5") ? "rgb(16, 213, 109)" : !bomb.includes(28) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(28) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("D6") && handleClick(29,"D6", state[3][5].value,"D6")} style={{ backgroundColor: status.includes("D6") ? "rgb(16, 213, 109)" : !bomb.includes(29) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(29) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("D7") && handleClick(30,"D7", state[3][6].value,"D7")} style={{ backgroundColor: status.includes("D7") ? "rgb(16, 213, 109)" : !bomb.includes(30) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(30) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("D8") && handleClick(31,"D8", state[3][7].value,"D8")} style={{ backgroundColor: status.includes("D8") ? "rgb(16, 213, 109)" : !bomb.includes(31) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(31) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq01" style={{ zIndex: "-2" }}>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("E1") && handleClick(32,"E1", state[4][0].value,"E1")} style={{ backgroundColor: status.includes("E1") ? "rgb(16, 213, 109)" : !bomb.includes(32) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(32) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("E2") && handleClick(33,"E2", state[4][1].value,"E2")} style={{ backgroundColor: status.includes("E2") ? "rgb(16, 213, 109)" : !bomb.includes(33) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(33) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("E3") && handleClick(34,"E3", state[4][2].value,"E3")} style={{ backgroundColor: status.includes("E3") ? "rgb(16, 213, 109)" : !bomb.includes(34) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(34) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("E4") && handleClick(35,"E4", state[4][3].value,"E4")} style={{ backgroundColor: status.includes("E4") ? "rgb(16, 213, 109)" : !bomb.includes(35) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(35) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("E5") && handleClick(36,"E5", state[4][4].value,"E5")} style={{ backgroundColor: status.includes("E5") ? "rgb(16, 213, 109)" : !bomb.includes(36) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(36) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("E6") && handleClick(37,"E6", state[4][5].value,"E6")} style={{ backgroundColor: status.includes("E6") ? "rgb(16, 213, 109)" : !bomb.includes(37) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(37) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("E7") && handleClick(38,"E7", state[4][6].value,"E7")} style={{ backgroundColor: status.includes("E7") ? "rgb(16, 213, 109)" : !bomb.includes(38) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(38) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("E8") && handleClick(39,"E8", state[4][7].value,"E8")} style={{ backgroundColor: status.includes("E8") ? "rgb(16, 213, 109)" : !bomb.includes(39) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(39) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq01" style={{ zIndex: "-3" }}>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("F1") && handleClick(40,"F1", state[5][0].value,"F1")} style={{ backgroundColor: status.includes("F1") ? "rgb(16, 213, 109)" : !bomb.includes(40) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(40) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("F2") && handleClick(41,"F2", state[5][1].value,"F2")} style={{ backgroundColor: status.includes("F2") ? "rgb(16, 213, 109)" : !bomb.includes(41) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(41) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("F3") && handleClick(42,"F3", state[5][2].value,"F3")} style={{ backgroundColor: status.includes("F3") ? "rgb(16, 213, 109)" : !bomb.includes(42) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(42) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("F4") && handleClick(43,"F4", state[5][3].value,"F4")} style={{ backgroundColor: status.includes("F4") ? "rgb(16, 213, 109)" : !bomb.includes(43) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(43) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("F5") && handleClick(44,"F5", state[5][4].value,"F5")} style={{ backgroundColor: status.includes("F5") ? "rgb(16, 213, 109)" : !bomb.includes(44) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(44) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("F6") && handleClick(45,"F6", state[5][5].value,"F6")} style={{ backgroundColor: status.includes("F6") ? "rgb(16, 213, 109)" : !bomb.includes(45) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(45) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("F7") && handleClick(46,"F7", state[5][6].value,"F7")} style={{ backgroundColor: status.includes("F7") ? "rgb(16, 213, 109)" : !bomb.includes(46) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(46) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("F8") && handleClick(47,"F8", state[5][7].value,"F8")} style={{ backgroundColor: status.includes("F8") ? "rgb(16, 213, 109)" : !bomb.includes(47) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(47) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq01" style={{ zIndex: "-4" }}>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("G1") && handleClick(48,"G1", state[6][0].value,"G1")} style={{ backgroundColor: status.includes("G1") ? "rgb(16, 213, 109)" : !bomb.includes(48) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(48) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("G2") && handleClick(49,"G2", state[6][1].value,"G2")} style={{ backgroundColor: status.includes("G2") ? "rgb(16, 213, 109)" : !bomb.includes(49) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(49) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("G3") && handleClick(50,"G3", state[6][2].value,"G3")} style={{ backgroundColor: status.includes("G3") ? "rgb(16, 213, 109)" : !bomb.includes(50) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(50) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("G4") && handleClick(51,"G4", state[6][3].value,"G4")} style={{ backgroundColor: status.includes("G4") ? "rgb(16, 213, 109)" : !bomb.includes(51) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(51) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("G5") && handleClick(52,"G5", state[6][4].value,"G5")} style={{ backgroundColor: status.includes("G5") ? "rgb(16, 213, 109)" : !bomb.includes(52) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(52) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("G6") && handleClick(53,"G6", state[6][5].value,"G6")} style={{ backgroundColor: status.includes("G6") ? "rgb(16, 213, 109)" : !bomb.includes(53) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(53) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("G7") && handleClick(54,"G7", state[6][6].value,"G7")} style={{ backgroundColor: status.includes("G7") ? "rgb(16, 213, 109)" : !bomb.includes(54) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(54) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("G8") && handleClick(55,"G8", state[6][7].value,"G8")} style={{ backgroundColor: status.includes("G8") ? "rgb(16, 213, 109)" : !bomb.includes(55) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(55) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq01" style={{ zIndex: "-5" }}>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("H1") && handleClick(56,"H1", state[7][0].value,"H1")} style={{ backgroundColor: status.includes("H1") ? "rgb(16, 213, 109)" : !bomb.includes(56) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(56) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("H2") && handleClick(57,"H2", state[7][1].value,"H2")} style={{ backgroundColor: status.includes("H2") ? "rgb(16, 213, 109)" : !bomb.includes(57) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(57) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("H3") && handleClick(58,"H3", state[7][2].value,"H3")} style={{ backgroundColor: status.includes("H3") ? "rgb(16, 213, 109)" : !bomb.includes(58) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(58) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("H4") && handleClick(59,"H4", state[7][3].value,"H4")} style={{ backgroundColor: status.includes("H4") ? "rgb(16, 213, 109)" : !bomb.includes(59) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(59) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("H5") && handleClick(60,"H5", state[7][4].value,"H5")} style={{ backgroundColor: status.includes("H5") ? "rgb(16, 213, 109)" : !bomb.includes(60) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(60) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("H6") && handleClick(61,"H6", state[7][5].value,"H6")} style={{ backgroundColor: status.includes("H6") ? "rgb(16, 213, 109)" : !bomb.includes(61) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(61) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("H7") && handleClick(62,"H7", state[7][6].value,"H7")} style={{ backgroundColor: status.includes("H7") ? "rgb(16, 213, 109)" : !bomb.includes(62) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(62) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
                        <div className="css-1dbjc4n r-ry2h4h r-z2wwpe r-rs99b7 r-1pi2tsx r-13qz1uu"></div>
                    </div>
                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" onClick={() => !status.includes("H8") && handleClick(63,"H8", state[7][7].value,"H8")} style={{ backgroundColor: status.includes("H8") ? "rgb(16, 213, 109)" : !bomb.includes(63) && "rgb(240, 240, 240)", backgroundImage: bomb.includes(63) && `url(${frozenBoomNew1})`, backgroundSize:"contain",backgroundRepeat: "no-repeat", height: "50px", transform: "scale(1)", width: "50px" }}>
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

export default Eight