import React from 'react'

import { SectionTitle } from '../SectionTitle'

export const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-left gap-10 md:gap-20 py-12">
            <div className="w-full lg:w-6/12">
                <SectionTitle>About Me</SectionTitle>
            
                <p className="text-md text-gray-300">
                    I'm a first-year student at a high school focused on information technology.
                    I'm interested in web development, and every day I strive to learn new technologies and improve the ones I already master.
                </p>
            </div>
        </div>
    )
}