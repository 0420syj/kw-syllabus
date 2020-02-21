import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';

class Text extends Component {
  state = { isFocused: false };

  onFocusChange = () => {
    this.setState({ isFocused: true });
  }

  onBlurChange = () => {
    this.setState({ isFocused: false });
  }

  render() {
    return (
      <div className='form-selector'>
        <DebounceInput
          style={(this.state.isFocused) ? {
            height: '38px',
            border: '1px solid maroon',
            borderRadius: '4px',
            boxShadow: '0 0 0 1px maroon',
            padding: '2px 8px',
            fontFamily: 'Noto Sans KR',
            outline: 'none',
          } : {
              height: '38px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '2px 8px',
              fontFamily: 'Noto Sans KR'
            }}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          onFocus={this.onFocusChange}
          onBlur={this.onBlurChange}
          minLength={1}
          debounceTimeout={300}
        />
      </div>
    );
  }
}

export default Text;
