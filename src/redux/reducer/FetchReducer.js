// Redux-Reducer

export const initialState = {
    data: {},
    loading: true,
  };


  //Register data
export function RegisterReducer(state = initialState, action) {
    switch (action.type) {
      case "REGISTER_DATA":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }
// Login Data
  export function LoginReducer(state = initialState, action) {
    switch (action.type) {
      case "LOGIN_DATA":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }

  // Wallet Amount Data
  export function WalletAmountReducer(state = initialState, action) {
    switch (action.type) {
      case "WALLET_AMOUNT_DATA":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }
//POST THE RECHARGE AMOUNT DATA
export function RechargeAmountReducer(state = initialState, action) {
  switch (action.type) {
    case "RECHARGE_AMOUNT_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//POST THE RECHARGE TRANSFERRED DATA
export function RechargeTransferredReducer(state = initialState, action) {
  switch (action.type) {
    case "RECHARGE_TRANSFERRED_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// POST RECHARGE SCREENSHOT DATA

export function RechargeScreenShotReducer(state = initialState, action) {
  switch (action.type) {
    case "RECHARGE_SCREENSHOT_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// POST RECHARGE STATUS DATA

export function RechargeStatusReducer(state = initialState, action) {
  switch (action.type) {
    case "RECHARGE_STATUS_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// GET RECHARGE TRANSCTION DATA

export function RechargeTransactionReducer(state = initialState, action) {
  switch (action.type) {
    case "RECHARGE_TRANSECTION_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}
// GET RECHARGE USER TRANSCTION DATA


export function RechargeUserTransactionReducer(state = initialState, action) {
  switch (action.type) {
    case "RECHARGE_USER_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//POST ACCOUNT DETAILS  DATA
export function AddAccountReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ACCOUNT_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//GET USER ACCOUNT DETAILS  DATA
export function UserAccountReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_ACCOUNT_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}
//DELETE ACCOUNT DETAILS  DATA
export function UserAccountDeleteReducer(state = initialState, action) {
  switch (action.type) {
    case "DELETE_ACCOUNT_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//POST WITHDRAW DETAILS  DATA
export function WithdrawAccountReducer(state = initialState, action) {
  switch (action.type) {
    case "WITHDRAW_ACCOUNT_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//GET WITHDRAW DETAILS  DATA

export function WithdrawAccountDataReducer(state = initialState, action) {
  switch (action.type) {
    case "WITHDRAW_ACCOUNT_GET__DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//Cancel WITHDRAW TRANSCTION  DATA


export function WithdrawAccountDataCancelReducer(state = initialState, action) {
  switch (action.type) {
    case "WITHDRAW_ACCOUNT_CANCEl__DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//GET TASK REWARD DATA
export function TaskRewardReducer(state = initialState, action) {
  switch (action.type) {
    case "TAST_REWARD__DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


//CHANGE STATUS TASK REWARD DATA
export function TaskStatusRewardReducer(state = initialState, action) {
  switch (action.type) {
    case "TAST_REWARD_CHANGE__DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}
//GET CHECK IN REWARD DATA

export function CheckInRewardReducer(state = initialState, action) {
  switch (action.type) {
    case "CHECK_IN_REWARD__DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//POST CHECK IN REWARD DATA

export function CheckInPostRewardReducer(state = initialState, action) {
  switch (action.type) {
    case "CHECK_IN_POST_REWARD__DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//BONUS CHECK IN REWARD DATA


export function CheckInBonusRewardReducer(state = initialState, action) {
  switch (action.type) {
    case "CHECK_IN_BONUS_REWARD__DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}
//MY PROFILE DATA
export function MyProfileReducer(state = initialState, action) {
  switch (action.type) {
    case "MY_PROFILE_DATA":
      return { data: action.payload, loading: false };
    default:
      return state; 
  }
}
// UPDATE MY PROFILE DATA
export function MyProfileUpdateReducer(state = initialState, action) {
  switch (action.type) {
    case "MY_PROFILE_UPDATE_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}
//GET PARITY ORDER  DATA

export function ParityOrderReducer(state = initialState, action) {
  switch (action.type) {
    case "PARITY_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//GET FINANCIAL  DATA


export function FinancialReducer(state = initialState, action) {
  switch (action.type) {
    case "FINANCIAL_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


//GET INVITE  DATA

export function InviteReducer(state = initialState, action) {
  switch (action.type) {
    case "INVITE_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


//GET INCOME DETAILS  DATA

export function IncomeDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case "INCOME_DETAILS_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}



//GET INVITE LINK  DATA

export function InviteLinkReducer(state = initialState, action) {
  switch (action.type) {
    case "INVITE_LINK_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//GET Invite PEOPLE  DATA

export function InvitePeopleReducer(state = initialState, action) {
  switch (action.type) {
    case "INVITE_PEOPLE_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//GET Invitee people Mobile  DATA


export function InvitePeopleMobileReducer(state = initialState, action) {
  switch (action.type) {
    case "INVITE_PEOPLE_MOBILE_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// POST LUCKY RUPEES

export function LuckyrupessReducer(state = initialState, action) {
  switch (action.type) {
    case "Lucky_RUPESS_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


// MINESWEEPER DATA

export function MinesweeperReducer(state = initialState, action) {
  switch (action.type) {
    case "MINESWEEPER_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


// GET MINESWEEPER DATA

export function MinesweeperGetReducer(state = initialState, action) {
  switch (action.type) {
    case "MINESWEEPER_GET_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


// INCOME AMOUNT

export function IncomeGetReducer(state = initialState, action) {
  switch (action.type) {
    case "INCOME_GET_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// RECHARGE AMOUNT

export function RechargesReducer(state = initialState, action) {
  switch (action.type) {
    case "RECHARGES_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}
// RANKING DATA


export function RankingReducer(state = initialState, action) {
  switch (action.type) {
    case "RANKING_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// COMPLAINT DATA

export function CompaintReducer(state = initialState, action) {
  switch (action.type) {
    case "COMPLAINT_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//GROWTH PLAN

export function GrowthReducer(state = initialState, action) {
  switch (action.type) {
    case "GROWTH_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//GROWTH PLAN STATUS

export function GrowthPlanReducer(state = initialState, action) {
  switch (action.type) {
    case "GROWTH_PLAN_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//MORE PARITY RESULT DATA


export function MoreParitynReducer(state = initialState, action) {
  switch (action.type) {
    case "MORE_PARITY_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}
//PROBABILITY DATA
export function ProbablityReducer(state = initialState, action) {
  switch (action.type) {
    case "PROBABLITY_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//USER ORDER  DATA

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_ORDER_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}