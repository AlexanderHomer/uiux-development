import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import ListElement from './ListElement';
import RuleButton from './RuleButton';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // List of terms we are currently searching by
      searchBy: []
    };
  }

  toggleRule = rule => {
    if (this.state.searchBy.includes(rule)) {
      this.state.searchBy.splice(this.state.searchBy.indexOf(rule), 1);
    } else {
      this.setState(
        {
          searchBy: [...this.state.searchBy, rule]
        }
      )
      
      
    }
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterAndSearch = item => {
    console.log(this.state.searchBy);
    return this.state.searchBy.length == 0 || this.state.searchBy.every(v => v(item));
  };

  render() {
    return (
      <div className="filter-list">

        <RuleButton update = {this.toggleRule} rule = {item => {false}}/>
        <List items={this.props.items.filter(this.filterAndSearch)} />
        
        
      </div>
    );
  }
}

export default FilteredList;