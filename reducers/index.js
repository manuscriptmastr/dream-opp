import initState from '../store/initial';
import { bookmarkOpp, unbookmarkOpp } from '../actions/opp';
import { bookmarkOppReducer, unbookmarkOppReducer } from './opp';

let defaultReducer = (state) => ({ ...state });

let reducers = {
  [bookmarkOpp]: bookmarkOppReducer,
  [unbookmarkOpp]: unbookmarkOppReducer
}

let reducer = (state = initState, action) => {
  let reducerToPerform = reducers[action.type] || defaultReducer;
  return reducerToPerform(state, action);
};

export default reducer;