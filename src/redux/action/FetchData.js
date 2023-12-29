
// REGISTER USER
export function RegisterParity(data) {
  return async (dispatch) => {
    var response = await fetch("http://161.97.146.42:7000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
    var res_data = await response.json();

    var return_response = {
      type: "REGISTER_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}

// LOGIN USER
export function LoginParity(data) {
  return async (dispatch) => {
    var response = await fetch("http://161.97.146.42:7000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
    var res_data = await response.json();
    if (res_data.status == true) {
      sessionStorage.setItem("login_status", true)
      sessionStorage.setItem("login", JSON.stringify(res_data))
      window.location.href = "/tabIndex/0"
    }
    var return_response = {
      type: "LOGIN_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


// GET WALLET AMOUNT USER
export function WalletAmountParity() {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/walletAmount/${login_data.userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "x-access-token": login_data.token
      },
    });
    var res_data = await response.json();
    var return_response = {
      type: "WALLET_AMOUNT_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//POST THE RECHARGE AMOUNT DATA
export function RechargeAmountParity() {

  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/commodity/trade/order/detail`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',

        "x-access-token": login_data.token
      },
    });
    var res_data = await response.json();
    var return_response = {
      type: "RECHARGE_AMOUNT_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


// POST RECHARGE TRANFERRED DATA
export function RechargeTransferredParity(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/commodity/trade/order/tranferred`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "x-access-token": login_data.token
      },
      body: JSON.stringify(data)
    });
    var res_data = await response.json();
    var return_response = {
      type: "RECHARGE_TRANSFERRED_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


// POST RECHARGE SCREENSHOT DATA
export function RechargeScreenShotParity(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/upload_img`, {
      method: "POST",
      headers: {
        // 'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        "x-access-token": login_data.token
      },
      body: data
    });
    var res_data = await response.json();
    sessionStorage.setItem("url", res_data.file)
    var return_response = {
      type: "RECHARGE_SCREENSHOT_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


// POST RECHARGE STATUS DATA
export function RechargeStatusParity(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/commodity/trade/order/tranferredStatus`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "x-access-token": login_data.token
      },
      body: JSON.stringify(data)
    });
    var res_data = await response.json();
    window.location.reload()
    var return_response = {
      type: "RECHARGE_STATUS_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}



//GET THE RECHARGE TRANSACTION DATA
export function RechargeTransactionParity(id) {

  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/commodity/trade/order/transaction/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },

    });
    var res_data = await response.json();
    var return_response = {
      type: "RECHARGE_TRANSECTION_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}



//GET THE SPECIFIC USER RECHARGE TRANSACTION DATA
export function RechargeUserTransactionParity(id) {

  const login_data = JSON.parse(sessionStorage.getItem('login'))

  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/commodity/trade/order/transactionUser/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },

    });
    var res_data = await response.json();
    var return_response = {
      type: "RECHARGE_USER_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}



//POST ACCOUNT DETAILS  DATA
export function AddAccountDetails(data) {

  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/withdraw/account/add`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },
      body: JSON.stringify(data)

    });
    var res_data = await response.json();
  
    var return_response = {
      type: "ADD_ACCOUNT_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}

//GET USER ACCOUNT DETAILS  DATA
export function UserAccountDetails(id) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/withdraw/account/${login_data.userId}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },

    });
    var res_data = await response.json();
    var return_response = {
      type: "USER_ACCOUNT_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//DELETE ACCOUNT DETAILS  DATA
export function DeleteAccountDetails(data) {

  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/withdraw/account/delete`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },
      body: JSON.stringify(data)

    });
    var res_data = await response.json();
    if (res_data.status == true) {

      window.location.reload()
    }
    var return_response = {
      type: "DELETE_ACCOUNT_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}



//POST WITHDRAW DETAILS  DATA
export function WithdrawAccountDetails(data) {

  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/withdraw/account`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },
      body: JSON.stringify(data)
    });
    var res_data = await response.json();
    if (res_data.status == true) {
      window.location.reload()
    }
    var return_response = {
      type: "WITHDRAW_ACCOUNT_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}
//GET WITHDRAW DETAILS  DATA
export function WithdrawAccountDataDetails() {

  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/withdraw/account/data/${login_data.userId}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },

    });
    var res_data = await response.json();
    var return_response = {
      type: "WITHDRAW_ACCOUNT_GET__DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//Cancel WITHDRAW TRANSCTION  DATA
export function WithdrawAccountDataCancelDetails(id) {

  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/withdraw/account/cancel/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },

    });
    var res_data = await response.json();
    if (res_data.status == true) {
      window.location.reload()
    }
    var return_response = {
      type: "WITHDRAW_ACCOUNT_CANCEl__DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//GET TASK REWARD DATA
export function TaskRewardDetails() {

  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/taskreward/${login_data.userId}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },

    });
    var res_data = await response.json();

    var return_response = {
      type: "TAST_REWARD__DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}
//CHANGE STATUS TASK REWARD DATA

export function TaskStatusChangeDetails(data) {

  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/taskreward/status`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },
      body: JSON.stringify(data)
    });
    var res_data = await response.json();
    if (res_data.status == true) {
      window.location.reload()
    }
    else if (res_data.status == 200 && res_data.order == "1") {
      window.location = "/tabIndex/2"
    }
    else if (res_data.status == 201 && res_data.order == "2") {
      window.location = "/TaskType"
    }
    else if (res_data.status == 201 && res_data.order == "6") {
      window.location = "/tabIndex/1"
    }
    else if (res_data.status == 201 && (res_data.order == "3" || res_data.order == "4" || res_data.order == "5")) {
      window.location = "/FastParity1"
    }
    var return_response = {
      type: "TAST_REWARD_CHANGE__DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//GET CHECK IN REWARD DATA
export function CheckInRewardDetails() {

  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/checkin/info/${login_data.userId}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },

    });
    var res_data = await response.json();

    var return_response = {
      type: "CHECK_IN_REWARD__DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//POST CHECK IN REWARD DATA
export function CheckInPostRewardDetails(data) {

  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/checkin/info/reward`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },
      body: JSON.stringify(data)

    });
    var res_data = await response.json();
    // if (res_data.status == true) {
    //   window.location.reload()
    // }
    var return_response = {
      type: "CHECK_IN_POST_REWARD__DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}
//BONUS CHECK IN REWARD DATA
export function CheckInBonusRewardDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/checkin/reward`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },
      body: JSON.stringify(data)
    });
    var res_data = await response.json();
    var return_response = {
      type: "CHECK_IN_BONUS_REWARD__DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}

//GET MY PROFILE DATA
export function MyProfileDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/my_account/${login_data.userId}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": login_data.token
      },
    });
    var res_data = await response.json();
    var return_response = {
      type: "MY_PROFILE_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//UPDATE MY PROFILE DATA

export function MyProfileUpdateDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/my_account/modify`, {
      method: "POST",
      headers: {
        "x-access-token": login_data.token
      },
      body: data
    });
    var res_data = await response.json();
    var return_response = {
      type: "MY_PROFILE_UPDATE_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}

//GET PARITY ORDER  DATA

export function ParityOrderDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/userOrder/${login_data.userId}`, {
      method: "GET",
      headers: {
        "x-access-token": login_data.token
      },
    });
    var res_data = await response.json();
    var return_response = {
      type: "PARITY_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}

//GET FINANCIAL  DATA
export function FinancialDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/my_account/financial/${login_data.userId}`, {
      method: "GET",
      headers: {
        "x-access-token": login_data.token
      },
    });
    var res_data = await response.json();
    var return_response = {
      type: "FINANCIAL_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//GET INVITE  DATA
export function InviteDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/balance/${login_data.userId}`, {
      method: "GET",
      headers: {
        "x-access-token": login_data.token
      },
    });
    var res_data = await response.json();
    var return_response = {
      type: "INVITE_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//GET InCome Details  DATA
export function IncomeDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/incomedetails/${login_data.userId}/${data}`, {
      method: "GET",
      headers: {
        "x-access-token": login_data.token
      },
    });
    var res_data = await response.json();
    var return_response = {
      type: "INCOME_DETAILS_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}

//GET Invite Link  DATA
export function InviteLinkDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/inviteLink/${login_data.userId}`, {
      method: "GET",
      headers: {
        "x-access-token": login_data.token
      },
    });
    var res_data = await response.json();
    var return_response = {
      type: "INVITE_LINK_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}

//GET Invite PEOPLE  DATA
export function InvitePeopleDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/invitePeople/${login_data.userId}`, {
      method: "GET",
      headers: {
        "x-access-token": login_data.token
      },
    });
    var res_data = await response.json();
    var return_response = {
      type: "INVITE_PEOPLE_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//GET Invitee people Mobile  DATA
export function InvitePeopleMobileDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/invitePeopleMobile/${data}`, {
      method: "GET",

    });
    var res_data = await response.json();
    var return_response = {
      type: "INVITE_PEOPLE_MOBILE_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}

// POST LUCKY RUPEES

export function LuckyrupeesDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/luckyRupees`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    var res_data = await response.json();
    var return_response = {
      type: "Lucky_RUPESS_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


// POST MINESWEEPER AMOUNT

export function MineSweeperDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/minesweeper/order`, {
      method: "POST",
      headers: {
        "x-access-token": login_data.token,

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    var res_data = await response.json();
    var return_response = {
      type: "MINESWEEPER_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}

// GET MINESWEEPER AMOUNT

export function MineSweeperGetDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/minesweeper/user/order/${login_data.userId}`, {
      method: "GET",
      headers: {
        "x-access-token": login_data.token,

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    var res_data = await response.json();
    var return_response = {
      type: "MINESWEEPER_GET_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


// INCOME AMOUNT

export function IncomeGetDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/income/${login_data.userId}`, {
      method: "GET",
      headers: {
        "x-access-token": login_data.token,

        'Content-Type': 'application/json',
      },
    });
    var res_data = await response.json();
    var return_response = {
      type: "INCOME_GET_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


// POST RECHARGE AMOUNT

export function RechargeSDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/recharge`, {
      method: "POST",
      headers: {
        "x-access-token": login_data.token,

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    var res_data = await response.json();
    var return_response = {
      type: "RECHARGES_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}

//Ranking Data

export function RankingDataDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/RankerDetails`, {

      headers: {
        "x-access-token": login_data.token,

        'Content-Type': 'application/json',
      },

    });
    var res_data = await response.json();
    var return_response = {
      type: "RANKING_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//ComPlaint Data

export function ComplaintDataDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/complaint`, {
      method: "POST",

      headers: {
        "x-access-token": login_data.token,
      },
      body: data

    });
    var res_data = await response.json();

    var return_response = {
      type: "COMPLAINT_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//GROWTH PLAN

export function GrowthPlanDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/growthDetail/${login_data.userId}`, {

      headers: {
        "x-access-token": login_data.token,

        'Content-Type': 'application/json',
      },

    });
    var res_data = await response.json();
    var return_response = {
      type: "GROWTH_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}

//GROWTH PLAN STATUS

export function GrowthPlanStatusDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/growthDetail/status`, {
      method: "POST",

      headers: {
        "x-access-token": login_data.token,

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    var res_data = await response.json();
    var return_response = {
      type: "GROWTH_STATUS_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}



//MORE PARITY RESULT DATA

export function MoreParityDetails() {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/more/fastparity`, {
 

      headers: {
        "x-access-token": login_data.token,

        'Content-Type': 'application/json',
      },
    
    });
    var res_data = await response.json();
    var return_response = {
      type: "MORE_PARITY_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//PROBABILITY DATA                                    

export function ProbablityDetails() {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/probability`, {
 

      headers: {
        "x-access-token": login_data.token,

        'Content-Type': 'application/json',
      },
    
    });
    var res_data = await response.json();
    var return_response = {
      type: "PROBABLITY_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}


//USER ORDER  DATA

export function UserOrderDetails(data) {
  const login_data = JSON.parse(sessionStorage.getItem('login'))
  return async (dispatch) => {
    var response = await fetch(`http://161.97.146.42:7000/api/userOrder/${login_data.userId}/`, {
   method:"GET",
      headers: {
        "x-access-token": login_data.token,
        'Content-Type': 'application/json',
      },
      
    });
    var res_data = await response.json();
    var return_response = {
      type: "USER_ORDER_DATA",
      payload: res_data,
    };
    dispatch(return_response);
  };
}