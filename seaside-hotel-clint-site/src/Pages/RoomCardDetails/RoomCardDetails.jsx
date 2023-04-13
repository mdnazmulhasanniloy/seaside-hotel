import React, {useState} from 'react';
import banner from '../../Assets/BookingPageBG/BookingPageBG.jpg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GiCheckMark } from 'react-icons/gi';
import {BsCalendar} from 'react-icons/bs';
import BookingModal from './../Shared/BookingModal/BookingModal';
import { useTitle } from '../../Hooks/useTitle';
import { useLoaderData } from 'react-router-dom';

const RoomCardDetails = () => {
    const room = useLoaderData();
    const{title, people, size, standardPrice, premiumPrice, img, facilities, discretion} = room;

    const [bookingDate, setBookingDate] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    

    useTitle('Room Details')
    
    return (
        <section className=''>
            <div className="h-[560px] 
                            bg-cover bg-center bg-no-repeat
                            relative" 
                 style={{background: `url(${banner})`}}>

                 {/* overLay */}

                 <div className="absolute w-full h-full  bg-black/50 items-center flex justify-center">
                    {/* title */}
                    <h3 className='text-6xl text-white z-20 text-center '>{title}</h3>
                 </div>

            </div>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row h-full py-24">
                {/*Left side */}
                    <div className="w-full h-full lg:w-[60%] px-6">
                        <h2 className='text-3xl font-semibold p-1 border-l-[5px] border-accent'>{title}</h2>
                        <p className="my-8 px-5">
                            {discretion}
                        </p>
                        <img src={img} className='mb-8' alt="" />

                        {/* facilities */}
                        <div className="">
                            <h3 className="text-3xl font-semibold my-5 p-1 border-l-[5px] border-accent">Room Facilities</h3>
                            
                            <div className="">
                                <ul className=''>
                                {
                                    facilities?.split('.')?.map((fraction, index) => <li className='flex items-center gap-3 ml-5 mb-5' key={index}>
                                            <GiCheckMark className='text-accent'/> 
                                            <p className='text-lg'>{fraction}</p>
                                    </li>
                                )}
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* right side */}
                    <div className="w-full h-full lg:w-[40%] lg:mt-28 mt-20">
                        <div className="py-8 px-6 bg-accent/20 ">
                            <div className='flex flex-col space-y-4 mb-4'>
                                            {/*CheckIn */}
                                    <div className="flex-1 border-r">
                                        <div className="relative flex items-center justify-end h-full bg-white rounded-md">
                                                {/*icon*/}
                                            <div className=" absolute z-10 pr-8">
                                                <div className="">
                                                    <BsCalendar className='text-accent text-base'/>
                                                </div>
                                            </div>
                                                <DatePicker className='w-full h-[70px] px-8 date-picker border border-accent rounded-md' 
                                                            selected={bookingDate} 
                                                            placeholderText='BookingDate'
                                                            onChange={(date)=> setBookingDate(date)}
                                                            />
                                        </div>
                                    </div>
                                <div>
                                </div>
                                <div>
                                <label
                                    onClick={() => {setModalOpen(true)}}
                                    htmlFor="Booking-Modal"
                                    className='btn btn-accent btn-lg w-full cursor-pointer  bg-white text-accent hover:text-white transform-all duration-700'
                                >Book Now</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
            {
                bookingDate && modalOpen &&
            <BookingModal room={room}
                          bookingDate={bookingDate}
                          setModalOpen={setModalOpen}
                          />
            }

            
        </section>
    );
};

export default RoomCardDetails;