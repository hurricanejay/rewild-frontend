
import { API_ROOT, HEADERS } from '../constants'

export const setPlantsActionCreator = plants => ({ type: 'SETPLANTS', plants })
export const getPlantsActionCreator = () => {
    return dispatch => {
        fetch(`${API_ROOT}/plants`)
            .then(res => res.json())
            .then(plants => {
                dispatch(setPlantsActionCreator(plants))
            })
    }
}

export const setUserCreator = user => ({ type: 'SETUSER', user })
export const loginActionCreater = (username, password) => {
    return dispatch => {
        fetch(`${API_ROOT}/users/login`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({ username, password })
        }).then(res => res.json())
            .then(user => {
                dispatch(setUserCreator(user))
            })
    }
}

export const signupActionCreater = (user) => {
    return dispatch => {
        fetch(`${API_ROOT}/users`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({user: user})
        }).then(res => res.json())
            .then(user => {
                dispatch(setUserCreator(user))
            })
    }
}

export const createWatering = (userPlantId, date) => {
    return dispatch => {
        fetch(`${API_ROOT}/user_plants/watering/${userPlantId}`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({date: date})
        })
    }
}

export const setMyPlants = (myPlants) => ({ type: 'SETMYPLANTS', myPlants })
export const getMyPlants = (userId) => {

    console.log(userId)
    return dispatch => {
        fetch(`${API_ROOT}/user_plants/my_plants/${userId}`)
            .then(res => res.json())
            .then(userPlants => {
                dispatch(setMyPlants(userPlants))
            })
    }
}


export const setTopThreePlantsActionCreator = topThree => ({ type: 'SETTOPTHREE', topThree })
export const getTopThreePlantsActionCreator = () => {
    return dispatch => {
        fetch(`${API_ROOT}/plants/top_three`)
            .then(res => res.json())
            .then(plants => {
                dispatch(setTopThreePlantsActionCreator(plants))
            })
    }
}