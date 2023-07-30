import { Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import NavBar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";

function App() 
{
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
