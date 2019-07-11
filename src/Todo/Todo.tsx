import React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { TodoFooter } from './TodoFooter';
import { TodoStore } from '../stores';
import {
  STORE_TODO,
  TodoFilter
} from '../constants';

export interface TodoProps extends RouteComponentProps<any> {
  [STORE_TODO]: TodoStore;
}

export interface TodoState {
  filter: TodoFilter;
}

@inject(STORE_TODO)
@observer
export class Todo extends React.Component<TodoProps, TodoState> {

  getFilteredTodo(filter: TodoFilter) {
    const todoStore = this.props[STORE_TODO] as TodoStore;
    switch (filter) {
      case TodoFilter.ACTIVE:
        return todoStore.activeTodos;
      case TodoFilter.COMPLETED:
        return todoStore.completedTodos;
      default:
        return todoStore.todos;
    }
  }

  handleFilter = (filter: TodoFilter) => {
    this.setState({ filter });
  };

  state = {
    filter: TodoFilter.ALL
  };

  render() {
    const todoStore = this.props[STORE_TODO] as TodoStore;
    const { children } = this.props;
    const { filter } = this.state;
    const filteredTodos = this.getFilteredTodo(filter);

    const footer = todoStore.todos.length && (
      <TodoFooter
        filter={filter}
        activeCount={todoStore.activeTodos.length}
        completedCount={todoStore.completedTodos.length}
        onClearCompleted={todoStore.clearCompleted}
        onChangeFilter={this.handleFilter}
      />
    );

    return (
      <div className="h-screen w-screen bg-blue-700 flex items-center justify-center">
        <div className="bg-white w-1/3 rounded overflow-hidden shadow-lg">
          <TodoHeader addTodo={todoStore.addTodo} />
          <TodoList
            todos={filteredTodos}
            completeAll={todoStore.completeAll}
            unCompleteAll={todoStore.unCompleteAll}
            deleteTodo={todoStore.deleteTodo}
            editTodo={todoStore.editTodo}
            completedTodos={todoStore.completedTodos}
          />
          {footer}
          {children}
        </div>
      </div>
    );
  }
}
