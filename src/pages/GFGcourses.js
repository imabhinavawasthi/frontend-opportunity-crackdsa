import React from 'react'
import { useState } from 'react'

const GFGcourses = () => {
    const token = localStorage.getItem('token')
    const [loading, setloading] = useState(true)
    const [update, setupdate] = useState(false)
    const [popup, setpopup] = useState('')
    const [error, seterror] = useState('')
    const [share, setShare] = useState("Share")

    function setpop(str) {
        setpopup(str)
    }

    function uptodate() {
        setupdate(!update)
    }
    return (
        <div>
            <div>

                <section className="text-gray-700 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="mx-10 lg: flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 capitalize">Get flat 10% off on GeeksforGeeks Courses 🔥

                            </h1>
                            <p className=" sm:text-2xl text-1xl leading-relaxed ">Use Coupon Code: CRACKDSA</p>
                            <p className="mb-8 sm:text-2xl text-1xl leading-relaxed ">Flat 10% Discount</p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    <a href="https://practice.geeksforgeeks.org/courses" target='_blank' rel="noreferrer">GFG Courses</a>
                                </button>
                                <button className="ml-4 inline-flex items-center text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg" onClick={() => { navigator.clipboard.writeText(window.location.href); setShare("Copied") }}>{share}</button>
                            </div>
                        </div>
                        <div className="mx-10 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220106104905/FREE-Online-Courses-By-GeeksforGeeks-Learn-New-Tech-Skills.jpg" />
                        </div>
                    </div>
                </section>
                <section className="text-gray-700 body-font border-t border-gray-200">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-wrap w-full mb-5 flex-col items-center text-center">
                            <h1 className="sm:text-3xl text-2xl mb-5 font-medium title-font mb-2 text-gray-900">DSA Self Placed Course 🔥</h1>
                            <a href="https://practice.geeksforgeeks.org/courses/dsa-self-paced"><img src="https://i.ibb.co/5kLJ6qT/Screenshot-2023-06-13-at-11-31-30-PM.png" alt="gfg dsa" border="0" /></a>
                            {/* <p className="lg:w-1/2 w-full leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p> */}
                            <h3>👉🏻 Use Coupon Code <strong>CRACKDSA</strong> for flat 10% Discount</h3>
                        </div>
                    </div>
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-wrap w-full mb-5 flex-col items-center text-center">
                            <h1 className="sm:text-3xl text-2xl mb-5 font-medium title-font mb-2 text-gray-900">Complete Interview Preparation - Self Paced 🎯</h1>
                            <a href="https://practice.geeksforgeeks.org/courses/complete-interview-preparation"><img src="https://i.ibb.co/tKtL7m8/Screenshot-2023-06-13-at-11-37-52-PM.png" alt="cip gfg" border="0"/></a>
                            {/* <p className="lg:w-1/2 w-full leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p> */}
                            <h3>👉🏻 Use Coupon Code <strong>CRACKDSA</strong> for flat 10% Discount</h3>
                        </div>
                    </div>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-5 flex-col items-center text-center">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">So, what are you waiting for, enroll now!!</h1>
                            {/* <p className="lg:w-1/2 w-full leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p> */}
                        </div>
                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            <a href="https://practice.geeksforgeeks.org/courses" target='_blank' rel="noreferrer">  Enroll Now</a>
                        </button>
                    </div>
                </section>




            </div>
        </div>
    )
}

export default GFGcourses