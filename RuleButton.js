import React, { Component } from "react";
import {Button} from '@material-ui/core'

class RuleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  toggle = () => {
    this.state.selected = !this.state.selected;

    this.props.update(this.props.rule);
  }



  render() {
    return (

      <div>
      Test
      <button onClick = {this.toggle}>Test</button>
      
      </div>
      
    );
  }
}

export default RuleButton;