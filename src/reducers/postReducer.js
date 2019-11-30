const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id)
        case 'EDIT_POST':
            return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)
        case 'UPDATE':
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        editing: !post.editing
                    }
                } else return post;
            })
        // case 'SEARCH':
        //     return state.map(
        //         (post) => {

        //             const title = post.title.toLowerCase();
        //             const searchText = data.searchText.toLowerCase();
        //             if (title == searchText) {

        //                 return lc.includes(filter);

        //             }

        //         }
        //     )

        default:
            return state;
    }
}
export default postReducer;