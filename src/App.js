import React, { Component } from "react";
import Navigation from "./components/Navigation";

export default class App extends Component {
  state = {
    user: {
      name: "nibble",
      profileImageUrl:
        "https://vignette.wikia.nocookie.net/tomandjerry/images/a/a1/TuffyNew.png/revision/latest?cb=20150819040947"
    }
  };

  logOut = () => {
    this.setState({
      user: undefined
    });
  };

  render() {
    return (
      <div>
        <Navigation user={this.state.user} onLogout={this.logOut} />
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            font-family: Dotum, "맑은 고딕", "roboto", "Helvetica Neue",
              Helvetica, Arial, "맑은 고딕", malgun gothic, "돋움", Dotum,
              sans-serif;
            color: #202b3d;
            background-color: #e9eaed;
            font-size: 12px;
            font-weight: 400;
            line-height: 1.5;
          }

          body {
            padding: 100px 0;
          }
        `}</style>
      </div>
    );
  }
}
