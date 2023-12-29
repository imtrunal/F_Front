import React, { useState } from 'react'

const EveryOne = ({ socket }) => {
    const [Socket, setSocket] = useState([])
    socket.on("minesweeper_data", (data) => {
        setSocket([
            data,
            ...Socket

        ])
    })
    return (
        <>
            <div style={{ display: "block" }}>
                <div className="css-1dbjc4n">
                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1s2bzr4 r-1ehh1yr">
                        <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "4 1 0%" }}>Period</div>
                        <div dir="auto" className="css-901oao r-1az3528 r-adyw6z" style={{ flex: "4 1 0%", paddingRight: "6px", textAlign: "right" }}>User</div>
                        <div dir="auto" className="css-901oao r-1az3528 r-dta0w2 r-adyw6z r-q4m81j">Select</div>
                        <div dir="auto" className="css-901oao r-1az3528 r-lgvlli r-adyw6z" style={{ textAlign: "right" }}>Point</div>
                    </div>
                    <div className="css-1dbjc4n" style={{ height: "1664px" }}>
                        {Socket && Socket.map((data) => {

                            return (
                                <>
                                    <div className="css-1dbjc4n r-l71dzp r-1udh08x r-bnwqim r-13qz1uu" >
                                        <div className="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-1pi2tsx r-11yh6sk r-buy8e9 r-19z077z r-1sncvnh">
                                            <div className="css-1dbjc4n">

                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1ehh1yr" style={{ backgroundColor: "rgb(239, 246, 255)", height: "30.4554px", }}>
                                                    <div dir="auto" className="css-901oao r-5zpi7z r-dta0w2 r-adyw6z">{('0' + new Date(Number(data.endDate)).getHours()).slice(-2) + ':' + ('0' + new Date(Number(data.endDate)).getMinutes()).slice(-2)} </div>
                                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-17s6mgv" style={{ flex: "4 1 0%", paddingRight: "6px" }}>
                                                        <img src={data.avtar} style={{ width: "34px", height: "34px", borderRadius: "18px", objectFit: "cover" }} />
                                                        <div dir="auto" className="css-901oao r-1b43r93" style={{ color: "rgb(168, 168, 168)" }}>{data.userId.replace(/(\d{1})(.*)(\d{3})/, '***$3')}</div>
                                                    </div>
                                                    <div dir="auto" className="css-901oao r-5zpi7z r-dta0w2 r-adyw6z r-q4m81j">{data.type} x {data.type}</div>
                                                    <div className="css-1dbjc4n r-dta0w2 r-18u37iz r-1777fci"><div dir="auto" className="css-901oao r-5zpi7z r-b88u0q" style={{ fontSize: "18px" }}>{data.select}</div></div>
                                                    <div dir="auto" className="css-901oao r-5zpi7z r-lgvlli r-adyw6z" style={{ textAlign: 'right' }}>{data.currency}{data.win_point}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu r-d1gdsc" style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}></div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EveryOne