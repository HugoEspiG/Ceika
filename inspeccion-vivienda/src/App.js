import { Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import NavBar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() 
{
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
