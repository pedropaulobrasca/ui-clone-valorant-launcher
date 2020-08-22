import React from 'react';

// importing css
import './style.css';

// importing npm
import { FaQuestionCircle } from 'react-icons/fa';

// importing logo
import Logo from '../../assets/logo.svg';
import Button from '../../assets/button.svg';

const Login: React.FC = () => {
  return (
    <div className="login-main">
      <div className="login-wrapper">
        <div className="logo">
          <img src={Logo} alt="Valorant" />
          <FaQuestionCircle width={12} height={12} color="#B2B2B2" />
        </div>
        <div className="title">
          <span>Insira sua Conta Riot</span>
        </div>
        <div className="form-group">
          <label className="label-input" htmlFor="login">NOME DE USUÁRIO</label>
          <input type="text" id="login" className="input-text" />
        </div>
        <div className="form-group">
          <label className="label-input" htmlFor="senha">SENHA</label>
          <input type="password" id="senha" className="input-text" />
        </div>
        <div className="checkbox">
          <input type="checkbox" name="manter-login" id="manter-login" />
          <label htmlFor="manter-login">Manter login</label>
        </div>
        <div className="form-group">
          <a href="#" className="btn"><img src={Button} alt="Botão" /></a>
        </div>
        <div className="create-account">
          <p>CRIAR CONTA</p>
          <p>NÃO CONSEGUE INICIAR SESSÃO?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
