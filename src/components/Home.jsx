import React, { Fragment, useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import Header from "./Header";


function Home(){

    return(
        <>
        <Header/>
        <div className="min-h-full w-full flex flex-col">
            <Sidebar/>
            <div className='w-100 min-h-screen ms-[250px] max-sm:ms-[80px] max-[500px]:ms-0 dark:bg-[#1d2125] dark:text-white flex flex-col items-center overflow-auto'>
                <div className="border-b dark:border-neutral-500 w-[85%] my-12 flex">
                    <div className='flex flex-col mx-6 w-full justify-center text-center'>
                        <h1 className="text-6xl mb-2">Welcome to GiraV2!</h1>
                        <p className="text-3xl mb-2 font-light">Your Ultimate Project Management Companion!</p>
                    </div>
                </div>
                <div className='flex flex-wrap w-full h-full justify-center '>
                    <div className='flex w-[90%] text-center justify-center'>
                    <p className='font-light text-2xl align-center'>Created, Maintained and Run by 3 passionate coders:</p>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden border-2 border-neutral-600 max-[320px]:w-[315px] w-[300px] h-[500px] overflow-y-scroll my-6 mx-6 shadow-lg h-full dark:border-neutral-200">
                    <img className="w-full" src="/images/marcis_preset.png" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Marcis Jansons</div>
                            <p class="dark:text-white text-gray-700 text-base">
                            The charismatic joker of our three musketeers trio, always able to crack a joke and lighten the mood. Marcis' is responsible for handling our login, register and task upload systems.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#charismatic</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#intuitive</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#impulsive</span>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden border-2 border-neutral-600 max-[320px]:w-[315px] w-[300px] h-[500px] overflow-y-scroll my-6 mx-6 shadow-lg h-full dark:border-neutral-200">
                    <img className="w-full" src="/images/tomass_heisenberg.jpeg" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Tomass Vēveris</div>
                            <p class="dark:text-white text-gray-700 text-base">
                            Every team of developers needs a guy like Tomass - open-minded to changes and quick to adapt, on top of just being a great guy all-around. He is responsible for displaying your projects and handling user interactions with said projects. 
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#athlete</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#openminded</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#adaptive</span>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden border-2 border-neutral-600 max-[320px]:w-[315px] w-[300px] h-[500px] overflow-y-scroll my-6 mx-6 shadow-lg h-full dark:border-neutral-200">
                    <img className="w-full max-h-[550px]" src="/images/alekss_dark.png" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Alekss Velvelis</div>
                            <p class="dark:text-white text-gray-700 text-base">
                            Alekss is like an elf - picking up little  tasks to help out others and make sure everything gets done. In our project, he is responsible for the calendar view of your projects.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#collected</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#independent</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:text-white dark:border-neutral-200 border-2 dark:bg-[#1d2125]">#optimistic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
