const initialValue = {
    selectedChat: null
};

const chatReducers = (state = initialValue, action) => {
    switch (action.type) {
        case "SELECT_CHAT":
            return {
                ...state,
                selectedChat: action.data,
            };

        case "DESELECT_CHAT":
            return {
                ...state,
                selectedChat: null,
            };

        default:
            return state;
    }
};

export default chatReducers;