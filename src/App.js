import  OurCalendar  from "./components/Calendar";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Travel from "./components/Travel";
import Login from "./components/Login";
import Logout from "./components/Logout";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/travel" element={<Travel/>} />
          <Route  path="/calendar" element={<OurCalendar/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/logout" element={<Logout/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
