import React from 'react';
import { TodoItem, TodoActions } from './TodoItem';
import { TodoModel } from '../models/TodoModel'

export interface TodoListProps extends TodoActions {
  todos: TodoModel[];
  completeAll: () => any;
}

export interface TodoListState {}

export class TodoList extends React.Component<TodoListProps, TodoListState> {
  
  private handleToggleAll = (e: React.SyntheticEvent<any>) => {
    e.preventDefault();
    this.props.completeAll();
  };

  renderToggleAll() {
    const { todos } = this.props;
    const completedCount = todos.length;
    if (todos.length > 0) {
      return (
        <input
          className="toggleAll"
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={this.handleToggleAll}
        />
      );
    }
  }

  render() {
    const { todos, ...actions } = this.props;
    return (
      <section className="main">
        {this.renderToggleAll()}
        <ul className="normal">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} {...actions} />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
