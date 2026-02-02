import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-[#ffffff] dark:bg-[#101822] text-[#0d131b] dark:text-white font-display overflow-x-hidden w-full min-h-screen flex flex-col">
      
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#101822]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="px-5 pt-12 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="rounded-full size-12 ring-2 ring-[#136dec]/10 bg-slate-200 flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-slate-400">person</span>
              </div>
              <span className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-[#101822] rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold leading-tight tracking-tight">Hola, Roberto</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Bienvenido de nuevo</p>
            </div>
          </div>
          <button className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
            <span className="material-symbols-outlined text-slate-700 dark:text-slate-300 group-hover:text-[#136dec]">notifications</span>
            <span className="absolute top-2 right-2 flex size-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2.5 bg-red-500 border-2 border-white dark:border-[#101822]"></span>
            </span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-8 pb-32 px-5 pt-6">
        
        {/* Hero Action Card */}
        <section>
          <div className="w-full relative overflow-hidden rounded-2xl bg-white dark:bg-[#1c2633] shadow-lg border border-slate-100 dark:border-slate-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#136dec]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="relative z-10 p-6 flex flex-col gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center p-3 bg-[#136dec]/10 rounded-xl text-[#136dec] mb-1">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <h1 className="text-2xl font-bold leading-tight">¿Listo para enseñar algo nuevo?</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  Organiza tu material, gestiona estudiantes y crea un plan de estudios en pocos pasos.
                </p>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-[#136dec] hover:bg-blue-600 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95">
                <span className="material-symbols-outlined text-[20px]">add_circle</span>
                <span>Crear nuevo curso</span>
              </button>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-[#1c2633] p-4 rounded-xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-start justify-between mb-2">
              <span className="material-symbols-outlined text-[#136dec] bg-slate-50 dark:bg-[#101822] p-1.5 rounded-lg text-xl">group</span>
              <span className="text-[10px] font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">+12%</span>
            </div>
            <p className="text-2xl font-bold">42</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Total Alumnos</p>
          </div>
          <div className="bg-white dark:bg-[#1c2633] p-4 rounded-xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-start justify-between mb-2">
              <span className="material-symbols-outlined text-orange-500 bg-slate-50 dark:bg-[#101822] p-1.5 rounded-lg text-xl">assignment</span>
              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">Hoy</span>
            </div>
            <p className="text-2xl font-bold">5</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Tareas Pendientes</p>
          </div>
        </section>

        {/* Courses Section */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold">Mis Cursos</h3>
            <button className="text-sm font-medium text-[#136dec] flex items-center gap-1">
              Ver todos <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { title: "Matemáticas Avanzadas", students: 24, days: "Lun - Mie", status: "Activo", color: "blue" },
              { title: "Historia del Arte", students: 18, days: "Mar - Jue", status: "En curso", color: "green" }
            ].map((course, idx) => (
              <div key={idx} className="bg-white dark:bg-[#1c2633] p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex gap-4 items-center">
                <div className="w-16 h-16 shrink-0 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-400">image</span>
                </div>
                <div className="flex-1 min-w-0 pr-2">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider bg-blue-100 dark:bg-blue-900/30 text-blue-700">
                      {course.status}
                    </span>
                    <span className="material-symbols-outlined text-slate-400 text-[20px]">more_horiz</span>
                  </div>
                  <h4 className="text-base font-semibold truncate mb-1">{course.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">person</span> {course.students}
                    </span>
                    <span>{course.days}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#101822]/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 pb-6 pt-2">
        <div className="flex justify-around items-center px-2">
          <button className="flex flex-col items-center gap-1 text-[#136dec] w-16">
            <span className="material-symbols-outlined text-[26px]" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
            <span className="text-[10px] font-medium">Inicio</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 w-16">
            <span className="material-symbols-outlined text-[26px]">book_2</span>
            <span className="text-[10px] font-medium">Clases</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 w-16">
            <span className="material-symbols-outlined text-[26px]">group</span>
            <span className="text-[10px] font-medium">Alumnos</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 w-16">
            <span className="material-symbols-outlined text-[26px]">settings</span>
            <span className="text-[10px] font-medium">Ajustes</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;