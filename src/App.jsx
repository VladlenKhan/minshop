import { Routes, Route } from 'react-router-dom';
import { Home, Category , CardOpen } from './pages'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} /> 
      <Route path="/cardopen" element={<CardOpen />} /> 
    </Routes>
  );
}


export default App;
