import "../../Style/Pages/Error/error.scss"
import error from "../../Assets/error.png"
import { Helmet } from "react-helmet"

const Error = () => {
    return (
        <div className="feature-item">
          <Helmet>
          <title>Argent Bank - Error</title>
          </Helmet>
        <img src={error} alt="Chat Icon" className="feature-icon-error" />
        <h1 className="feature-item-title"> This page doesn't exist!</h1>
      </div>
    )
}

export default Error;