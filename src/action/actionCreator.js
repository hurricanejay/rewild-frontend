  
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