import * as React from 'react'
// import Index from "../Admin/Index"
import { useRoutes } from "react-router-dom";
  // import Private from "../private"
  import FiewinPage from "../Component/Main/FieWin/FiewinPage.js"
  import Invite from "../Component/Main/Invite/Invite";
  import Recharge from "../Component/Main/Recharge/Recharge";
  import Profile from "../Component/Main/Profile/Profile";
// import FastParity from "../Component/Main/FieWin/Fastparity/FastParity";
import FastParity1 from "../Component/Main/FieWin/Fastparity/FastParity1.js";
import Private from "../private.js";
import RechargeType from "../Component/Main/Recharge/RechargeType.js";
import Transcation from "../Component/Main/Recharge/Transcation.js";
import Complaint from "../Component/Main/Recharge/Complaint.js";
import RechargeRecord from "../Component/Main/Recharge/RechargeRecord.js";
import Withdraw from "../Component/Main/Withdraw/withdraw.js";
import BankCard from "../Component/Main/Withdraw/BankCard.js";
import AddBankCard from "../Component/Main/Withdraw/AddBankCard.js";
import TaskReward from "../Component/Main/Taskreward/TaskReward.js";
import RechargeStep from "../Component/Main/Recharge/RechargeStep.js";
import LearnCharge from "../Component/Main/Taskreward/LearnCharge.js";
import Checkin from "../Component/Main/CheckIn/Checkin.js";
import MineSweeper from "../Component/Main/FieWin/Minesweeper/MineSweeper.js";
import MyInfo from "../Component/Main/Profile/MyInfo.js";
import EditInfo from "../Component/Main/Profile/EditInfo.js";
import OrderRecord from "../Component/Main/Profile/OrderRecord.js";
import Financial from "../Component/Main/Profile/Financial.js";
import AboutUs from "../Component/Main/Profile/AboutUs.js";
import Register1 from "../Component/Auth/Register1.js";
import MyLink from "../Component/Main/Invite/MyLink.js";
import MoreTodayIncome from "../Component/Main/Invite/MoreTodayIncome.js";
import MoreTodayInvite from "../Component/Main/Invite/MoreTodayInvite.js";
import Luckyrupees from "../Component/Main/Invite/Luckyrupees.js";
import Ranking from "../Component/Main/Invite/Ranking.js";
import Agentmillion from "../Component/Main/Invite/Agentmillion.js";
import Intro from '../Component/Main/Invite/Intro.js';
import Help from '../Component/Main/Recharge/Help.js';
import MoreParity from '../Component/Main/FieWin/Fastparity/MoreParity.js';
import Probablity from '../Component/Main/FieWin/Fastparity/Probablity.js';
import IncomeDetails from '../Component/Main/Invite/IncomeDetails.js';
import Privilege from '../Component/Main/Invite/Privilege.js';
import Complaint1 from '../Component/Main/Profile/Complaint.js';
import Crash from '../Component/Main/FieWin/crash/Crash.js';


  const PrivateRoute=({socket})=>{
    const login_data=JSON.parse(sessionStorage.getItem('login'))
  

    const routes = useRoutes([
      
        { path: "/tabIndex/0", element: <Private><FiewinPage socket={socket}/></Private> },
        { path: "/tabIndex/1", element: <Private><Invite/></Private> },
        { path: "/tabIndex/2", element: <Private><Recharge socket={socket}/></Private> },
        { path: "/tabIndex/3", element: <Private><Profile/></Private> },
        // { path: "/FastParity", element: <Private><FastParity socket={socket}/></Private> },
        { path: "/FastParity1", element: <Private><FastParity1 socket={socket}/></Private> },
        { path: "/ChooseType", element: <Private><RechargeType/></Private> },
        { path: "/transcation", element: <Private><Transcation/></Private> },
        { path: "/Complaint", element: <Private><Complaint/></Private> },
        { path: "/RechargeList", element: <Private><RechargeRecord/></Private> },
        { path: "/withdraw", element: <Private><Withdraw/></Private> },
        { path: "/withdraw/:id", element: <Private><Withdraw/></Private> },
        { path: "/Bankcard/:id", element: <Private><BankCard/></Private> },
        { path: "/AddBankCard/:id", element: <Private><AddBankCard/></Private> },
        { path: "/TaskType", element: <Private><TaskReward/></Private> },
        { path: "/RechargeType/:id", element: <Private><RechargeStep/></Private> },
        { path: "/LearnCharge/:id", element: <Private><LearnCharge/></Private> },
        { path: "/Checkin", element: <Private><Checkin socket={socket}/></Private> },
        { path: "/minesweeper", element: <Private><MineSweeper socket={socket}/></Private> },
        { path: "/MyInfo", element: <Private><MyInfo/></Private> },
        { path: "/EditMyInfo/:id", element: <Private><EditInfo/></Private> },
        { path: "/OrderRecord", element: <Private><OrderRecord/></Private> },
        { path: "/Financial", element: <Private><Financial/></Private> },
        { path: "/aboutus", element: <Private><AboutUs/></Private> },
        { path: "/more/parity", element: <Private><MoreParity/></Private> },
        { path: "/probability", element: <Private><Probablity/></Private> },
        { path: "/IncomeDetail", element: <Private><IncomeDetails/></Private> },
        { path: "/Privilege", element: <Private><Privilege/></Private> },
        { path: "/crash", element: <Private><Crash socket={socket}/></Private> },

        { path: "/complaints", element: <Private><Complaint1/></Private> },


         
        { path: "/L/:id", element: <Register1/> },
        { path: "/LR/:id", element: <Luckyrupees/> },
        { path: "/RG/:id", element: <Intro/> },

        { path: "/AgentPlan", element: <Agentmillion/> },
        { path: "/help", element: <Help/> },

        { path: "/MyLink", element: <Private><MyLink/></Private> },
        { path: "/DairyRecord", element: <Private><MoreTodayIncome/></Private> },
        { path: "/InviteRecord", element: <Private><MoreTodayInvite/></Private> },
        { path: "/Ranking", element: <Private><Ranking/></Private> },










      













     




    ])
    return routes
  }

  export  default  PrivateRoute 