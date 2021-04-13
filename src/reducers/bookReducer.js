export const bookState = [
    {book: "The Legion", id: 1},
    {book: "The Dino", id: 2},
    {book: "The Py", id: 3},
    {book: "The C", id: 4}
]

export const bookReducer = (state = bookState, action) => {
    switch (action.type) {
        case 'Add Book':
            return [...state, {book: action.book, id: 5}]
        case 'Remove Book':
            return state.filter((book) => book.id !== action.id)
    
        default:
            return state
    }
}