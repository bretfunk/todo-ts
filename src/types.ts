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
  item: string;
  items: string[];
  onDelete: any;
};

export type ListItemProps = {
  key: any;
  item: any;
  onDelete: any;
  deleteButton: any;
};
