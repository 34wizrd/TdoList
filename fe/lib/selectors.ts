import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const searchTextSelector = (state: RootState) => state.filters.search;
export const filterStatusSelector = (state: RootState) => state.filters.status;
export const filterPrioritiesSelector = (state: RootState) => state.filters.priorities;
export const todoListSelector = (state: RootState) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo: { name: string | any[]; priority: any; completed: any; }) => {
      if (status === 'All') {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
