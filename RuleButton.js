import React, { Component } from "react";
import {Button} from '@material-ui/core'

class RuleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  toggleRule = () => {
    this.state.selected = !this.state.selected;

    this.props.list.toggleRule(this.props.rule)
  }



  render() {
    return (

      <div>
      Test
      <button onClick = {this.toggleRule}>Test</button>
      
      </div>
      
    );
  }
}

export default RuleButton;