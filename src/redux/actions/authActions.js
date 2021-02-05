import { LOGINSUCCESS, SIGNOUT } from "redux/actionTypes";

const signInAction = (data) => ({
  type: LOGINSUCCESS,
  payload: data,
});

const signOutAction = () => {
  return {
    type: SIGNOUT,
  };
};

export { signInAction, signOutAction };
