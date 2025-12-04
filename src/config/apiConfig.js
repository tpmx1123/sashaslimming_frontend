// API Configuration using environment variables
// In Vite, environment variables must be prefixed with VITE_
// Production: https://sashaslimming.com/api
// Development: http://localhost:8081/api
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ;

export default API_BASE_URL;

