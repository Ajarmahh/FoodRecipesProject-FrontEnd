export const getUserRole = () => {
    return localStorage.getItem('role');
   };
export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
   };