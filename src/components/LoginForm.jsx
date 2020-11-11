import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { loginAction }  from '../redux/actions'
import CustomButton from './CustomButton'
import '../style/LoginForm.scss'

function LoginForm({ user, login, onExit}) {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [error, setError] = useState('');

  useEffect(() => {
    if(user.isAuth) {
      onExit();
    }
  }, [user, onExit])

  return(
    <div className="loginForm">
      <div className="loginForm__header">
        <h3 className="loginForm__title">Вход</h3>
        <button className="loginForm__exit" onClick={()=>onExit()}>Закрыть</button>
      </div>
      <div className="loginForm__content">
        <input 
          type="text"
          placeholder="Имя"
          className="loginForm__input"
          onChange={e=>setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="loginForm__input"
          onChange={e=>setPassword(e.target.value)}
        />
        <CustomButton
          label="Войти"
          className="loginForm__button"
          onClick={()=>login(username, password)}
        />
      </div>
    </div>
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