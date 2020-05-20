import React, { Component } from "react";

class button extends Component {
  handleClick = () => {
    console.log("button clicked");
  };
  render() {
    let { link, classes, buttonTitle } = this.props;
    console.log("link : " + link);
    return (
      <a href={link} className={classes} onClick={this.handleClick}>
        {buttonTitle}
      </a>
    );
  }
}

export default button;
