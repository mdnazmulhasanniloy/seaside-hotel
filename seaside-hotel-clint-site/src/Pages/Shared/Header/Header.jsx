import React, { useContext, useEffect, useState} from 'react';
import DurbarLogo from '../../../Assets/Logo.png';
import NavMobile from './NavMobile';
import Socials from './Socials';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import LoginModal from '../LoginModal/LoginModal'; 
import { AuthContext } from './../../../Context/AuthProvider';
import useAdmin from './../../../Hooks/useAdmin';
import Spanner from './../Spanner/Spanner';

const Header = () => {

  const { user, signOutUser } = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email)
  const [bg, setBg] = useState(false);
  const Navigate = useNavigate()
  
  
  
  
  
  //sign out account
  const HandelToLogout = () => {
    signOutUser()
    .then(() => {
      localStorage.removeItem('accessToken')
      Navigate('/')
    })
    .catch(error => toast.error(error));
    
  }


  const navItem = <React.Fragment>

  <li className="mb-8  hover:text-accent cursor-pointer text-xl">
      <NavLink to='/' smooth={true} duration={500} offset={-70} className=' active:text-accent transition-all duration-300'>Home</NavLink>
  </li>
  <li className="mb-8 hover:text-accent  cursor-pointer text-xl">
      <NavLink to='/details' smooth={true} duration={500} offset={-70} className=' active:text-accent transition-all duration-300'>About</NavLink>
  </li>
  <li className="mb-8 hover:text-accent cursor-pointer text-xl">
      <NavLink to='/login' smooth={true} duration={500} offset={-70} className=' active:text-accent transition-all duration-300'>Gallery</NavLink>
  </li>
  {
    user?.email && <>
  
  {
    isAdmin? <>
    {/*Admin Access */}
        <li lassName="mb-8 hover:text-accent cursor-pointer text-xl">
          <NavLink to='allUsers' smooth={true} duration={500} offset={-70} className=' active:text-accent transition-all duration-300'>All Users</NavLink>
        </li>
        </>
    :<>
    {/*Buyers access */}
        {
          <li lassName="mb-8 hover:text-accent cursor-pointer text-xl">

           <NavLink to='/myBooking' smooth={true} duration={500} offset={-70} className=' active:text-accent transition-all duration-300'>
           My Bookings</NavLink>

        </li>
        }
    </>
  }
  </>
  }
</React.Fragment>



  useEffect(()=>{
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  },[]);

  //loading
//   if (isAdminLoading) {
//     return <Spanner />
// }
  return (
    <div className="div">
    <header className={`${bg? 'bg-[#000000c5] backdrop-saturate-200 backdrop:blur-2xl shadow-xl bg-opacity-80 lg:border-b lg:border-[#fff] supports-blur:bg-white/95 h-20' : 'text-black h-24 bg-[#0000000a]'} flex items-center fixed top-0 w-full text-white z-[999] active:text-accent transition-all duration-300`}>
    <div className="container mx-auto h-full flex items-center justify-between px-4">
      {/* logo*/}
      <div className="logo flex items-center">
      <a href="#"> <img src={DurbarLogo} className='mr-3 sm:h-9' alt="DurbarLogo" /></a>
      </div>
      <div className="hidden lg:block">
      <nav>
        <ul className={`flex space-x-8 capitalize text-[15px]  text-white  mt-6`}>
            {
                navItem 
            }
        </ul>
            
        </nav>
      </div>

      <div className="hidden lg:block">
        <Socials user={user} HandelToLogout={HandelToLogout} />
      </div>

    </div>
    
      <div className="lg:hidden bg-scroll">
        <NavMobile navItem={navItem}/>
      </div>
      
    </header>

      <LoginModal />

    </div>
  );
};

export default Header;