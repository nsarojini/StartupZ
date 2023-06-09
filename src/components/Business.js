import React from "react";
const Business = () => {
    return (
        <div class="flex flex-col bg-white m-auto p-auto space-y-3 font-serif">
            <div class="flex mt-5 py-5 lg:px-20 md:px-10 px-5 lg:mx-40  sm:mx-20 md:mx-20 mx-5 font-semibold sm:text-l lg:text-4xl text-black">
                <div class="flex items-right justify-right ">
                    <div class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">  Explore By Business Model</div>
                </div>
            </div>
            <div class="mt-1 bg-white dark:bg-gray-900">
                <div class="container gap-0 px-6 py-10  mx-auto">
                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-4">

                        <div class="flex items-center p-8 space-y-3 border-2 border-purple-800 dark:border-gray-300 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-900 duration-300 ...">
                            <h1 class="text-xl font-semibold text-gray-400 capitalize dark:text-white ">B2B Business to Business</h1>
                        </div>

                        <div class="flex items-center p-8 space-y-3 border-2 border-purple-800 dark:border-gray-300 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-900 duration-300 ...">
                            <h1 class="text-xl font-semibold text-gray-400 capitalize dark:text-white">B2C Business to Consumer</h1>
                        </div>

                        <div class="flex items-center p-8 space-y-3 border-2 border-purple-800 dark:border-gray-300 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-900 duration-300 ...">
                            <h1 class="text-xl font-semibold text-gray-400 capitalize dark:text-white">B2B2C Business to Business to Consumer</h1>
                        </div>
                        <div class="flex items-center p-8 space-y-3 border-2 border-purple-800 dark:border-gray-300 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-900 duration-300 ...">
                            <h1 class="text-xl font-semibold text-gray-400 capitalize dark:text-white">C2C Consumer to Consumer</h1>
                        </div>
                        <div class="flex items-center p-8 space-y-3 border-2 border-purple-800 dark:border-gray-300 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-900 duration-300 ...">
                            <h1 class="text-xl font-semibold text-gray-400 capitalize dark:text-white">C2B Consumer to Business </h1>
                        </div>
                        <div class="flex items-center p-8 space-y-3 border-2 border-purple-800 dark:border-gray-300 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-900 duration-300 ...">
                            <h1 class="text-xl font-semibold text-gray-400 capitalize dark:text-white">B2A  Busines to Administration</h1>
                        </div>
                        <div class="flex items-center p-8 space-y-3 border-2 border-purple-800 dark:border-gray-300 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-900 duration-300 ...">
                            <h1 class="text-xl font-semibold text-gray-400 capitalize dark:text-white">C2A Consumer to Administration </h1>
                        </div>
                        <div class="flex items-center p-8 space-y-3 border-2 border-purple-800 dark:border-gray-300 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-900 duration-300 ...">
                            <h1 class="text-xl font-semibold text-gray-400 capitalize dark:text-white">Others</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Business;

