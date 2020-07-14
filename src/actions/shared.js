import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthUser } from "./authUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTH_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthUser(AUTH_ID));
      dispatch(hideLoading());
    });
  };
}
