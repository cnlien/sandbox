export const initialState = {
    notes: [
        {
            title: "Note Title",
            note: "This is the note text",
        },
    
        {
            title: "Note Title 2",
            note: "This is a second note with some text",
        }
    ],
    
};

export const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                title: action.payload,
                note: action.payload,
            };
            
        default:
            return state;
    }
}