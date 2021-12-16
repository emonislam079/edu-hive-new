import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/instructor" element={<Instractors />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
