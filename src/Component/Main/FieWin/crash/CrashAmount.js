import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';

const CrashAmount = ({ socket, series, status, multiper, userStop }) => {
    const [state, setState] = useState({
        amount: 0,
        target: 0
    })
    const [check, setCheck] = useState(false)
    const [amount, setAmount] = useState()

    const handleChange = (e) => {
        var { name, value } = e.target
        if (name == "amount") {

            if (value <= 20) {
                value = 20
            }
            if (value >= 100000) {
                value = 100000
            }
        }
        setState({
            ...state,
            [name]: e.target.value.replace(/[^0-9.]/g, "")
        })
    }

    useEffect(() => {


        const WalletAmount = async () => {

            var response = await fetch(`http://161.97.146.42:7000/api/walletAmount/${login_data.userId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "x-access-token": login_data.token
                },
            });
            var res_data = await response.json();
            setAmount(res_data.data[0].amount)


        }
        WalletAmount()
    }, [])

    const handleReduce = () => {
        setState({
            ...state,
            amount: state.amount >= 20 ? state.amount - 10 : 20
        })
    }
    const handleIncrease = () => {
        setState({
            ...state,
            amount: state.amount <= 99990 ? Number(state.amount) + 10 : 100000
        })
    }

    const handleReduce1 = () => {
        setState({
            ...state,
            target: state.target >= 2 ? state.target - 1 : 1
        })
    }
    const handleIncrease1 = () => {
        setState({
            ...state,
            target: state.target + 1
        })
    }
    const handleChecked = (e) => {
        setCheck(!check)
    }
    const [stop, setStop] = useState(false)
    const login_data = JSON.parse(sessionStorage.getItem('login'))
    socket.on("add_member1", (data) => {

        if (data.length) {
            if (data.some(obj => obj.user === login_data.userId)) {
                setStop(true)
            }
            else {
                setStop(false)

            }

        }
        else {
            setStop(false)

        }

    })
    const handleStart = () => {
        socket.emit("crash_join", {
            round_number: !status ? Number(series) : Number(series - 1), user: login_data.userId, target: state.target, amount: state.amount
        })
        if (status) {
            userStop(true)
        }
        else{
            userStop(false)

        }
        setAmount(amount - state.amount)
        swal({ text: `₹${state.amount} Add Successfully`, "timer": 2000 })

    }

    return (
        <>
            <div div class="css-1dbjc4n " style={{ paddingBottom: "22px" }} >
                <div class="css-1dbjc4n r-obd0qt r-18u37iz r-1wtj0ep r-13qz1uu">
                    <div class="css-1dbjc4n">
                        <div class="css-1dbjc4n r-18u37iz r-1wtj0ep r-5oul0u r-l71dzp">
                            <div dir="auto" class="css-901oao r-7zxnss r-adyw6z">balance</div>
                            <div dir="auto" class="css-901oao r-7zxnss r-adyw6z">₹{amount}</div>
                        </div>
                        <div class="css-1dbjc4n r-1awozwy r-131i89u r-1dzdj1l r-rs99b7 r-18u37iz  r-1f1sjgu">
                            <div data-focusable="true" tabindex="0" class="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", width: "28px" }} onClick={handleReduce}>
                                    <div
                                        class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{
                                            backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashReduce.png')"
                                        }} ></div>
                                    <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashReduce.png" class="css-9pa8cd" />
                                </div>
                            </div>
                            <input autocapitalize="sentences" autocomplete="on" autocorrect="on" dir="auto" name="amount" spellcheck="true" inputmode="numeric" data-focusable="true" class="css-11aywtz r-evnaw r-q4m81j r-y3w9o3" value={state.amount} onChange={handleChange} />
                            <div data-focusable="true" tabindex="0" class="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                                <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "28px", width: "28px" }} onClick={handleIncrease}>
                                    <div
                                        class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{
                                            backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashAdd.png')"
                                        }}></div>
                                    <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashAdd.png" class="css-9pa8cd" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {multiper != 'Starting...' ?
                        <div onClick={handleStart} class={`css-1dbjc4n r-1awozwy ${!status ? "r-14f7y9x" : "r-2mrr8d"} r-1q9bdsx r-1wkvtr9 r-1loqt21 r-uvuy5l r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-yee3n4`} style={{ transitionDuration: "0s" }} data-focusable="true" tabindex="0">
                            <div dir="auto" class="css-901oao r-jwli3a r-evnaw">START </div>
                            <div style={{ color: "white" }}>{!status && "(next Round)"}</div>
                        </div> :
                        <div class="css-1dbjc4n r-1awozwy  r-1q9bdsx r-1wkvtr9 r-1loqt21 r-uvuy5l r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-yee3n4 " style={{ transitionDuration: "0s", background: "rgb(151, 151, 151)" }} data-focusable="true" tabindex="0">
                            <div dir="auto" class="css-901oao r-jwli3a r-evnaw">START </div>

                        </div>}
                </div>

                <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-l71dzp">
                    <div data-focusable="true" tabindex="0" onClick={() => {
                        setState({ ...state, amount: 20 })
                    }} class="css-1dbjc4n r-1awozwy r-1nt8t1s r-ji1w04 r-1dzdj1l r-rs99b7 r-1loqt21 r-1sn7ly2 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru" style={{ transitionDuration: "0s" }}>
                        <div dir="auto" class="css-901oao r-5zpi7z r-adyw6z">20</div>
                    </div>
                    <div data-focusable="true" tabindex="0" onClick={() => {
                        setState({ ...state, amount: 50 })
                    }} class="css-1dbjc4n r-1awozwy r-1nt8t1s r-ji1w04 r-1dzdj1l r-rs99b7 r-1loqt21 r-1sn7ly2 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru" style={{ transitionDuration: "0s" }}>
                        <div dir="auto" class="css-901oao r-5zpi7z r-adyw6z">50</div>
                    </div>
                    <div data-focusable="true" tabindex="0" onClick={() => {
                        setState({ ...state, amount: 100 })
                    }} class="css-1dbjc4n r-1awozwy r-1nt8t1s r-ji1w04 r-1dzdj1l r-rs99b7 r-1loqt21 r-1sn7ly2 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru" style={{ transitionDuration: "0s" }}>
                        <div dir="auto" class="css-901oao r-5zpi7z r-adyw6z">100</div>
                    </div>
                    <div data-focusable="true" tabindex="0" onClick={() => {
                        setState({ ...state, amount: 1000 })
                    }} class="css-1dbjc4n r-1awozwy r-1nt8t1s r-ji1w04 r-1dzdj1l r-rs99b7 r-1loqt21 r-1sn7ly2 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru" style={{ transitionDuration: "0s" }}>
                        <div dir="auto" class="css-901oao r-5zpi7z r-adyw6z">1000</div>
                    </div>
                    <div data-focusable="true" tabindex="0" onClick={() => {
                        setState({ ...state, amount: 10000 })
                    }} class="css-1dbjc4n r-1awozwy r-1nt8t1s r-ji1w04 r-1dzdj1l r-rs99b7 r-1loqt21 r-1sn7ly2 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr r-1xjpbru" style={{ transitionDuration: "0s" }}>
                        <div dir="auto" class="css-901oao r-5zpi7z r-adyw6z">10000</div>
                    </div>
                </div>
                <div class="css-1dbjc4n r-1awozwy r-131i89u r-1dzdj1l r-rs99b7 r-18u37iz r-uvuy5l r-1wtj0ep r-1d7gupr r-779j7e">
                    <div data-focusable="true" tabindex="0" class="css-1dbjc4n r-1awozwy r-1loqt21 r-18u37iz r-1otgn73 r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                        {!check ?
                            <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "22px", width: "22px" }} onClick={handleChecked}>
                                <div
                                    class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{
                                        backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashUncheck.png')"
                                    }}></div>
                                <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashUncheck.png" class="css-9pa8cd" />
                            </div> :
                            <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "22px", width: "22px" }} onClick={handleChecked}>
                                <div
                                    class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                    style={{
                                        backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashcheck.png')"
                                    }}></div>
                                <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashcheck.png" class="css-9pa8cd" />
                            </div>
                        }
                        <div dir="auto" class="css-901oao r-7zxnss r-adyw6z r-1jkjb">Auto Stop</div>
                    </div>
                    <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                        <div aria-disabled="true" disabled="" class="css-1dbjc4n r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                            {!check ?
                                <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "30px", width: "30px" }}>
                                    <div
                                        class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{
                                            backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashReduce2.png')"
                                        }}></div>
                                    <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashReduce2.png" class="css-9pa8cd" />
                                </div>
                                :
                                <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "30px", width: "30px" }} onClick={handleReduce1}>
                                    <div
                                        class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{
                                            backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashReduce.png')"
                                        }}></div>
                                    <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashReduce.png" class="css-9pa8cd" />
                                </div>}
                        </div>
                        <input disabled="" inputmode="numeric" keyboardtype="numeric" style={{ width: "108px", textAlign: "right", fontSize: "22px", }} name="target" value={state.target} onChange={check && handleChange} />
                        <div dir="auto" class="css-901oao r-5zpi7z r-evnaw r-1i7hp2c">x</div>
                        <div aria-disabled="true" disabled="" class="css-1dbjc4n r-1i6wzkk r-lrvibr" style={{ transitionDuration: "0s" }}>
                            {!check ?

                                <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "30px", width: "30px" }} >
                                    <div
                                        class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{
                                            backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashAdd2.png')"
                                        }}></div>
                                    <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashAdd2.png" class="css-9pa8cd" />
                                </div>

                                :
                                <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010" style={{ height: "30px", width: "30px" }} onClick={handleIncrease1}>
                                    <div
                                        class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                        style={{
                                            backgroundImage: "url('https://res.cloudinary.com/fiewin/image/upload/images/crashAdd.png')"
                                        }}></div>
                                    <img alt="" draggable="false" src="https://res.cloudinary.com/fiewin/image/upload/images/crashAdd.png" class="css-9pa8cd" />
                                </div>}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CrashAmount