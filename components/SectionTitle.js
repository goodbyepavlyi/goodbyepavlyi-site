import React from 'react'

export const SectionTitle = ({ children, id }) => {
    return (
        <h2
            id={id && id}
            className="text-2xl font-semibold mb-5 text-zinc-200 "
        >
            {children}
        </h2>
    )
}