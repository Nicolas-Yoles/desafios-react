import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usuarios from './components/Usuarios'

function App() {
  const [count, setCount] = useState(0)
  const [habilitado, setHabilitado] = useState(false);

  // const bandera = true;

  // const habilitar = () => {
  //   habilitado ? setHabilitado(false) : setHabilitado(true);
  // }

  return (
    <>
      <button onClick={() => setHabilitado(!habilitado)}>Consultar</button>
      <Usuarios param={habilitado}/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
