import { Link } from "react-router-dom";
import Logo from "../../Assets/argentBankLogo.png"
import "../../Style/Components/Header/header.scss"
import { Erase } from "../../Features/connexion";
import { useDispatch } from "react-redux";



const Header = () => {
  const dispatch = useDispatch();

  const eraseStates = () => {
    dispatch(Erase())
  }

    return(
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/sign-in" onClick={eraseStates}>
          <i className="fa fa-user-circle"></i>
           Sign In 
        </Link>
      </div>
    </nav>)
}

export default Header;