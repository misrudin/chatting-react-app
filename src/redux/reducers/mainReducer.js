const initialValue = {
    selectedUser: null,
  };
  
  const authReducers = (state = initialValue, action) => {
    switch (action.type) {
      case "SELECT_USER":
        return {
          ...state,
          selectedUser: action.data,
        };
        case "DELETE_USER":
        return {
          ...state,
          selectedUser: null,
        };
  
      default:
        return state;
    }
  };
  
  export default authReducers;
  