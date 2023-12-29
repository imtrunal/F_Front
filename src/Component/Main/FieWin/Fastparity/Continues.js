import  { useState, useEffect } from 'react'
import * as React from 'react'

const Continues = ({ socket }) => {
    const [finalAllresult, setFinalAllResult] = useState([])

    socket.on("result_all_fast_parity_continue", (data) => {
        // const lastelement=finalAllresult.slice(-1)
        setFinalAllResult(data)
    })
    var data2 = []

    finalAllresult && finalAllresult.map((data, index) => {


        if (data.win_number.color[0] == (finalAllresult[index - 1] && finalAllresult[index - 1].win_number.color[0])) {

            data2[data2.length - 1] && data2[data2.length - 1].push(data.win_number)

        }
        else {
            data2.push([{ ...data.win_number }])
        }

    })



    return (
        <>
            <div className="css-1dbjc4n r-14lw9ot r-1idfib4">
                <div className="css-1dbjc4n r-18u37iz r-1wtj0ep">
                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z">← old</div>
                    <div dir="auto" className="css-901oao r-1az3528 r-adyw6z">new →</div>
                </div>
                <div className="css-1dbjc4n r-150rngu r-18u37iz r-16y2uox r-1wbh5a2 r-1d7gupr r-lltvgl r-buy8e9 r-mfh4gg r-1sncvnh r-13qz1uu" style={{ minHeight: "72px" }}>
                    <div className="css-1dbjc4n r-18u37iz">
                        {data2 && data2.slice(0).reverse().map((data, index) => {
                            return (
                                <div className="css-1dbjc4n r-cpa5s6">
                                    <div className="css-1dbjc4n r-1awozwy" style={{ marginRight: "12px" }}>
                                        {data && data.map((data1) => {
                                            return (
                                                <>
                                                    {data1.color.length == 1 ?
                                                        <div className={`css-1dbjc4n r-1awozwy ${data1.color.includes('R') ? "red" : data1.color.includes('G') ? "green" : data1.color.includes('V') ? "violet" : ""}  r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0`} style={{ marginBottom: "6px" }}>
                                                            <div dir="auto" className="css-901oao r-jwli3a r-1i10wst">{data1.number}
                                                            </div>
                                                        </div>
                                                        :
                                                        (data1.color.includes('R') && data1.color.includes('V')) ?



                                                            <div className="css-1dbjc4n r-1awozwy  r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0" style={{ marginBottom: "6px" }} >

                                                                <div className="css-1dbjc4n r-1awozwy red r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                    <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>

                                                                    <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data1.number}</div></div>
                                                            </div>
                                                            :
                                                            data1.color.includes('G') && data1.color.includes('V') ?
                                                                <div className="css-1dbjc4n r-1awozwy  r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0" style={{ marginBottom: "6px" }} >
                                                                    <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0">
                                                                        <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>

                                                                        <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data1.number}</div></div>
                                                                </div> :
                                                                data1.color.includes('G') && data1.color.includes('V') && data1.color.includes('R') ?
                                                                    <div className="css-1dbjc4n r-1awozwy r-1777fci r-1444osr r-9l47p7">
                                                                        <div className="css-1dbjc4n r-1awozwy green r-y47klf r-5e03tv r-1a8msfu r-1777fci r-1udh08x r-bnwqim r-131xog0" style={{ marginBottom: "6px" }}>
                                                                            <div className="css-1dbjc4n violet r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw"></div>
                                                                            <div className="css-1dbjc4n red r-1pi2tsx r-u8s1d r-zchlnj r-ipm5af r-1f720gc r-1wyyakw" ></div>

                                                                            <div dir="auto" className="css-901oao r-jwli3a r-1enofrn">{data1.number}</div></div>
                                                                    </div>
                                                                    : ""
                                                    }
                                                </>
                                            )
                                        })}

                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Continues