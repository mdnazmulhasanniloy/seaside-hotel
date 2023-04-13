import React from 'react';
import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const RoomShowCard = ({room}) => {
    const{_id, title, people, size, img, discretion} = room;

    return (
        <div className='bg-white shadow-2xl min-h-[500px]  pb-10'>
            {/* image */}
            <div className='overflow-hidden'>
                <img src={img} className='group-hover:scale-110 transition-all duration-500 w-full' alt="" />
            </div>
            {/* details */}

            <div className="bg-white shadow-lg max-w-[400px] mx-auto 
                            -translate-y-1/2 flex justify-center items-center 
                            uppercase font-semibold tracking-[1px] text-base
                            ">
                <div className="flex justify-between w-[80%] h-[50px]">
                                {/* size */}
                    <div className="flex items-center gap-x-2">
                        <div className="text-accent ">
                            <BsArrowsFullscreen className='text-[15px] '/>
                        </div>
                        <div className="flex gap-x-1">
                            <div className="">Size</div>
                            <div className="">{size} M.</div>
                        </div>
                    </div>
                    {/* room capacity */}
                    <div className="flex items-center gap-x-2">
                        <div className="text-accent">
                            <BsPeople className='text-[15px] '/>
                        </div>
                        <div className="flex gap-x-1">
                            <div className="">People</div>
                            <div className="">{people}</div>
                        </div>
                    </div>
                </div>            
            </div>
            <div className="text-center">
                {/* name */}
                <Link to={`/details/${_id}`}>
                    <h3 className='text-2xl font-bold'>{title}</h3>
                </Link>
                <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>
                {
                    discretion.slice(0, 56)
                }
                </p>
            {/*button */}
            <Link to={`/details/${_id}`} className='max-w-[240px] bg-black hover:bg-accent px-4 py-3 rounded-sm text-white transition-all duration-300'>
                See Details
            </Link>
            </div>
        </div>
    );
};

export default RoomShowCard;