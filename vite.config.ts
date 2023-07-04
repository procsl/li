import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        // 指定dev sever的端口号，默认为5173
        port: 3000,
        open: '/'
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },

    plugins: [react()],
})
