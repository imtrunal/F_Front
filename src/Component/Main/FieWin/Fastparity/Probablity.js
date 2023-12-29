import React, { useEffect } from 'react'
import {connect} from "react-redux"
import { ProbablityDetails } from '../../../../redux/action/FetchData'
const Probablity = ({dispatch,res}) => {
    useEffect(()=>{
  dispatch(ProbablityDetails())
    },[dispatch])
    const res_data=  res.data.data
    return (
        <div className="css-1dbjc4n r-14lw9ot r-bnwqim" style={{paddingBottom: "48px", paddingTop: "22px"}}>
            <div dir="auto" className="css-901oao r-1az3528 r-evnaw r-q4m81j" >{res_data &&res_data.times} times today</div>
            <div className="css-1dbjc4n r-18u37iz r-1wtj0ep r-1ehh1yr">
                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1d7gupr" >
                    <div className="css-1dbjc4n r-1awozwy r-1ov7twd r-t23y2h r-5e03tv r-1k25im9 r-1777fci r-1kb76zh r-rzb6rt r-19tjxh9"><div dir="auto" className="css-901oao r-jwli3a r-1b43r93 r-q4m81j">G</div></div>
                    <div className="css-1dbjc4n r-6qh97a r-kdyh1x r-18yzcnr r-1777fci r-bnwqim r-1bvkof7">
                        <div dir="auto" className="css-901oao r-1ov7twd r-kdyh1x r-1pi2tsx" style={{width:`${res_data && Number(res_data.Green)*100/Number(res_data.times)}px`}}></div>
                        {/* 714 */}
                        <div dir="auto" className="css-901oao r-5zpi7z r-1b43r93 r-m2pi6t r-u8s1d r-zchlnj1">{res_data && res_data.Green}</div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1d7gupr" >
                    <div className="css-1dbjc4n r-1awozwy r-1o2fd9h r-t23y2h r-5e03tv r-1k25im9 r-1777fci r-1kb76zh r-rzb6rt r-19tjxh9"><div dir="auto" className="css-901oao r-jwli3a r-1b43r93 r-q4m81j">R</div></div>
                    <div className="css-1dbjc4n r-6qh97a r-kdyh1x r-18yzcnr r-1777fci r-bnwqim r-1bvkof7">
                        <div dir="auto" className="css-901oao r-1o2fd9h r-kdyh1x r-1pi2tsx" style={{width: `${res_data && Number(res_data.Red)*100/Number(res_data.times)}px`}}></div>
                        <div dir="auto" className="css-901oao r-5zpi7z r-1b43r93 r-m2pi6t r-u8s1d r-zchlnj1">{ res_data && res_data.Red}</div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1d7gupr" >
                    <div className="css-1dbjc4n r-1awozwy r-1k0ih56 r-t23y2h r-5e03tv r-1k25im9 r-1777fci r-1kb76zh r-rzb6rt r-19tjxh9"><div dir="auto" className="css-901oao r-jwli3a r-1b43r93 r-q4m81j">V</div></div>
                    <div className="css-1dbjc4n r-6qh97a r-kdyh1x r-18yzcnr r-1777fci r-bnwqim r-1bvkof7">
                        <div dir="auto" className="css-901oao r-1k0ih56 r-kdyh1x r-1pi2tsx" style={{width: `${res_data && Number(res_data.Violet)*100/Number(res_data.times)}px`}}></div>
                        <div dir="auto" className="css-901oao r-5zpi7z r-1b43r93 r-m2pi6t r-u8s1d r-zchlnj1">{res_data &&res_data.Violet}</div>
                    </div>
                </div>
            </div>
            <div className="css-1dbjc4n r-alk14i r-fnigne r-rs99b7 r-18u37iz r-1wtj0ep r-1tu9xh3 r-1d7gupr">
                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-1777fci">
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-1vy83ar r-t23y2h r-1k25im9 r-1777fci r-rzb6rt r-19tjxh9" style={{boxShadow: "none", marginRight: "0px"}}><div dir="auto" className="css-901oao r-jwli3a r-1b43r93 r-q4m81j">1</div></div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu" style={{borderTopColor: "rgb(201, 219, 255)", borderTopWidth: "1px"}}>
                        <div dir="auto" className="css-901oao" style={{color: "rgb(51, 51, 51)"}}>{res_data && res_data["1"]}</div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-1777fci">
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-1vy83ar r-t23y2h r-1k25im9 r-1777fci r-rzb6rt r-19tjxh9" style={{boxShadow: "none", marginRight: "0px"}}><div dir="auto" className="css-901oao r-jwli3a r-1b43r93 r-q4m81j">2</div></div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu" style={{borderTopColor: "rgb(201, 219, 255)", borderTopWidth: "1px"}}>
                        <div dir="auto" className="css-901oao" style={{color: "rgb(51, 51, 51)"}}>{res_data && res_data["2"]}</div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-1777fci">
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-1vy83ar r-t23y2h r-1k25im9 r-1777fci r-rzb6rt r-19tjxh9" style={{boxShadow: "none", marginRight: "0px"}}><div dir="auto" className="css-901oao r-jwli3a r-1b43r93 r-q4m81j">3</div></div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu" style={{borderTopColor: "rgb(201, 219, 255)", borderTopWidth: "1px"}}>
                        <div dir="auto" className="css-901oao" style={{color: "rgb(51, 51, 51)"}}>{res_data && res_data["3"]}</div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-1777fci">
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-1vy83ar r-t23y2h r-1k25im9 r-1777fci r-rzb6rt r-19tjxh9" style={{boxShadow: "none", marginRight: "0px"}}><div dir="auto" className="css-901oao r-jwli3a r-1b43r93 r-q4m81j">4</div></div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu" style={{borderTopColor: "rgb(201, 219, 255)", borderTopWidth: "1px"}}>
                        <div dir="auto" className="css-901oao" style={{color: "rgb(51, 51, 51)"}}>{res_data && res_data["4"]}</div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-1777fci">
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-1vy83ar r-t23y2h r-1k25im9 r-1777fci r-rzb6rt r-19tjxh9" style={{boxShadow: "none", marginRight: "0px"}}><div dir="auto" className="css-901oao r-jwli3a r-1b43r93 r-q4m81j">5</div></div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu" style={{borderTopColor: "rgb(201, 219, 255)", borderTopWidth: "1px"}}>
                        <div dir="auto" className="css-901oao" style={{color: "rgb(51, 51, 51)"}}>{res_data && res_data["5"]}</div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-1777fci">
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-1vy83ar r-t23y2h r-1k25im9 r-1777fci r-rzb6rt r-19tjxh9" style={{boxShadow: "none", marginRight: "0px"}}><div dir="auto" className="css-901oao r-jwli3a r-1b43r93 r-q4m81j">6</div></div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu" style={{borderTopColor: "rgb(201, 219, 255)", borderTopWidth: "1px"}}>
                        <div dir="auto" className="css-901oao" style={{color: "rgb(51, 51, 51)"}}>{res_data && res_data["6"]}</div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-1777fci">
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-1vy83ar r-t23y2h r-1k25im9 r-1777fci r-rzb6rt r-19tjxh9" style={{boxShadow: "none", marginRight: "0px"}}><div dir="auto" className="css-901oao r-jwli3a r-1b43r93 r-q4m81j">7</div></div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu" style={{borderTopColor: "rgb(201, 219, 255)", borderTopWidth: "1px"}}>
                        <div dir="auto" className="css-901oao" style={{color: "rgb(51, 51, 51)"}}>{res_data && res_data["7"]}</div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-1777fci">
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-1vy83ar r-t23y2h r-1k25im9 r-1777fci r-rzb6rt r-19tjxh9" style={{boxShadow: "none", marginRight: "0px"}}><div dir="auto" className="css-901oao r-jwli3a r-1b43r93 r-q4m81j">8</div></div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu" style={{borderTopColor: "rgb(201, 219, 255)", borderTopWidth: "1px"}}>
                        <div dir="auto" className="css-901oao" style={{color: "rgb(51, 51, 51)"}}>{res_data && res_data["8"]}</div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-1777fci">
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-1vy83ar r-t23y2h r-1k25im9 r-1777fci r-rzb6rt r-19tjxh9" style={{boxShadow: "none", marginRight: "0px"}}><div dir="auto" className="css-901oao r-jwli3a r-1b43r93 r-q4m81j">9</div></div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu" style={{borderTopColor: "rgb(201, 219, 255)", borderTopWidth: "1px"}}>
                        <div dir="auto" className="css-901oao" style={{color: "rgb(51, 51, 51)"}}>{res_data && res_data["9"]}</div>
                    </div>
                </div>
                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-1777fci">
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu">
                        <div className="css-1dbjc4n r-1awozwy r-1vy83ar r-t23y2h r-1k25im9 r-1777fci r-rzb6rt r-19tjxh9" style={{boxShadow: "none", marginRight: "0px"}}><div dir="auto" className="css-901oao r-jwli3a r-1b43r93 r-q4m81j">0</div></div>
                    </div>
                    <div className="css-1dbjc4n r-1awozwy r-alk14i r-13l2t4g r-195d4m8 r-1777fci r-13qz1uu" style={{borderTopColor: "rgb(201, 219, 255)", borderTopWidth: "1px"}}>
                        <div dir="auto" className="css-901oao" style={{color: "rgb(51, 51, 51)"}}>{res_data && res_data["0"]}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

// redux connect
const mapStateToProps = (state) => ({
    res: state.probality,

});

export default connect(mapStateToProps)(Probablity);