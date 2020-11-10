import { combineReducers } from 'redux'

const initialAuth = {
  username: '',
  role: '',
  isAuth: false
}

const initialNews = [
  {
    title: 'newsTitle',
    date: 'date',
    text: 'some interesting text',
    isApproved: true
  }
]


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

function news(state = initialNews, action) {
  switch (action.type) {
    case 'ADD_NEWS':
      return [
        ...state,
        {
          title: action.payload.title,
          date: action.payload.date,
          text: action.payload.text,
          isApproved : action.payload.isApproved
        }
      ]
    default:
      return state
  }
}

export default combineReducers({auth, news})