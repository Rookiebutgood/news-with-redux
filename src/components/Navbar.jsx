import { Link } from "react-router-dom";
import '../style/Navbar.scss';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { logout }  from '../redux/actions'
import { useState } from 'react';

function Navbar({ isAuth, logout }) {
  let [isShowPopup, setShowPopup] = useState(false);

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">
              Главная
            </Link>
            </li>
          <li>
            <Link to="/news">
              Новости
            </Link>
          </li>
        </ul>
      </nav>
      { isAuth ? 
        <button onClick={()=>logout()}>Выход</button>
        :
        <button onClick={()=>setShowPopup(true)}>Вход</button>
      }
      { isShowPopup && <LoginForm onExit={()=>setShowPopup(false)}/> }
    </div>

  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)