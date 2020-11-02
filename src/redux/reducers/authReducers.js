const initialValue = {
  isLoggedIn: false,
};

const authReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export default authReducers;