import video from "../assets/video.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
                EBank empowering your finances,
                <span className='bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text'>
                {" "}
                every step of the way
                </span>
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                Welcome to EBank, where your security and prosperity are our priority. Join us for a reliable and innovative financial journey.</p>
            {/* <div className="flex justify-center my-10">
                <a href='#' className='bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md'>
                    Start for free
                </a>
                <a href='#' className='py-3 px-4 mx-3 rounded-md border'>
                    Documentation
                </a>
            </div> */}
            <div className='flex mt-10 justify-center'>
                <video autoPlay loop muted className='rounded-lg w-1/2 mx-2 my-4'>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted className='rounded-lg w-1/2 mx-2 my-4'>
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default HeroSection