import React, { Fragment, useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";


function Home(){

    return(
        <>
        <Header/>
        <div className="min-h-full w-full flex flex-col">
            <Sidebar/>
            <div className='w-100 p-5 min-h-screen ms-[250px] max-sm:ms-[80px] max-[500px]:ms-0 dark:bg-[#1d2125] dark:text-white flex flex-col items-center overflow-auto'>
                <div className="w-[85%] py-6 mb-6 flex">
                    <div className='flex flex-col mx-6 w-full justify-center text-center'>
                        <h1 className="text-5xl mb-2 font-bold text-neutral-700 dark:text-[#b6c2cf]">Welcome to GiraV2!</h1>
                        <p className="text-xl mb-2 font-normal text-cyan-500 dark:text-violet-500">Created, Maintained and Run by 3 passionate coders:</p>
                    </div>
                </div>
                <div className='flex flex-wrap w-full h-full justify-center text-neutral-700 dark:text-[#b6c2cf]'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg max-[320px]:w-[315px] w-[300px] overflow-y-scroll my-6 mx-6 bg-neutral-100 dark:bg-[#161a1d]">
                        <div className="relative h-[300px]">
                            <img className="object-cover w-full h-full" src="/images/marcis_preset.png" alt="Marcis Jansons" />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Marcis Jansons</div>
                            <p className="text-base">
                                The charismatic joker of our three musketeers trio, always able to crack a joke and lighten the mood. Marcis' is responsible for handling our login, register and task upload systems.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#charismatic</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#intuitive</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#impulsive</span>
                        </div>
                    </div>


                    <div className="max-w-sm rounded overflow-hidden shadow-lg max-[320px]:w-[315px] w-[300px] overflow-y-scroll my-6 mx-6 bg-neutral-100 dark:bg-[#161a1d]">
                        <div className="relative h-[300px]">
                            <img className="object-cover w-full h-full" src="/images/tomass_heisenberg.jpeg" alt="Tomass Vēveris" />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Tomass Vēveris</div>
                            <p className="text-base">
                                Every team of developers needs a guy like Tomass - open-minded to changes and quick to adapt, on top of just being a great guy all-around. He is responsible for displaying your projects and handling user interactions with said projects.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#athlete</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#openminded</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#adaptive</span>
                        </div>
                    </div>


                    <div className="max-w-sm rounded overflow-hidden shadow-lg max-[320px]:w-[315px] w-[300px] overflow-y-scroll my-6 mx-6 bg-neutral-100 dark:bg-[#161a1d]">
                        <div className="relative h-[300px]">
                            <img className="object-cover w-full h-full" src="/images/alekss_dark.png" alt="Alekss Velvelis" />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Alekss Velvelis</div>
                            <p className="text-base">
                                Alekss is like an elf - picking up little tasks to help out others and make sure everything gets done. In our project, he is responsible for the calendar view of your projects.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#collected</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#independent</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#optimistic</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
