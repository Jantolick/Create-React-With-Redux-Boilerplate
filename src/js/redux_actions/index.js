import { SIMPLE_ACTION, SIMPLE_SUB, SIMPLE_ADD } from '../redux_constants';

export const simpleAction = () => dispatch => {
    dispatch({
     type: SIMPLE_ACTION,
     payload: 'result_of_simple_action'
    })
   }

export const simpleAdd = (amount) => dispatch => {
    dispatch({
        type: SIMPLE_ADD,
        payload: amount
    })
}

export const simpleSub = (amount) => dispatch => {
    dispatch({
        type: SIMPLE_SUB,
        payload: amount
    })
}