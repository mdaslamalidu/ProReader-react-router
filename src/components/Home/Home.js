import React from 'react';
import data from "../../assests/data.json";
import Lottie from "lottie-react"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div className='text-left'>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                                Brand new
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-left">
                            A reader lives a
                            thousand lives
                            <br className="hidden md:block" />
                            jumps over{' '}
                            <span className="inline-block text-purple-400">
                                before he dies
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg text-left">
                            Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            <span className="mr-3">visit store</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4"
                            >
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                    points="4,4 22,4 19,14 4,14 "
                                />
                                <circle
                                    cx="4"
                                    cy="22"
                                    r="2"
                                    strokeLinejoin="miter"
                                    strokeLinecap="square"
                                    stroke="none"
                                    fill="currentColor"
                                />
                                <circle
                                    cx="20"
                                    cy="22"
                                    r="2"
                                    strokeLinejoin="miter"
                                    strokeLinecap="square"
                                    stroke="none"
                                    fill="currentColor"
                                />
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                    points="1,1 4,4 4,14 2,18 23,18 "
                                />
                            </svg>
                        </Link>
                        <Link
                            to="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="relative lg:w-1/2">
                    <div className="object-cover w-full h-56 rounded shadow-lg sm:h-96">
                        <Lottie animationData={data} loop={true}></Lottie> 
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;