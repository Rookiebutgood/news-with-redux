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
    isApproved: false,
    author: 'bob'
  },
  {
    title: 'newsTitle',
    date: 'date',
    text: 'some interesting text',
    isApproved: true,
    author: 'bob'
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
    case 'LOGOUT':
      return {
        ...state, 
        username: '', 
        role: '', 
        isAuth: false
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
          author: action.payload.author,
          isApproved : action.payload.isApproved
        }
      ]
    case 'APPROVE_NEWS':
      return state.map((el, i)=> {
        if(i === action.payload) {
          return {...el, isApproved: true}
        } else {
          return el;
        }
      })
      case 'DELETE_NEWS':
        return state.filter((el, i) => i !== action.payload)
    default:
      return state
  }
}

export default combineReducers({auth, news})