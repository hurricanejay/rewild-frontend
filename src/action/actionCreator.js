  
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


export const signupActionCreater = (username, password, email) => {
    return dispatch => {
        fetch(`${API_ROOT}/users`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({ username, password, email })
        }).then(res => res.json())
            .then(user => {
                dispatch(setUserCreator(user))
            })
    }
}

export const setTopThreePlantsActionCreator = top_three => ({ type: 'SETTOPTHREE', top_three })
export const getTopThreePlantsActionCreator = () => {
    return dispatch => {
        fetch(`${API_ROOT}/plants/top_three`)
            .then(res => res.json())
            .then(plants => {
                dispatch(setTopThreePlantsActionCreator(plants))
            })
    }
}