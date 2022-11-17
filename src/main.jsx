import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'

import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />  {/*Este archivo renderiza la app entera, en este caso el componente padre GifExpertApp*/}
  </React.StrictMode>
)
