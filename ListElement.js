import React, { Component } from "react";

class ListElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starred: false
    };
  }



  render() {
    return (
      <div className="list-element">
        Test
        <h1>{this.props.name}</h1>
        <p1>{this.props.number}</p1>
        <p1>{this.props.track}</p1>
        <p1>{this.props.starred}</p1>
      </div>
    );
  }
}

export default ListElement;