import React from "react";

export default class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  render() {
    return (
      <section>
        <div>
          <h3>Your Posted Reviews:</h3>
        </div>
      </section>
    );
  }
}
