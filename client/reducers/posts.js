// a reducers take in two things
//1. the action
//2. copy of current state

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      Console.log("incrementing likes");
      //return state
      const i = action.index;
      return [
        ...state.slice(0, i),
        { ...state[i], likes: state[i].likes + 1 },
        ...this.state.slice(i + 1)
      ];
    default:
      break;
  }
  return state;
}

export default posts;
