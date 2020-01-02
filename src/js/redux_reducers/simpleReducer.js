import { SIMPLE_ACTION, SIMPLE_ADD, SIMPLE_SUB } from "../redux_constants";

const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return Object.assign({}, state, 
        {
          result: action.payload
        })
      

    case SIMPLE_ADD:
      return Object.assign({}, state, {
        count: state.count + action.payload
      })

    case SIMPLE_SUB:
      return Object.assign({}, state, {
        count: state.count - action.payload
      })
    default:
      return state;
  }
};
