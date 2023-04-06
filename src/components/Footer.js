import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <section className="bg-white">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="px-5 py-2">
                            <a href="https://certificate.crackdsa.com/" target="_blank" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Certificate
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="https://crackdsa.com/" target="_blank" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                crackDSA
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="https://events.crackdsa.com/" target="_blank" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                Events
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="https://launchpadx.crackdsa.com/" target="_blank" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                LaunchPadx
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            
                                <a href="" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                                    Terms & Conditions
                                </a>
                            
                        </div>
                    </nav>
                
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        © 2023 crackDSA. All rights reserved.
                    </p>
                </div>
            </section>
  )
}

export default Footer
