export function loginAction(username, password) {
  let payload = {}
  if(username === 'admin' && password === 'admin') { //Wow, so security
    payload.username = 'admin';
    payload.role = 'admin';
    payload.isAuth = true;
  } else if (username === 'bob' && password === '12345') {
    payload.username = 'bob';
    payload.role = 'user';
    payload.isAuth = true;
  } else {
    payload.username = '';
    payload.role = '';
    payload.isAuth = false;
  }
  return {
    type: 'LOGIN',
    payload : payload
  }
}

export function logout() {
  return {
    type: 'LOGOUT'
  }
}

export function addNews(title, text, date, author) {
  return {
    type: 'ADD_NEWS',
    payload: {
      title,
      text,
      date,
      author,
      isApproved: author === 'admin' ? true : false
    }
  }
}