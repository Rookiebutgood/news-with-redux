import { connect } from 'react-redux'
import { useState } from 'react'
import { loginAction }  from '../redux/actions'

function LoginForm({ isAuth, login }) {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  return(
    <div className="loginForm">
      <input type="text" onChange= {e=>setUsername(e.target.value)}/>
      <input type="text" onChange= {e=>setPassword(e.target.value)}/>
      <input type="submit" value="Войти" onClick={()=>login(username, password)} />
    </div>
  )
}



const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(loginAction(username, password))
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)