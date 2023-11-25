import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { NotFound } from './components/notfound';
import { Proveedores }  from './components/Proveedores';
import './App.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Proveedores" element={<Proveedores />} />
      <Route element={<NotFound />} path="/*" />
    </Routes>
  );
}
export default App;
