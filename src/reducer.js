let initialState = {
    topThree: [],
    plants: [],
    myPlants: [],
    user: null,
    searchPlants: [],
    cart: [],
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
        case 'SETSEARCHPLANTS':
            return {...prevState, searchPlants: action.searchPlants}
        case  'SETCART':
            return {...prevState, cart: action.cart}
        default:
            return prevState
    }
}

export default reducer;