import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../context/RegisterContext'; // Importamos el contexto

const RegisterStep3 = () => {
  const navigate = useNavigate();
  const { registerData } = useRegister(); // Extraemos los datos guardados

  return (
    <div className="relative flex h-screen w-full flex-col justify-center items-center p-6 overflow-hidden bg-[#f6f7f8] dark:bg-[#101822]">
      
      {/* Fondo decorativo (Subtle Background Pattern) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50vh] h-[50vh] rounded-full bg-[#136dec]/10 blur-[80px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vh] h-[40vh] rounded-full bg-blue-300/20 blur-[60px]"></div>
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'radial-gradient(#136dec 0.5px, transparent 0.5px)', 
            backgroundSize: '24px 24px' 
          }}
        ></div>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md animate-in fade-in zoom-in duration-500">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-[#136dec]/10 dark:bg-[#136dec]/20 ring-1 ring-[#136dec]/20 shadow-lg shadow-[#136dec]/10">
            <span className="material-symbols-outlined text-[#136dec] text-[64px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48" }}>
              check_circle
            </span>
            <div className="absolute inset-0 rounded-full border border-[#136dec]/10 animate-pulse"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-2 text-center mb-10 w-full">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight px-4">
            ¡Registro Exitoso!
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed px-4 max-w-[320px] mx-auto">
            Hemos enviado un correo de verificación a: <br />
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {registerData.email || "admin@instituto.com"} 
            </span>
          </p>
        </div>

        {/* Primary Action */}
        <div className="w-full px-4 mb-6">
          <button 
            onClick={() => navigate('/login')}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-[#136dec] hover:bg-blue-700 transition-colors duration-200 text-white text-base font-bold shadow-md shadow-[#136dec]/20"
          >
            <span className="truncate">Ir al Dashboard</span>
            <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
          </button>
        </div>

        {/* Secondary Action */}
        <div className="text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
            ¿No recibiste el correo? 
            <button className="text-[#136dec] hover:text-blue-700 font-semibold underline decoration-2 decoration-transparent hover:decoration-[#136dec] underline-offset-4 transition-all ml-1">
              Reenviar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterStep3;