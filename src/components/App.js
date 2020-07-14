import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./TweetPage";
import Loadingbar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <Loadingbar />
        {this.props.loading === true ? null : (
          <Dashboard
            match={{
              params: {
                id: "5c9qojr2d1738zlx09afby",
              },
            }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    loading: authUser === null,
  };
};

export default connect(mapStateToProps)(App);
