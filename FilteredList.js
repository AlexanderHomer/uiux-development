import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import ListElement from './ListElement';
import RuleButton from './RuleButton';
import {Card, Paper} from '@material-ui/core';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // List of terms we are currently searching by
      searchBy: {}
    };
  }

  toggleRule = (name, rule) => {
    if (name in this.state.searchBy) {
      remove(this.state.searchBy[name])
    } else {
      this.state.searchBy[name] = rule
    }

    this.forceUpdate()
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterAndSearch = item => {
    var passP = true

    for (rule in this.state.searchBy) {
      passP = passP && rule(item)
    }

    return passP
  };

  courses = [
    <ListElement
      name={"Introduction to Computer Systems"}
      number={330}
      pathway={"Systems"}
      professor={"Doeppner"}
      starred={false}
      updateFavorites={this.toggleFavorites}
    />,
    <ListElement
      name={"Introduction to Software Engineering"}
      number={320}
      pathway={"Engineering"}
      professor={"Nelson"}
      starred={false}
      updateFavorites={this.toggleFavorites}
    />,
    <ListElement
      name={"User Interfaces and User Experience"}
      number={1300}
      pathway={"Design"}
      professor={"Huang"}
      starred={false}
      updateFavorites={this.toggleFavorites}
    />,
    <ListElement
      name={"Theory of Computation"}
      number={1010}
      pathway={"Theory"}
      professor={"Doeppner"}
      starred={false}
      updateFavorites={this.toggleFavorites}
    />,
    <ListElement
      name={"The Digital World"}
      number={20}
      pathway={"Systems"}
      professor={"Stanford"}
      starred={false}
      updateFavorites={this.toggleFavorites}
    />,
    <ListElement
      name={"Introduction to Robotics"}
      number={1951}
      pathway={"Robotics"}
      professor={"Tellex"}
      starred={false}
      updateFavorites={this.toggleFavorites}
    />,
    <ListElement
      name={"Designing Humanity Centered Robots"}
      number={1952}
      pathway={"Robotics"}
      professor={"Gonsher"}
      starred={false}
      updateFavorites={this.toggleFavorites}
    />,
    <ListElement
      name={"Deep Learning"}
      number={1470}
      pathway={"Machine Learning"}
      professor={"Ritchie"}
      starred={false}
      updateFavorites={this.toggleFavorites}
    />,
    <ListElement
      name={"Cybersecurity Ethics"}
      number={1870}
      pathway={"Security"}
      professor={"Hurley"}
      starred={false}
      updateFavorites={this.toggleFavorites}
    />,
    <ListElement
      name={"Design and Implementation of Programming Languages"}
      number={1730}
      pathway={"Systems"}
      professor={"Krishnamurthi"}
      starred={false}
      updateFavorites={this.toggleFavorites}
    />,
    <ListElement
      name={"Computer Networks"}
      number={1680}
      pathway={"Systems"}
      professor={"Fonseca"}
      starred={false}
      updateFavorites={this.toggleFavorites}
    />,
    <ListElement
      name={"Compilers and Program Analysis"}
      number={1260}
      pathway={"Systems"}
      professor={"Reiss"}
      starred={false}
      updateFavorites={this.toggleFavorites}
    />,
  ];

  render() {
    return (
      <div className="filter-list">
          
        <Paper>
        <RuleButton update = {this.toggleRule} rule = {item => {false}}/>
        </Paper>
        <List items={this.courses.filter(this.filterAndSearch)} />
        
        
      </div>
    );
  }
}

export default FilteredList;