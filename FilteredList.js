import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import ListElement from './ListElement';
import RuleButton from './RuleButton';
import SortButton from './SortButton';
import {Card, Paper, AppBar, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { createMuiTheme } from '@material-ui/core/styles';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // List of terms we are currently searching by
      searchBy: {},
      favorites: {},
      defaultSort: true,
      sortRule: (course1, course2) => {
      return course1.number - course2.number;
    }
    };
  }

  reset = () => {
    this.setState(
      {
        searchBy: {},
        favorites: {},
        defaultSort: true,
        sortRule: (course1, course2) => {
        return course1.number - course2.number;}
      })
  }

  toggleSort = (rule) => {
    this.setState({
      sortRule: rule,
      defaultSort: !this.state.defaultSort,
    })
  }

  toggleRule = (name, rule) => {
    if (name in this.state.searchBy) {
      delete this.state.searchBy[name]
    } else {
      this.state.searchBy[name] = rule
    }

    this.forceUpdate()
  }

  toggleFavorites = (name) => {
    if (name in this.state.favorites) {
      delete this.state.favorites[name]
    } else {
      this.state.favorites[name] = true
    }

    this.forceUpdate()
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterAndSearch = item => {
    console.log("Filter")
    console.log(item)
    var passP = true

    for (var name in this.state.searchBy) {
      var rule = this.state.searchBy[name]
      passP = passP && rule(item)
    }

    return passP
  };

  checkFav = (name) => {
    return name in this.state.favorites
  }

  active = (name) => {
    return name in this.state.searchBy
  }

  courses = [
    {
      name:"Introduction to Computer Systems",
      number:330,
      pathway:"Systems",
      professor:"Doeppner",
      image_url: "https://lh4.googleusercontent.com/-tZfRbqNN-08/AAAAAAAAAAI/AAAAAAAAACE/h-fFVIhljQM/photo.jpg"
    }
  ,
    {
      name:"Introduction to Software Engineering",
      number:320,
      pathway:"Engineering",
      professor:"Nelson"
    }
  ];

  render() {
    return (
      <div className="filter-list">
        <header>
          <AppBar position="static">
            <h1>
              Welcome to the CS Dept. Course Catalog
            </h1>
          </AppBar>
          <div class = "filters">

              <div class = "filter-div">
                <RuleButton color = "primary" update = {this.toggleRule} rule = {item => {return item.pathway == "Systems"}} rule_name = "Systems" active = {this.active}/>
                <RuleButton color = "primary" update = {this.toggleRule} rule = {item => {return item.pathway == "Robotics"}} rule_name = "Robotics" active = {this.active}/>
                <RuleButton color = "primary" update = {this.toggleRule} rule = {item => {return item.pathway == "Design"}} rule_name = "Design" active = {this.active}/>
                <RuleButton color = "primary" update = {this.toggleRule} rule = {item => {return item.pathway == "Engineering"}} rule_name = "Engineering" active = {this.active}/>
              </div>
              <div class = "filter-div">
                <RuleButton color = "secondary" update = {this.toggleRule} rule = {item => {return item.number >= 1000}} rule_name = "Upper Level" active = {this.active}/>
                <RuleButton color = "secondary" update = {this.toggleRule} rule = {item => {return item.number < 1000}} rule_name = "Lower Level" active = {this.active}/>
                <RuleButton color = "secondary" update = {this.toggleRule} rule = {item => {return item.name in this.state.favorites}} rule_name = "Favorites" active = {this.active}/>
              </div>

              <IconButton onClick={this.reset}>
                  <CloseIcon />
              </IconButton>

          </div>
        </header>
        <div class = 'sort'>
          <SortButton update = {this.toggleSort} 
          rule1 = {(course1, course2) => {return course1.number - course2.number;}}
          rule2 = {(course1, course2) => {
                    if(course1.name < course2.name) { return -1; }
                    if(course1.name > course2.name) { return 1; }
                    return 0;}}
          default_name = "Sorting By Course Number" 
          other_name = "Sorting By Name"
          default_sort = {this.state.defaultSort}/>
        </div>
        <List items={this.courses.filter(this.filterAndSearch).sort(this.state.sortRule)} checkFav={this.checkFav} toggleFavorites = {this.toggleFavorites}/>
        
      </div>
    );
  }
}

export default FilteredList;