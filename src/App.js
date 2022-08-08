import { Routes, Route } from "react-router-dom";
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
