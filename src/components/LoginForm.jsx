import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { loginAction }  from '../redux/actions'
import Popup from './Popup';

function LoginForm({ user, login, onExit}) {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [error, setError] = useState('');

  useEffect((t) => {
    if(user.isAuth) {
      onExit();
    }
  }, [user, onExit])

  return(
    <Popup title="Вход" error={error} exitHandler={onExit} >
      {user.isAuth && 'text'}
      <input type="text" onChange={e=>setUsername(e.target.value)}/>
      <input type="password" onChange={e=>setPassword(e.target.value)}/>
      <input type="submit" value="Войти" onClick={()=>login(username, password)} />
    </Popup>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(loginAction(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)