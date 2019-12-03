import React, {Component} from 'react';

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return <li key={item.props.name}>{item.props.name}</li>
    });

    return items;
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List; 