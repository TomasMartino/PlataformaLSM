import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import RegisterStep1 from './components/RegisterStep1';
import RegisterStep2 from './components/RegisterStep2';
import RegisterStep3 from './components/RegisterStep3';
import Dashboard from './components/Dashboard';
import { RegisterProvider } from './context/RegisterContext';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas normales */}
        <Route path="/login" element={<Login />} />
        
        {/* RUTAS DE REGISTRO: Envolvemos todas las rutas de registro
            dentro de una sola ruta padre para aplicar el Provider */}
        <Route 
          path="/register/*" 
          element={
            <RegisterProvider>
              <Routes>
                <Route path="step-1" element={<RegisterStep1 />} />
                <Route path="step-2" element={<RegisterStep2 />} />
                <Route path="success" element={<RegisterStep3 />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </RegisterProvider>
          } 
        />

        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;