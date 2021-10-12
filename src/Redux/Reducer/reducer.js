import { Actiontype } from "../ActionType/actionType";

const initalState = {
  data: [],
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case Actiontype.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
