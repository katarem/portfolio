import React from "react";

class Post extends React.Component {
  constructor({ text, link }) {
    super();
    this.state = { text, link };
  }

  goTo() {
    window.open(this.state.link, "_blank");
  }

  render() {
    return (
      <div className="post" onClick={() => this.goTo()}>
        {this.state.text}
      </div>
    );
  }
}

export default Post;
