let initialState = {
    plants: [],
    user: null
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'SETPLANTS': 
            return {...prevState, plants: action.plants}
        case 'SETUSER':
            return {...prevState, user: action.user}
        default:
            return prevState
    }
}

export default reducer;