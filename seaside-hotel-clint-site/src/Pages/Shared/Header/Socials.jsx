import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const Socials = ({user, HandelToLogout}) => {
    return (
        <ul className='flex space-x-6'>
            <li className=" hover:text-accent active:text-accent cursor-pointer text-xl">
                {
                    user?.email? <button onClick={HandelToLogout} 
                            smooth={true} 
                            duration={500} 
                            offset={-70} 
                            className=' px-8 py-3 rounded border-white border-2 text-lg  
                            hover:bg-white text-white hover:text-black uppercase transition-all duration-700'>Sign Out</button>
                            : <label htmlFor='Login-Modal' 
                                    smooth={true} 
                                    duration={500} 
                                    offset={-70} 
                                    className=' px-8 py-3 rounded border-white border-2 text-lg  hover:bg-white text-white hover:text-black uppercase transition-all duration-700'>Login</label>
                }
            </li>
        </ul>
    );
};

export default Socials;