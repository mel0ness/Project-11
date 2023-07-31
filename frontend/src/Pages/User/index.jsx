import "../../Style/Pages/User/user.scss"
import accountDatas from "../../Assets/accountsDatas.json"
import Account from "../../Components/AccountFeatures";
import { Helmet } from "react-helmet";

const User = () => {
    return (
        <main className="main bg-dark">
          <Helmet>
          <title>Argent Bank - Accounts</title>
          </Helmet>
        <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accountDatas.map(({id, title, amount, description}) => 
        <Account title={title} amount={amount} description={description} key={id}/>
        ) }
      </main>
    )
}

export default User;