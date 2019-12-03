import React, { Component } from "react";

class ListElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="filter-list">
        <h1>Cereal Search</h1>
        {/* TODO: Add more menu items with onSelect handlers*/}
        <DropdownButton title="Type" id="dropdown-basic-button">
          <Dropdown.Item eventKey="all" onSelect={this.onSelectFilterType}>
            All
          </Dropdown.Item>
        </DropdownButton>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterAndSearch)} />
      </div>
    );
  }
}

export default FilteredList;