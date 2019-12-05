import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class RuleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      style: "outlined",
    };
  }

  toggle = () => {
    this.props.update(this.props.rule_name, this.props.rule);
    this.forceUpdate()
  }

  
  

  render() {
    return (

      <div class = "rule-button">
        <Button color = {this.props.color} variant={this.props.active(this.props.rule_name) ? "contained" : "outlined"} onClick={this.toggle}>{this.props.rule_name}</Button>
      
      </div>
      
    );
  }
}

export default RuleButton;