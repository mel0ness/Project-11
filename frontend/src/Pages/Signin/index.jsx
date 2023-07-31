import "../../Style/Pages/Signin/signin.scss"
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"
import { useState } from "react";
import * as connexionActions from "../../Features/connexion"
import { connexion, message, statusConnexion } from "../../Utils/Selectors";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, updateUsername] = useState("")
  const [password, updatePassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const messageError = useSelector(message);
  // const statusConnexionRedirect = useSelector(statusConnexion)

  const redirect = (status) => {

    if (status === 200) {
navigate("../user");
    }
    else if (status === 500 || status === "rejected") {
      navigate("../error")
    }
    else if (status === 400) {
    navigate("/sign-in")
  }}

  function signIn(username, password) {
   
    return async (dispatch, getState) => {
        const login = {
            "email": username,
            "password": password
        }
        const chargeUtil = JSON.stringify(login);
    const status = connexion(getState())
   
    
    
    if (status === 'pending') {
      return
    }
    dispatch(connexionActions.fetch())

    try {
        let response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
            body: chargeUtil,
          });
          let data = await response.json();
      await dispatch(connexionActions.resolved(data))
   dispatch(connexionActions.connected())

      const statusConnexionRedirect = statusConnexion(getState())
        // console.log(statusActualized);
      redirect(statusConnexionRedirect)
      
    } catch (error) {
      await dispatch(connexionActions.rejected(error))
      redirect("rejected")
    }}
  
  }

  const sending = () => {

    dispatch(signIn(username, password))
    
   
  }

    return (
        <main className="main bg-dark">
          
          <HelmetProvider>
          <title>Argent Bank - Sign in</title>
          </HelmetProvider>
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>{ messageError === 'Error: User not found!' ? (
            <div className="input-wrapper">
              
              <label htmlFor="username">Username</label
              ><input type="text" id="username" value={username} onInput={e => updateUsername(e.target.value)} />
              <div className="NotFound">User not found!</div>
            </div>) :
             (<div className="input-wrapper">
              
              <label htmlFor="username">Username</label
              ><input type="text" id="username" value={username} onInput={e => updateUsername(e.target.value)} />
            </div>) }
            {messageError === 'Error: Password is invalid' ? (
            <div className="input-wrapper">
              <label htmlFor="password">Password</label
              ><input type="password" id="password" value={password} onInput={e => updatePassword(e.target.value)} />
              <div className="NotFound">Password is invalid!</div>
            </div>) : (<div className="input-wrapper">
              <label htmlFor="password">Password</label
              ><input type="password" id="password" value={password} onInput={e => updatePassword(e.target.value)} />
            </div>)}
            <div className="input-remember">
              <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                >Remember me</label
              >
            </div>
    
          <Link className="sign-in-button" onClick={sending}>Sign In</Link>
         
          </form>
        </section>
      </main>
  )
}

export default SignIn;