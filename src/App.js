import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
<Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/*         <Route path="/beers" element={<AllBeers beers={beers} />} />
        <Route path="/beers/:beerId" element={<SingleBeer beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} /> */}
      </Routes>
    </div>
  );
}

export default App;
