import logo from '../assets/logo.png'
import capa2 from '../assets/capa2.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

//TelaCadastro

export const ip ='127.0.0.1:8000'

function Cadastro() {
    //Funções de Navegação/Rotas
    let navigate = useNavigate()

    const goHome = () => {
        navigate("/");
    } 

    const goPedirCartao = () => {
        navigate("/PedirCartao");
    }    

    //Estados
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cep, setCep] = useState('');
    const [camposValidados, setCamposValidados] = useState(false)

    //useEffect paa verificação de campos vazios 
    useEffect(() => {
        if (email == "" || senha == "" || cpf == "" || dataNascimento == "" || cep == "" || nome == ""){
            setCamposValidados(false)
        }else{
            setCamposValidados(true)
        }})
      
        //Função para vaerificar dados digitados corretamente e validar no DJANGO.
        const btnCadastro = async (event) => {
            event.preventDefault();
        const infoDoCadastro = { nome_cliente: nome, cpf_cnpj: cpf, email: email, data_nascimento_criacao: dataNascimento, password: senha, cep: cep }

        //Verificação de campos se foi escrito corretamente e etc (Não esta funcionando direito, quando coloco ele desabilita o button)
        // if (senha.length < 8) {
        //     alert('A senha deve ser maior que 8 caracteres')
        //     return
        // }
        // else if (!email.includes("@") || !email.includes(".com")) {
        //     alert('O e-mail é inválido')
        //     return
        // } else if (cpf.length != 11) {
        //     alert('O CPF é inválido')
        //     return
        // } else if (cep.length != 8) {
        //     alert('O CEP é inválido')
        //     return
        // } else if (nome.length === 0) {
        //     alert('Digite seu nome')
        //     return
        // } else if(dataNascimento.length != 10 || !dataNascimento.includes("-")){
        //     alert("Escreva a data de nascimento em um formato válido: AAAA-MM-DD")
        // }

        try {
            ///POST no django com as informaçaões do Cadastro
            //Caso certo alert com mensagem e redirecionamento para PedirCartão de C´rédito
            //Se erro ele da o alert de acordo com o erro do status
            axios.post(`http://${ip}/auth/users/`, infoDoCadastro);

            alert("Você foi cadastrado com sucesso e sua conta do banco foi criada. Aproveite!");
            goPedirCartao()
            
        } catch (error) {
            //Verifica o erro 
            if (error.response.status === 401) {
                alert("Esse E-mail já pertence a um usuário...")
            } else {
                alert("Não foi possível realizar o cadastro!")
            }
        }

    }

    return (
        //Inputs do  campo e estilos da pagina
        <div className="App">
            <img className='w-16 justify-center' onClick={() => goHome()}  src={logo} />
            <img className='w-full mt-2' src={capa2} />
        <h1 className='mt-20 font-bold text-black text-center text-3xl '>
        Abra sua conta digital e tenha o melhor rendimento do Brasil
        </h1>
        <div className='justify-center  place-content-center flex '>
        
        <form >
        <label>
            <p className='opacity-75 text-center mt-5' value={nome} onChange={(e) => setNome(e.target.value)}>Nome</p>
            <input className='m-2 border-violet-950 border-solid border rounded-full focus:outline-none' type="text" name="nome" />
            <p className='opacity-75'  value={cpf} onChange={(e) => setCpf(e.target.value)}>Cpf</p>
            <input className='m-2 border-violet-950 border-solid border rounded-full focus:outline-none' type="number" name="cpf" />
            <p className='opacity-75'  value={email} onChange={(e) => setEmail(e.target.value)}>Email</p>
            <input className='m-2 border-violet-950 border-solid border rounded-full focus:outline-none' type="email" name="email" />
            <p className='opacity-75'  value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)}>Data de Nascimento</p>
            <input className='m-2 border-violet-950 border-solid border rounded-full focus:outline-none' type="date" name="dataNascimento" />
            <p className='opacity-75'  type="senha" value={senha}
            >Senha</p>
            <input   className='m2 border-violet-950 border-solid border rounded-full focus:outline-none' type="password" name="senha" />
        </label>
        <div>
        {/* Botão com a funão da btnCadastro */}
        <button  onClick={btnCadastro} className="bg-violet-950 rounded-full w-40 m-5">
        <p className="text-white font-semibold">Cadastrar</p>
        </button>
        </div>
        </form>
      
        </div>
        </div>   
  );
}

export default Cadastro;