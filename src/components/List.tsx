import * as React from 'react';
import ListItem from './ListItem';

type ListProps = {
  item: string;
  items: string[];
};

class List extends React.Component<ListProps> {
  render() {
    const list = this.props.items.map((item, i) => (
      <ListItem key={i} item={item} />
    ));
    return <ul>{list}</ul>;
  }
}

export default List;
