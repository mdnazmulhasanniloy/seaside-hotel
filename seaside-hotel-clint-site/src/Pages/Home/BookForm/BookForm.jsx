import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {BsCalendar, BsChevronDown, BsChevronUp} from 'react-icons/bs';
import './BookForm.css'
import {Menu} from '@headlessui/react'



const BookForm = () => {
   const [startDate, setStartDate] = useState()
   const [endDate, setEndDate] = useState()
   const [roomSize, setRoomSize] = useState('Room Size');
   const [open, setOpen] = useState(false)
   
   console.log(roomSize)


   const RoomSizeType = ['Single Room', '2 Columns Room', '3 Columns Room']
    return (
        <form className='h-[300px] w-full lg:h-[70px] '>
            <div className="flex flex-col h-full lg:flex-row gap-3">
                {/*CheckIn */}
                <div className="flex-1 border-r">
                    <div className="relative flex items-center justify-end h-full bg-white">
                            {/*icon*/}
                        <div className=" absolute z-10 pr-8">
                            <div className="">
                                <BsCalendar className='text-accent text-base'/>
                            </div>
                        </div>
                            <DatePicker className='w-full h-[300px] lg:h-[70px] px-8 date-picker' 
                                        selected={startDate} 
                                        placeholderText='Check Out'
                                        onChange={(date)=> setStartDate(date)}
                                        />
                    </div>
                </div>
                {/*CheckOut */}
                <div className="flex-1 border-r">
                    <div className="relative flex items-center justify-end h-full bg-white">
                            {/*icon*/}
                        <div className=" absolute z-10 pr-8">
                            <div className="">
                                <BsCalendar className='text-accent text-base'/>
                            </div>
                        </div>
                            <DatePicker className='w-full h-[300px] lg:h-[70px] px-8 date-picker' 
                                        selected={endDate} 
                                        placeholderText='Check Out'
                                        onChange={(date)=> setEndDate(date)}
                                        />
                    </div>
                </div>
                {/* Adults Dropdown */}
                <div className="flex-1 border-r">
                    <Menu as='div' className='w-full h-full bg-white relative'>
                        <Menu.Button onClick={()=>setOpen(!open)} className='w-full h-full flex items-center justify-between px-8 text-gray-400'>{roomSize}
                           {
                            open?
                           <BsChevronUp className='text-vase text-accent'/>
                           : <BsChevronDown className='text-vase text-accent'/>
                           } 
                            
                        </Menu.Button>
                        <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40 shadow-lg'>
                        {
                            RoomSizeType.map((li, index)=> <Menu.Item key={index} as='li' onClick={()=>{setRoomSize(li)}} className='border-b 
                                                        last-of-type:border-b-0 h-12 w-full 
                                                        hover:bg-accent hover:text-white 
                                                        flex justify-center items-center cursor-pointer translate-all durition-300
                                                        '>  {li} </Menu.Item>
                            )
                        }
                            
                        </Menu.Items>
                    </Menu>
                </div>
                {/* Kids Dropdown*/}
                <div className="flex-1 border-r">
                        ksjdfiasji
                </div>
            </div>
        </form>
    );
};

export default BookForm;