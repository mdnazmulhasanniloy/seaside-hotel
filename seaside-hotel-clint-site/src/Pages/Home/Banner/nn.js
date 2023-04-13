import React from 'react';
import Slider from 'react-animated-slider';
import './Banner.css';
import carouselImage1 from '../../../Assets/Banner/home_1_slider.jpg';
import carouselImage2 from '../../../Assets/Banner/home_2_slider.jpg';
import carouselImage3 from '../../../Assets/Banner/home_3_slider.jpg';

const Banner = () => {

    const content =[
        {
            title: 'Vulputate Mollis Ultricies',
            description:
                'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
            button: 'Read More',
            image: carouselImage1,
            user: 'Daniel',
            userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
        },
        {
            title: 'Vulputate Mollis Ultricies',
            description:
                'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
            button: 'Read More',
            image: carouselImage2,
            user: 'Daniel',
            userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
        },
        {
            title: 'Vulputate Mollis Ultricies',
            description:
                'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
            button: 'Read More',
            image: carouselImage3,
            user: 'Daniel',
            userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
        },
    ]
    

   
    return (
        <div>
        <Slider autoplay={3000}>
	{content.map((item, index) => (
		<div className='w-full h-[80vh] bg-cover bg-center'
			key={index}
			style={{ background: `url('${item.image}')` }}
		>
			<div className="flex flex-col text-white justify-center items-center">
				<h1 className='text-2xl font-bold'>{item.title}</h1>
				<p>{item.description}</p>
				<button>{item.button}</button>
			</div>
		</div>
	))}
</Slider>
    </div>

    );
};

export default Banner;