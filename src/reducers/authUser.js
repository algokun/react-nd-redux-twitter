import { SET_AUTH_USER } from "../actions/authUser";

export default function setAuthUser(state = null, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.id;

    default:
      return state;
  }
}
