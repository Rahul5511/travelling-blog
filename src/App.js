import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Offering from "./pages/Offering";
import Loader from "./components/Loader";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/offer' element={<Offering/>}/>
      <Route path="/loader" element={<Loader/>}/>
    </Routes>
    </>
  );
}

export default App;
