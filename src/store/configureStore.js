import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  characters: [],
  isLoading: true
}
const reducer = (state=initialState,action) =>{
  switch (action.type) {
    case 'GET_CHARACTERS':
      return {
        ...state,
        characters:  action.characters,
        isLoading: false
      }
    default:
      return state
  }
};

export default createStore(reducer, applyMiddleware(thunk));
