const initialState = [
    {
        _id : '001',
        title : 'adadhjg',
        content : 'jfh fhfgh',
        author_id : '001',
    },
    {
        _id : '002',
        title : 'adad45654 hjg',
        content : 'jfhfhasdasdas dasdfgh',
        author_id : '002',
    }
]

export default function noties(state = initialState, action) {
    switch(action.type) {
        case 'ADD_NOTE':
            return [...state, action.payload]

        default: return state
    }
}