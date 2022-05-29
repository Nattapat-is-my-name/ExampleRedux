import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: "todos",
  initialState: {
    todos: []
  },
  reducers: {
    addtodos: (state, { payload: { title, message } }) => {
      state.todos = [
        ...state.todos,
        { id: new Date().toString(), title, message },
      ];
    },
  },
});

export const { addtodos } = todo.actions;

export default todo.reducer;
