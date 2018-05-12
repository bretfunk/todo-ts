import * as React from 'react';
import ListItem from './ListItem';

type ListProps = {
  item: string;
  items: string[];
};

class List extends React.Component<ListProps> {
  render() {
    const list = this.props.items.map((item, i) => <li key={i}>{item}</li>);
    return <ul>{list}</ul>;
  }
}

export default List;
