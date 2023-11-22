import React from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
function Contact(){

    return(
        <>
        <Header/>
        <div className="min-h-full w-full flex flex-col">
            <Sidebar/>
            <div className='w-100 min-h-screen ms-[250px] max-sm:ms-[80px] max-[500px]:ms-0 dark:bg-[#1d2125] dark:text-white flex flex-col items-center overflow-auto'>
                <div className="border-b dark:border-neutral-500 w-[95%] my-12 flex">
                    <div className='flex flex-col max-[400px]:mx-0 mx-6 w-full justify-center text-center'>
                        <h1 className="text-6xl mb-2 font-bold text-neutral-700 dark:text-[#b6c2cf]">Have any questions?</h1>
                        <p className="text-3xl mb-2 font-normal text-neutral-700 dark:text-[#b6c2cf]">Contact us at:</p>
                    </div>
                </div>
                <div className='flex flex-col w-full h-full justify-center items-center'>
                    <div className='flex justify-around my-4 w-4/5 max-[700px]:w-[100%] min-[1440px]:ml-[30%]'>
                        <div className='w-[20%] flex max-[700px]:ml-[35px] max-[500px]:ml-[25px] lg:justify-center'>
                            <FontAwesomeIcon className='text-5xl max-[700px]:text-3xl' icon={faEnvelope} />
                        </div>
                        <div className='w-[80%]'>
                            <p className="text-3xl font-medium mb-2 max-[500px]:text-2xl max-[700px]:font-light">officialgirav2@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex justify-around my-4 w-4/5 max-[700px]:w-[85%] min-[1440px]:ml-[30%]'>
                        <div className='w-[20%] flex lg:justify-center'>
                            <FontAwesomeIcon className='text-5xl max-[700px]:text-3xl' icon={faPhone} />
                        </div>
                        <div className='w-[80%]'>
                            <p className="text-3xl font-medium mb-2 max-[700px]:text-2xl max-[700px]:font-light">+371 29 000 301</p>
                        </div>
                    </div>
                    <div className='flex justify-around my-4 w-4/5 max-[700px]:w-[85%] min-[1440px]:ml-[30%]'>
                        <div className='w-[20%] flex lg:justify-center'>
                            <FontAwesomeIcon className='text-5xl max-[700px]:text-3xl' icon={faInstagram} />
                        </div>
                        <div className='w-[80%]'>
                            <p className="text-3xl font-medium mb-2 max-[700px]:text-2xl max-[700px]:font-light">@officialgirav2</p>
                        </div>
                    </div>
                    <div className='flex justify-around my-4 w-4/5 max-[700px]:w-[85%] min-[1440px]:ml-[30%]'>
                        <div className='w-[20%] flex lg:justify-center'>
                            <FontAwesomeIcon className='text-5xl max-[700px]:text-3xl' icon={faTwitter} />
                        </div>
                        <div className='w-[80%]'>
                            <p className="text-3xl font-medium mb-2 max-[700px]:text-2xl max-[700px]:font-light">@officialgirav2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;
