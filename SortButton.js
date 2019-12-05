import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class SortButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default_state: false,
      style: "outlined",
    };
  }

  toggle = () => {
    var sort_rule = null
    if (this.state.default_state) {
      sort_rule = this.props.rule1
    } else {
      sort_rule = this.props.rule2
    }
      
    this.props.update(sort_rule);
    this.setState({
      default_state: !this.state.default_state
    });
  }

  
  

  render() {
    return (

      <div>
        <Button onClick={this.toggle}>{this.state.default_state ? this.props.default_name : this.props.other_name}</Button>
      
      </div>
      
    );
  }
}

export default SortButton;