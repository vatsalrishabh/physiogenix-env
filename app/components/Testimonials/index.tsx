"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Anjali Sharma",
        profession: 'Teacher, Bengaluru',
        comment: 'I had chronic back pain from long teaching hours. The home physiotherapy sessions helped me recover in just 3 weeks.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Ravi Verma",
        profession: 'Software Engineer, Hyderabad',
        comment: 'Their team is super professional. The exercises and therapy sessions improved my posture and reduced my neck pain.',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Priya Mehta",
        profession: 'Entrepreneur, Pune',
        comment: 'After my knee surgery, I was dependent on others. Thanks to their home care plan, I can walk confidently again.',
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "Dr. Suresh Rao",
        profession: 'Dentist, Mumbai',
        comment: 'Their therapists are punctual and knowledgeable. I recommend their service to every working professional.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Kavita Nair",
        profession: 'Bank Manager, Kochi',
        comment: 'I booked a trial and ended up taking their full plan. My shoulder mobility has improved drastically.',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Rajesh Iyer",
        profession: 'Retired Army Officer, Delhi',
        comment: 'Their strength training and mobility sessions have given me a second life. Excellent home care service!',
        imgSrc: '/images/testimonial/user3.svg',
    },
]

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">See what our patients say.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">See what our patients say.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">See what our patients say.</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.name} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
