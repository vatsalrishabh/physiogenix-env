import Image from "next/image";

const TeamSection = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-10 px-6 lg:px-8 my-24'>
            <h2 className="text-4xl sm:text-6xl font-bold text-center text-darkpurple">
                Our team is committed to your recovery and well-being.
            </h2>
            <h3 className="text-xl sm:text-2xl font-medium text-center pt-6 text-gray-600">
                From pain relief to full mobility — we’re here every step of the way.
            </h3>

            <div className='grid grid-cols-1 my-16'>
                <Image
                    src="/images/team/sports.jpg" // Replace with your actual image path
                    alt="Our physiotherapy team at work"
                    height={684}
                    width={1296}
                    className="rounded-3xl shadow-lg"
                />
            </div>
        </div>
    );
};

export default TeamSection;
