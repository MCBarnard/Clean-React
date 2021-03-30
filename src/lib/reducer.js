export const initialState = {
    user: null,
    page: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_PAGE":
            return {
                ...state,
                page: action.page
            }
        default: {
            return state;
        }
    }
}

export default reducer;
