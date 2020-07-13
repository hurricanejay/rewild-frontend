let initialState = {
    topThree: [],
    plants: [],
    myPlants: [],
    user: null
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'SETPLANTS': 
            return {...prevState, plants: action.plants}
        case 'SETUSER':
            return {...prevState, user: action.user}
        case 'SETTOPTHREE':
            return {...prevState, topThree: action.topThree}    
        case 'SETMYPLANTS':
            return {...prevState, myPlants: action.myPlants}
        default:
            return prevState
    }
}

export default reducer;