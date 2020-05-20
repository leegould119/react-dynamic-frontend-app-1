import React, { Component } from "react";

// layouts
import FourColumnsLayout from "../components/pageLayouts/fourColumnLayout";
import TwoColumnsLayout from "../components/pageLayouts/twoColumnLayout";
import ThreeColumnLayout from "../components/pageLayouts/threeColumnLayout";
// three col layout 50% 25% 25%
import ThreeColumnLayoutTwo from "../components/pageLayouts/threeColumnLayoutTwo";
// reusable h1
import HeaderTag from "../components/elements/headerTag";
class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: "welcome",
        color: ""
      },
      generalStyleOptions: {
        fontColors: {
          lightOrange: "light-orange-color",
          darkOrange: "dark-orange-color",
          darkGrey: "dark-grey-color",
          white: "white"
        },
        backgroundColorOptions: {
          lightOrange: "light-orange",
          darkOrange: "dark-orange",
          darkGrey: " dark-grey",
          lightGrey: " dark-grey"
        },
        paddingTopBottom: "padding-top-bottom"
      },

      firstTwoCols: [
        {
          title: "about me",
          body: "",
          id: 1,
          button: true,
          classes: "button grey-btn",
          link: "http://www.google.com",
          buttonTitle: "read more"
        },
        {
          title: "new title 2",
          body: "",
          id: 2,
          button: true,
          classes: "button grey-btn",
          link: "http://www.facebook.com",
          buttonTitle: "read more"
        }
      ],
      secondTwoCols: [
        {
          title: "new title",
          body: "",
          id: 1,
          button: false,
          classes: "button orange-btn",
          link: "http://www.google.com",
          buttonTitle: "read more"
        },
        {
          title: "new title 2",
          body: "",
          id: 2,
          button: true,
          classes: "button orange-btn",
          link: "http://www.facebook.com",
          buttonTitle: "read more"
        }
      ]
    };
  }

  render() {
    let {
      title,
      firstTwoCols,
      secondTwoCols,
      generalStyleOptions
    } = this.state;

    // styles
    return (
      <React.Fragment>
        <HeaderTag title={title} />

        <TwoColumnsLayout
          vals={firstTwoCols}
          generalStyleOptions={
            generalStyleOptions.backgroundColorOptions.lightOrange
          }
        />

        <TwoColumnsLayout
          vals={secondTwoCols}
          generalStyleOptions={
            generalStyleOptions.backgroundColorOptions.darkGrey
          }
        />

        <FourColumnsLayout />
        <ThreeColumnLayout />
        <FourColumnsLayout />
        <ThreeColumnLayoutTwo />
      </React.Fragment>
    );
  }
}
export default homePage;
