import * as React from "react";
import ListItem from "./ListItem";
import { ListProps } from "./../types";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { items: state.items };
};

class ConnectedList extends React.Component<ListProps> {
  render() {
    const { onDelete } = this.props;
    const list = this.props.items.map((item, i) => (
      <ListItem key={i} item={item} onDelete={onDelete} />
    ));
    return <ul>{list}</ul>;
  }
}

const List = connect(mapStateToProps)(ConnectedList);
export default List;
