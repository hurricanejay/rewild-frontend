  
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

