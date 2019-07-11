import React from 'react';
import { TodoTextInput } from './TodoTextInput';
import { TodoModel } from '../models/TodoModel';

export interface TodoActions {
  editTodo: (id: number, data: Partial<TodoModel>) => any;
  deleteTodo: (id: number) => any;
}

export interface TodoProps extends TodoActions {
  todo: TodoModel;
}

export interface TodoState {
  editing: boolean;
}

export class TodoItem extends React.Component<TodoProps, TodoState> {

  private handleDoubleClick = (e: React.SyntheticEvent<any>) => {
    this.setState({ editing: true });
  };

  private handleToggleCheckbox = (e: React.SyntheticEvent<any>) => {
    const { todo } = this.props;
    const target = e.target as any;
    if (
      target &&
      target.checked !== undefined &&
      target.checked !== todo.completed
    ) {
      this.updateTodo({ completed: target.checked });
    }
  };

  private handleClickDeleteButton = (e: React.SyntheticEvent<any>) => {
    const { todo, deleteTodo } = this.props;
    deleteTodo(todo.id);
  };

  private updateTodo = (data: Partial<TodoModel>) => {
    const { todo } = this.props;
    if (data.text !== undefined && data.text.trim().length === 0) {
      this.props.deleteTodo(todo.id);
    } else {
      this.props.editTodo(todo.id, data);
    }
    this.setState({ editing: false });
  };

  state = {
    editing: false };

  render() {
    const { todo } = this.props;

    const element = this.state.editing ? (
      <TodoTextInput
        text={todo.text}
        editing={this.state.editing}
        onSave={(text: string) => this.updateTodo({ text })}
      />
    ) : (
      <div className="flex flex-row py-3">

        <label className="md:w-2/3 flex items-center text-gray-700 font-bold">
          <input
            className="mr-2 leading-tight text-2xl"
            type="checkbox"
            checked={todo.completed}
            onChange={this.handleToggleCheckbox}
          />
          <span className="text-2xl" onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </span>
        </label>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={this.handleClickDeleteButton}>
          Delete
        </button>
      </div>
    );

    return <li>{element}</li>;
  }
}

export default TodoItem;
