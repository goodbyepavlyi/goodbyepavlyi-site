import React from 'react'

export const PageTitle = ({ title, customClass }) => {
    return (
        <div id="hero" className="flex items-start justify-center flex-col md:w-1/2 w-full">
            <h1 className={`text-4xl text-zinc-100 font-bold mb-0 ${customClass}`}>
                {title}
            </h1>
        </div>
    )
}