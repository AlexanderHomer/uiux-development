import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";

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
      this.state.searchBy.push(rule);
    }
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterAndSearch = item => {
    return this.state.searchBy.every(v => v(item));
  };

  render() {
    return (
      <div className="filter-list">
        <List items={this.props.items.filter(this.filterAndSearch)} />
        
      </div>
    );
  }
}

export default FilteredList;