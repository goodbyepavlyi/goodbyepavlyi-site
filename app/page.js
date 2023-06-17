import React from 'react'

import { PageTitle } from '@/components/PageTitle'
import { About } from '@/components/Portfolio/About'
import { GitHubIcon, ArrowIcon } from '@/components/Icons';

export const metadata = {
    title: 'Pavel Chrenko',
    description: 'Welcome to my personal website! Learn more about me and explore my projects on GitHub.',
}

export default function Home() {
    return (
        <>
            <main className='min-h-screen font-inter bg-zinc-900'>
                <div className="max-w-5xl w-11/12 mx-auto">
                    <PageTitle title="Hi, I'm Pavel Chrenko" customClass='my-20' />
                    <About />
                    <div className="flex flex-col gap-2 md:flex-row md:gap-2">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/goodbyepavlyi"
                            className="flex w-40 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                        >
                            <div className="flex items-center">
                                <GitHubIcon />
                                <div className="ml-3">GitHub</div>
                            </div>
                            <ArrowIcon />
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}
