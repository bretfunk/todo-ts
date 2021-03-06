import * as React from "react";
import ListItem from "./ListItem";
import { ListProps } from "./../types";

class List extends React.Component<ListProps> {
  render() {
    const { onDelete } = this.props;
    const list = this.props.items.map((item, i) => (
      <ListItem key={i} item={item} onDelete={onDelete} />
    ));
    return <ul>{list}</ul>;
  }
}

export default List;
