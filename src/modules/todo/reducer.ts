import { State, TodoAction, TodoActionType } from "./types";
import produce from "immer";

const initialState: State = {
  todos: []
};

const reducer = (state = initialState, action: TodoAction) =>
  produce(state, draft => {
    switch (action.type) {
      case TodoActionType.ADD:
        draft.todos.push(action.payload.todo);
        break;
      case TodoActionType.REMOVE:
        draft.todos.splice(
          draft.todos.findIndex(t => t.id === action.payload.id),
          1
        );
        break;
      case TodoActionType.UPDATE: {
        const todoIndex = draft.todos.findIndex(
          t => t.id === action.payload.id
        );
        draft.todos[todoIndex].body = action.payload.body;
        break;
      }
    }
  });

export default reducer;
