import React, { Component } from "react";

import Button from "../elements/button";
class twoColumnLayout extends Component {
  render() {
    let { vals, generalStyleOptions } = this.props;

    let pageContent = vals.map((data, idx) => {
      return (
        <div key={idx} id={idx} className="col-6">
          <h2>{data.title}</h2>
          <p>
            {data.body
              ? data.body
              : "Cupidatat eiusmod et irure nulla. Cupidatat anim elit commodo laboris. Amet ipsum non sunt non. Aute deserunt ex commodo esse dolor. Duis id deserunt officia proident sunt eiusmod est amet sit occaecat dolor. Dolor ipsum cillum veniam occaecat consectetur excepteur velit. Laboris laborum adipisicing exercitation ipsum adipisicing pariatur sit eu.Aliqua pariatur proident sunt ex cupidatat exercitation enim. Aute aute laborum eiusmod esse laborum Lorem anim quis aliquip consectetur et ad magna Lorem. Eiusmod officia enim reprehenderit amet irure deserunt qui duis irure laborum."}
          </p>
          {/* button  */}
          {(() => {
            if (data.button == true) {
              return (
                <Button
                  link={data.link}
                  classes={data.classes}
                  buttonTitle={data.buttonTitle}
                />
              );
            }
          })()}
        </div>
      );
    });

    return (
      <section className={generalStyleOptions}>
        <div className="container">
          <div className="row">{pageContent}</div>
        </div>
      </section>
    );
  }
}
export default twoColumnLayout;
