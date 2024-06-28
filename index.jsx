//pequeña libreria de funciones
// react-utils.js

// Función para validar un email
export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };
  
  // Función para formatear un número en moneda
  export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };
  
  // Función para generar un ID único
  export const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  