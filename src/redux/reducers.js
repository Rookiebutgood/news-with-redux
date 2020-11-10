import { combineReducers } from 'redux'

const initialAuth = {
  username: '',
  role: '',
  isAuth: false
}

function auth(state = initialAuth, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state, 
        username: action.payload.username, 
        role: action.payload.role, 
        isAuth: action.payload.isAuth
      }
    default:
      return state
  }
}

export default combineReducers({auth})