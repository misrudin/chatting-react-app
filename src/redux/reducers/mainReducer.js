const initialValue = {
  selectedUser: null,
  dataChat: [],
  newChat: null
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

    case "GET_DATA_CHAT":
      return {
        ...state,
        dataChat: action.data,
      };
    case "DELETE_DATA_CHAT":
      return {
        ...state,
        dataChat: null,
      };

    case "ADD_DATA_CHAT":
      state.dataChat.push(action.data)
      return {
        ...state,
        dataChat: state.dataChat,
        newChat: action.data
      };

      case "NEW_CHAT":
        return {
          ...state,
          newChat: action.data,
        };
  



    default:
      return state;
  }
};

export default authReducers;