import React from "react";
import background from "../assets/background2.jpg";
import { FiSearch } from "react-icons/fi";
const Searchbar = () => {
    return (
        <div class="relative overflow-hidden  bg-cover bg-no-repeat  text-center">
            <div class="absolute top-0 -left-4 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="absolute -bottom-8 right-20 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>
            <div className="w-full flex">
                <img src={background} className=" object-cover -my-0" alt="" />
            </div>
            <div />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="absolute left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
                    <div class="flex sm:mt-5 my-1 h-full items-center justify-center ">
                        <div class="text-white">
                            <h2 class="mb-4 text-4xl lg:text-8xl font-serif font-semibold">DISCOVER</h2>
                            <h2 class="mb-4 text-2xl lg:text-6xl font-serif font-semibold">AMAZING STARTUP</h2>
                            <h4 class="mb-6 text-l lg:text-3xl font-serif font-semibold">Find great startups curated by our experts for investing.</h4>

                            <div class="mb-3">
                                <div class="relative group">
                                    <div class="relative mx-0.5 mb-4 flex w-full flex-wrap items-stretch gap-3">

                                        <input
                                            type="search"
                                            class="relative block  w-[0.5px] min-w-0 lg:h-20 flex-auto rounded border border-solid border-neutral-300 bg-blue bg-clip-padding px-3 py-[0.25rem] text-base font-serif font-normal leading-[1.6] text-neutral-700 outline-none  "
                                            placeholder="Startup Name"
                                            aria-label="Search"
                                            aria-describedby="button-addon3" />

                                        <button class="flex items-center gap-2 relative z-[1] rounded border-2 border-primary bg-blue px-6 py-2 font-serif text-xl font-medium uppercase text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-900 duration-300 ..."
                                            type="button"
                                            id="button-addon3"
                                            data-te-ripple-init>
                                            <FiSearch className="text-xl text-white w-full" />
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Searchbar;
