import * as React from 'react';
import { ListItemProps } from './types';

const ListItem = (props: ListItemProps) => {
  const { onDelete } = props;
  const deleteButton = <button onClick={onDelete}>Delete</button>;
  return (
    <li key={props.key}>
      {props.item}
      {deleteButton}
    </li>
  );
};

export default ListItem;
