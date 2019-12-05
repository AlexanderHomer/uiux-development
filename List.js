import React, {Component} from 'react';
import ListElement from './ListElement'

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return <ListElement
                name={item.name}
                number={item.number}
                pathway={item.pathway}
                professor={item.professor}
                starred={this.props.checkFav}
                updateFavorites={this.props.toggleFavorites}
              />
    });

    return items;
  }

  render() {
    return (
      <div class="element-list">
        {this.renderList()}
      </div>
    );
  }
}

export default List; 