import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa';

const login = () => {
  return (
    <div className='container'>
      <form action="">
        <h1>Acesse o sistema</h1>
        <div>
          <input type="text" placeholder='E-mail' />
          <FaUser className='icon' />
        </div>

        <div>
          <input type="password" placeholder='Senha' />
          <FaLock className='icon' />
        </div>

        <div className="recall-forget">
          <label htmlFor="">
            <input type="checkbox" /> Lembre de mim
          </label>
          <a href="#">Esqueçeu a senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
          <p>Não tem  uma conta? <a href="#">Registre-se</a></p>
        </div>
      </form>
    </div>
  )
}

export default login

