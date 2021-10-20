
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Header from '../src/components/Header/Header';
import Services from '../src/components/Pages/Services/Services';
import Login from './components/Pages/Login/Login/Login';
import Notfound from './components/Pages/Notfound/Notfound';
import Home from './components/Pages/Home/Home';
import Contact from './components/Pages/Contact/Contact';
import About from './components/Pages/About/About';
import Doctors from './components/Pages/Doctors/Doctors';
import Footer from './components/Pages/Footer/Footer';
import SignUp from './components/Pages/SignUp/SignUp';
import AuthProvider from './components/Hooks/AuthProvider';
import PrivateRoute from './components/Pages/PrivateRoute/PrivateRoute';
import Appointment from './components/Pages/Appointment/Appointment';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
            <Header></Header>
         <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route exact path="/home">
             <Home></Home>
           </Route>
           <Route exact path="/services">
             <Services></Services>
           </Route>
           <PrivateRoute exact path="/appointment/:id">
             <Appointment></Appointment>
           </PrivateRoute>
           <Route exact path="/about">
             <About></About>
           </Route>
           <PrivateRoute exact path="/doctors">
             <Doctors></Doctors>
           </PrivateRoute>
           <Route exact path="/contact">
             <Contact></Contact>
           </Route>
           <Route exact path="/login">
             <Login></Login>
           </Route>
           <Route exact path="/signup">
             <SignUp></SignUp>
           </Route>
           <Route exact path="*">
           <Notfound></Notfound>
           </Route>
         </Switch>
         <Footer></Footer>
       </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
