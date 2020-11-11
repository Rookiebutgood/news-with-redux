export function loginAction(username, password) {
  let payload = {}
  if(username === 'admin' && password === 'admin') { //Wow, so security
    payload.username = 'admin';
    payload.role = 'admin';
    payload.isAuth = true;
    payload.error = '';
  } else if (username === 'bob' && password === '12345') {
    payload.username = 'bob';
    payload.role = 'user';
    payload.isAuth = true;
    payload.error = '';
  } else {
    payload.username = '';
    payload.role = '';
    payload.isAuth = false;
    payload.error = 'Access denied'
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

export function addNews(title, text, author) {
  return {
    type: 'ADD_NEWS',
    payload: {
      title,
      text,
      date: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
      author,
      isApproved: author === 'admin' ? true : false
    }
  }
}

export function approveNews(id) {
  return {
    type: 'APPROVE_NEWS',
    payload: id
  }
}

export function deleteNews(id) {
  return {
    type: 'DELETE_NEWS',
    payload: id
  }
} 