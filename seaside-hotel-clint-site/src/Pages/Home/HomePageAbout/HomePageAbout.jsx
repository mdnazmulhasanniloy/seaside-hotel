import React from 'react';
import Img1 from '../../../Assets/About/1.jpg'



const HomePageAbout = () => {
    return (
            <section className="bg-white">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-green-500 md:text-5xl xl:text-6xl text-left"
                        style={{fontFamily: "'Amatic SC', cursive"}}>About Us</h1>
                        <h2 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl text-left">The Luxury Experience
                            You'll Remember
                        </h2>
                        <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl text-black font-medium ">
                        
                        Nemo enim ipsam              quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
                        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam 
                        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        
                        </p>
                        <button className=' px-8 py-3 rounded-full text-lg inline-block mt-5
                                                        bg-green-500 hover:bg-blue-500
                                                        text-white uppercase
                                                        transition-all duration-500'>
                                read more
                        </button>
                        
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={Img1} alt="mockup" />
                    </div>                
                </div>
            </section>
    );
};

export default HomePageAbout;