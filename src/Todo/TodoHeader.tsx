import React from 'react';
import { TodoTextInput } from './TodoTextInput';
import { TodoModel } from '../models/TodoModel';

export interface HeaderProps {
  addTodo: (todo: Partial<TodoModel>) => any;
}

export interface HeaderState {
  /* empty */
}

export class TodoHeader extends React.Component<HeaderProps, HeaderState> {
  private handleSave = (text: string) => {
    if (text.length) {
      this.props.addTodo({ text });
    }
  };

  render() {
    return (
      <header className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2">Todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

export default TodoHeader;
