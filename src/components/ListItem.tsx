import * as React from 'react';

type ListItemProps = {
  key: any;
  item: any;
  onDelete: any;
  deleteButton: any;
};
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
