import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importación de Componentes
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import RegisterStep1 from './components/RegisterStep1';
import RegisterStep2 from './components/RegisterStep2';
import RegisterStep3 from './components/RegisterStep3';

// Importación del Contexto
import { RegisterProvider } from './context/RegisterContext';

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. RUTAS ENMASCARADAS (Estilo "Card" centrada en PC, Full en Móvil) */}
        <Route path="/login" element={
          <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
            <Login />
          </div>
        } />

        <Route 
          path="/register/*" 
          element={
            <RegisterProvider>
              {/* Este div centra los pasos del registro en PC para que no se deformen */}
              <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
                <Routes>
                  <Route path="step-1" element={<RegisterStep1 />} />
                  <Route path="step-2" element={<RegisterStep2 />} />
                  <Route path="success" element={<RegisterStep3 />} />
                  <Route path="" element={<Navigate to="step-1" replace />} />
                </Routes>
              </div>
            </RegisterProvider>
          } 
        />

        {/* 2. RUTA DASHBOARD (Full Width - Sin contenedores que limiten) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 3. Redirecciones y Errores */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center h-screen bg-slate-50 dark:bg-slate-900">
            <h1 className="text-4xl font-bold text-[#136dec]">404</h1>
            <p className="text-slate-500">Página no encontrada</p>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;