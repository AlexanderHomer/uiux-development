import React, {Component} from 'react';

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return item
    });

    return items;
  }

  render() {
    return (
      this.renderList()
    );
  }
}

export default List; 