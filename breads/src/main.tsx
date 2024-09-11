import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguretion.json';
Amplify.configure(amplifyconfig);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
