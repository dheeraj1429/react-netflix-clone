import { Actiontype } from "../ActionType/actionType";

export const setData = (data) => {
  return {
    type: Actiontype.SET_DATA,
    payload: data,
  };
};
