export type AppProps = {
  item: string;
  items: string[];
  addItem: any;
  onChange: (e: any) => any;
  onDelete: (e: any) => any;
};

export type InputProps = {
  item: string;
  onChange: any;
  onSubmit: any;
};

export type ListProps = {
  key: number;
  items: string[];
  onDelete: () => any;
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
  addItem: any;
  onChange: any;
  onDelete: any;
};
