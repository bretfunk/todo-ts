import * as React from "react";
import Input from "./components/Input";
import List from "./components/List";
import { State, AppProps } from "./types";
import { connect } from "react-redux";
import { addItem } from "./store/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item))
  };
};

const mapStateToProps = state => {
  return { item: state.item, items: state.items };
};

class ConnectedApp extends React.Component<AppProps, State> {
  constructor(props: any) {
    super(props);
  }

  onChange = (e: any) => {
    const newItem = e.target.value;
    this.setState({ item: newItem });
  };
  onSubmit = () => {
    const { item } = this.state;
    this.props.addItem({ item });
    //const { item, items } = this.state;
    //this.setState({
    //items: [...items, item],
    //item: ""
    //});
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
        <h1>TS Todo App</h1>
        <Input item={item} onChange={onChange} onSubmit={onSubmit} />
        <List items={items} onDelete={onDelete} />
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
export default App;
