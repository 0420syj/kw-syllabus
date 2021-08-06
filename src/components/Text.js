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
    const inputStyle = {
      height: '38px',
      background: 'transparent',
      border: 'none',
      fontFamily: 'Noto Sans CJK KR',
      fontWeight: 'normal',
      outline: 'none',
    };

    return (
      <div className={(this.state.isFocused ? 'form-text active-div' : 'form-text')}>
        <div className='input-icon'>{this.props.icon}</div>
        <DebounceInput
          style={inputStyle}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          onFocus={this.onFocusChange}
          onBlur={this.onBlurChange}
          minLength={1}
          debounceTimeout={500}
        />
      </div>
    );
  }
}

export default Text;
