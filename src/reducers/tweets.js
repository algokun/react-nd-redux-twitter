import { RECEIVE_TWEETS } from "../actions/tweets";

const initialState = {};

export default function getTweets(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      };

    default:
      return state;
  }
}
