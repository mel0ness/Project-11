import "../../Style/Pages/User/user.scss"
import accountDatas from "../../Assets/accountsDatas.json"
import Account from "../../Components/AccountFeatures";
import { Helmet } from "react-helmet";
import { fetchUsersInfs } from "../../Features/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { connected, userName} from "../../Utils/Selectors";

const User = () => {
const dispatch = useDispatch();
const connexionAvailable = useSelector(connected)

useEffect(()=> {
 if(connexionAvailable)
  dispatch(fetchUsersInfs)
}, [dispatch, connexionAvailable])


const userNameUser = useSelector(userName)
if(connexionAvailable) return ( <main className="main bg-dark">
<Helmet>
<title>Argent Bank - Accounts</title>
</Helmet><div className="header">
          <h1>Welcome back<br />{userNameUser}</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accountDatas.map(({id, title, amount, description}) => 
        <Account title={title} amount={amount} description={description} key={id}/>
        ) }</main>)
        else
    return (
      <main className="main bg-dark">
      <Helmet>
      <title>Argent Bank - Accounts</title>
      </Helmet><div className="header">
                <h1>You must be connected to access this page!</h1>
          
              </div></main>) }
  

export default User;