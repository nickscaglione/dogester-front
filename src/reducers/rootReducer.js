import { combineReducers } from 'redux'

function home(state={}, action) {
  switch(action.type) {
    case 'SWIPE':
      return Object.assign({}, {
        seen: [...state.seen, state.current],
        current: state.stack[0],
        stack: state.stack.slice(1)
      });
    case 'GET_DOGS':
      return {
        seen: [],
        current: action.payload[0],
        stack: action.payload.slice(1)
      }
    default:
      return state;
  }
}

function leaderboards(state={}, action) {
  switch(action.type) {
    case 'SHOW_CATEGORY':
      return Object.assign({}, state, {category: action.payload.category});
    case 'CHANGE_NUM_SHOW':
      return Object.assign({}, state, {numToShow: action.payload.numToShow});
    default:
      return state;
  }
}

function currentPage(state={}, action) {
  switch(action.type) {
    case 'GO_HOME':
      return {currentPage: "home"};
    case 'GO_LEADS':
      return {currentPage: "leaderboards"};
    default:
      return state;
  }
}
const rootReducer = combineReducers({ home, leaderboards, currentPage })

export default rootReducer
