import { Link } from "react-router-dom";
import Logo from "../../Assets/argentBankLogo.png"
import "../../Style/Components/Header/header.scss"
import { Erase } from "../../Features/connexion";
import { useDispatch, useSelector } from "react-redux";
import { lastName, firstName, connected } from "../../Utils/Selectors";
import {EraseUserState} from "../../Features/user";



const Header = () => {
  const dispatch = useDispatch();
  const lastNameUser = useSelector(lastName);
  const firstNameUser = useSelector(firstName);
  const connectedUser = useSelector(connected)


  const eraseStates = () => {
    dispatch(Erase())
    dispatch(EraseUserState())
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
      {connectedUser? (<div> <Link className="main-nav-item" to="./user">
          <i className="fa fa-user-circle"></i>
          {firstNameUser} {lastNameUser}
        </Link>
        <Link className="main-nav-item" to="/" onClick={eraseStates}>
          <i className="fa fa-user-circle"></i>
           Sign Out
        </Link></div>) : (
      <div>
        <Link className="main-nav-item" to="/sign-in" onClick={eraseStates}>
          <i className="fa fa-user-circle"></i>
           Sign In 
        </Link>
      </div>)}
    </nav>)
}

export default Header;