import * as React from "react";
import Input from "./components/Input";
import List from "./components/List";
import { State, AppProps } from "./types";

class App extends React.Component<AppProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      item: "",
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
      item: ""
    });
  };

  onDelete = (e: any): any => {
    const toDelete = e.target.parentElement.innerText.replace("Delete", "");
    const filteredItems = this.state.items.filter(item => item !== toDelete);
    this.setState({ items: filteredItems });
  };

  public render() {
    const { item, items } = this.state;
    const { onChange, onSubmit, onDelete } = this;
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1>Hello, world!</h1>
          </div>
        </div>
        <div className="row">
          <h1>TS Todo App</h1>
          <Input item={item} onChange={onChange} onSubmit={onSubmit} />
          <List items={items} onDelete={onDelete} />
        </div>
      </div>
    );
  }
}

export default App;
