import React from 'react'
import t1p from "./images/t1-photo.png" 
import t2p from "./images/t2-photo.png" 
import t3p from "./images/t3-photo.png" 

export default function About() {
    return (
        <div className="about-cursor bg-white overflow-hidden  lg:flex lg:items-center" style={{background: "linear-gradient(#dedede, #c6c6c6" }}>
            <div className="cursor4"></div>

            <div className="flex items-center gap-8 p-8 lg:p-24" style={{zIndex: 200}}>
                <img src={t3p} className="abt-img1 w-1/2 rounded-lg" alt="T" />
                <div>
                    <img src={t1p} className="abt-img1 mb-8 rounded-lg" alt="T" />
                    <img src={t2p} className="abt-img1 rounded-lg" alt="T" />
                </div>
            </div>
            <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-4xl font-bold text-black dark:text-white sm:text-4xl">
                    <span className="text-4xl block text-black ">
                        Welcome to Richiosa - The Home of High-Quality T-Shirts
                    </span>
                </h2>
                <p className="text-md mt-4 text-gray-400">
                    Richiosa is a premium online clothing store that offers the perfect blend of luxury and affordability. Our t-shirts are made from the highest quality materials, ensuring both comfort and durability. With a range of styles and colors, you’re sure to find the perfect t-shirt to elevate your wardrobe.
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <button type="button" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}
