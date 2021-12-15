import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Moe from './pages/moe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moe" element={<Moe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
