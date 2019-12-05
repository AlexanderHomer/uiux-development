import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import ListElement from './ListElement';
import RuleButton from './RuleButton';
import SortButton from './SortButton';
import {Card, Paper, AppBar, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { createMuiTheme } from '@material-ui/core/styles';
import FilterBlock from './FilterBlock';

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
      professor:"Nelson",
      image_url: "https://lh3.googleusercontent.com/proxy/0zd9uooQKcAC1vWl2Dt5QG-YoPplnDLPPW0UbcEDvsW0LUz8i_-TPG25Do_ASwVj0STHlTKHyLn402FKxNw=s0-w500-v1"
    }

  ,
    {
      name:"User Interfaces and User Experience",
      number:1300,
      pathway:"Design",
      professor:"Huang",
      image_url: "https://jeffhuang.com/img/headshot.jpg"
    }

  ,
    {
      name:"Theory of Computation",
      number:1010,
      pathway:"Theory",
      professor:"Lysyanskaya",
      image_url: "https://pbs.twimg.com/profile_images/558349265408241665/69isWOE3_400x400.jpeg"
    }

  ,
    {
      name:"The Digital World",
      number:20,
      pathway:"Systems",
      professor:"Stanford",
      image_url: "https://www.businessinnovationfactory.com/wp-content/uploads/2017/12/6220704783_463db1eb4f_o.jpg"
    }
  
  ,
    {
      name:"Introduction to Robotics",
      number:1951,
      pathway:"Robotics",
      professor:"Tellex",
      image_url: "https://www.datainnovation.org/wp-content/uploads/2016/10/tellex.jpg"
    }
  ,
    {
      name:"Designing Humanity Centered Robots",
      number:1952,
      pathway:"Robotics",
      professor:"Gonsher",
      image_url: "https://miro.medium.com/max/3150/1*WUHCPI3Hp5cf7rn7yltPcw.jpeg"
    }
  ,
    {
      name:"Deep Learning",
      number:1470,
      pathway:"Machine Learning",
      professor:"Ritchie",
      image_url: "https://dritchie.github.io/img/me.jpg"
    }

  ,
    {
      name:"Cybersecurity Ethics",
      number:1870,
      pathway:"Security",
      professor:"Hurley",
      image_url: "https://static.scholar.harvard.edu/files/styles/square_thumbnail/public/deborah_hurley/files/deborah-hurley_1_0.jpg?m=1472680486&itok=LlTx3y8O"
    }

  ,
    {
      name:"Design and Implementation of Programming Languages",
      number:1730,
      pathway:"Systems",
      professor:"Krishnamurthi",
      image_url: "https://pldi19.sigplan.org/getProfileImage/shriramkrishnamurthi/df26d0ba-b4a0-447b-a0ee-f20bed37ad18/small.jpg?1562991872000"
    }

  ,
    {
      name:"Computer Networks",
      number:1680,
      pathway:"Systems",
      professor:"Fonseca",
      image_url: "https://nizamtaher.files.wordpress.com/2013/05/ist2_6764102-computer-network.jpg"
    }
  
  ,
    {
      name:"Compilers and Program Analysis",
      number:1260,
      pathway:"Systems",
      professor:"Reiss",
      image_url: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1"
    }
  ];

  track_filter = [
    {
      rule: item => {return item.pathway == "Systems"},
      rule_name: "Systems"
    },
    {
      rule: item => {return item.pathway == "Robotics"},
      rule_name: "Robotics"
    },
    {
      rule: item => {return item.pathway == "Design"},
      rule_name: "Design"
    },
    {
      rule: item => {return item.pathway == "Engineering"},
      rule_name: "Engineering"
    },
  ];

  level_filter = [
    {
      rule: item => {return item.number >= 1000},
      rule_name: "Upper Level"
    },
    {
      rule: item => {return item.number < 1000},
      rule_name: "Lower Level"
    }
  ];

  favorites_filter = [
    {
      rule: item => {return item.name in this.state.favorites},
      rule_name: "Favorites"
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
              <FilterBlock color = "inherited" items={this.track_filter} toggleRule = {this.toggleRule} active = {this.active}/>
              <FilterBlock color = "primary" items={this.level_filter} toggleRule = {this.toggleRule} active = {this.active}/>
              <FilterBlock color = "secondary" items={this.favorites_filter} toggleRule = {this.toggleRule} active = {this.active}/>



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