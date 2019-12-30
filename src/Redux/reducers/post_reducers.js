export default function(state = {}, action) {
  switch (action.type) {
    case "Get_Posts":
      return { ...state, posts: action.payload };
    case "Get_Post":
      return { ...state, post: action.payload };
    default:
      return state;
  }
}
