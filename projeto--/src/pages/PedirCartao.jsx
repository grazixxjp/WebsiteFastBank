import logo from '../assets/logo.png'
import cartao2 from '../assets/cartao2.png'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

//Tela PedirCartão que verifica sua renda.

function PedirCartao(navigation) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [income, setIncome] = useState('');
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const navigate = useNavigate();

  //Função chamada ao clicar no botão "Continuar"
  const handleIncomeSubmit = () => {
    const parsedIncome = parseInt(income);

     //Verifica se a renda é menor ou igual a 1000
    if (parsedIncome <= 1000) {
      alert('Sua renda é muito baixa para a solicitação de um cartão de crédito!');
           navigation.navigate("/Cadastro");
        } else {
            navigate("/Feito");
        }
  };

  // Verifica se o formulário esta válido e sem nenhum campo nulo 
  const isFormValid = income !== '' && nome !== '' && contato !== '';

  useEffect(() => {
    console.log(cep.length);
  }, [cep]);

  
  //Função chamada ao digitar o CEP
  const digitouCEP = (cep) => {
    setCep(cep);
    if (cep.length === 8) {
      buscarCep(cep);
    }
  };

   //Função para buscar o endereço do CEP utilizando a API ViaCEP
  const buscarCep = (cep) => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
      const enderecoCompleto = `${res.data.logradouro} - ${res.data.localidade}`;
      setEndereco(enderecoCompleto);
    });
  };

  return (
    //Diz raiz, com estilos, navigate e etc...
    <div className="App">
      <Link to="/">
        <img className="w-16 justify-center" src={logo} />
      </Link>
      <h1 className="font-bold text-black text-center text-4xl ">
        Cartão de crédito com anuidade zero.
        <div className="justify-center m-20 flex">
          <img className="w-44" src={cartao2} />
        </div>
      </h1>
      <h1 className="text-black text-center text-xl">
        Adicione suas informações para avaliarmos sua solicitação.
      </h1>

      <div className="justify-center place-content-center flex">
        <form>
          <label>
          <p className="opacity-75 text-center mt-14">Nome</p>
            <input
              placeholder="Nome"
              className="m-5 border-violet-950 border-solid border rounded-full focus:outline-none"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              name="nome"
            />

            <p className="opacity-75 text-center  ">CEP</p>
            <input
              placeholder="Cep"
              maxLength={8}
              value={cep}
              onChange={(e) => digitouCEP(e.target.value)}
              className="m-5 border-violet-950 border-solid border rounded-full focus:outline-none"
              type="number"
              name="cep"
            />

            <p className="opacity-75 text-center ">Endereço</p>
            <input
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              className="m-5 border-violet-950 border-solid border rounded-full focus:outline-none"
              name="endereco"
            />

          <p className="opacity-75 text-center ">Renda</p>
            <input
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Renda"
              maxLength={8}
              className="m-5 border-violet-950 border-solid border rounded-full focus:outline-none"
              type="number"
              name="renda"
            />

            <p className="opacity-75 text-center ">Contato</p>
            <input
              placeholder="Contato"
              value={contato}
              onChange={(e) => setContato(e.target.value)}
              className="m-5 border-violet-950 border-solid border rounded-full focus:outline-none"
              type="tel"
              name="telefone"
            />
          </label>
        </form>
      </div>
      {/* Faz a contagem de tentativas de Login, e valida os campos. */}
           <button  onClick={handleIncomeSubmit} className="bg-violet-950 rounded-full w-40 " disabled={!isFormValid}><p className=" text-white font-semibold">Continuar</p></button>
        </div>
  );
}

export default PedirCartao;