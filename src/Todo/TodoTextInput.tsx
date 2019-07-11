import React from 'react';

export interface TodoTextInputProps {
  text?: string;
  placeholder?: string;
  newTodo?: boolean;
  editing?: boolean;
  onSave: (text: string) => any;
}

export interface TodoTextInputState {
  text: string;
}

export class TodoTextInput extends React.Component<TodoTextInputProps, TodoTextInputState> {

  private handleSubmit = (e: any) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  };

  private handleChange = (e: any) => {
    this.setState({ text: e.target.value });
  };

  private handleBlur = (e: any) => {
    const text = e.target.value.trim();
    if (!this.props.newTodo) {
      this.props.onSave(text);
    }
  };

  state = {
    text: this.props.text || ''
  };

  render() {

    return (
      <input
        type="text"
        className="bg-white focus:outline-0 focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        autoFocus
        placeholder={this.props.placeholder}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default TodoTextInput;
