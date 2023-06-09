import React from "react";
import cyber from "../assets/Cybersecurity.jpg";
import blockchain from "../assets/blockchain1.jpg";
import ecommerce from "../assets/Ecommerce.jpg";
import estate from "../assets/Realestate.jpg";
import education from "../assets/Education.jpg";
import robotics from "../assets/Robotics.jpg";
import health from "../assets/Healthcare.jpg";
import software from "../assets/Software.jpg";

const Slides = () => {
    return (
        <div class="flex flex-col bg-white m-auto p-auto space-y-5 font-serif">
            <div class="flex mt-2 py-5 lg:px-20 md:px-10 px-5 lg:mx-40  sm:mx-20 md:mx-20 mx-5 font-semibold sm:text-s lg:text-4xl text-black">
                <div class="flex items-right justify-right  ">
                    <div class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Explore By Category</div>
                </div>
            </div>
            <div
                class="flex overflow-x-scroll pb-10 hide-scroll-bar"
            >

                <div
                    class="flex flex-nowrap lg:ml-30 md:ml-20 ml-10 "
                >
                    <div class="inline-block px-3">
                        <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"

                        >
                            <div className=" object-cover h-56 w-56 flex "> <img src={cyber} alt="" /> </div>
                            <div class="flex items-center justify-center">Cybersecurity</div>

                        </div>
                    </div>
                    <div class="inline-block px-3">
                        <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <div className=" object-cover h-56 w-56 flex " > <img src={blockchain} alt="" /> </div>
                            <div class="flex items-center justify-center mt-1.5">Blockchain</div>
                        </div>
                    </div>
                    <div class="inline-block px-3">
                        <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <div className=" object-cover h-56 w-56 flex " > <img src={ecommerce} alt="" /> </div>
                            <div class="flex items-center justify-center mt-1.5">Ecommerce</div>
                        </div>
                    </div>
                    <div class="inline-block px-3">
                        <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <div className=" object-cover h-56 w-56 flex " > <img src={estate} alt="" /> </div>
                            <div class="flex items-center justify-center mt-1.5">Realestate</div>
                        </div>
                    </div>
                    <div class="inline-block px-3">
                        <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <div className=" object-cover h-56 w-56 flex " > <img src={education} alt="" /> </div>
                            <div class="flex items-center justify-center mt-1.5">Education</div>
                        </div>
                    </div>
                    <div class="inline-block px-3">
                        <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <div className=" object-cover h-56 w-56 flex " > <img src={robotics} alt="" /> </div>
                            <div class="flex items-center justify-center mt-1.5">Robotics</div>
                        </div>
                    </div>
                    <div class="inline-block px-3">
                        <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <div className=" object-cover h-56 w-56 flex " > <img src={health} alt="" /> </div>
                            <div class="flex items-center justify-center mt-1.5">Healthcare</div>
                        </div>
                    </div>
                    <div class="inline-block px-3">
                        <div
                            class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <div className=" object-cover h-56 w-56 flex " > <img src={software} alt="" /> </div>
                            <div class="flex items-center justify-center mt-1.5">Software Development</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Slides;

