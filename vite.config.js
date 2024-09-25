import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
//import reactNativeSvg from 'vite-plugin-react-native-svg';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

const extensions = [
  ".web.tsx",
  ".tsx",
  ".web.ts",
  ".ts",
  ".web.jsx",
  ".jsx",
  ".web.js",
  ".js",
  ".css",
  ".json",
];

export default defineConfig({
  plugins: [
      react(), 
 //     reactNativeSvg(),
      reactRefresh(),
      svgrPlugin({
              svgrOptions: {
                icon: true,
              },
      })
  ],
  /*
  esbuild: {
    loader: 'jsx',
    include: '/src/*.js$/', // adjust this to the pattern match your files
    exclude: [],
  },
  */

  


   optimizeDeps: {
    force: true,
    include: ['react-native-vector-icons'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        
      },
      resolveExtensions: extensions,
    },
  },
  resolve: {
    alias:
     [
     // 'react-native': 'react-native-web',
    {
      find: /^react-native$/,
      replacement: 'react-native-web',
      
    },
    {
      find: 'react-native/Libraries/NewAppScreen',
      replacement: path.resolve(__dirname, 'src/customWebComponents/NewAppScreen.jsx'), // adjust as needed
    }
    
    ],
  },  
  
  server: {
    port: 5173 // Ensure the port matches your Vite server output
  }

  


});