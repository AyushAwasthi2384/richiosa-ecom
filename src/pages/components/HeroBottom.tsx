import React from 'react'

export default function HeroBottom() {
    return (
        <section className="hero-btm-sec text-gray-600 body-font w-100">
            <div className="cursor6" id='cursor'></div>
            <div className="hero-btm container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Our Mission: Affordable Luxury</h1>
                    <p className="mb-8 leading-relaxed text-gray-300">At Richiosa, we believe that everyone deserves to experience luxury, without breaking the bank. That’s why we offer high-quality, affordable t-shirts that are designed to last. Join us in our mission to make luxury accessible to everyone.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
