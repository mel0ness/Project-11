import "../../Style/Pages/User/user.scss"
import accountDatas from "../../Assets/accountsDatas.json"
import Account from "../../Components/AccountFeatures";
import { Helmet } from "react-helmet";
import { fetchUsersInfs, ActualizeUserName } from "../../Features/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userName, editingStatus, editingfetching, token} from "../../Utils/Selectors";
import * as editingActions from "../../Features/editUserName"
import { useNavigate } from "react-router";

const User = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const userNameUser = useSelector(userName)
const [editing, launchEditing] = useState("closed");
const [editingButton, launchEditingButton] = useState("openned");
const [NewuserName, createNewUserName] = useState("");
const [animation, launchAnimation] = useState(false);
const [fields, fieldserror] = useState(false);
const [emptyfields, checkfields] = useState(false);


useEffect(()=> {

   dispatch(fetchUsersInfs)
 }, [dispatch])

 const changeDisplay = () => {
  if(editing === "closed" && editingButton === "openned") {
    launchEditing("openned")
    launchEditingButton("closed")
  }
  else {
    launchEditing("closed")
    launchEditingButton("openned")
  }
 }

const Put = (e) => {
 
e.preventDefault();
setTimeout(() => {
if(!NewuserName) {
  checkfields(true)
}
else {
  checkfields(false)
  launchAnimation(true)
  dispatch(editUserName(NewuserName))
}}, 300)

}

const redirect = (status, username) => {

  if (status === 200) {
    fieldserror(false)
   dispatch(ActualizeUserName(username))
    changeDisplay()
    launchAnimation(false)

  }
  else if (status === 500 || status === "rejected") {
    navigate("../error")
  }
  else if (status === 400) {
fieldserror(true)
  launchAnimation(false)
}}

function editUserName(username) {
   
  return async (dispatch, getState) => {
      const editing = {
          "userName": username
      }
      const chargeUtil = JSON.stringify(editing);
  const status = editingfetching(getState())
 
  
  
  if (status === 'pending') {
    return
  }
  const editingToken = token(getState())
  dispatch(editingActions.fetch())

  try {
      let response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "PUT",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${editingToken}`
          },
          body: chargeUtil,
        });
        let data = await response.json();
    await dispatch(editingActions.resolved(data))
const validateOrNot = editingStatus(getState())
   redirect(validateOrNot, NewuserName)
    
  } catch (error) {
    await dispatch(editingActions.rejected(error))
    redirect("rejected")
  }}

}


return ( <main className="main bg-dark">
<Helmet>
<title>Argent Bank - Accounts</title>
</Helmet><div className="header">
          <h1>Welcome back<br />{userNameUser}</h1>
         <div className={"modal " + editing}><form onSubmit={e => Put(e)} >{fields ? (<div className="error">Error with field information</div>) : (<div></div>)}{emptyfields ? (<div className="error">You have to fill the field!</div>) : (<div></div>)}<div className="input-wrapper-editing">
              
              <label htmlFor="username">New user name</label
              ><input autoComplete="off" type="text" id="username" value={NewuserName} onInput={e => createNewUserName(e.target.value)} />
            </div> {animation? (  <button type="submit" className="sign-in-button-editing"><div className="animationFetch"></div></button>) : ( <button type="submit" className="sign-in-button-editing">Validate new user name</button>)} </form></div> <button className={"edit-button " + editingButton} onClick={() => changeDisplay()}>Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accountDatas.map(({id, title, amount, description}) => 
        <Account title={title} amount={amount} description={description} key={id}/>
        ) }</main>)
  
}
export default User;