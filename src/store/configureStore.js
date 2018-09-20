import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  characters: []
}
const reducer = (state=initialState,action) =>{
  switch (action.type) {
    case 'GET_CHARACTERS':
      return {
        ...state,
        characters:  action.characters,
      }
    default:
      return state
  }
};

export default createStore(reducer, applyMiddleware(thunk));
