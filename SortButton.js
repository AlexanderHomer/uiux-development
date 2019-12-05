import React, { Component } from "react";
import Button from '@material-ui/core/Button';


class SortButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: "contained",
    };
  }

  toggle = () => {
    var sort_rule = null
    if (this.props.default_sort) {
      sort_rule = this.props.rule2
    } else {
      sort_rule = this.props.rule1
    }
      
    this.props.update(sort_rule);
  }

  
  

  render() {
    return (

      <div>
        <Button variant={this.state.style} onClick={this.toggle}>{this.props.default_sort ? this.props.default_name : this.props.other_name}</Button>
      
      </div>
      
    );
  }
}

export default SortButton;