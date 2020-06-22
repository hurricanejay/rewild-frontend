let initialState = {
    plants: []
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'SETPLANTS': 
            return {...prevState, plants: action.plants}
        default:
            return prevState
    }
}

export default reducer;