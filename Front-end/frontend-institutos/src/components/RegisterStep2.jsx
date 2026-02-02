import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../context/RegisterContext';

const RegisterStep2 = () => {
  const navigate = useNavigate();
  const { updateData } = useRegister();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCode: '+52',
    phone: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFinish = (e) => {
  e.preventDefault();
  updateData(formData);  
  navigate('/register/success');
};

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-[#f6f7f8] dark:bg-[#101822] sm:shadow-xl sm:my-8 sm:rounded-2xl border-x-0 sm:border border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      {/* TopAppBar */}
      <header className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-[#f6f7f8] dark:bg-[#101822]">
        <button 
          onClick={() => navigate(-1)}
          className="text-[#0d131b] dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-[#0d131b] dark:text-white text-lg font-bold leading-tight flex-1 text-center pr-12">Registro</h2>
      </header>

      {/* ProgressBar */}
      <div className="flex flex-col gap-3 px-6 pt-2 pb-4">
        <div className="flex gap-6 justify-between items-center">
          <p className="text-[#0d131b] dark:text-white text-sm font-medium">Paso 2 de 2</p>
          <span className="text-xs text-slate-500 font-medium">100%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <div className="h-full rounded-full bg-[#136dec]" style={{ width: '100%' }}></div>
        </div>
      </div>

      {/* Content Scroll Area */}
      <div className="flex-1 overflow-y-auto pb-40">
        <div className="px-6 pt-2 pb-1">
          <h1 className="text-[#0d131b] dark:text-white text-[28px] font-bold leading-tight">Datos del Administrador</h1>
        </div>
        <div className="px-6 pb-6">
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Ingresa la información de la persona encargada de gestionar la plataforma educativa.
          </p>
        </div>

        {/* Form Fields */}
        <form className="flex flex-col gap-5 px-6" onSubmit={handleFinish}>
          
          {/* Input: Nombre completo */}
          <div className="flex flex-col w-full">
            <label className="text-[#0d131b] dark:text-white text-sm font-medium pb-2 ml-1">Nombre completo</label>
            <div className="relative">
              <input 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1c2632] text-[#0d131b] dark:text-white h-14 px-4 focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec] outline-none transition-all" 
                placeholder="Ej. María González" 
                type="text" 
                required
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">person</span>
            </div>
          </div>

          {/* Input: Correo profesional */}
          <div className="flex flex-col w-full">
            <label className="text-[#0d131b] dark:text-white text-sm font-medium pb-2 ml-1">Correo institucional</label>
            <div className="relative">
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1c2632] text-[#0d131b] dark:text-white h-14 px-4 focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec] outline-none transition-all" 
                placeholder="nombre@instituto.edu" 
                type="email" 
                required
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">mail</span>
            </div>
          </div>

          {/* Input: Teléfono */}
          <div className="flex flex-col w-full">
            <label className="text-[#0d131b] dark:text-white text-sm font-medium pb-2 ml-1">Número de teléfono</label>
            <div className="flex gap-3">
              <div className="relative w-24 shrink-0">
                <select 
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="w-full h-14 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1c2632] text-[#0d131b] dark:text-white px-3 focus:border-[#136dec] focus:ring-[#136dec]/20 appearance-none outline-none"
                >
                  <option value="+52">+52</option>
                  <option value="+57">+57</option>
                  <option value="+1">+1</option>
                  <option value="+34">+34</option>
                  <option value="+54">+54</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-[18px] pointer-events-none">expand_more</span>
              </div>
              <input 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1c2632] text-[#0d131b] dark:text-white h-14 px-4 focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec] outline-none transition-all" 
                placeholder="55 1234 5678" 
                type="tel" 
                required
              />
            </div>
          </div>

          {/* Input: Cargo */}
          <div className="flex flex-col w-full">
            <label className="text-[#0d131b] dark:text-white text-sm font-medium pb-2 ml-1">Cargo</label>
            <div className="relative">
              <input 
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1c2632] text-[#0d131b] dark:text-white h-14 px-4 focus:ring-2 focus:ring-[#136dec]/20 focus:border-[#136dec] outline-none transition-all" 
                placeholder="Ej. Rector, Coordinador Académico" 
                type="text" 
                required
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">work</span>
            </div>
          </div>

          {/* Botón de acción embebido en el scroll para mobile o sticky footer */}
          <div className="pt-6">
             <button 
              type="submit"
              className="flex w-full items-center justify-center rounded-xl bg-[#136dec] hover:bg-[#0e5bc4] text-white h-14 px-6 text-base font-semibold shadow-lg shadow-[#136dec]/20 active:scale-[0.98] transition-all"
            >
              Finalizar Registro
            </button>
            <button 
              type="button"
              onClick={() => navigate(-1)}
              className="flex w-full items-center justify-center text-slate-500 hover:text-[#0d131b] dark:text-slate-400 dark:hover:text-white h-12 text-sm font-medium transition-colors mt-2"
            >
              Volver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStep2;