import * as React from 'react';
import { InputProps } from './types';

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
