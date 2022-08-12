import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Watchlist from "./components/Watchlist";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/watchlist" element={<Watchlist/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
