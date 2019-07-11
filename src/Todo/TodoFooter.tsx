import React from 'react';
import {
  TodoFilter,
  TODO_FILTER_TITLES,
  TODO_FILTER_TYPES
} from '../constants';

export interface FooterProps {
  filter: TodoFilter;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => any;
  onChangeFilter: (filter: TodoFilter) => void
}

export interface FooterState {
  /* empty */
}

export class TodoFooter extends React.Component<FooterProps, FooterState> {
  renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className="count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter: TodoFilter) {
    const title = TODO_FILTER_TITLES[filter];
    const { onChangeFilter } = this.props;

    return (
      <button
        className="hover:shadow-none focus:outline-none"
        style={{ cursor: 'pointer' }}
        onClick={() => onChangeFilter(filter)}
      >
        {title}
      </button>
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClearCompleted}>
          Clear Completed
        </button>
      );
    }
  }

  render() {
    return (
      <footer className="px-6 py-4">
        {this.renderTodoCount()}
        <div className="pt-4">
          {TODO_FILTER_TYPES.map((filter) => (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 hover:shadow-outline hover:bg-gray-400 hover:text-blue-400"
              key={filter}
              children={this.renderFilterLink(filter)}
            />
          ))}
        </div>
        <div className="mt-5">
          {this.renderClearButton()}
        </div>
      </footer>
    );
  }
}

export default TodoFooter;
