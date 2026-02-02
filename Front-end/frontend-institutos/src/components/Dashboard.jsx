import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-[#ffffff] dark:bg-[#101822] text-[#0d131b] dark:text-white font-display w-full min-h-screen flex flex-col">
      
      {/* Header - Ahora ocupa todo el ancho pero centra el contenido */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#101822]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="rounded-full size-12 ring-2 ring-[#136dec]/10 bg-slate-200 flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-slate-400">person</span>
              </div>
              <span className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-[#101822] rounded-full"></span>
            </div>
            <div>
              <h2 className="text-xl font-bold leading-tight">Hola, Roberto</h2>
              <p className="text-slate-500 text-xs font-medium">Panel de Gestión Académica</p>
            </div>
          </div>

          {/* Buscador visible solo en PC */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input 
                type="text" 
                placeholder="Buscar cursos, alumnos..." 
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2 pl-10 focus:ring-2 focus:ring-[#136dec]/20"
              />
            </div>
          </div>

          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">notifications</span>
          </button>
        </div>
      </header>

      {/* Main Content - max-w-7xl centra el contenido en PC sin limitar el fondo */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">
        
        {/* Sección Superior: Bienvenida + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          
          {/* Hero Card */}
          <section className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#136dec] to-[#0e5bc4] p-8 text-white shadow-xl shadow-blue-500/20">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold leading-tight">¿Listo para enseñar algo nuevo?</h1>
                  <p className="opacity-90 max-w-md text-sm md:text-base">
                    Organiza tus clases, sube material y haz el seguimiento de tus alumnos desde una sola plataforma.
                  </p>
                  <button className="bg-white text-[#136dec] font-bold py-3 px-6 rounded-xl hover:bg-opacity-90 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined">add_circle</span>
                    Crear nuevo curso
                  </button>
                </div>
                <div className="hidden md:block">
                    <span className="material-symbols-outlined text-[120px] opacity-20">auto_stories</span>
                </div>
              </div>
            </div>
          </section>

          {/* Stats quick view */}
          <section className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-white dark:bg-[#1c2633] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <span className="material-symbols-outlined text-green-600">group</span>
              </div>
              <div>
                <p className="text-2xl font-bold">42</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Alumnos</p>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1c2633] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                <span className="material-symbols-outlined text-orange-600">pending_actions</span>
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Pendientes</p>
              </div>
            </div>
          </section>
        </div>

        {/* Listado de Cursos - Estilo Grid de 3 columnas en PC */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Mis Cursos Activos</h3>
            <button className="text-[#136dec] font-semibold text-sm hover:underline">Ver historial completo</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, name: "Matemáticas I", alumnos: 24, cat: "Exactas" },
              { id: 2, name: "Física Cuántica", alumnos: 12, cat: "Ciencia" },
              { id: 3, name: "Programación Web", alumnos: 35, cat: "Tecnología" }
            ].map((curso) => (
              <div key={curso.id} className="bg-white dark:bg-[#1c2633] rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="h-40 bg-slate-100 dark:bg-slate-700 flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-5xl text-slate-300 group-hover:scale-110 transition-transform">school</span>
                  <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg text-[10px] font-bold text-primary uppercase">{curso.cat}</div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold mb-4">{curso.name}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="size-8 rounded-full border-2 border-white bg-slate-300"></div>
                      ))}
                      <div className="size-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold">+{curso.alumnos}</div>
                    </div>
                    <button className="p-2 bg-slate-50 dark:bg-[#101822] rounded-lg hover:text-[#136dec]">
                      <span className="material-symbols-outlined">settings</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Nav - Solo visible en móviles */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#101822] border-t border-slate-100 p-4 flex justify-around">
          <span className="material-symbols-outlined text-primary">home</span>
          <span className="material-symbols-outlined text-slate-400">book</span>
          <span className="material-symbols-outlined text-slate-400">group</span>
          <span className="material-symbols-outlined text-slate-400">settings</span>
      </nav>
    </div>
  );
};

export default Dashboard;