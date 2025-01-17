import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permet d'accepter les connexions sur toutes les interfaces réseau
    port: 5173,        // Le port sur lequel le serveur écoute
  },
});
