import { NavLink } from "react-router-dom";
import '../style/Navbar.scss';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { logout }  from '../redux/actions'
import { useState } from 'react';

function Navbar({ isAuth, logout }) {
  let [isShowPopup, setShowPopup] = useState(false);
  return (
    <div className="navbar">
      <nav className="navbar__list">
        <ul>
          <li className="navbar__listItem">
            <NavLink exact to="/" className="navbar__link" activeClassName="navbar__link_active">
              Главная
            </NavLink>
            </li>
          <li className="navbar__listItem">
            <NavLink to="/news" className="navbar__link" activeClassName="navbar__link_active">
              Новости
            </NavLink>
          </li>
        </ul>
      </nav>
      { isAuth ? 
        <button className="navbar__button" onClick={()=>logout()}>Выход</button>
        :
        <button className="navbar__button" onClick={()=>setShowPopup(true)}>Вход</button>
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