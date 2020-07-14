import { RECEIVE_TWEETS, TOGGLE_TWEET } from "../actions/tweets";

const initialState = {};

export default function getTweets(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      };

    case TOGGLE_TWEET:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes:
            action.hasLiked === true
              ? state[action.id].likes.filter((uid) => uid !== action.authUser)
              : state[action.id].likes.concat([action.authUser]),
        },
      };

    default:
      return state;
  }
}
