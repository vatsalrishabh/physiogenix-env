import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}
                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>
                            ONLINE PHYSIOTHERAPY
                        </button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-5xl md:text-6xl font-bold text-darkpurple leading-tight'>
                            Get expert <br /> physiotherapy <br /> at your doorstep.
                        </h1>
                    </div>
                    <p className='text-gray-600 text-center lg:text-left mt-4 text-md md:text-lg'>
                        Book certified physiotherapists for home visits and video consultations.
                    </p>
                    <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                            Book Appointment
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}
                <div className='lg:-m-24 lg:pt-20 hidden lg:block'>
                    <Image src="/images/banner/physio.webp" alt="Physiotherapy illustration" width={800} height={642} />
                </div>

            </div>
        </div>
    );
};

export default Banner;
