import '../App.css';
import cartao2 from '../assets/cartao2.png'
import foto2 from '../assets/foto2.png'
import um from '../assets/1.png'
import dois from '../assets/2.png'
import tres from '../assets/3.png'
import quatro from '../assets/4.png'
import NavBar from '../components/navbar';
import { useNavigate } from 'react-router-dom'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//Tela de Home para divulgação do app e login.


SwiperCore.use([EffectCoverflow, Pagination]); //Inicializando os componentes do Swiper

function Home() {
  //Rotas
    const navigate = useNavigate()
    const goLogin = () => {
        navigate("/Login");
    } 

  return (
    <div className="App">
      {/* Component NavBar  */}
      <NavBar></NavBar>


      <div>
        {/* Criando e estilizando um Swiper/Slide */}
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        effect={"flip"}
        spaceBetween={0}
        speed={500}
        loop={true}
        touchRatio={1.5}
        coverflowEffect={{
        stretch: 0,
        slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        {/* /Adicionando as fotos ao Slide/Swiper */}
        <SwiperSlide className=''>
          <img src={um} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={dois} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={tres} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={quatro} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>

    {/* Parte que estiliza a página */}

       <h2 className='font-bold text-2xl mt-10 '>Abra sua conta digital e tenha o melhor rendimento do Brasil!</h2>
          <p className='m-4 justify-center text-center text-2xl'>Descubra uma nova experiência bancária com o IOI Bank! Nós estamos aqui para revolucionar a forma como você lida com suas finanças, proporcionando serviços inovadores e uma abordagem centrada no cliente. Prepare-se para uma jornada emocionante repleta de conveniência, eficiência e tecnologia de ponta.</p>
      
      <div className='justify-center align-middle flex'>
          <img className='flex-none mt-20' src={cartao2} />
      </div>
    
        <div className=' justify-center flex m-10'>
        <div className=' '>
        <p className='flex-col text-black text-3xl m-4 '>No IOI tem investimento que combina com você!</p>
        <p className='text-black text-2xl flex-col text-center m-4 '>Aqui, acreditamos que cada indivíduo tem um potencial único que merece ser desenvolvido e nutrido. Nossa abordagem se concentra em fornecer as ferramentas e recursos necessários para impulsionar sua jornada de sucesso.</p>
        </div>
        </div>
        

          <div className=' justify-center align-middle flex'>
        <img className='w-full' src={foto2} />
       </div>

       <div className='justify-center justify-items-center flex '>
          <h1 className='font-bold text-4xl text-black'>BANCO SEGURO</h1>
          </div>
          <div className='justify-center justify-items-center flex '>
          <h1 className='font-bold text-black'>SEUS PAGAMENTOS, CRÉDITOS E SEGUROS. TRABALHANDO EM UM SÓ.</h1>
          </div>
          
          {/* Button onClieck que redireciona ao Login */}
          <div>
            <button type='button'  onClick={() => goLogin()} className='bg-violet-900 shadow-2xl rounded-full text-white font-semibold w-40 h-10 mb-20'>Abra sua Conta</button>
        </div>

        <div className='bg-black   h-14 w-screen'>
        <p className='text-white text-sm '>COPYRIGHT</p>
        <p className='text-white text-xs'> 2023</p>
        </div>
      </div>
  );
}

export default Home;