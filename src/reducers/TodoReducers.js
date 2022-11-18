const TodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "Add Todo":
      return { todos: action.payload };

    case "Remove Todo":
      return { todos: action.payload };

    default:
      return state;
  }
};

export default TodoReducer;
