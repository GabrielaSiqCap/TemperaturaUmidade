import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  port: 3000, //Porta do servidor
  host: true, //Habita o acesso externo
  open: true, //Abre o navegador automaticamente
  },
})
