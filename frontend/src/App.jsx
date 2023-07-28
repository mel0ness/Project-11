import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import SignIn from './Pages/Signin';
import Error from './Pages/Error';
import User from './Pages/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactHelmet from './Components/Helmet/Helmet';

const App = () => {
    return (
        <Router>
      <ReactHelmet/>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/user" element ={<User/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </Router>
    )
}

export default App;