import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { MineSweeperGetDetails } from '../../../redux/action/FetchData';
import frozenBoomNew1 from "../../../images/frozenBoomNew1.png"
const MineSweeper = ({ dispatch, res ,res1}) => {
    useEffect(() => {
        dispatch(MineSweeperGetDetails())
    }, [dispatch])
    return (
        <>



            {res.data.data ? res.data.data.map((data) => {
                return (
                    <>
                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-112vmwo r-1peese0 r-1s2bzr4 r-11yh6sk r-1rnoaur r-1sncvnh">
                            <div className="css-1dbjc4n">
                                <div className="css-1dbjc4n">

                                    <div className="css-1dbjc4n r-14lw9ot r-1dzdj1l r-rs99b7 r-1s2bzr4" style={{ borderColor: "rgba(0, 0, 0, 0.1)", boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px", marginRight: "18px", marginLeft: "18px" }}>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz" style={{ padding: "18px 18px 0px" }}>
                                            <div className="css-1dbjc4n" style={{ height: "110px", width: "110px" }}>

                                                <div className="css-1dbjc4n r-1pi2tsx r-a2tzq0 r-13qz1uu">
                                                    {data.type == "2" ?

                                                        <>
                                                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                                <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A1") ? "rgb(16, 213, 109)" : data.mineNumber != "A1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "50px", padding: "1px", width: "50px" }}>

                                                                </div>
                                                                <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A2") ? "rgb(16, 213, 109)" : data.mineNumber != "A2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "50px", padding: "1px", width: "50px" }}>

                                                                </div>
                                                            </div>
                                                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                                <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B1") ? "rgb(16, 213, 109)" : data.mineNumber != "B1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "B1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "50px", padding: "1px", width: "50px" }}>

                                                                </div>
                                                                <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B2") ? "rgb(16, 213, 109)" : data.mineNumber != "B2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "B2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "50px", padding: "1px", width: "50px" }}>

                                                                </div>
                                                            </div>

                                                        </> :
                                                        data.type == "4" ?
                                                            <>
                                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A1") ? "rgb(16, 213, 109)" : data.mineNumber != "A1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A2") ? "rgb(16, 213, 109)" : data.mineNumber != "A2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A3") ? "rgb(16, 213, 109)" : data.mineNumber != "A3" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A3" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A4") ? "rgb(16, 213, 109)" : data.mineNumber != "A4" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A4" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                </div>
                                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B1") ? "rgb(16, 213, 109)" : data.mineNumber != "B1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "B1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B2") ? "rgb(16, 213, 109)" : data.mineNumber != "B2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "B2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B3") ? "rgb(16, 213, 109)" : data.mineNumber != "B3" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "B3" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B4") ? "rgb(16, 213, 109)" : data.mineNumber != "B4" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "B4" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                </div>
                                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C1") ? "rgb(16, 213, 109)" : data.mineNumber != "C1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "C1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C2") ? "rgb(16, 213, 109)" : data.mineNumber != "C2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "C2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C3") ? "rgb(16, 213, 109)" : data.mineNumber != "C3" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "C3" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C4") ? "rgb(16, 213, 109)" : data.mineNumber != "C4" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "C4" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                </div>
                                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D1") ? "rgb(16, 213, 109)" : data.mineNumber != "D1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D2") ? "rgb(16, 213, 109)" : data.mineNumber != "D2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D3") ? "rgb(16, 213, 109)" : data.mineNumber != "D3" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D3" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D4") ? "rgb(16, 213, 109)" : data.mineNumber != "D4" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D4" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "22px", padding: "1px", width: "22px" }}>

                                                                    </div>
                                                                </div>
                                                            </>
                                                            :
                                                            <>
                                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A1") ? "rgb(16, 213, 109)" : data.mineNumber != "A1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A2") ? "rgb(16, 213, 109)" : data.mineNumber != "A2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A3") ? "rgb(16, 213, 109)" : data.mineNumber != "A3" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A3" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A4") ? "rgb(16, 213, 109)" : data.mineNumber != "A4" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A4" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A5") ? "rgb(16, 213, 109)" : data.mineNumber != "A5" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A5" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A6") ? "rgb(16, 213, 109)" : data.mineNumber != "A6" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A6" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A7") ? "rgb(16, 213, 109)" : data.mineNumber != "A7" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A7" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("A8") ? "rgb(16, 213, 109)" : data.mineNumber != "A8" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "A8" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                </div>
                                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B1") ? "rgb(16, 213, 109)" : data.mineNumber != "B1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "B1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B2") ? "rgb(16, 213, 109)" : data.mineNumber != "B2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "B2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B3") ? "rgb(16, 213, 109)" : data.mineNumber != "B3" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "B3" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B4") ? "rgb(16, 213, 109)" : data.mineNumber != "B4" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "B4" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B5") ? "rgb(16, 213, 109)" : data.mineNumber != "B5" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D4" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B6") ? "rgb(16, 213, 109)" : data.mineNumber != "B6" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "B6" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B7") ? "rgb(16, 213, 109)" : data.mineNumber != "B7" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "B7" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("B8") ? "rgb(16, 213, 109)" : data.mineNumber != "B8" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "B8" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                </div>
                                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0 r-417010">
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C1") ? "rgb(16, 213, 109)" : data.mineNumber != "C1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "C1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C2") ? "rgb(16, 213, 109)" : data.mineNumber != "C2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "C2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C3") ? "rgb(16, 213, 109)" : data.mineNumber != "C3" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "C3" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C4") ? "rgb(16, 213, 109)" : data.mineNumber != "C4" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "C4" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C5") ? "rgb(16, 213, 109)" : data.mineNumber != "C5" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "C5" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C6") ? "rgb(16, 213, 109)" : data.mineNumber != "C6" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "C6" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C7") ? "rgb(16, 213, 109)" : data.mineNumber != "C7" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "C7" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("C8") ? "rgb(16, 213, 109)" : data.mineNumber != "C8" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "C8" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                </div>
                                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0 r-1wyyakw">
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D1") ? "rgb(16, 213, 109)" : data.mineNumber != "D1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D2") ? "rgb(16, 213, 109)" : data.mineNumber != "D2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D3") ? "rgb(16, 213, 109)" : data.mineNumber != "D3" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D3" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D4") ? "rgb(16, 213, 109)" : data.mineNumber != "D4" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D4" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D5") ? "rgb(16, 213, 109)" : data.mineNumber != "D5" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D5" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D6") ? "rgb(16, 213, 109)" : data.mineNumber != "D6" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D6" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D7") ? "rgb(16, 213, 109)" : data.mineNumber != "D7" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D7" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("D8") ? "rgb(16, 213, 109)" : data.mineNumber != "D8" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "D8" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                </div>
                                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("E1") ? "rgb(16, 213, 109)" : data.mineNumber != "E1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "E1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("E2") ? "rgb(16, 213, 109)" : data.mineNumber != "E2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "E2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("E3") ? "rgb(16, 213, 109)" : data.mineNumber != "E3" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "E3" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("E4") ? "rgb(16, 213, 109)" : data.mineNumber != "E4" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "E4" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("E5") ? "rgb(16, 213, 109)" : data.mineNumber != "E5" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "E5" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("E6") ? "rgb(16, 213, 109)" : data.mineNumber != "E6" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "E6" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("E7") ? "rgb(16, 213, 109)" : data.mineNumber != "E7" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "E7" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("E8") ? "rgb(16, 213, 109)" : data.mineNumber != "E8" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "E8" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                </div>
                                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("F1") ? "rgb(16, 213, 109)" : data.mineNumber != "F1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "F1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("F2") ? "rgb(16, 213, 109)" : data.mineNumber != "F2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "F2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("F3") ? "rgb(16, 213, 109)" : data.mineNumber != "F3" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "F3" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("F4") ? "rgb(16, 213, 109)" : data.mineNumber != "F4" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "F4" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("F5") ? "rgb(16, 213, 109)" : data.mineNumber != "F5" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "F5" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("F6") ? "rgb(16, 213, 109)" : data.mineNumber != "F6" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "F6" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("F7") ? "rgb(16, 213, 109)" : data.mineNumber != "F7" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "F7" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("F8") ? "rgb(16, 213, 109)" : data.mineNumber != "F8" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "F8" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                </div>
                                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("G1") ? "rgb(16, 213, 109)" : data.mineNumber != "G1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "G1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("G2") ? "rgb(16, 213, 109)" : data.mineNumber != "G2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "G2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("G3") ? "rgb(16, 213, 109)" : data.mineNumber != "G3" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "G3" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("G4") ? "rgb(16, 213, 109)" : data.mineNumber != "G4" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "G4" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("G5") ? "rgb(16, 213, 109)" : data.mineNumber != "G5" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "G5" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("G6") ? "rgb(16, 213, 109)" : data.mineNumber != "G6" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "G6" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("G7") ? "rgb(16, 213, 109)" : data.mineNumber != "G7" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "G7" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("G8") ? "rgb(16, 213, 109)" : data.mineNumber != "G8" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "G8" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                </div>
                                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-a2tzq0" >
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("H1") ? "rgb(16, 213, 109)" : data.mineNumber != "H1" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "H1" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("H2") ? "rgb(16, 213, 109)" : data.mineNumber != "H2" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "H2" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("H3") ? "rgb(16, 213, 109)" : data.mineNumber != "H3" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "H3" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("H4") ? "rgb(16, 213, 109)" : data.mineNumber != "H4" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "H4" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("H5") ? "rgb(16, 213, 109)" : data.mineNumber != "H5" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "H5" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("H6") ? "rgb(16, 213, 109)" : data.mineNumber != "H6" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "H6" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("H7") ? "rgb(16, 213, 109)" : data.mineNumber != "H7" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "H7" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                    <div className="css-1dbjc4n r-z2wwpe r-bnwqim" style={{ backgroundColor: data.histList.includes("H8") ? "rgb(16, 213, 109)" : data.mineNumber != "H8" && "rgb(240, 240, 240)", backgroundImage: data.mineNumber == "H8" && `url(${frozenBoomNew1})`, backgroundSize: "contain", borderColor: "rgba(0, 0, 0, 0.1)", height: "12px", padding: "1px", width: "12px" }}>

                                                                    </div>
                                                                </div>
                                                            </>
                                                    }

                                                </div>
                                            </div>
                                            <div className="css-1dbjc4n r-13awgt0 r-1pi2tsx r-a2tzq0 r-ltgprq">
                                                <div className="css-1dbjc4n r-18u37iz">
                                                    <div dir="auto" className="css-901oao r-lgvlli r-1i10wst" style={{ color: "rgb(151, 151, 151)" }}>Point</div>
                                                    <div dir="auto" className="css-901oao r-13awgt0 r-1i10wst r-hjhj" style={{ color: "rgb(151, 151, 151)", marginLeft: "100px" }}>Pass</div>
                                                    <div dir="auto" className="css-901oao r-lgvlli r-1i10wst" style={{ color: "rgb(151, 151, 151)", textAlign: "right" }}>Bonus</div>
                                                </div>
                                                <div className="css-1dbjc4n r-18u37iz">
                                                    <div dir="auto" className="css-901oao r-5zpi7z r-lgvlli r-evnaw">₹{data.amount}</div>
                                                    <div dir="auto" className="css-901oao r-5zpi7z r-13awgt0 r-evnaw r-hjhj"  style={{ marginLeft: "100px" }}>{data.select}</div>
                                                    {data.status == 1 ?
                                                        <div dir="auto" className="css-901oao r-lgvlli r-evnaw" style={{ color: "rgb(0, 194, 130)", textAlign: "right" }}>+{data.currency}{data.win_point}</div>
                                                        : data.status == 2 ?
                                                            <div dir="auto" className="css-901oao r-lgvlli r-evnaw" style={{ color: "rgb(250, 60, 9)", textAlign: "right" }}>-{data.currency}{data.win_point}</div>
                                                            : ""
                                                    }
                                                </div>
                                                <div className="css-1dbjc4n r-18u37iz r-1wtj0ep">
                                                    <div dir="auto" className="css-901oao r-ubezar" style={{ color: "rgb(189, 189, 195)" }}>Delivery: {data.currency}{data.amount - 1}</div>
                                                    <div dir="auto" className="css-901oao r-ubezar" style={{ color: "rgb(189, 189, 195)" }}>Fee: {data.currency}1</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-18u37iz r-1wtj0ep" style={{ padding: "18px" }}>
                                            <div dir="auto" className="css-901oao r-ubezar" style={{ color: "rgb(151, 151, 151)" }}>{new Date(Number(data.endDate)).getMonth() + 1 + "/" + ('0' + new Date(Number(data.endDate)).getDate()).slice(-2) + "  " + ('0' + new Date(Number(data.endDate)).getHours()).slice(-2) + ':' + ('0' + new Date(Number(data.endDate)).getMinutes()).slice(-2)}</div>
                                            <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                                <div dir="auto" className="css-901oao r-1jrmi80 r-ubezar" style={{ textDecorationLine: "underline" }}>Complaint</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )

            })

                :
                <div dir="auto" className="css-901oao r-evnaw" style={{ color: "rgb(151, 151, 151)", marginTop: "44px", textAlign: "center" }}>No records</div>


            }




        </>
    )
}

// redux connect
const mapStateToProps = (state) => ({


    res: state.getMine,


});

export default connect(mapStateToProps)(MineSweeper);