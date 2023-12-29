import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moreOrder from "../../.././images/moreOrder.png"

const CrashOrder = () => {
    const [user, setUser] = useState([{}])
    var navigate=useNavigate()
    const login_data = JSON.parse(sessionStorage.getItem('login'))
    useEffect(() => {
        const a = async () => {

            var response = await fetch(`http://161.97.146.42:7000/api/crash/user/order/${login_data.userId}`, {
                method: "POST",
                headers: {
                    "x-access-token": login_data.token,

                    'Content-Type': 'application/json',
                },

            });
            var res_data = await response.json();
            // console.log(res_data);
            // res_data.data.map((u)=>{
            //     console.log(u.crash_result[0]);
            // })
            setUser(res_data.data)
        }
        a()
    }, [])
console.log(user);
    return (
        <>

            {user && user.length ? <>

                {user.map((u) => {
                    return (

                        <div class="css-1dbjc4n">
                            <div class="css-1dbjc4n r-1jie2fr r-1dzdj1l r-rs99b7 r-1ggwxxu r-eun1hy r-1wtj0ep r-rdhp45 r-l71dzp r-whuqzp">
                                <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                                    <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst">Periods: <span class="css-901oao css-16my406 r-5zpi7z">{u.round_number}</span></div>
                                    <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst">Time: <span class="css-901oao css-16my406 r-5zpi7z">{new Date(u.createdAt).getMonth() + 1 + "/" + ('0' + new Date(u.createdAt).getDate()).slice(-2) + "  " + ('0' + new Date(u.createdAt).getHours()).slice(-2) + ':' + ('0' + new Date(u.createdAt).getMinutes()).slice(-2)}</span></div>
                                </div>
                                <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                                    <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst">Stop: {u.target != "0" ? <span class="css-901oao css-16my406" style={{ color: "rgb(0, 189, 237)" }}>{u.target}</span> : <span class="css-901oao css-16my406">failed</span>}</div>
                                    <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst">Points: <span class="css-901oao css-16my406 r-5zpi7z">{u.point}</span></div>
                                </div>
                                {/* {console.log(u.length && u.crash_result.length && u.crash_result[0]) } */}
                                <div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep">
                                    <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst">Result: <span class="css-901oao css-16my406">{u.Crash}x</span></div>
                                    <div dir="auto" class="css-901oao r-1az3528 r-13awgt0 r-1i10wst">Amount: <span class="css-901oao css-16my406" style={{ color: `${u.win_amount > 0 ? "rgb(0, 194, 130)" : "rgb(151, 151, 151)"}` }}>{u.win_amount}</span></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div data-focusable="true" tabIndex="0" className="css-1dbjc4n r-1awozwy r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr" style={{ margin: "16px", transitionDuration: "0s" }} onClick={() => navigate("/OrderRecord")}>
                    <div className="css-1dbjc4n r-1mlwlqe r-sga3zk r-1udh08x r-13qz1uu r-417010">
                        <div className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-ehq7j7 r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style={{ backgroundImage: `url(${moreOrder})` }}></div>
                        <img alt="" draggable="false" src={moreOrder} className="css-9pa8cd" /></div>
                </div>
            </> :

                <div dir="auto" className="css-901oao r-evnaw" style={{ color: "rgb(151, 151, 151)", marginTop: "44px", textAlign: "center" }}>No records</div>
            }


        </>
    )
}

export default CrashOrder