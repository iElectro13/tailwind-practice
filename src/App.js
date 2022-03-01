import Navbar from './components/Navbar';
import { useState } from 'react'

function App() {

  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }

  const reiniciar = () => {
    setContador(0)
  }

  return (
    <div className="md:bg-red-500 lg:bg-red-800 w-full h-screen">
      <Navbar />
      <div className='flex flex-col items-center justify-center'>

        <span>{contador}</span>
        <div className='flex gap-1'>

          <button className='p-2 bg-slate-300' onClick={restar}>Restar</button>
          <button className='p-2 bg-slate-300' onClick={sumar}>Sumar</button>
          <button className='p-2 bg-slate-300' onClick={reiniciar}>Reiniciar</button>

        </div>
      </div>

    </div>
  );
}

export default App;
