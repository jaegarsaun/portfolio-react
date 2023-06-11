
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Component imports
import Home from './pages/Home';
import LearnMore from './pages/LearnMore';


function App() {
  return (

    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
