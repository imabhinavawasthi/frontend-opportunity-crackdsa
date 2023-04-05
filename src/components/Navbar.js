import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <section className="w-full px-8 text-gray-700 bg-white shadow-sm">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="relative flex flex-col md:flex-row">
                        <NavLink to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">crack<span className="text-indigo-600">DSA</span> Opportunity<span className="text-indigo-600"></span></span>
                        </NavLink>
                        <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                          <NavLink to='/'>  <a href="" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</a></NavLink>
                            <a href="https://crackdsa.com/" target="_blank" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">crackDSA.com</a>
                            <a href="https://launchpadx.crackdsa.com/" target="_blank" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">LaunchPadx</a>
                          
                        </nav>
                    </div>

                    
                        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                            <button >
                                <NavLink to='/admin'><a href="" className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                                    Admin
                                </a></NavLink>
                            </button>
                        </div>
                
                </div>
            </section>
  )
}

export default Navbar
