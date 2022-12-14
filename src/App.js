import  OurCalendar  from "./components/Calendar";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Movies from "./components/Movies";
import Recipes from "./components/Recipes";
import Travel from "./components/Travel";
import Watchlist from "./components/Watchlist";
import Login from "./components/Login";
import Logout from "./components/Logout";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/movies" element={<Movies/>} />
          <Route  path="/recipes" element={<Recipes/>} />
          <Route  path="/travel" element={<Travel/>} />
          <Route  path="/calendar" element={<OurCalendar/>} />
          <Route  path="/watchlist" element={<Watchlist/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/logout" element={<Logout/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
