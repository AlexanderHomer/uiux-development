import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ListElement from './ListElement';
import FilteredList from './FilteredList';
import RuleButton from './RuleButton';



const courses = [
  <ListElement name={"Introduction to Computer Systems"} number={330} pathway={"Systems"} professor={"Doeppner"}/>,
  <ListElement name={"Introduction to Software Engineering"} number={320} pathway={"Engineering"} professor={"Nelson"}/>,
  <ListElement name={"User Interfaces and User Experience"} number={130} pathway={"Design"} professor={"Huang"}/>,
  <ListElement name={"Theory of Computation"} number={1010} pathway={"Theory"} professor={"Doeppner"}/>
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {

    var list = <FilteredList items={courses}/>

    return (

      
      <div>
        <Hello name={this.state.name} />

        <p>
          We will put some Text Here
        </p>
        <p>
          We will put a filter UI Here
        </p>

        <RuleButton list = {list} rule = {item => {false}}/>
        <p>
          The Filtered List will go here
        </p>
        {list}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
