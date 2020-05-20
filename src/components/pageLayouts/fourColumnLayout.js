import React, { Component } from "react";

class fourColumnLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { buttons } = this.state;
    console.log("buttons object : " + JSON.stringify(buttons));
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h2> title</h2>
              <p>
                Voluptate reprehenderit culpa aute officia ipsum cupidatat dolor
                et pariatur. Adipisicing mollit culpa excepteur do labore esse
                aliqua.
              </p>
            </div>

            <div className="col-3">
              <h2> title</h2>
              <p>
                Voluptate reprehenderit culpa aute officia ipsum cupidatat dolor
                et pariatur. Adipisicing mollit culpa excepteur do labore esse
                aliqua.
              </p>
            </div>

            <div className="col-3">
              <h2> title</h2>
              <p>
                Voluptate reprehenderit culpa aute officia ipsum cupidatat dolor
                et pariatur. Adipisicing mollit culpa excepteur do labore esse
                aliqua.
              </p>
            </div>

            <div className="col-3">
              <h2> title</h2>
              <p>
                Voluptate reprehenderit culpa aute officia ipsum cupidatat dolor
                et pariatur. Adipisicing mollit culpa excepteur do labore esse
                aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default fourColumnLayout;
