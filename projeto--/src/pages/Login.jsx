import logo from '../assets/logo.png'
import capa2 from '../assets/capa2.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Login() {
  //Rostas
  let navigate = useNavigate()

  const goCadastro = () => {
    navigate("/Cadastro");
  }

  const goHome = () => {
    navigate("/");
  }

  const goPedirCartao = () => {
    navigate("/PedirCartao");
  }

  //Criando estados
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  //Função Logar exerce a função de alert se a conta está bloqueada
  //Posta as informações ao django/backend
  const logar = async (evt) => {
    evt.preventDefault();
  
    if (isBlocked) {
      alert('Sua conta foi bloqueada devido a múltiplas tentativas de login malsucedidas.');
      return;
    }
  
    const infoDoLogin = { email: email, password: password };
  
    //Post com os dados do Django, utilizando o localStorage e o token 
    try {
      const response = await axios.post(`http://127.0.0.1:8000/auth/jwt/create`, infoDoLogin);
      localStorage.setItem('token', response.data.auth_token);
      goPedirCartao();
      //Redireciona para pagina pedir cartão
    } catch (err) {
      //Verificando e alertando os erros
      if (err.response && err.response.status === 401) {
        alert('E-mail ou senha incorretos');
  
        setLoginAttempts(loginAttempts + 1);
        //Contangem para alertar sobre as tentativas de login, se tentar +3 vezes
        //Bloqueia o usuario 
  
        if (loginAttempts + 1 === 3) {
          setIsBlocked(true);
        }
      } else {
        //Mostrando o erro ao usuario
        console.log('Não foi possível fazer o login');
        alert(`Não foi possível logar, erro: ${err.response ? err.response.status : 'desconhecido'}`);
      }
    }
  };
  
  return (
    //Divs, buttons, estilos e etc da pagina Login
    <div className="App">
      <img className='w-16 justify-center ' onClick={goHome} src={logo} />
      <img className='w-full mt-2' src={capa2} />
      <h1 className='m-20 font-bold text-black text-center text-3xl '>
        Conta digital prática e sem custos.
      </h1>
      <div className='justify-center  place-content-center flex '>
        <form>
          <label>
            <p className='opacity-75 text-center'>Email</p>
            <input placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} className='m-2 border-violet-950 border-solid border rounded-full focus:outline-none' type="email" name="email" />
            <p className='opacity-75'>Senha</p>
            <input className='m-2 border-violet-950 border-solid border rounded-full focus:outline-none' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <div>
          <button className="bg-violet-950 rounded-full w-40 m-5 " type="submit" disabled={isBlocked}>
          <p onClick={logar} className="text-white font-semibold">Login</p>
        </button>
          </div>
        </form>
      </div>
      <button className="bg-violet-950 rounded-full w-40 m-5 ">
        <p onClick={goCadastro} className="text-white font-semibold">Cadastrar</p>
      </button>
    </div>
  );
}

export default Login;
