export const addTodo = (data: any) => {
    return {
      type: 'todoList/addTodo',
      payload: data,
    };
  };
  
  export const toggleTodoStatus = (todoId: any) => {
    return {
      type: 'todoList/toggleTodoStatus',
      payload: todoId,
    };
  };
  
  export const searchFilterChange = (text: string) => {
    return {
      type: 'filters/searchFilterChange',
      payload: text,
    };
  };
  
  export const statusFilterChange = (status: string) => {
    return {
      type: 'filters/statusFilterChange',
      payload: status,
    };
  };
  
  export const priorityFilterChange = (priorities: string[]) => {
    return {
      type: 'filters/prioritiesFilterChange',
      payload: priorities,
    };
  };
  