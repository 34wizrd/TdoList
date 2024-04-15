import { createAppSlice } from "@/lib/createAppSlice";

export type TTodo = {
  id: number,
  name: string,
  completed: boolean,
  priority: string
}

export interface ITodoState {
  todos: TTodo[];
  status: "idle" | "loading" | "failed"
}

const initialState: ITodoState = {
  todos: [
    { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "High" },
    { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
  ],
  status: 'idle'
}

export const todosSlice = createAppSlice({
  name: "todoList",
  initialState,
  reducers: {
    // IMMER
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    }, // action creators
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.todos.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
