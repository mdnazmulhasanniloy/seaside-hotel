import React, { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';


const NavMobile = ({navItem}) => {
    const [isOpen, setOpen] = useState(false)



    



    const circleVariants = {
    hidden:{
        scale: 0
    },
    
    visible: {
        scale: 180,
        transition:{
            type: 'spring',
            stiffness: 160,
            damping: 60,
        }
    }
}

const ulVariants = {
    hidden:{
        opacity:0
    },
    visible: {
        opacity: 1,
        transition:{
            delay: 0.1
        }
    }
}


    return (
        <nav className='relative z-[999] pr-5'>
        <div className='cursor-pointer text-white z-[999]' onClick={()=>{setOpen(!isOpen)}}>
                {
                    isOpen? ' '
                    : <HiOutlineMenuAlt1 className='h-8 w-8' /> 
                }
                
        </div>
            
            <motion.div 
                        variants={circleVariants} 
                        initial='hidden' 
                        animate={isOpen? 'visible' : 'hidden'} 
                        className='w-4 h-4 rounded-full backdrop-saturate-200 bg-[#0000009c] fixed top-0 right-0'>

            </motion.div>

            <motion.ul 
                        variants={ulVariants}
                        initial='hidden'
                        animate={isOpen? 'visible' : ''}
                        className={`${isOpen? 'right-0' : '-right-full'} 
                        fixed top-0 bottom-0 w-full flex flex-col justify-center 
                        items-center transition-all duration-300  text-white`}>

                        
            <div className='absolute cursor-pointer z-50 top-8 right-8' onClick={()=>{setOpen(!isOpen)}}>
                    
                    <AiOutlineClose className='h-8 w-8 text-white' /> 

            </div>
            <div className="absolute cursor-pointer z-20 top-50 right-50 text-3xl">

                    {
                        navItem
                    }
            </div>
            </motion.ul>
        </nav>
    );
};

export default NavMobile; 