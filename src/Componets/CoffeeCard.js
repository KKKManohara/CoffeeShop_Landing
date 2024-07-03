import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 

import CoffeeData from '../Componets/Data/CoffeeData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function CoffeeCard() {
    const settings = {
        dots: true,
        Infinity: true,
        speed: 500,
        slidesToShow: 3,
        slidToScroll: 3 
    };

    return (
        <div>
            <div className='w-3/4 m-auto'>
                <Slider {...settings}>
                    {CoffeeData?.map((Element, index) => (
                        <div className='relative p-4 mt-56 h-[400px]' key={index}>
                            <div className='absolute top-0 left-0 w-full h-[330px] bg-[#B88351] rounded-xl opacity-65' style={{ padding: '14px', boxSizing: 'border-box' }}>
                                <div className='w-full h-full border-2 border-[#221807] rounded-xl'></div>
                            </div>
                            <div className='relative flex flex-col items-center justify-center text-[#221807] -mt-[60px]'>
                                <div className='flex items-center justify-center mt-44'>
                                    <img src={Element.image} alt={Element.name} className='w-[250px] h-[250px] -mt-[300px] rounded-full' />
                                </div>
                                <div className='flex flex-col items-center justify-center gap-4'>
                                    <p className='text-xl -mt-[16px] font-bold'>
                                        {Element.name}
                                    </p>
                                    <p className='text-sm text-center mb-[100px] font-semibold'>
                                        {Element.description}
                                        <br></br><br></br>
                                        <div className='flex items-center justify-center gap-4'>
                                            <FontAwesomeIcon icon={faCoffee} className='text-2xl text-[#221807]' />
                                            <FontAwesomeIcon icon={faHeart} className='text-2xl text-[#221807]' />
                                            <FontAwesomeIcon icon={faCartPlus} className='text-2xl text-[#221807]' />
                                        </div>
                                    </p>
                                    
                                </div>

                                
                                <button className='relative px-10 py-6 -mt-20 text-lg text-white bg-[#B88351] rounded-xl'>
                                    {Element.price}
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
