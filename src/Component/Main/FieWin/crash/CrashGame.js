import React, { useState, useEffect, useRef } from 'react'

import SomeChart from './SomeChart';
import Axios from "axios";
import io from 'socket.io-client';
const CrashGame = ({ count, status, multip, CrashData, s1 }) => {
    const [betAmount, setBetAmount] = useState(localStorage.getItem("local_storage_wager") || 100)
    const [autoPayoutMultiplier, setAutoPayoutMultiplier] = useState(localStorage.getItem("local_storage_multiplier") || 2)
    const [userData, setUserData] = useState(null);

    const [liveMultiplier, setLiveMultiplier] = useState('CONNECTING...')
    const [liveMultiplierSwitch, setLiveMultiplierSwitch] = useState(false)

    const [betActive, setBetActive] = useState(false)

    const [bBettingPhase, setbBettingPhase] = useState(false)
    const [bettingPhaseTime, setBettingPhaseTime] = useState(-1)
    const [bBetForNextRound, setbBetForNextRound] = useState(false)

    const [hookToNextRoundBet, setHookToNextRoundBet] = useState(false)


    const [globalTimeNow, setGlobalTimeNow] = useState(0)

    const [chartData, setChartData] = useState({ datasets: [], });
    const [chartOptions, setChartOptions] = useState({});
    const [chartSwitch, setChartSwitch] = useState(false)
    const [gamePhaseTimeElapsed, setGamePhaseTimeElapsed] = useState()


    const multiplierCount = useRef([])
    const timeCount_xaxis = useRef([])
    const realCounter_yaxis = useRef(5)
    const [t1, setT1] = useState(null)
    const [stop, setStop] = useState(false)
    const login_data = JSON.parse(sessionStorage.getItem('login'))
    // Socket.io setup
    useEffect(() => {
        if (hookToNextRoundBet) {
            if (bBetForNextRound) {
                send_bet()
            } else {

            }
            setHookToNextRoundBet(false)
            setbBetForNextRound(false)
        }
    }, [hookToNextRoundBet])
    useEffect(() => {
        setStop(s1)
    }, [s1])
    useEffect(() => {

        var socket = io.connect("http://161.97.146.42:7000")



        socket.on("start_multiplier_count", function (data) {
            console.log(data);
            count(data)
            setT1(data)
            setGlobalTimeNow(Date.now())
            setLiveMultiplierSwitch(true)
        })

        socket.on("stop_multiplier_count", function (data) {
            console.log("shdsjd", data);
            setLiveMultiplier(data)
            multip(data)
            setLiveMultiplierSwitch(false)
            setBetActive(false)
        })


        socket.on("start_betting_phase", function (data) {
            setGlobalTimeNow(Date.now())
            setLiveMultiplier("Starting...")
            setHookToNextRoundBet(true)
            setbBettingPhase(true)
            status(true)
            multiplierCount.current = []
            timeCount_xaxis.current = []
        })

        // socket.on("a", (data) => {
        //     setT1(data)
        // })

        socket.on("add_member1", (data) => {

            if (data.length) {
                if (data.some(obj => obj.user === login_data.userId)) {
                    console.log(data);
                    setStop(true)
                }
                else {
                    setStop(false)

                }

            }
            else {
                console.log("data");

                setStop(false)

            }

        })


        return () => {
            socket.disconnect();
        }
    }, []);


    useEffect(() => {
        if ((betActive && (autoPayoutMultiplier <= liveMultiplier))) {
            userData.balance += betAmount * autoPayoutMultiplier
            auto_cashout_early()
            setBetActive(false)
        }
    }, [liveMultiplier])

    useEffect(() => {
        let gameCounter = null
        if (liveMultiplierSwitch) {
            setLiveMultiplier('1.00')
            multip('1.00')
            gameCounter = setInterval(() => {
                let time_elapsed = (Date.now() - globalTimeNow) / 1000.0
                setGamePhaseTimeElapsed(time_elapsed)
                setLiveMultiplier((1.0024 * Math.pow(1.0718, time_elapsed)).toFixed(2))
                multip((1.0024 * Math.pow(1.0718, time_elapsed)).toFixed(2))
                if (multiplierCount.current.length < 1) {
                    multiplierCount.current = multiplierCount.current.concat([1])
                    timeCount_xaxis.current = timeCount_xaxis.current.concat([0])
                }
                if (realCounter_yaxis.current % 5 == 0) {

                    multiplierCount.current = multiplierCount.current.concat([(1.0024 * Math.pow(1.0718, time_elapsed)).toFixed(2)])
                    timeCount_xaxis.current = timeCount_xaxis.current.concat([time_elapsed])
                }
                realCounter_yaxis.current += 1
            }, 1)
        }
        return () => {

            clearInterval(gameCounter)

        }
    }, [liveMultiplierSwitch]);

    useEffect(() => {
        let bettingInterval = null

        if (bBettingPhase) {

            bettingInterval = setInterval(() => {

                let time_elapsed = ((Date.now() - globalTimeNow) / 1000.0)
                let time_remaining = (5 - time_elapsed).toFixed(2)
                setBettingPhaseTime(time_remaining)
                if (time_remaining < 0) {
                    setbBettingPhase(false)
                    multip("Starting...")

                    status(false)
                }
            }, 10)
        }
        return () => {

            clearInterval(bettingInterval)
            setBettingPhaseTime("Starting...")

        }
    }, [bBettingPhase]);

    useEffect(() => {
        if (bBetForNextRound) {

        } else {

        }
    }, [bBetForNextRound])

    useEffect(() => {
        localStorage.setItem("local_storage_wager", betAmount);
        localStorage.setItem("local_storage_multiplier", autoPayoutMultiplier);
    }, [betAmount, autoPayoutMultiplier])

    useEffect(() => {
        setChartSwitch(true)
        get_game_status()

        // setStartTime(Date.now())


        let getBetHistory = setTimeout(() => retrieve_bet_history(), 1000);

        return () => {


            clearTimeout(getBetHistory);
        };
    }, [])






    const send_bet = () => {
        fetch({
            method: "POST",
            data: {
                bet_amount: betAmount,
                payout_multiplier: autoPayoutMultiplier,
            },
            withCredentials: true,
            url: "/send_bet",
        }).then(res => {
            setBetActive(true)
            userData.balance -= betAmount
            setUserData(userData)
        })
            .catch(err => {
                if (err.response) {
                }
            })
    }



    const get_game_status = () => {
        fetch("/get_game_status", {
            withCredentials: true
        }).then(res =>
            res.json()).then((res) => {

                console.log(res);
                if (res.phase === 'betting_phase') {
                    setGlobalTimeNow(res.info)
                    setbBettingPhase(true)
                    status(true)
                } else if (res.phase === 'game_phase') {
                    setGlobalTimeNow(res.info)
                    setLiveMultiplierSwitch(true)
                }
            })

    }


    const auto_cashout_early = () => {
        fetch("/auto_cashout_early", {
            withCredentials: true
        }).then(res => {
            setUserData(res.data)
            setBetActive(false)
        })
    }






    const retrieve_bet_history = () => {
        fetch("/retrieve_bet_history", {
            withCredentials: true
        }).then(res => {
            res.json()
        }).then((res) => {

        })
    };

    useEffect(() => {
        const temp_interval = setInterval(() => {
            setChartSwitch(false)
            sendToChart()
        }, 1)

        return () => {
            clearInterval(temp_interval)
            setChartSwitch(true)
        }
    }, [chartSwitch])

    // Chart Data
    const sendToChart = () => {
        setChartData({
            labels: timeCount_xaxis.current,

            datasets: [
                {
                    data: multiplierCount.current,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)",
                    color: "rgba(255, 255, 255,1)",
                    pointRadius: 0,
                    borderDash: [35, 5],
                    lineTension: 0.1,
                },
            ],
        });
        setChartOptions({
            events: [],
            maintainAspectRatio: false,
            elements: {
                line: {
                    tension: 0.1
                }
            },
            // afterDatasetsDraw: (chart) => {
            //     const canvas = chart.canvas;
            //     const ctx = canvas.getContext('2d');

            //     const img = new Image();
            //     img.src = 'https://res.cloudinary.com/fiewin/image/upload/images/peopleDown.png';
            //     img.onload = () => {
            //       const x = chart.chartArea.right - 25;
            //       const y = chart.chartArea.bottom - 25;
            //       ctx.drawImage(img, x, y, 25, 25);
            //     };
            //   },
            scales: {

                xAxes: {
                    type: 'linear',

                    title: {
                        display: false,

                        text: 'value'
                    },
                    max: (gamePhaseTimeElapsed > 2 ? (gamePhaseTimeElapsed) : (2)),
                    ticks: {
                        color: "black",

                        maxTicksLimit: 5,
                        callback: function (value, index, values) {
                            if (gamePhaseTimeElapsed < 10) {
                                if (value % 1 == 0) return value + "x"
                            } else {
                                if (value % 10 == 0) return value + "x"
                            }
                        }
                    },
                    grid: {
                        display: true,
                        color: 'transparent'
                    },
                },
                yAxes: {
                    type: 'linear',

                    position: 'right',
                    title: {
                        display: false,


                        text: 'value'
                    },
                    min: 1,
                    max: (liveMultiplier > 2 ? (liveMultiplier) : (2)),
                    ticks: {
                        color: "black",
                        maxTicksLimit: 5,
                        callback: function (value, index, values) {
                            if (value % 1 == 0) return (value) + "x"
                        }
                    },
                    grid: {
                        display: true,
                        color: 'transparent'
                    },
                },
            },
            plugins: {
                legend: { display: false },
            },
            animation: {
                x: {
                    type: 'number',
                    easing: 'linear',
                    duration: 0,
                    from: 5,
                    delay: 0
                },
                y: {
                    type: 'number',
                    easing: 'linear',
                    duration: 0,
                    from: 5,
                    delay: 0
                },
                loop: true,
            },
        }
        );
    }

    const send_stop = () => {

        setStop(false)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            user: login_data.userId,
            crash: liveMultiplier,
            round_number: t1 - 1
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/send_stop", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    const handleStop = () => {
        send_stop()
    }

    return (
        <>

            <div class="css-1dbjc4n r-1udh08x r-bnwqim" style={{ backgroundColor: "rgb(226, 240, 253)" }}>
                <div className="grid-container-main">
                    <div className="grid-elements" >
                        <div class="css-1dbjc4n r-1awozwy r-1niwhzg r-18u37iz r-1wtj0ep r-1idfib4 r-13qz1uu">

                            {CrashData.slice(-6).map((data) => {
                                return (

                                    <div class="css-1dbjc4n r-1awozwy r-z2wwpe r-1r8g8re r-1777fci r-cfp7ip r-cbg28f" style={{ backgroundColor: `${data.Crash >= 1.0 && data.Crash <= 1.2 ? "rgb(250, 60, 9)" : data.Crash >= 1.21 && data.Crash <= 2.0 ? "rgb(0, 194, 130)" : data.Crash >= 2.01 && data.Crash <= 5.0 ? "rgb(0, 189, 237)" : data.Crash >= 5.01 && data.Crash <= 100.0 ? "rgb(34, 131, 246)" : data.Crash >= 100.01 && data.Crash <= 500.0 ? "rgb(119, 84, 191)" : ""}` }}><div dir="auto" class="css-901oao r-jwli3a r-1b43r93">{data.Crash}x</div></div>
                                )
                            })}
                        </div>
                        {<div className="effects-box">
                            <div className="basically-the-graph" style={{ height: '100%', width: '100%', position: "absolute", top: '9%' }}>
                                {chartData ? (<SomeChart chartData={chartData} chartOptions={chartOptions} />) : ('')}
                            </div>
                            <div style={{ position: "absolute", zIndex: 12, top: '9%' }}>
                                {(() => {
                                    if (bBettingPhase) {
                                        return <><h4 className='text-black'>Start in </h4><h5 className='text-black text-center'> {bettingPhaseTime}</h5></>
                                    } else {

                                        return <h4 className={`text-black ${!liveMultiplierSwitch && liveMultiplier !== 'Starting...' && liveMultiplier !== 'CONNECTING...' ? ("multipler_crash_value_message") : ("")}`}>{liveMultiplier !== "Starting..." ? <>{liveMultiplier}x  {stop && <span class="  r-1q9bdsx  r-uvuy5l r-1777fci  " onClick={handleStop} style={{ transitionDuration: "0s", background: "rgb(255, 153, 51)", cursor: "pointer", padding: "10px" }} data-focusable="true" tabindex="0">
                                            <span dir="auto" class="css-901oao r-jwli3a r-evnaw">Stop </span>

                                        </span>}</> : ('Starting...')}</h4>
                                    }
                                })()}
                            </div>
                        </div>}
                    </div>







                </div >

            </div >


        </>
    )
}

export default CrashGame