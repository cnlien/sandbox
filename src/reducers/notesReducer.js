const initialState = {
    title: "Note Title",
    note: "This is the note text"
}

export const notesReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                title: action.payload,
                note: action.payload
            };
            
        default:
            return state;
    }
}