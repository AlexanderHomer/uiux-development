import React, {Component} from 'react';
import RuleButton from './RuleButton'
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';


class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return <RuleButton 
                color = {this.props.color}
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