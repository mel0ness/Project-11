import "../src/Style/Utils/entry.scss"
import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import SignIn from './Pages/Signin';
import Error from './Pages/Error';
import User from './Pages/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactHelmet from './Components/Helmet/Helmet';
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./Utils/store"
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const App = () => {

let persistore = persistStore(store);
    return (
      <Provider store={store}>
<PersistGate persistor={persistore}>
      <HelmetProvider>
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
    </HelmetProvider></PersistGate></Provider>
    )
}

export default App;