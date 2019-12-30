const mid = store => next => action => {
  switch (action.type) {
    case "Get_Posts":
      console.log("Read All Posts!");
      break;
    case "Get_Post":
      console.log("Read Post!");
      break;
    default:
      console.log("Not Posts Action!");
      break;
  }
  next(action);
};
export default mid;
