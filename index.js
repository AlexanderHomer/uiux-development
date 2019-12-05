import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import ListElement from './ListElement';
import FilteredList from './FilteredList';
import RuleButton from './RuleButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {

    var list = <FilteredList/>

    return (

      
      <div>
        
        {list}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
