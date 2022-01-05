import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer'
import AboutUs from './Component/AboutUs/AboutUs'
import Gallery from './Component/Gallery/Gallery'
import Faq from './Component/Faq/Faq'
import ContactUs from './Component/ContactUs/ContactUS'
import Instractors from './Component/Instractor/Instractors';
import Blogs from './Component/Blogs/Blogs';
import Login from './Component/LogIn/Login/Login';
import Registration from './Component/LogIn/Registration/Registration';
import AuthProvider from './Contex/AuthProvider';
import Home from './Component/Home/Home/Home';
import Courses from './Component/Courses/Courses';
import NotFound from './Component/NotFound/NotFound';
import Event from './Component/Event/Event';

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

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="/faq">
              <Faq></Faq>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/events">
              <Event></Event>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/instructor">
              <Instractors></Instractors>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>

            
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>

            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
