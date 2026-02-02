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
        {/* 1. Ruta de Autenticación */}
        <Route path="/login" element={<Login />} />

        {/* 2. Rutas de Registro (Envueltas en el Provider para no perder datos) */}
        <Route 
          path="/register/*" 
          element={
            <RegisterProvider>
              <Routes>
                <Route path="step-1" element={<RegisterStep1 />} />
                <Route path="step-2" element={<RegisterStep2 />} />
                <Route path="success" element={<RegisterStep3 />} />
                {/* Redirección interna si entran solo a /register */}
                <Route path="" element={<Navigate to="step-1" replace />} />
              </Routes>
            </RegisterProvider>
          } 
        />

        {/* 3. Ruta del Panel Principal (Post-Login) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 4. Redirección por defecto al entrar a la página */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* 5. Manejo de Error 404 */}
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center h-screen bg-slate-50 dark:bg-slate-900">
            <h1 className="text-4xl font-bold text-primary">404</h1>
            <p className="text-slate-500">Página no encontrada</p>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;