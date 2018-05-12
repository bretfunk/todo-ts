import * as React from 'react';

type ListItemProps = {
  key: any;
  item: any;
};

const ListItem = (props: ListItemProps) => {
  return <li key={props.key}>{props.item}</li>;
};

export default ListItem;
