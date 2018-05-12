import * as React from 'react';
import Input from './components/Input';
import List from './components/List';

type AppProps = {
  item: string;
  items: string[];
  onChange: () => any;
};

class App extends React.Component<AppProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      item: '',
      items: []
    };
  }
  onChange = (e: any) => {
    const newItem = e.target.value;
    this.setState({ item: newItem });
  };
  onSubmit = () => {
    const { item, items } = this.state;
    this.setState({
      items: [...items, item],
      item: ''
    });
  };

  onDelete = (e: any) => {
    const toDelete = e.target.parentElement.innerText.replace('Delete', '');
    const filteredItems = this.state.items.filter(item => item !== toDelete);
    this.setState({ items: filteredItems });
  };

  public render() {
    const { item, items } = this.state;
    const { onChange, onSubmit, onDelete } = this;
    return (
      <div>
        <h1>TS Todo App</h1>
        <Input item={item} onChange={onChange} onSubmit={onSubmit} />
        <List items={items} onDelete={onDelete} />
      </div>
    );
  }
}

export default App;
