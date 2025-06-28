"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
    time: string;
    heading: string;
    heading2: string;
    date: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        time: "4 min",
        heading: '5 Exercises to Relieve',
        heading2: 'Lower Back Pain at Home',
        name: "Published by Physiogenix",
        date: 'June 10, 2025',
        imgSrc: '/images/articles/article.png',
    },
    {
        time: "6 min",
        heading: 'Post-Surgery Rehab:',
        heading2: 'What You Need to Know',
        name: "Published by Physiogenix",
        date: 'June 5, 2025',
        imgSrc: '/images/articles/article2.png',
    },
    {
        time: "3 min",
        heading: 'How Physiotherapy Helps',
        heading2: 'in Desk Job Posture Correction',
        name: "Published by Physiogenix",
        date: 'May 30, 2025',
        imgSrc: '/images/articles/article3.png',
    },
    {
        time: "5 min",
        heading: 'Knee Pain in Seniors:',
        heading2: 'Simple Stretches That Work',
        name: "Published by Physiogenix",
        date: 'May 22, 2025',
        imgSrc: '/images/articles/article.png',
    },
    {
        time: "4 min",
        heading: 'Recover Faster from',
        heading2: 'Sports Injuries with Home Physio',
        name: "Published by Physiogenix",
        date: 'May 15, 2025',
        imgSrc: '/images/articles/article2.png',
    },
    {
        time: "5 min",
        heading: 'Benefits of In-Home',
        heading2: 'Physiotherapy Sessions',
        name: "Published by Physiogenix",
        date: 'May 8, 2025',
        imgSrc: '/images/articles/article3.png',
    },
]

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
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
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
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>
                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest">ARTICLES</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Our latest post.</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                    <Image src={items.imgSrc} alt={items.heading} width={389} height={262} className="inline-block m-auto" />
                                    <Link href="/">
                                        <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">{items.time} read</h3>
                                    </Link>
                                    <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                    <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>
                                    <div>
                                        <h3 className='text-base font-normal pt-6 pb-2 opacity-75'>{items.name}</h3>
                                        <h3 className='text-base font-normal pb-1 opacity-75'>{items.date}</h3>
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
