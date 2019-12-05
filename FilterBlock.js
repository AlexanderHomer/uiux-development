import React, {Component} from 'react';
import ListElement from './ListElement'

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return <RuleButton 
                color = "primary"
                rule = {item.rule}
                rule_name = {item.rule_name} 
                update = {this.props.toggleRule} 
                active = {this.props.active}/>
    });

    return items;
  }

  render() {
    return (
      <div class="filter-div">
        {this.renderList()}
      </div>
    );
  }
}

export default List; 