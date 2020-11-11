import { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { loginAction, logout }  from '../redux/actions';

import CustomButton from './CustomButton';

import '../style/LoginForm.scss';

function LoginForm({ user, onExit, login, logout}) {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [error, setError] = useState('');

  useEffect(() => {
    if(user.isAuth) {
      onExit();
    }
    if(user.error) {
      setError(user.error);
    }
  }, [user, onExit])

  return(
    <div className="loginForm">
      <div className="loginForm__header">
        <h3 className="loginForm__title">Вход</h3>
        <button 
          className="loginForm__exit" 
          onClick={ () => { 
            onExit();
            logout(); //set auth.error to ''
          } }
        >Закрыть</button>
      </div>
      <div className="loginForm__content">
        <input 
          type="text"
          placeholder="Имя"
          className="loginForm__input"
          onChange={ e => {setError(''); setPassword(e.target.value)} }
        />
        <input
          type="password"
          placeholder="Пароль"
          className="loginForm__input"
          onChange={ e => {setError(''); setPassword(e.target.value)} }
        />
        { error && <span>{error}</span> }
        <CustomButton
          label="Войти"
          className="loginForm__button"
          onClick={ () => {
            if(username && password) {
              login(username, password);
            } else {
              setError('Заполните все поля')
            }
          } }
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
    login: (username, password) => dispatch(loginAction(username, password)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)