import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    //Funções para navefações
    const navigate = useNavigate()
    const goLogin = () => {
        navigate("/Login");
    } 

    const goHome = () => {
        navigate("/");
    } 

    //NavBar
    return (<>
        <div className='w-screen justify-between flex'>
            <img className='w-16 justify-start ' onClick={() => goHome()}   src={logo} />
            <ul className='flex justify-around flex-row list-none text-black'>
               <button type='button'  onClick={() => goLogin()}  className='bg-violet-900 text-white rounded-full  font-semibold w-40 justify-end'>Abra sua conta </button>
            </ul>
        </div>
    </>);
}

export default NavBar;