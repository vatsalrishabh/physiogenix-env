"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const teamData: DataType[] = [
    {
        profession: 'Senior Physiotherapist',
        name: 'Dr. Aarti Sharma',
        imgSrc: '/images/wework/avatar1.svg',
    },
    {
        profession: 'Orthopedic Specialist',
        name: 'Dr. Rahul Verma',
        imgSrc: '/images/wework/avatar2.svg',
    },
    {
        profession: 'Sports Rehab Expert',
        name: 'Dr. Sneha Patil',
        imgSrc: '/images/wework/avatar3.svg',
    },
    {
        profession: 'Pediatric Physiotherapist',
        name: 'Dr. Ritesh Mehra',
        imgSrc: '/images/wework/avatar4.svg',
    },
    {
        profession: 'Neuro Rehab Therapist',
        name: 'Dr. Priya Kapoor',
        imgSrc: '/images/wework/avatar5.svg',
    },
    {
        profession: 'Senior Consultant',
        name: 'Dr. Karan Deshmukh',
        imgSrc: '/images/wework/avatar6.svg',
    },
];

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: { slidesToShow: 3 }
                },
                {
                    breakpoint: 800,
                    settings: { slidesToShow: 2 }
                },
                {
                    breakpoint: 450,
                    settings: { slidesToShow: 1 }
                }
            ]
        };

        return (
            <div className="bg-wework py-32">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center mb-10">
                        <h3 className="text-4xl sm:text-6xl font-bold text-darkblue mb-4">Meet Our Physiotherapy Experts</h3>
                        <p className="text-lg text-gray-600">Skilled, compassionate professionals here to support your recovery journey.</p>
                    </div>
                </div>

                <Slider {...settings}>
                    {teamData.map((person, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-12 my-10 text-center shadow-xl rounded-3xl px-4'>
                                <div className='relative'>
                                    <Image
                                        src={person.imgSrc}
                                        alt={person.name}
                                        width={140}
                                        height={140}
                                        className="inline-block m-auto rounded-full"
                                    />
                                    <Image
                                        src="/images/wework/linkedin.svg"
                                        alt="LinkedIn icon"
                                        width={36}
                                        height={36}
                                        className="absolute top-0 right-0 m-2"
                                    />
                                </div>
                                <h4 className='text-xl font-bold pt-6 text-darkpurple'>{person.name}</h4>
                                <h3 className='text-sm text-gray-500 pt-2'>{person.profession}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
