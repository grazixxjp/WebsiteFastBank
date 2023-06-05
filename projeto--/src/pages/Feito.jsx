import { useNavigate } from 'react-router-dom'
//Tela para finalizamento de uma ação.

function Feito() {
    //Rotas
    let navigate = useNavigate()

    const goHome = () => {
        navigate("/");
    } 

    return (
        <div className="bg-violet-950  flex justify-center items-center h-screen">
        <div className="bg-violet-950  ">
            <h1 className="text-white font-semibold text-2xl text-center">Feito</h1>
            <p className="text-white   ">Mais informações no seu Email!</p>

            <button  onClick={() => goHome()}  className="bg-white  rounded-full w-40 m-2"><p className=" text-black font-semibold">Continuar</p></button>
        </div>
        </div>
        );
    }
    
export default Feito;