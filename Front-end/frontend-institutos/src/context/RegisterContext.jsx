import React, { createContext, useState, useContext, useEffect } from 'react';

const RegisterContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const RegisterProvider = ({ children }) => {
  // Intentamos cargar datos previos del localStorage al iniciar
  // Dentro de RegisterContext.jsx, el estado inicial debería verse así:
const [registerData, setRegisterData] = useState(() => {
  const savedData = localStorage.getItem('temp_register_data');
  return savedData ? JSON.parse(savedData) : {
    country: '',      // Cambiado
    role: 'teacher',  // Cambiado (valor por defecto)
    fullName: '',
    email: '',
    phoneCode: '+52',
    phone: '',
    roleInInstitute: '' // Para el cargo del paso 2
  };
});

  // Cada vez que los datos cambian, los guardamos en localStorage
  useEffect(() => {
    localStorage.setItem('temp_register_data', JSON.stringify(registerData));
  }, [registerData]);

  const updateData = (newData) => {
    setRegisterData(prev => ({ ...prev, ...newData }));
  };

  // Función para limpiar los datos al terminar el registro
  const clearRegistration = () => {
    localStorage.removeItem('temp_register_data');
  };

  return (
    <RegisterContext.Provider value={{ registerData, updateData, clearRegistration }}>
      {children}
    </RegisterContext.Provider>
  );
};

// Hook personalizado
// eslint-disable-next-line react-refresh/only-export-components
export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("useRegister debe usarse dentro de un RegisterProvider");
  }
  return context;
};