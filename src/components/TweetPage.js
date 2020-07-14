import React, { Component } from "react";
import { connect } from "react-redux";
import TweetItem from "./TweetItem";
import NewTweet from "./NewTweet";

class TweetPage extends Component {
  render() {
    const { id, replies } = this.props;
    return (
      <div>
        <TweetItem id={id} />
        <NewTweet id={id} />
        {replies.length !== 0 && <h3 className="center">Replies</h3>}
        <ul>
          {replies.map((replyId) => (
            <li key={replyId}>
              <TweetItem id={replyId} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, tweets, users }, props) => {
  const { id } = props.match.params;

  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        ),
  };
};

export default connect(mapStateToProps)(TweetPage);
