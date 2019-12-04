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
    this.setState({
      selected: !this.state.selected
    });
    this.forceUpdate()
  }

  
  

  render() {
    return (

      <div>
        <Button color = {this.props.color} variant={this.state.selected ? "contained" : "outlined"} onClick={this.toggle}>{this.state.rule_name}</Button>
      
      </div>
      
    );
  }
}

export default RuleButton;