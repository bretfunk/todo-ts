import * as React from 'react';

type InputProps = {
  item: string;
  onChange: any;
  onSubmit: any;
};

class Input extends React.Component<InputProps> {
  render() {
    const { item, onChange, onSubmit } = this.props;
    return (
      <>
        <input type="text" name={item} placeholder={item} onChange={onChange} />
        <input type="submit" name="Submit" onClick={onSubmit} />
      </>
    );
  }
}

export default Input;
