import React from 'react';
import { TodoItem, TodoActions } from './TodoItem';
import { TodoModel } from '../models/TodoModel'

export interface TodoListProps extends TodoActions {
  todos: TodoModel[];
  completeAll: () => any;
  unCompleteAll: () => any;
  completedTodos: TodoModel[]
}

export interface TodoListState {}

export class TodoList extends React.Component<TodoListProps, TodoListState> {
  
  private handleToggleAll = () => {
    this.props.completeAll();
  };

  private handleUnToggleAll = () => {
    this.props.unCompleteAll();
  };

  renderToggleAll() {
    const { todos, completedTodos } = this.props;
    const completedCount = completedTodos.length;

    if (todos.length > 0) {
      return (
        <>
          {completedCount < todos.length ? (
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={this.handleToggleAll}
            >
              Toggle All
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={this.handleUnToggleAll}
            >
              Un-Toggle All
            </button>
          )}
        </>
      );
    }
  }

  render() {
    const { todos, ...actions } = this.props;
    return (
      <section className="px-6 py-4">
        {this.renderToggleAll()}
        <ul className="">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} {...actions} />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
