import { Link } from "react-router-dom";
import '../style/Navbar.scss';
import LoginForm from './LoginForm'

export default function Navbar() {
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
      <button>Вход</button>
      <LoginForm />
    </div>

  )
}