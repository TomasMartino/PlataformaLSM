import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRegister } from '../context/RegisterContext';

const RegisterStep1 = () => {
  const navigate = useNavigate();
  const { registerData, updateData } = useRegister();

  // Estado local sincronizado con el contexto
  const [formData, setFormData] = useState({
    country: registerData.country || '',
    role: registerData.role || 'teacher'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!formData.country) {
      alert("Por favor selecciona un país");
      return;
    }
    updateData(formData);
    navigate('/register/step-2');
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-[#f6f7f8] dark:bg-[#101822] overflow-x-hidden transition-colors duration-300">
      
      {/* Header */}
      <div className="flex items-center px-4 py-3 justify-between sticky top-0 z-10 bg-[#f6f7f8]/95 dark:bg-[#101822]/95 backdrop-blur-sm">
        <button 
          onClick={() => navigate('/login')}
          className="text-[#0d131b] dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-[#0d131b] dark:text-white text-base font-bold flex-1 text-center pr-10">Registro</h2>
      </div>

      {/* Progress Bar */}
      <div className="flex flex-col gap-2 px-6 pt-2 pb-6">
        <div className="flex justify-between items-end mb-1">
          <span className="text-[#136dec] text-xs font-bold tracking-widest uppercase">Paso 1 de 3</span>
          <span className="text-slate-400 dark:text-slate-500 text-xs font-medium">33%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <div 
            className="h-full rounded-full bg-[#136dec] shadow-[0_0_10px_rgba(19,109,236,0.5)] transition-all duration-700" 
            style={{ width: '33%' }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 flex flex-col gap-8 pb-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#0d131b] dark:text-white text-[28px] leading-tight font-bold tracking-tight">
            Selecciona tu Perfil
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed">
            Elige tu rol y ubicación para personalizar tu experiencia en la plataforma.
          </p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleNext}>
          {/* Country Selector */}
          <div className="flex flex-col gap-2 group">
            <label className="text-[#0d131b] dark:text-gray-300 text-sm font-semibold ml-1">
              País
            </label>
            <div className="relative">
              <select 
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0d131b] dark:text-white h-14 px-4 pl-12 pr-10 focus:border-[#136dec] focus:ring-2 focus:ring-[#136dec]/20 appearance-none outline-none shadow-sm cursor-pointer transition-all"
                required
              >
                <option value="" disabled>Selecciona tu país</option>
                <option value="mx">México</option>
                <option value="co">Colombia</option>
                <option value="es">España</option>
                <option value="ar">Argentina</option>
                <option value="us">Estados Unidos</option>
                <option value="cl">Chile</option>
                <option value="pe">Perú</option>
              </select>
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 group-focus-within:text-[#136dec]">
                <span className="material-symbols-outlined">public</span>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>

          {/* Role Selection */}
          <div className="flex flex-col gap-3">
            <label className="text-[#0d131b] dark:text-gray-300 text-sm font-semibold ml-1">
              ¿Cuál es tu rol?
            </label>
            <div className="grid grid-cols-2 gap-4">
              {/* Profesor */}
              <label className="cursor-pointer group relative">
                <input 
                  type="radio" 
                  name="role" 
                  value="teacher" 
                  className="peer sr-only"
                  checked={formData.role === 'teacher'}
                  onChange={handleChange}
                />
                <div className="h-full flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 transition-all peer-checked:border-[#136dec] peer-checked:bg-[#136dec]/5 dark:peer-checked:bg-[#136dec]/20 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 peer-checked:bg-[#136dec] peer-checked:text-white transition-colors">
                    <span className="material-symbols-outlined">cast_for_education</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-sm text-[#0d131b] dark:text-white mb-0.5">Soy Profesor</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Docente</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-[#136dec] transition-all scale-75 peer-checked:scale-100">
                  <span className="material-symbols-outlined text-[22px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                </div>
              </label>

              {/* Alumno */}
              <label className="cursor-pointer group relative">
                <input 
                  type="radio" 
                  name="role" 
                  value="student" 
                  className="peer sr-only"
                  checked={formData.role === 'student'}
                  onChange={handleChange}
                />
                <div className="h-full flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 transition-all peer-checked:border-[#136dec] peer-checked:bg-[#136dec]/5 dark:peer-checked:bg-[#136dec]/20 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 peer-checked:bg-[#136dec] peer-checked:text-white transition-colors">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-sm text-[#0d131b] dark:text-white mb-0.5">Soy Alumno</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Estudiante</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-[#136dec] transition-all scale-75 peer-checked:scale-100">
                  <span className="material-symbols-outlined text-[22px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                </div>
              </label>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-auto pt-10">
            <button 
              type="submit"
              className="w-full rounded-xl bg-[#136dec] text-white h-14 text-base font-semibold shadow-lg shadow-[#136dec]/30 hover:bg-blue-600 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              Siguiente
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                ¿Ya tienes cuenta? 
                <Link to="/login" className="text-[#136dec] font-bold hover:underline ml-1">Inicia sesión</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStep1;