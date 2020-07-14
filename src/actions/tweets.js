import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

const toggleTweet = ({ id, authUser, hasLiked }) => {
  return {
    type: TOGGLE_TWEET,
    id,
    authUser,
    hasLiked,
  };
};

export const handleToggleTweet = (info) => {
  return (dispatch) => {
    saveLikeToggle(info)
      .then(() => {
        dispatch(toggleTweet(info));
      })
      .catch((e) => {
        console.warn("Error in handleToggleTweet: ", e);
        dispatch(toggleTweet(info));
        alert("There was an error liking the tweet. Try again.");
      });
  };
};

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet,
  };
}

export const handleAddTweet = (text, replyingTo) => {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(showLoading());

    try {
      const tweet = await saveTweet({
        text,
        author: authUser,
        replyingTo,
      });

      dispatch(addTweet(tweet));
      dispatch(hideLoading());
    } catch (e) {
      alert("oops");
    }
  };
};
