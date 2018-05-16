export type AppProps = {
  item: string;
  items: string[];
  onChange: () => any;
};

export type InputProps = {
  item: string;
  onChange: any;
  onSubmit: any;
};

export type ListProps = {
  key: number;
  item: string;
  items: string[];
  onDelete: any;
};

export type ListItemProps = {
  key: any;
  item: any;
  onClick: any;
  onDelete: any;
  deleteButton: any;
};

export type State = {
  item: string;
  items: string[];
  state: {
    item: string;
    items: string[];
  };
};
