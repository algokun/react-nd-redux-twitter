import { saveLikeToggle } from "../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";

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
