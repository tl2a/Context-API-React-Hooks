export const titleState = [
    {title: "The Legion", id: 1},
    {title: "The Dino", id: 2},
    {title: "The Py", id: 3},
    {title: "The C", id: 4}
]

export const titleReducer = (state = titleState, action) => {
    switch (action.type) {
        case 'Add Title':
            return [...state, {title: action.title, id: 5}]
        case 'Remove Title':
            return state.filter((title) => title.id !== action.id)
    
        default:
            return state
    }
}