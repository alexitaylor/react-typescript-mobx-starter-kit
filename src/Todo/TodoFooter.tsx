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
    const { filter: selectedFilter, onChangeFilter } = this.props;

    return (
      <button
        style={{ cursor: 'pointer' }}
        onClick={() => onChangeFilter(selectedFilter)}
      >
        {title}
      </button>
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <button className="clearCompleted" onClick={onClearCompleted} />
      );
    }
  }

  render() {
    return (
      <footer className="normal">
        {this.renderTodoCount()}
        <ul className="filters">
          {TODO_FILTER_TYPES.map((filter) => (
            <li key={filter} children={this.renderFilterLink(filter)} />
          ))}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}

export default TodoFooter;
