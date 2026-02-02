import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

   

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  // Aquí simularíamos la validación del usuario
  console.log("Iniciando sesión...");
  
  // Redirigimos al Dashboard
  navigate('/dashboard');
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7f8] dark:bg-[#101822] p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden relative">
        
        {/* Decoración superior */}
        <div className="h-2 w-full bg-[#136dec]"></div>

        <div className="px-6 py-8 md:px-8 md:py-10 flex flex-col items-center">
          
          {/* Logo Section */}
          <div className="mb-6">
            <div className="w-20 h-20 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
              <span className="material-symbols-outlined text-[#136dec] text-4xl">school</span>
            </div>
          </div>

          {/* Header Text */}
          <div className="text-center mb-8">
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight mb-2">Bienvenido</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Ingresa a tu plataforma de gestión académica</p>
          </div>

          {/* Form */}
          <form className="w-full space-y-5" onSubmit={handleSubmit}>
            
            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">
                Correo Electrónico
              </label>
              <div className="relative">
                <input 
                  className="block w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-[#136dec] focus:ring-[#136dec] sm:text-sm h-12 px-4 transition-colors"
                  id="email" 
                  type="email"
                  placeholder="usuario@instituto.edu" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="password">
                Contraseña
              </label>
              <div className="relative">
                <input 
                  className="block w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-[#136dec] focus:ring-[#136dec] sm:text-sm h-12 px-4 pr-10 transition-colors"
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  placeholder="********" 
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 focus:outline-none"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <input 
                  className="h-4 w-4 rounded border-slate-300 text-[#136dec] focus:ring-[#136dec] dark:border-slate-600 dark:bg-slate-700"
                  id="rememberMe" 
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label className="ml-2 block text-sm text-slate-600 dark:text-slate-400" htmlFor="rememberMe">
                  Recordarme
                </label>
              </div>
              <div className="text-sm">
                <a className="font-medium text-[#136dec] hover:text-blue-700 transition-colors" href="#">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#136dec] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#136dec] transition-all duration-200 mt-6"
              type="submit"
              onClick={handleSubmit}
            >
              Iniciar Sesión
            </button>
          </form>

          {/* Footer Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              ¿No tienes cuenta? <a className="font-semibold text-[#136dec] hover:text-blue-700 transition-colors" href="http://localhost:5173/register/step-1">Regístrate</a>
            </p>
          </div>
        </div>
        
        {/* Subtle bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default Login;