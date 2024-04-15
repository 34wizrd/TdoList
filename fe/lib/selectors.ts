import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TTodo } from '@/components/TodoList/todosSlice';

export const searchTextSelector = (state: RootState) => state.filters.filters.search;
export const filterStatusSelector = (state: RootState) => state.filters.filters.status;
export const filterPrioritiesSelector = (state: RootState) => state.filters.filters.priorities;
export const todoListSelector = (state: RootState) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.todos.filter((todo: TTodo) => {
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
