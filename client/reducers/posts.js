function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            return [
                ...state.slice(0, action.index),
                {
                    ...state[action.index],
                    likes: state[action.index].likes + 1
                },
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

export default posts;
